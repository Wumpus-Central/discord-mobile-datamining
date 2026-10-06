// === Module 9513: UserSearchManager ===

// Module 9513 (UserSearchManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import _mod9514 from "module_9514" /* 9514 */;
import UserRecord from "UserRecord" /* 1391 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let currentUser, map, member, mutableAllGuildsAndMembers, participants;

function getTransformedUser(user) {
  let isProvisional;
  let isStaffResult;
  let username;
  if (null != user) {
    if (!RelationshipStore.isBlockedOrIgnored(user.id)) {
      const obj = { id: user.id, username, nicknames: {}, isProvisional, isStaff: isStaffResult };
      if ("0" !== user.discriminator) {
        const _HermesInternal = HermesInternal;
        username = "" + user.username + "#" + user.discriminator;
      } else {
        username = user.username;
      }
      const obj2 = UserUtilsDefault;
      if (null != obj2.getGlobalName(user)) {
        obj.globalName = user.globalName;
      }
      if (user.bot) {
        obj.isBot = true;
      }
      if (user instanceof UserRecord) {
        isProvisional = user.isProvisional;
      } else {
        isProvisional = "flags" in user;
        if (isProvisional) {
          let num = user.flags;
          const hasFlag = FlagUtilsAll.hasFlag;
          FlagUtilsAll;
          if (num == null) {
            num = 0;
          }
          isProvisional = hasFlag(num, UserFlags.PROVISIONAL_ACCOUNT);
        }
      }
      if (RelationshipStore.isFriend(user.id)) {
        obj.isFriend = true;
        obj.friendNickname = RelationshipStore.getNickname(user.id);
      }
      if (user instanceof UserRecord) {
        isStaffResult = user.isStaff();
      } else {
        isStaffResult = "flags" in user;
        if (isStaffResult) {
          let num2 = user.flags;
          const hasFlag2 = FlagUtilsAll.hasFlag;
          FlagUtilsAll;
          if (num2 == null) {
            num2 = 0;
          }
          isStaffResult = hasFlag2(num2, UserFlags.STAFF);
        }
      }
      return obj;
    }
  }
  return null;
}
function setNick(nicknames, id, nick) {
  if (null != nicknames) {
    let tmp2 = null;
    nicknames = nicknames.nicknames;
    if (null != nick) {
      tmp2 = null;
      if ("" !== nick) {
        tmp2 = nick;
      }
    }
    nicknames[id] = tmp2;
  }
}
function getDMUpdates(channel) {
  let closure_0 = channel;
  const items = [];
  if (null != channel) {
    if (isPrivate(channel.type)) {
      let recipients = channel.recipients;
      if (undefined === recipients) {
        recipients = [];
      }
      const item = recipients.forEach((item) => {
        const tmp = closure_2_12(user.getUser(item));
        if (null != channel) {
          if (null != tmp) {
            tmp.nicknames[tmp2] = null;
          }
        }
        items.push(tmp);
      });
      return items;
    }
  }
  return items;
}
function updateMembersList(members, guildId) {
  let closure_0 = guildId;
  const items = [];
  const item = members.forEach((user) => {
    const tmp = closure_2_12(user.user);
    if (null != tmp) {
      const nick = user.nick;
      if (null != tmp) {
        let tmp3 = null;
        const nicknames = tmp.nicknames;
        if (null != nick) {
          tmp3 = null;
          if ("" !== nick) {
            tmp3 = nick;
          }
        }
        nicknames[tmp2] = tmp3;
      }
      items.push(tmp);
    }
  });
  return items;
}
function getUsersFromMessage(arg0) {
  let message;
  let nicknameContextId;
  ({ message, nicknameContextId } = arg0);
  nicknameContextId = undefined;
  let items;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null == nicknameContextId) {
    let guildId;
    let isPrivateResult;
    if (channel != null) {
      isPrivateResult = channel.isPrivate();
    }
    if (true === isPrivateResult) {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      guildId = id;
    } else if (channel != null) {
      guildId = channel.getGuildId();
    }
    nicknameContextId = guildId;
  }
  items = [];
  if (null != message.author) {
    const tmp5 = getTransformedUser(message.author);
    if (null != tmp5) {
      items.push(tmp5);
      if (null != nicknameContextId) {
        if (null != tmp5) {
          tmp5.nicknames[nicknameContextId] = null;
        }
      }
    }
  }
  const mentions = message.mentions;
  if (mentions != null) {
    const item = mentions.forEach((item) => {
      const tmp = getTransformedUser(item);
      if (null != tmp) {
        items.push(tmp);
        if (null != nicknameContextId) {
          if (null != tmp) {
            tmp.nicknames[tmp4] = null;
          }
        }
      }
    });
  }
  return items;
}
const isPrivate = ChannelRecord.isPrivate;
const UserFlags = Constants.UserFlags;
const unpackModuleId = { UPDATE_USERS: "UPDATE_USERS", USER_RESULTS: "USER_RESULTS", QUERY_SET: "QUERY_SET", QUERY_CLEAR: "QUERY_CLEAR", REQUEST_DEBUG_STATE: "REQUEST_DEBUG_STATE", DEBUG_STATE: "DEBUG_STATE" };
class UserSearchContext {
  constructor(_worker, _callback) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 10;
    }
    const obj = Object.create(new.target.prototype);
    obj.handleMessages = function handleMessages(data) {
      data = data.data;
      const tmp = null != data && data.type === constants.USER_RESULTS && data.uuid === obj._uuid;
      if (tmp) {
        if (false !== obj._currentQuery) {
          obj._callback(data.payload);
        }
        if (null != obj._currentQuery) {
          obj._currentQuery = null;
        }
        obj._setNextQuery();
      }
    };
    obj._worker = _worker;
    const obj2 = obj(1266);
    obj._uuid = obj2.v4();
    obj._callback = _callback;
    obj._limit = num;
    obj._currentQuery = null;
    obj._nextQuery = null;
    obj._subscribed = false;
    const subscription = obj.subscribe();
    return obj;
  }
  setLimit(_limit) {
    this._limit = _limit;
    if (null != this._nextQuery) {
      this._nextQuery.limit = _limit;
    }
  }
  subscribe() {
    const self = this;
    const tmp = null == this._worker || self._subscribed;
    if (!tmp) {
      const _worker = self._worker;
      const listener = _worker.addEventListener("message", self.handleMessages, false);
      self._subscribed = true;
      self._setNextQuery();
    }
  }
  unsubscribe() {
    const self = this;
    const tmp = null != this._worker && self._subscribed;
    if (tmp) {
      const _worker = self._worker;
      const removed = _worker.removeEventListener("message", self.handleMessages, false);
      self._subscribed = false;
    }
  }
  destroy() {
    this.clearQuery();
    this.unsubscribe();
  }
  clearQuery() {
    const self = this;
    this._currentQuery = false;
    this._nextQuery = null;
    const tmp = null != this._worker && self._subscribed;
    if (tmp) {
      const _worker = self._worker;
      const obj = { uuid: self._uuid, type: constants.QUERY_CLEAR };
      _worker.postMessage(obj);
    }
  }
  setQuery(query) {
    let boosterFallback;
    let boosters;
    ({ boosters, boosterFallback } = query);
    const obj = { query: query.query, filters: query.filters, blacklist: query.blacklist, boosters, boosterFallback, limit: this._limit };
    if (boosters == null) {
      boosters = {};
    }
    if (boosterFallback == null) {
      boosterFallback = 1;
    }
    this._nextQuery = obj;
    this._setNextQuery();
  }
  _setNextQuery() {
    const self = this;
    const tmp = null != this._currentQuery && false !== self._currentQuery || null == self._nextQuery;
    if (!tmp) {
      if (null != self._worker) {
        if (self._subscribed) {
          self._currentQuery = self._nextQuery;
          self._nextQuery = null;
          const _worker = self._worker;
          const action = { uuid: self._uuid, type: constants.QUERY_SET, payload: self._currentQuery };
          _worker.postMessage(action);
        }
      }
      if (!self._subscribed) {
        const subscription = self.subscribe();
      }
    }
  }
}
const prototype = UserSearchContext.prototype;
class UserSearchManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT() {
        return require._handleLogout();
      },
      POST_CONNECTION_OPEN() {
        return require._handleConnectionOpen();
      },
      CONNECTION_OPEN_SUPPLEMENTAL(guilds) {
        return require._handleConnectionOpenSupplemental(guilds);
      },
      OVERLAY_INITIALIZE(arg0) {
        return require._handleOverlayInitialize(arg0);
      },
      CURRENT_USER_UPDATE(user) {
        return require._handleCurrentUserUpdate(user);
      },
      GUILD_CREATE(guild) {
        return require._handleGuildCreate(guild);
      },
      GUILD_MEMBERS_CHUNK_BATCH(arg0) {
        return require._handleGuildMembersChunkBatch(arg0);
      },
      GUILD_MEMBER_ADD(nick) {
        return require._handleGuildMemberUpdate(nick);
      },
      GUILD_MEMBER_UPDATE(nick) {
        return require._handleGuildMemberUpdate(nick);
      },
      RELATIONSHIP_ADD(relationship) {
        return require._handleRelationshipAdd(relationship);
      },
      RELATIONSHIP_UPDATE(relationship) {
        return require._handleRelationshipUpdate(relationship);
      },
      RELATIONSHIP_REMOVE(relationship) {
        return require._handleRelationshipRemove(relationship);
      },
      CHANNEL_CREATE(channel) {
        return require._handleDMCreate(channel);
      },
      CHANNEL_UPDATES(arg0) {
        return require._handleDMUpdates(arg0);
      },
      CHANNEL_RECIPIENT_ADD(isMember) {
        return require._handleRecipientChanges(isMember);
      },
      PASSIVE_UPDATE_V2(arg0) {
        return require._handlePassiveUpdateV2(arg0);
      },
      THREAD_LIST_SYNC(arg0) {
        return require._handleThreadListSync(arg0);
      },
      LOAD_FORUM_POSTS(guildId) {
        return require._handleLoadForumPosts(guildId);
      },
      LOAD_MESSAGES_SUCCESS(messages) {
        return require._handleLoadMessagesSuccess(messages);
      },
      SEARCH_MESSAGES_SUCCESS(data) {
        return require._handleSearchMessagesSuccess(data);
      },
      LOAD_THREADS_SUCCESS(guildId) {
        return require._handleLoadThreadsSuccess(guildId);
      },
      LOAD_ARCHIVED_THREADS_SUCCESS(guildId) {
        return require._handleLoadThreadsSuccess(guildId);
      },
      LOAD_PINNED_MESSAGES_SUCCESS(pins) {
        return require._handleLoadPinnedMessagesSuccess(pins);
      },
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS(arg0) {
        return require._handleGuildScheduledEventUsersFetchSuccess(arg0);
      },
      MESSAGE_CREATE(message) {
        return require._handleMessageCreateOrUpdate(message);
      },
      MESSAGE_UPDATE(message) {
        return require._handleMessageCreateOrUpdate(message);
      }
    };
    applyArgumentsResult._handleLogout = function _handleLogout() {
      require.rebootWebworker();
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      const timerId = setTimeout(() => {
        const obj = currentUser;
        currentUser = currentUser.getCurrentUser();
        if (null != currentUser) {
          const tmp11 = getTransformedUser(currentUser);
          const obj3 = {};
          obj3[tmp11.id] = tmp11;
          const _Object2 = Object;
          const values = Object.values(obj.getUsers());
          const item = values.forEach((id) => {
            obj3[id.id] = closure_2_12(id);
          });
          mutableAllGuildsAndMembers = mutableAllGuildsAndMembers.getMutableAllGuildsAndMembers();
          for (const key10004 in mutableAllGuildsAndMembers) {
            let keys = Object.keys();
            if (keys === undefined) {
              continue;
            } else {
              let tmp3 = keys[tmp];
              while (tmp3 !== undefined) {
                let tmp20 = obj3[tmp3];
                let tmp21 = mutableAllGuildsAndMembers[key10004][tmp3];
                let nick;
                if (tmp21 != null) {
                  nick = tmp21.nick;
                }
                if (nick == null) {
                  let obj2 = UserUtilsDefault;
                  nick = obj2.getGlobalName(tmp20);
                }
                if (null == tmp20) {
                  continue;
                } else {
                  if (null == tmp20) {
                    continue;
                  } else {
                    let tmp7 = null;
                    let nicknames = tmp20.nicknames;
                    if (null != nick) {
                      tmp7 = null;
                      if ("" !== nick) {
                        tmp7 = nick;
                      }
                    }
                    nicknames[key10004] = tmp7;
                    continue;
                  }
                  continue;
                }
                continue;
              }
            }
            continue;
          }
          const _Object = Object;
          closure_1_0.updateUsers(Object.values(obj3), "connection_open");
        }
      }, 3000);
    };
    applyArgumentsResult._handleConnectionOpenSupplemental = function _handleConnectionOpenSupplemental(guilds) {
      guilds = guilds.guilds;
      const timerId = setTimeout(() => {
        const f152315 = (activity_instances) => {
          let closure_0 = activity_instances;
          const items = [];
          activity_instances = activity_instances.activity_instances;
          if (activity_instances != null) {
            let item = activity_instances.forEach((participants) => {
              participants = participants.participants;
              const item = participants.forEach((member) => {
                member = member.member;
                if (null != member) {
                  const tmp2 = closure_2_12(member.user);
                  if (null != tmp2) {
                    const nick = member.nick;
                    if (null != tmp2) {
                      let tmp5 = null;
                      const nicknames = tmp2.nicknames;
                      if (null != nick) {
                        tmp5 = null;
                        if ("" !== nick) {
                          tmp5 = nick;
                        }
                      }
                      nicknames[tmp4] = tmp5;
                    }
                    items.push(tmp2);
                  }
                }
              });
            });
          }
          return items;
        };
        const obj = _modDef12;
        obj.flatMap(guilds, (arg0) => {
          let closure_0;
          let members;
          ({ members, id: closure_0 } = arg0);
          const items = [];
          const item = members.forEach((user) => {
            const tmp = closure_2_12(user.user);
            if (null != tmp) {
              const nick = user.nick;
              if (null != tmp) {
                let tmp3 = null;
                const nicknames = tmp.nicknames;
                if (null != nick) {
                  tmp3 = null;
                  if ("" !== nick) {
                    tmp3 = nick;
                  }
                }
                nicknames[tmp2] = tmp3;
              }
              items.push(tmp);
            }
          });
          return items;
        });
        const obj2 = _modDef12;
        let items = [...obj2.flatMap(guilds, f152315)];
        obj2.flatMap(guilds, f152315);
        require.updateUsers(items, "connection_open_supplemental");
      }, 3000);
    };
    applyArgumentsResult._handleOverlayInitialize = function _handleOverlayInitialize(arg0) {
      let guildMembers;
      let users;
      ({ users, guildMembers } = arg0);
      map = new Map();
      const iter = users[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let result = map.set(nextResult.id, getTransformedUser(nextResult));
        continue;
      }
      const obj2 = SnowflakeUtilsDefault;
      const keys = obj2.keys(guildMembers);
      const iter2 = keys[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp7 = guildMembers[nextResult1];
        let tmp8 = tmp7;
        if (null != tmp7) {
          let obj3 = SnowflakeUtilsDefault;
          let keys1 = obj3.keys(tmp8);
          for (const item10043 of keys1) {
            let value = map.get(item10043);
            let tmp12 = value;
            let tmp14 = tmp8[item10043];
            let tmp15 = null != value;
            if (tmp15) {
              tmp15 = null != tmp14;
            }
            if (tmp15) {
              tmp15 = null != tmp14.nick;
            }
            if (tmp15) {
              let tmp22 = setNick(tmp12, tmp6, tmp14.nick);
              let result1 = map.set(item10043, tmp12);
            }
            continue;
          }
        }
        continue;
      }
      require.updateUsers(Array.from(map.values()), "overlay_initialize");
      map.clear();
    };
    applyArgumentsResult._handleCurrentUserUpdate = function _handleCurrentUserUpdate(user) {
      const tmp = getTransformedUser(user.user);
      if (null != tmp) {
        const items = [tmp];
        require.updateUsers(items, "current_user_update");
      }
    };
    applyArgumentsResult._handleGuildCreate = function _handleGuildCreate(guild) {
      guild = guild.guild;
      const members = guild.members;
      const id = guild.id;
      const items = [];
      const updateUsers = require.updateUsers;
      const item = members.forEach((user) => {
        const tmp = closure_2_12(user.user);
        if (null != tmp) {
          const nick = user.nick;
          if (null != tmp) {
            let tmp3 = null;
            const nicknames = tmp.nicknames;
            if (null != nick) {
              tmp3 = null;
              if ("" !== nick) {
                tmp3 = nick;
              }
            }
            nicknames[tmp2] = tmp3;
          }
          items.push(tmp);
        }
      });
      updateUsers(items, "guild_create");
    };
    applyArgumentsResult._handleGuildMembersChunkBatch = function _handleGuildMembersChunkBatch(arg0) {
      const items = [];
      const iter = arg0.chunks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, updateMembersList(nextResult.members, nextResult.guildId), 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
        continue;
      }
      require.updateUsers(items, "guild_members_chunk_batch");
    };
    applyArgumentsResult._handleGuildMemberUpdate = function _handleGuildMemberUpdate(nick) {
      nick = nick.nick;
      const guildId = nick.guildId;
      const tmp = getTransformedUser(nick.user);
      if (null != tmp) {
        if (null != tmp) {
          let tmp2 = null;
          const nicknames = tmp.nicknames;
          if (null != nick) {
            tmp2 = null;
            if ("" !== nick) {
              tmp2 = nick;
            }
          }
          nicknames[guildId] = tmp2;
        }
        const items = [tmp];
        require.updateUsers(items, "guild_member_update");
      }
    };
    applyArgumentsResult._handlePassiveUpdateV2 = function _handlePassiveUpdateV2(arg0) {
      let closure_129_0;
      let members;
      ({ members, guildId: closure_129_0 } = arg0);
      const items = [];
      const updateUsers = require.updateUsers;
      const item = members.forEach((user) => {
        const tmp = closure_2_12(user.user);
        if (null != tmp) {
          const nick = user.nick;
          if (null != tmp) {
            let tmp3 = null;
            const nicknames = tmp.nicknames;
            if (null != nick) {
              tmp3 = null;
              if ("" !== nick) {
                tmp3 = nick;
              }
            }
            nicknames[tmp2] = tmp3;
          }
          items.push(tmp);
        }
      });
      updateUsers(items, "passive_update_v2");
    };
    applyArgumentsResult._handleRelationshipAdd = function _handleRelationshipAdd(relationship) {
      const items = [getTransformedUser(relationship.relationship.user)];
      require.updateUsers(items, "relationship_add");
    };
    applyArgumentsResult._handleRelationshipUpdate = function _handleRelationshipUpdate(relationship) {
      const items = [getTransformedUser(UserStore.getUser(relationship.relationship.id))];
      require.updateUsers(items, "relationship_update");
    };
    applyArgumentsResult._handleRelationshipRemove = function _handleRelationshipRemove(relationship) {
      const items = [getTransformedUser(UserStore.getUser(relationship.relationship.id))];
      require.updateUsers(items, "relationship_remove");
    };
    applyArgumentsResult._handleDMCreate = function _handleDMCreate(channel) {
      let user;
      const id = channel.channel.id;
      channel = ChannelStore.getChannel(id);
      const items = [];
      if (null != channel) {
        if (isPrivate(channel.type)) {
          let recipients = channel.recipients;
          if (undefined === recipients) {
            recipients = [];
          }
          const item = recipients.forEach((item) => {
            const tmp = closure_2_12(user.getUser(item));
            if (null != channel) {
              if (null != tmp) {
                tmp.nicknames[tmp2] = null;
              }
            }
            items.push(tmp);
          });
        }
      }
      if (0 !== items.length) {
        const tmp6 = getTransformedUser(UserStore.getCurrentUser());
        if (null != tmp6) {
          tmp6.nicknames[id] = null;
        }
        items.push(tmp6);
        require.updateUsers(items, "dm_create");
      }
    };
    applyArgumentsResult._handleDMUpdates = function _handleDMUpdates(arg0) {
      const iter = arg0.channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let arr = getDMUpdates(ChannelStore.getChannel(nextResult.id));
        let arr2 = arr;
        if (0 !== arr.length) {
          let tmp7 = getTransformedUser(UserStore.getCurrentUser());
          let tmp10 = setNick(tmp7, tmp2.id);
          let arr3 = arr2.push(tmp7);
          let updateUsersResult = require.updateUsers(arr2, "dm_updates");
        }
        continue;
      }
    };
    applyArgumentsResult._handleRecipientChanges = function _handleRecipientChanges(isMember) {
      if (isMember.isMember) {
        const tmp4 = getTransformedUser(tmp2);
        if (null != tmp4) {
          tmp4.nicknames[tmp] = null;
        }
        const items = [tmp4];
        require.updateUsers(items, "recipient_changes");
      }
    };
    applyArgumentsResult._handleThreadListSync = function _handleThreadListSync(arg0) {
      let closure_129_0;
      let mostRecentMessages;
      ({ guildId: closure_129_0, mostRecentMessages } = arg0);
      let items;
      if (null != mostRecentMessages) {
        items = [];
        let item = mostRecentMessages.forEach((message) => {
          const obj = { message, nicknameContextId };
          const arr = closure_2_16(obj);
          const item = arr.forEach((item) => items.push(item));
        });
        require.updateUsers(items, "thread_list_sync");
      }
    };
    applyArgumentsResult._handleLoadForumPosts = function _handleLoadForumPosts(guildId) {
      guildId = guildId.guildId;
      let items = [];
      const values = Object.values(guildId.threads);
      let item = values.forEach((item) => {
        let first_message;
        let most_recent_message;
        let owner;
        ({ first_message, most_recent_message, owner } = item);
        if (null != first_message) {
          const obj = { message: first_message, nicknameContextId: guildId };
          const arr = closure_2_16(obj);
          item = arr.forEach((item) => items.push(item));
        }
        if (null != most_recent_message) {
          const obj2 = { message: most_recent_message, nicknameContextId: guildId };
          const arr2 = closure_2_16(obj2);
          const item1 = arr2.forEach((item) => items.push(item));
        }
        if (null != owner) {
          items = [owner];
          let closure_0 = guildId;
          const items1 = [];
          const item2 = items.forEach((user) => {
            const tmp = closure_2_12(user.user);
            if (null != tmp) {
              const nick = user.nick;
              if (null != tmp) {
                let tmp3 = null;
                const nicknames = tmp.nicknames;
                if (null != nick) {
                  tmp3 = null;
                  if ("" !== nick) {
                    tmp3 = nick;
                  }
                }
                nicknames[tmp2] = tmp3;
              }
              items.push(tmp);
            }
          });
          const item3 = items1.forEach((item) => items.push(item));
        }
      });
      require.updateUsers(items, "load_forum_posts");
    };
    applyArgumentsResult._handleLoadMessagesSuccess = function _handleLoadMessagesSuccess(messages) {
      messages = messages.messages;
      require.updateUsers(messages.flatMap((message) => {
        const obj = { message };
        return closure_1_16(obj);
      }), "load_messages_success");
    };
    applyArgumentsResult._handleLoadPinnedMessagesSuccess = function _handleLoadPinnedMessagesSuccess(pins) {
      pins = pins.pins;
      const items = [];
      let item = pins.forEach((message) => {
        const obj = { message: message.message };
        const arr = closure_2_16(obj);
        const item = arr.forEach((item) => items.push(item));
      });
      require.updateUsers(items, "load_pinned_messages_success");
    };
    applyArgumentsResult._handleSearchMessagesSuccess = function _handleSearchMessagesSuccess(data) {
      data = data.data;
      const items = [];
      let item = data.forEach((messages) => {
        messages = messages.messages;
        let item = messages.forEach((arr) => {
          let item = arr.forEach((message) => {
            const obj = { message };
            const arr = closure_2_16(obj);
            const item = arr.forEach((item) => closure_1_0.push(item));
          });
        });
      });
      require.updateUsers(items, "search_messages_success");
    };
    applyArgumentsResult._handleLoadThreadsSuccess = function _handleLoadThreadsSuccess(guildId) {
      let firstMessages;
      let mostRecentMessages;
      let owners;
      guildId = guildId.guildId;
      ({ firstMessages, mostRecentMessages, owners } = guildId);
      const items = [];
      if (firstMessages != null) {
        let item = firstMessages.forEach((message) => {
          const obj = { message, nicknameContextId: guildId };
          const arr = closure_2_16(obj);
          const item = arr.forEach((item) => items.push(item));
        });
      }
      if (mostRecentMessages != null) {
        const item1 = mostRecentMessages.forEach((message) => {
          const obj = { message, nicknameContextId: guildId };
          const arr = closure_2_16(obj);
          const item = arr.forEach((item) => items.push(item));
        });
      }
      if (null != owners) {
        const items1 = [];
        const item2 = owners.forEach((user) => {
          const tmp = closure_2_12(user.user);
          if (null != tmp) {
            const nick = user.nick;
            if (null != tmp) {
              let tmp3 = null;
              const nicknames = tmp.nicknames;
              if (null != nick) {
                tmp3 = null;
                if ("" !== nick) {
                  tmp3 = nick;
                }
              }
              nicknames[tmp2] = tmp3;
            }
            items.push(tmp);
          }
        });
        const item3 = items1.forEach((item) => items.push(item));
      }
      require.updateUsers(items, "load_threads_success");
    };
    applyArgumentsResult._handleMessageCreateOrUpdate = function _handleMessageCreateOrUpdate(message) {
      const obj = { message: message.message };
      require.updateUsers(getUsersFromMessage(obj), "message_create_or_update");
    };
    applyArgumentsResult._handleGuildScheduledEventUsersFetchSuccess = function _handleGuildScheduledEventUsersFetchSuccess(arg0) {
      let closure_129_0;
      let guildScheduledEventUsers;
      ({ guildId: closure_129_0, guildScheduledEventUsers } = arg0);
      const items = [];
      const item = guildScheduledEventUsers.forEach((member) => {
        member = member.member;
        const tmp = closure_2_12(member.user);
        if (null != tmp) {
          let nick;
          if (member != null) {
            nick = member.nick;
          }
          if (null != tmp) {
            let tmp3 = null;
            const nicknames = tmp.nicknames;
            if (null != nick) {
              tmp3 = null;
              if ("" !== nick) {
                tmp3 = nick;
              }
            }
            nicknames[closure_1_0] = tmp3;
          }
          items.push(tmp);
        }
      });
      require.updateUsers(items, "guild_scheduled_event_users_fetch_success");
    };
    return applyArgumentsResult;
  }
  _initialize() {
    this.rebootWebworker();
  }
  _terminate() {
    const self = this;
    if (null != this._worker) {
      const _worker = self._worker;
      _worker.terminate();
      self._worker = null;
    }
  }
  rebootWebworker() {
    const self = this;
    if (null != this._worker) {
      const _worker = self._worker;
      _worker.terminate();
      self._worker = null;
    }
    self._worker = _mod9514;
  }
  updateUsers(arr, action) {
    const _worker = this._worker;
    if (null != _worker) {
      const found = arr.filter(GlobalUtils.isNotNullish);
      for (const item10007 of found) {
        let id;
        if (item10007 != null) {
          id = item10007.id;
        }
        if (null == id) {
          let tmp22 = SentryUtilsDefault;
          let obj2 = { action, userFields: obj3 };
          let obj3 = { userIsNull: null == item10007, idIsNull: true, usernameIsNull: null == username, isBot, isFriend, isProvisional, globalNameIsNull: null == globalName, usersArrayLength: found.length };
          let username;
          let addBreadcrumb = tmp22.addBreadcrumb;
          if (item10007 != null) {
            username = item10007.username;
          }
          let isBot;
          if (item10007 != null) {
            isBot = item10007.isBot;
          }
          let isFriend;
          if (item10007 != null) {
            isFriend = item10007.isFriend;
          }
          let isProvisional;
          if (item10007 != null) {
            isProvisional = item10007.isProvisional;
          }
          let globalName;
          if (item10007 != null) {
            globalName = item10007.globalName;
          }
          let obj = { category: "debug", message: "User missing id", data: obj2 };
          let addBreadcrumbResult = addBreadcrumb(obj);
        }
        continue;
      }
      action = { type: constants.UPDATE_USERS, payload: found };
      _worker.postMessage(action);
    }
  }
  getUserSearchContext(parseUserResults) {
    let num = _limit;
    if (_limit === undefined) {
      num = 10;
    }
    this.initialize();
    const _worker = this._worker;
    if (null == _worker) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("SearchContextManager: No webworker initialized");
      throw error;
    } else {
      const self3 = this;
      if (typeof UserSearchContext === "function") {
        if (num === undefined) {
          num = 10;
        }
        const obj = Object.create(tmp9.prototype);
        obj.handleMessages = function handleMessages(data) {
          data = data.data;
          const tmp = null != data && data.type === constants.USER_RESULTS && data.uuid === obj._uuid;
          if (tmp) {
            if (false !== obj._currentQuery) {
              obj._callback(data.payload);
            }
            if (null != obj._currentQuery) {
              obj._currentQuery = null;
            }
            obj._setNextQuery();
          }
        };
        obj._worker = _worker;
        const obj2 = obj(1266);
        obj._uuid = obj2.v4();
        obj._callback = parseUserResults;
        obj._limit = num;
        obj._currentQuery = null;
        obj._nextQuery = null;
        obj._subscribed = false;
        const subscription = obj.subscribe();
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  requestDebugState() {
    return Promise.resolve(null);
  }
}
const prototype2 = UserSearchManager.prototype;
const userSearchManager = new UserSearchManager();
let result = size.fileFinishedImporting("modules/autocompleter/UserSearchManager.tsx");

export default userSearchManager;
export { UserSearchContext };