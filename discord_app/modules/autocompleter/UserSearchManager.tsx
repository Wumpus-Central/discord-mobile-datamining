// discord_app/modules/autocompleter/UserSearchManager.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import _modDef1208 from "../../utils/SentryUtils.native.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import hasFlagAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import UserSearchWorkerManager from "native/UserSearch.worker.tsx";
import closure_5 from "../../records/UserRecord.tsx";
import closure_6 from "../../stores/ChannelStore.tsx";
import closure_7 from "../../stores/GuildMemberStore.tsx";
import closure_8 from "../../stores/RelationshipStore.tsx";
import closure_9 from "../../stores/UserStore.tsx";

function getTransformedUser(author) {
  if (null != author) {
    if (!blockedOrIgnored.isBlockedOrIgnored(author.id)) {
      const obj = { id: null, username: null, nicknames: null };
      obj[0] = author.id;
      if ("0" !== author.discriminator) {
        const _HermesInternal = HermesInternal;
        let username = "" + author.username + "#" + author.discriminator;
      } else {
        username = author.username;
      }
      obj[1] = username;
      obj[2] = {};
      if (null != obj2.getGlobalName(author)) {
        obj.globalName = author.globalName;
      }
      if (author.bot) {
        obj.isBot = true;
      }
      if (author instanceof closure_5) {
        let isProvisional = author.isProvisional;
      } else {
        isProvisional = "flags" in author;
        if (isProvisional) {
          let num = author.flags;
          if (num == null) {
            num = 0;
          }
          isProvisional = hasFlagAll.hasFlag(num, UserFlags.PROVISIONAL_ACCOUNT);
          const obj3 = hasFlagAll;
        }
      }
      obj.isProvisional = isProvisional;
      if (obj5.isFriend(author.id)) {
        obj.isFriend = true;
        obj.friendNickname = obj5.getNickname(author.id);
      }
      if (author instanceof closure_5) {
        let isStaffResult = author.isStaff();
      } else {
        isStaffResult = "flags" in author;
        if (isStaffResult) {
          let num2 = author.flags;
          if (num2 == null) {
            num2 = 0;
          }
          isStaffResult = hasFlagAll.hasFlag(num2, UserFlags.STAFF);
          const obj4 = hasFlagAll;
        }
      }
      obj.isStaff = isStaffResult;
      return obj;
    }
  }
  return null;
}
function setNick(nicknames) {
  if (null != nicknames) {
    let tmp2 = null;
    if (null != arg2) {
      tmp2 = null;
      if ("" !== arg2) {
        tmp2 = arg2;
      }
    }
    nicknames.nicknames[arg1] = tmp2;
  }
}
function getDMUpdates(type) {
  closure_0 = type;
  const items = [];
  if (null != type) {
    if (isPrivate(type.type)) {
      let recipients = type.recipients;
      if (undefined === recipients) {
        recipients = [];
      }
      const item = recipients.forEach((arg0) => {
        const tmp = closure_1_12(closure_1_9.getUser(arg0));
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
function updateMembersList(arr) {
  closure_0 = arg1;
  const items = [];
  const item = arr.forEach((user) => {
    const tmp = closure_1_12(user.user);
    if (null != tmp) {
      const nick = user.nick;
      if (null != tmp) {
        let tmp3 = null;
        if (null != nick) {
          tmp3 = null;
          if ("" !== nick) {
            tmp3 = nick;
          }
        }
        tmp.nicknames[tmp2] = tmp3;
      }
      items.push(tmp);
    }
  });
  return items;
}
function getUsersFromMessage(arg0) {
  ({ message, nicknameContextId } = arg0);
  nicknameContextId = undefined;
  let items;
  channel = channel.getChannel(message.channel_id);
  if (null != nicknameContextId) {
    items = [];
    if (null != message.author) {
      const tmp6 = getTransformedUser(message.author);
      if (null != tmp6) {
        items.push(tmp6);
        if (null != nicknameContextId) {
          if (null != tmp6) {
            tmp6.nicknames[nicknameContextId] = null;
          }
        }
      }
    }
    const mentions = message.mentions;
    if (mentions != null) {
      const item = mentions.forEach((arg0) => {
        const tmp = closure_1_12(arg0);
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
  } else {
    let isPrivateResult;
    if (channel != null) {
      isPrivateResult = channel.isPrivate();
    }
    if (true === isPrivateResult) {
      let id;
      if (channel != null) {
        id = channel.id;
      }
      let guildId = id;
    } else if (channel != null) {
      guildId = channel.getGuildId();
    }
  }
}
const isPrivate = createChannelRecord.isPrivate;
const UserFlags = ME.UserFlags;
let closure_11 = { UPDATE_USERS: "UPDATE_USERS", USER_RESULTS: "USER_RESULTS", QUERY_SET: "QUERY_SET", QUERY_CLEAR: "QUERY_CLEAR", REQUEST_DEBUG_STATE: "REQUEST_DEBUG_STATE", DEBUG_STATE: "DEBUG_STATE" };
class UserSearchContext {
  constructor(arg0, arg1) {
    num = importDefault;
    if (importDefault === undefined) {
      num = 10;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleMessages = function handleMessages(data) {
      data = data.data;
      let tmp = null != data;
      if (tmp) {
        tmp = data.type === closure_1_11.USER_RESULTS;
      }
      if (tmp) {
        tmp = data.uuid === obj._uuid;
      }
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
    obj._worker = global;
    obj2 = require("v1");
    obj._uuid = obj2.v4();
    obj._callback = require;
    obj._limit = num;
    obj._currentQuery = null;
    obj._nextQuery = null;
    obj._subscribed = false;
    subscription = obj.subscribe();
    return obj;
  }
}
const prototype = UserSearchContext.prototype;
prototype["setLimit"] = function setLimit(_limit) {
  this._limit = _limit;
  if (null != this._nextQuery) {
    this._nextQuery.limit = _limit;
  }
};
prototype["subscribe"] = function subscribe() {
  const self = this;
  if (!tmp) {
    const _worker = self._worker;
    const listener = _worker.addEventListener("message", self.handleMessages, false);
    self._subscribed = true;
    self._setNextQuery();
  }
};
prototype["unsubscribe"] = function unsubscribe() {
  const self = this;
  if (tmp) {
    const _worker = self._worker;
    const removed = _worker.removeEventListener("message", self.handleMessages, false);
    self._subscribed = false;
  }
};
prototype["destroy"] = function destroy() {
  this.clearQuery();
  this.unsubscribe();
};
prototype["clearQuery"] = function clearQuery() {
  const self = this;
  this._currentQuery = false;
  this._nextQuery = null;
  if (tmp) {
    const _worker = self._worker;
    const obj = { uuid: null, type: null };
    obj[0] = self._uuid;
    obj[1] = constants.QUERY_CLEAR;
    _worker.postMessage(obj);
  }
};
prototype["setQuery"] = function setQuery(closure_0) {
  ({ boosters, boosterFallback } = closure_0);
  const obj = { query: closure_0.query, filters: closure_0.filters, blacklist: closure_0.blacklist, boosters: null, boosterFallback: null, limit: null };
  if (boosters == null) {
    boosters = {};
  }
  obj[3] = boosters;
  if (boosterFallback == null) {
    boosterFallback = 1;
  }
  obj[4] = boosterFallback;
  obj[5] = this._limit;
  this._nextQuery = obj;
  this._setNextQuery();
};
prototype["_setNextQuery"] = function _setNextQuery() {
  const self = this;
  let tmp = null != this._currentQuery;
  if (tmp) {
    tmp = false !== self._currentQuery;
  }
  if (!tmp) {
    tmp = null == self._nextQuery;
  }
  if (!tmp) {
    if (null != self._worker) {
      if (self._subscribed) {
        self._currentQuery = self._nextQuery;
        self._nextQuery = null;
        const _worker = self._worker;
        const obj = { uuid: null, type: null, payload: null };
        obj[0] = self._uuid;
        obj[1] = constants.QUERY_SET;
        obj[2] = self._currentQuery;
        _worker.postMessage(obj);
      }
    }
    if (!self._subscribed) {
      const subscription = self.subscribe();
    }
  }
};
initializeDefault;
class UserSearchManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT() {
            return applyArgumentsResult._handleLogout();
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult._handleConnectionOpen();
          },
      CONNECTION_OPEN_SUPPLEMENTAL(guilds) {
            return applyArgumentsResult._handleConnectionOpenSupplemental(guilds);
          },
      OVERLAY_INITIALIZE(arg0) {
            return applyArgumentsResult._handleOverlayInitialize(arg0);
          },
      CURRENT_USER_UPDATE(user) {
            return applyArgumentsResult._handleCurrentUserUpdate(user);
          },
      GUILD_CREATE(guild) {
            return applyArgumentsResult._handleGuildCreate(guild);
          },
      GUILD_MEMBERS_CHUNK_BATCH(arg0) {
            return applyArgumentsResult._handleGuildMembersChunkBatch(arg0);
          },
      GUILD_MEMBER_ADD(nick) {
            return applyArgumentsResult._handleGuildMemberUpdate(nick);
          },
      GUILD_MEMBER_UPDATE(nick) {
            return applyArgumentsResult._handleGuildMemberUpdate(nick);
          },
      RELATIONSHIP_ADD(relationship) {
            return applyArgumentsResult._handleRelationshipAdd(relationship);
          },
      RELATIONSHIP_UPDATE(relationship) {
            return applyArgumentsResult._handleRelationshipUpdate(relationship);
          },
      RELATIONSHIP_REMOVE(relationship) {
            return applyArgumentsResult._handleRelationshipRemove(relationship);
          },
      CHANNEL_CREATE(channel) {
            return applyArgumentsResult._handleDMCreate(channel);
          },
      CHANNEL_UPDATES(arg0) {
            return applyArgumentsResult._handleDMUpdates(arg0);
          },
      CHANNEL_RECIPIENT_ADD(isMember) {
            return applyArgumentsResult._handleRecipientChanges(isMember);
          },
      PASSIVE_UPDATE_V2(arg0) {
            return applyArgumentsResult._handlePassiveUpdateV2(arg0);
          },
      THREAD_LIST_SYNC(arg0) {
            return applyArgumentsResult._handleThreadListSync(arg0);
          },
      LOAD_FORUM_POSTS(guildId) {
            return applyArgumentsResult._handleLoadForumPosts(guildId);
          },
      LOAD_MESSAGES_SUCCESS(messages) {
            return applyArgumentsResult._handleLoadMessagesSuccess(messages);
          },
      SEARCH_MESSAGES_SUCCESS(data) {
            return applyArgumentsResult._handleSearchMessagesSuccess(data);
          },
      LOAD_THREADS_SUCCESS(guildId) {
            return applyArgumentsResult._handleLoadThreadsSuccess(guildId);
          },
      LOAD_ARCHIVED_THREADS_SUCCESS(guildId) {
            return applyArgumentsResult._handleLoadThreadsSuccess(guildId);
          },
      LOAD_PINNED_MESSAGES_SUCCESS(pins) {
            return applyArgumentsResult._handleLoadPinnedMessagesSuccess(pins);
          },
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS(arg0) {
            return applyArgumentsResult._handleGuildScheduledEventUsersFetchSuccess(arg0);
          },
      MESSAGE_CREATE(message) {
            return applyArgumentsResult._handleMessageCreateOrUpdate(message);
          },
      MESSAGE_UPDATE(message) {
            return applyArgumentsResult._handleMessageCreateOrUpdate(message);
          }
    };
    applyArgumentsResult._handleLogout = function _handleLogout() {
      applyArgumentsResult.rebootWebworker();
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      const timerId = setTimeout(() => {
        let obj = closure_1_9;
        const currentUser = closure_1_9.getCurrentUser();
        if (null != currentUser) {
          const tmp11 = closure_1_12(currentUser);
          obj = {};
          obj[tmp11.id] = tmp11;
          const _Object2 = Object;
          const values = Object.values(obj.getUsers());
          const item = values.forEach((id) => {
            obj[id.id] = closure_1_12(id);
          });
          const mutableAllGuildsAndMembers = closure_1_7.getMutableAllGuildsAndMembers();
          for (const key10004 in mutableAllGuildsAndMembers) {
            let tmp17 = key10004;
            let keys = Object.keys();
            if (keys === undefined) {
              continue;
            } else {
              let tmp3 = keys[tmp];
              while (tmp3 !== undefined) {
                let tmp19 = tmp3;
                let tmp20 = obj[tmp3];
                let tmp21 = mutableAllGuildsAndMembers[key10004][tmp3];
                let nick;
                if (tmp21 != null) {
                  nick = tmp21.nick;
                }
                if (nick == null) {
                  let tmp5 = closure_1_1;
                  let tmp6 = closure_1_3;
                  let obj2 = closure_1_1(closure_1_3[7]);
                  nick = obj2.getGlobalName(tmp20);
                }
                if (null == tmp20) {
                  continue;
                } else {
                  if (null == tmp20) {
                    continue;
                  } else {
                    let tmp7 = null;
                    if (null != nick) {
                      tmp7 = null;
                      if ("" !== nick) {
                        tmp7 = nick;
                      }
                    }
                    tmp20.nicknames[key10004] = tmp7;
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
          obj.updateUsers(Object.values(obj), "connection_open");
        }
      }, 3000);
    };
    applyArgumentsResult._handleConnectionOpenSupplemental = function _handleConnectionOpenSupplemental(guilds) {
      guilds = guilds.guilds;
      const timerId = setTimeout(() => {
        closure_2_1(closure_2_3[14]).flatMap(guilds, (arg0) => {
          ({ members, id: closure_0 } = arg0);
          const items = [];
          const item = members.forEach((user) => {
            const tmp = closure_1_12(user.user);
            if (null != tmp) {
              const nick = user.nick;
              if (null != tmp) {
                let tmp3 = null;
                if (null != nick) {
                  tmp3 = null;
                  if ("" !== nick) {
                    tmp3 = nick;
                  }
                }
                tmp.nicknames[tmp2] = tmp3;
              }
              items.push(tmp);
            }
          });
          return items;
        });
        const obj = closure_2_1(closure_2_3[14]);
        const obj2 = closure_2_1(closure_2_3[14]);
        let items = [
          ...closure_2_1(closure_2_3[14]).flatMap(guilds, (activity_instances) => {
            closure_0 = activity_instances;
            const items = [];
            activity_instances = activity_instances.activity_instances;
            if (activity_instances != null) {
              let item = activity_instances.forEach((participants) => {
                participants = participants.participants;
                const item = participants.forEach((member) => {
                  member = member.member;
                  if (null != member) {
                    const tmp2 = closure_1_12(member.user);
                    if (null != tmp2) {
                      const nick = member.nick;
                      if (null != tmp2) {
                        let tmp5 = null;
                        if (null != nick) {
                          tmp5 = null;
                          if ("" !== nick) {
                            tmp5 = nick;
                          }
                        }
                        tmp2.nicknames[tmp4] = tmp5;
                      }
                      arr = arr.push(tmp2);
                    }
                  }
                });
              });
            }
            return items;
          })
        ];
        guilds.updateUsers(items, "connection_open_supplemental");
      }, 3000);
    };
    applyArgumentsResult._handleOverlayInitialize = function _handleOverlayInitialize(arg0) {
      ({ users, guildMembers } = arg0);
      const map = new Map();
      const iter = users[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = closure_1_12;
        let result = map.set(nextResult.id, closure_1_12(nextResult));
        continue;
      }
      const keys = closure_1_1(closure_1_3[15]).keys(guildMembers);
      const iter2 = keys[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp7 = guildMembers[nextResult1];
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp27 = closure_1_1;
          let tmp28 = closure_1_3;
          let obj3 = closure_1_1(closure_1_3[15]);
          let tmp29 = tmp7;
          let keys1 = obj3.keys(tmp8);
          let tmp31 = keys1;
          let tmp9 = keys1;
          for (const item10043 of keys1) {
            let tmp10 = item10043;
            let value = map.get(item10043);
            let tmp12 = value;
            let tmp13 = tmp7;
            let tmp14 = tmp8[item10043];
            let tmp15 = null != value;
            if (tmp15) {
              let tmp16 = tmp14;
              tmp15 = null != tmp14;
            }
            if (tmp15) {
              let tmp17 = tmp14;
              tmp15 = null != tmp14.nick;
            }
            if (tmp15) {
              let tmp18 = closure_1_13;
              let tmp19 = value;
              let tmp20 = nextResult1;
              let tmp21 = tmp14;
              let tmp22 = closure_1_13(tmp12, tmp6, tmp14.nick);
              let tmp23 = item10043;
              let result1 = map.set(tmp10, tmp12);
            }
            continue;
          }
        }
        continue;
      }
      applyArgumentsResult.updateUsers(Array.from(map.values()), "overlay_initialize");
      map.clear();
    };
    applyArgumentsResult._handleCurrentUserUpdate = function _handleCurrentUserUpdate(user) {
      const tmp = closure_1_12(user.user);
      if (null != tmp) {
        const items = [tmp];
        applyArgumentsResult.updateUsers(items, "current_user_update");
      }
    };
    applyArgumentsResult._handleGuildCreate = function _handleGuildCreate(guild) {
      guild = guild.guild;
      const members = guild.members;
      const id = guild.id;
      const items = [];
      const item = members.forEach((user) => {
        const tmp = closure_1_12(user.user);
        if (null != tmp) {
          const nick = user.nick;
          if (null != tmp) {
            let tmp3 = null;
            if (null != nick) {
              tmp3 = null;
              if ("" !== nick) {
                tmp3 = nick;
              }
            }
            tmp.nicknames[tmp2] = tmp3;
          }
          items.push(tmp);
        }
      });
      id.updateUsers(items, "guild_create");
    };
    applyArgumentsResult._handleGuildMembersChunkBatch = function _handleGuildMembersChunkBatch(arg0) {
      const items = [];
      const iter = arg0.chunks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let tmp2 = closure_1_15;
        let items1 = [];
        let tmp3 = items1;
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_15(nextResult.members, nextResult.guildId), 0);
        let tmp5 = push;
        let tmp6 = items1;
        let tmp7 = items;
        let applyResult = HermesBuiltin.apply(items1, items);
        continue;
      }
      applyArgumentsResult.updateUsers(items, "guild_members_chunk_batch");
    };
    applyArgumentsResult._handleGuildMemberUpdate = function _handleGuildMemberUpdate(nick) {
      nick = nick.nick;
      const tmp = closure_1_12(nick.user);
      if (null != tmp) {
        if (null != tmp) {
          let tmp2 = null;
          if (null != nick) {
            tmp2 = null;
            if ("" !== nick) {
              tmp2 = nick;
            }
          }
          tmp.nicknames[nick.guildId] = tmp2;
        }
        const items = [tmp];
        applyArgumentsResult.updateUsers(items, "guild_member_update");
      }
    };
    applyArgumentsResult._handlePassiveUpdateV2 = function _handlePassiveUpdateV2(arg0) {
      ({ members, guildId: closure_0 } = arg0);
      const items = [];
      const item = members.forEach((user) => {
        const tmp = closure_1_12(user.user);
        if (null != tmp) {
          const nick = user.nick;
          if (null != tmp) {
            let tmp3 = null;
            if (null != nick) {
              tmp3 = null;
              if ("" !== nick) {
                tmp3 = nick;
              }
            }
            tmp.nicknames[tmp2] = tmp3;
          }
          items.push(tmp);
        }
      });
      applyArgumentsResult.updateUsers(items, "passive_update_v2");
    };
    applyArgumentsResult._handleRelationshipAdd = function _handleRelationshipAdd(relationship) {
      const items = [closure_1_12(relationship.relationship.user)];
      applyArgumentsResult.updateUsers(items, "relationship_add");
    };
    applyArgumentsResult._handleRelationshipUpdate = function _handleRelationshipUpdate(relationship) {
      const items = [closure_1_12(closure_1_9.getUser(relationship.relationship.id))];
      applyArgumentsResult.updateUsers(items, "relationship_update");
    };
    applyArgumentsResult._handleRelationshipRemove = function _handleRelationshipRemove(relationship) {
      const items = [closure_1_12(closure_1_9.getUser(relationship.relationship.id))];
      applyArgumentsResult.updateUsers(items, "relationship_remove");
    };
    applyArgumentsResult._handleDMCreate = function _handleDMCreate(channel) {
      const id = channel.channel.id;
      channel = closure_1_6.getChannel(id);
      const items = [];
      if (null != channel) {
        if (closure_1_4(channel.type)) {
          let recipients = channel.recipients;
          if (undefined === recipients) {
            recipients = [];
          }
          const item = recipients.forEach((arg0) => {
            const tmp = closure_1_12(closure_1_9.getUser(arg0));
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
        const tmp6 = closure_1_12(closure_1_9.getCurrentUser());
        if (null != tmp6) {
          tmp6.nicknames[id] = null;
        }
        items.push(tmp6);
        channel.updateUsers(items, "dm_create");
      }
    };
    applyArgumentsResult._handleDMUpdates = function _handleDMUpdates(arg0) {
      const iter = arg0.channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = closure_1_14;
        let tmp4 = closure_1_6;
        let tmp2 = nextResult;
        let arr = closure_1_14(closure_1_6.getChannel(nextResult.id));
        let arr2 = arr;
        if (0 !== arr.length) {
          let tmp5 = closure_1_12;
          let tmp6 = closure_1_9;
          let tmp7 = closure_1_12(closure_1_9.getCurrentUser());
          let tmp8 = closure_1_13;
          let tmp9 = nextResult;
          let tmp10 = closure_1_13(tmp7, tmp2.id);
          let tmp11 = arr;
          arr = arr2.push(tmp7);
          let tmp13 = applyArgumentsResult;
          let updateUsersResult = applyArgumentsResult.updateUsers(arr2, "dm_updates");
        }
        continue;
      }
    };
    applyArgumentsResult._handleRecipientChanges = function _handleRecipientChanges(isMember) {
      if (isMember.isMember) {
        const tmp4 = closure_1_12(tmp2);
        if (null != tmp4) {
          tmp4.nicknames[tmp] = null;
        }
        const items = [tmp4];
        applyArgumentsResult.updateUsers(items, "recipient_changes");
      }
    };
    applyArgumentsResult._handleThreadListSync = function _handleThreadListSync(arg0) {
      ({ guildId: closure_0, mostRecentMessages } = arg0);
      let items;
      if (null != mostRecentMessages) {
        items = [];
        let item = mostRecentMessages.forEach((message) => {
          const item = closure_1_16({ message, nicknameContextId: closure_0 }).forEach((arg0) => arr.push(arg0));
        });
        applyArgumentsResult.updateUsers(items, "thread_list_sync");
      }
    };
    applyArgumentsResult._handleLoadForumPosts = function _handleLoadForumPosts(guildId) {
      guildId = guildId.guildId;
      let items = [];
      const values = Object.values(guildId.threads);
      let item = values.forEach((arg0) => {
        ({ first_message, most_recent_message, owner } = arg0);
        if (null != first_message) {
          let obj = { message: null, nicknameContextId: null };
          obj[0] = first_message;
          obj[1] = closure_0;
          const item = closure_1_16(obj).forEach((arg0) => items1.push(arg0));
          const arr = closure_1_16(obj);
        }
        if (null != most_recent_message) {
          obj = { message: null, nicknameContextId: null };
          obj[0] = most_recent_message;
          obj[1] = closure_0;
          const item1 = closure_1_16(obj).forEach((arg0) => items1.push(arg0));
          const arr2 = closure_1_16(obj);
        }
        if (null != owner) {
          items = [owner];
          const items1 = [];
          const item2 = items.forEach((user) => {
            const tmp = closure_1_12(user.user);
            if (null != tmp) {
              const nick = user.nick;
              if (null != tmp) {
                let tmp3 = null;
                if (null != nick) {
                  tmp3 = null;
                  if ("" !== nick) {
                    tmp3 = nick;
                  }
                }
                tmp.nicknames[tmp2] = tmp3;
              }
              items.push(tmp);
            }
          });
          const item3 = items1.forEach((arg0) => items1.push(arg0));
        }
      });
      guildId.updateUsers(items, "load_forum_posts");
    };
    applyArgumentsResult._handleLoadMessagesSuccess = function _handleLoadMessagesSuccess(messages) {
      messages = messages.messages;
      applyArgumentsResult.updateUsers(messages.flatMap((message) => callback({ message })), "load_messages_success");
    };
    applyArgumentsResult._handleLoadPinnedMessagesSuccess = function _handleLoadPinnedMessagesSuccess(pins) {
      pins = pins.pins;
      const items = [];
      let item = pins.forEach((message) => {
        const item = closure_1_16({ message: message.message }).forEach((arg0) => arr.push(arg0));
      });
      items.updateUsers(items, "load_pinned_messages_success");
    };
    applyArgumentsResult._handleSearchMessagesSuccess = function _handleSearchMessagesSuccess(data) {
      data = data.data;
      const items = [];
      let item = data.forEach((messages) => {
        messages = messages.messages;
        let item = messages.forEach((arr) => {
          let item = arr.forEach((message) => {
            const item = closure_1_16({ message }).forEach((arg0) => arr.push(arg0));
          });
        });
      });
      items.updateUsers(items, "search_messages_success");
    };
    applyArgumentsResult._handleLoadThreadsSuccess = function _handleLoadThreadsSuccess(guildId) {
      guildId = guildId.guildId;
      ({ firstMessages, mostRecentMessages, owners } = guildId);
      const items = [];
      let items1 = items;
      if (firstMessages != null) {
        let item = firstMessages.forEach((message) => {
          const item = closure_1_16({ message, nicknameContextId: guildId }).forEach((arg0) => arr.push(arg0));
        });
      }
      if (mostRecentMessages != null) {
        const item1 = mostRecentMessages.forEach((message) => {
          const item = closure_1_16({ message, nicknameContextId: guildId }).forEach((arg0) => arr.push(arg0));
        });
      }
      if (null != owners) {
        items1 = [];
        const item2 = owners.forEach((user) => {
          const tmp = closure_1_12(user.user);
          if (null != tmp) {
            const nick = user.nick;
            if (null != tmp) {
              let tmp3 = null;
              if (null != nick) {
                tmp3 = null;
                if ("" !== nick) {
                  tmp3 = nick;
                }
              }
              tmp.nicknames[tmp2] = tmp3;
            }
            items.push(tmp);
          }
        });
        const item3 = items1.forEach((arg0) => items1.push(arg0));
      }
      guildId.updateUsers(items, "load_threads_success");
    };
    applyArgumentsResult._handleMessageCreateOrUpdate = function _handleMessageCreateOrUpdate(message) {
      applyArgumentsResult.updateUsers(closure_1_16({ message: message.message }), "message_create_or_update");
    };
    applyArgumentsResult._handleGuildScheduledEventUsersFetchSuccess = function _handleGuildScheduledEventUsersFetchSuccess(arg0) {
      ({ guildId: closure_0, guildScheduledEventUsers } = arg0);
      const items = [];
      const item = guildScheduledEventUsers.forEach((member) => {
        member = member.member;
        const tmp = closure_1_12(member.user);
        if (null != tmp) {
          if (member != null) {
            const nick = member.nick;
          }
          if (null != tmp) {
            let tmp3 = null;
            if (null != nick) {
              tmp3 = null;
              if ("" !== nick) {
                tmp3 = nick;
              }
            }
            tmp.nicknames[tmp2] = tmp3;
          }
          items.push(tmp);
          tmp2 = closure_0;
        }
      });
      applyArgumentsResult.updateUsers(items, "guild_scheduled_event_users_fetch_success");
    };
    return applyArgumentsResult;
  }
}
const prototype2 = UserSearchManager.prototype;
prototype2["_initialize"] = function _initialize() {
  this.rebootWebworker();
};
prototype2["_terminate"] = function _terminate() {
  const self = this;
  if (null != this._worker) {
    const _worker = self._worker;
    _worker.terminate();
    self._worker = null;
  }
};
prototype2["rebootWebworker"] = function rebootWebworker() {
  const self = this;
  if (null != this._worker) {
    const _worker = self._worker;
    _worker.terminate();
    self._worker = null;
  }
  self._worker = UserSearchWorkerManager;
};
prototype2["updateUsers"] = function updateUsers(arr) {
  const _worker = this._worker;
  if (null != _worker) {
    const found = arr.filter(isDiscordFrontendDevelopment.isNotNullish);
    for (const item10007 of found) {
      let tmp2 = item10007;
      let id;
      if (item10007 != null) {
        id = item10007.id;
      }
      if (null == id) {
        let tmp20 = importDefault;
        let tmp21 = dependencyMap;
        let obj3 = _modDef1208;
        let obj = { action: null, userFields: null };
        obj[0] = arg1;
        obj = { userIsNull: null, idIsNull: true, usernameIsNull: null, isBot: null, isFriend: null, isProvisional: null, globalNameIsNull: null, usersArrayLength: null };
        let tmp22 = item10007;
        obj[0] = null == tmp2;
        let username;
        if (tmp2 != null) {
          username = tmp2.username;
        }
        obj[2] = null == username;
        let tmp5 = item10007;
        let isBot;
        if (tmp2 != null) {
          isBot = tmp2.isBot;
        }
        obj[3] = isBot;
        let tmp7 = item10007;
        let isFriend;
        if (tmp2 != null) {
          isFriend = tmp2.isFriend;
        }
        obj[4] = isFriend;
        let tmp9 = item10007;
        let isProvisional;
        if (tmp2 != null) {
          isProvisional = tmp2.isProvisional;
        }
        obj[5] = isProvisional;
        let tmp11 = item10007;
        let globalName;
        if (tmp2 != null) {
          globalName = tmp2.globalName;
        }
        obj = { category: "debug", message: "User missing id", data: null };
        obj[6] = null == globalName;
        obj[7] = found.length;
        obj[1] = obj;
        obj[2] = obj;
        let addBreadcrumbResult = obj3.addBreadcrumb(obj);
      }
      continue;
    }
    obj1 = { type: null, payload: null };
    obj1[0] = constants.UPDATE_USERS;
    obj1[1] = found;
    _worker.postMessage(obj1);
  }
};
prototype2["getUserSearchContext"] = function getUserSearchContext(handleUserSearchResults, _limit) {
  let num = _limit;
  if (_limit === undefined) {
    num = 10;
  }
  this.initialize();
  const _worker = this._worker;
  if (null == _worker) {
    const _Error = Error;
    error = new Error("SearchContextManager: No webworker initialized");
    throw error;
  } else {
    if (typeof UserSearchContext !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (num === undefined) {
      num = 10;
    }
    const obj = Object.create(UserSearchContext.prototype);
    obj.handleMessages = function handleMessages(data) {
      data = data.data;
      let tmp = null != data;
      if (tmp) {
        tmp = data.type === closure_1_11.USER_RESULTS;
      }
      if (tmp) {
        tmp = data.uuid === obj._uuid;
      }
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
    obj._uuid = obj(514).v4();
    obj._callback = handleUserSearchResults;
    obj._limit = num;
    obj._currentQuery = null;
    obj._nextQuery = null;
    obj._subscribed = false;
    const subscription = obj.subscribe();
    return obj;
  }
};
prototype2["requestDebugState"] = function requestDebugState() {
  return Promise.resolve(null);
};
const userSearchManager = new UserSearchManager();
let result = set.fileFinishedImporting("modules/autocompleter/UserSearchManager.tsx");

export default userSearchManager;
export { UserSearchContext };