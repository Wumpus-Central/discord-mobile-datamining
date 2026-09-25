// === Module 13248: GuildOfficialMessagesStore ===

// Module 13248 (GuildOfficialMessagesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5051 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import GuildStore from "GuildStore" /* 2066 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function updateGuildState(guildId, fn) {
  if (null != obj[guildId]) {
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = {};
    const merged1 = Object.assign(tmp);
    const merged2 = Object.assign(fn(tmp));
    obj[guildId] = obj2;
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let items;
  let messages;
  const guild_id = channel.guild_id;
  if (null == guild_id) {
    return false;
  } else if (null == messages[guild_id]) {
    return false;
  } else {
    items = [];
    messages = {};
    const merged = Object.assign(tmp13.messages);
    const ids = tmp13.ids;
    for (const item10007 of ids) {
      let tmp5 = tmp13.messages[item10007];
      let channel_id;
      if (tmp5 != null) {
        channel_id = tmp5.channel_id;
      }
      if (channel_id === channel.id) {
        delete tmp[tmp2];
      } else {
        let arr = items.push(item10007);
      }
      continue;
    }
    if (items.length === tmp13.ids.length) {
      return false;
    } else {
      updateGuildState(guild_id, () => {
        messages = { ids: items, messages };
        return messages;
      });
    }
  }
}
function handleRelationshipUpdate() {
  obj = {};
  let flag = false;
  const keys = Object.keys(obj);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp5 = obj[nextResult];
    let tmp6 = tmp5;
    let tmp7 = null;
    let ids = tmp5.ids;
    for (const item10031 of ids) {
      let tmp12 = tmp6.messages[item10031];
      let obj2 = tmp12;
      if (null != tmp12) {
        let isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(obj2);
        let tmp36 = isBlockedForMessageResult;
        let isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(obj2);
        let tmp15 = obj2.blocked === isBlockedForMessageResult;
        if (tmp15) {
          tmp15 = obj2.ignored === isIgnoredForMessageResult;
        }
        if (!tmp15) {
          if (null == tmp7) {
            let obj3 = {};
            let merged = Object.assign(tmp6.messages);
            tmp7 = obj3;
          }
          let obj4 = { blocked: null, ignored: null };
          obj4.blocked = tmp36;
          obj4.ignored = isIgnoredForMessageResult;
          tmp7[tmp10] = obj2.merge(obj4);
        }
      }
      continue;
    }
    if (null == tmp7) {
      obj[tmp3] = tmp6;
    } else {
      let obj5 = {};
      let merged1 = Object.assign(tmp6);
      obj5.messages = tmp7;
      obj[tmp3] = obj5;
      flag = true;
    }
    continue;
  }
  if (!flag) {
    return false;
  }
}
const MessageFlags = fn(1074).MessageFlags;
let obj = {};
const Store = initializeDefault.Store;
class GuildOfficialMessagesStore extends Store {
}
const prototype = GuildOfficialMessagesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, GuildStore, RelationshipStore, UserStore);
};
prototype["getState"] = function getState(arg0) {
  return obj[arg0];
};
prototype["getMessage"] = function getMessage(arg0, arg1) {
  let tmp2;
  if (obj[arg0] != null) {
    tmp2 = tmp.messages[arg1];
  }
  return tmp2;
};
prototype["getMessages"] = function getMessages(arg0) {
  const messages = tmp;
  if (null == obj[arg0]) {
    let items = [];
  } else {
    const ids = tmp.ids;
    const mapped = ids.map((item) => messages.messages[item]);
    items = mapped.filter((item) => null != item);
  }
  return items;
};
prototype["isLoading"] = function isLoading(arg0) {
  let flag;
  if (obj[arg0] != null) {
    flag = tmp.loading;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isLoaded"] = function isLoaded(arg0) {
  let flag;
  if (obj[arg0] != null) {
    flag = tmp.loaded;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasMore"] = function hasMore(arg0) {
  let flag;
  if (obj[arg0] != null) {
    flag = tmp.hasMore;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
GuildOfficialMessagesStore.displayName = "GuildOfficialMessagesStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {

  },
  LOAD_OFFICIAL_MESSAGES: function handleLoadOfficialMessages(guildId) {
    guildId = guildId.guildId;
    let loading;
    if (obj[guildId] != null) {
      loading = tmp.loading;
    }
    if (true === loading) {
      return false;
    } else if (null != guildId.before) {
      if (null == tmp) {
        return false;
      } else {
        const obj2 = {};
        const merged = Object.assign(obj);
        const obj3 = {};
        const merged1 = Object.assign(tmp);
        obj3.loading = true;
        obj2[guildId] = obj3;
        obj = obj2;
      }
    } else {
      obj = {};
      const merged2 = Object.assign(obj);
      const obj4 = { ids: [], messages: {}, hasMore: false, loading: true, loaded: false, error: false };
      obj[guildId] = obj4;
    }
  },
  LOAD_OFFICIAL_MESSAGES_SUCCESS: function handleLoadOfficialMessagesSuccess(arg0) {
    ({ guildId, messages: require, hasMore: dependencyMap, before: ChannelStore } = arg0);
    if (null == obj[guildId]) {
      return false;
    } else if (null != obj[guildId]) {
      obj = {};
      const fn = (arg0) => {
        let tmp = arg0;
        if (null != ChannelStore) {
          const items = [];
          HermesBuiltin.arraySpread(tmp.ids, 0);
        } else {
          const items1 = [];
        }
        if (null != ChannelStore) {
          const obj2 = {};
          const merged = Object.assign(tmp.messages);
        }
        tmp = dependencyMap[Symbol.iterator]();
      };
      let merged = Object.assign(obj);
      let obj2 = {};
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(fn(tmp2));
      obj[guildId] = obj2;
    }
  },
  LOAD_OFFICIAL_MESSAGES_FAILURE: function handleLoadOfficialMessagesFailure(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      return false;
    } else {
      if (null != tmp) {
        let fn = () => ({ loading: false });
      } else {
        fn = () => ({ loading: false, error: true });
      }
      if (null != obj[guildId]) {
        obj = {};
        const merged = Object.assign(obj);
        const obj2 = {};
        const merged1 = Object.assign(tmp3);
        const merged2 = Object.assign(fn(tmp3));
        obj[guildId] = obj2;
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == obj[guild.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const id = guild.id;
      delete tmp[tmp2];
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    ({ message, guildId } = optimistic);
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        if (null != guildId) {
          let num = message.flags;
          if (num == null) {
            num = 0;
          }
          if (obj6.hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL)) {
            let tmp5 = null != tmp4;
            if (tmp5) {
              if (null == tmp4.messages[message.id]) {
                const messageRecord = MessageRecordUtils.createMessageRecord(message);
                if (null != obj[guildId]) {
                  obj = {};
                  const merged = Object.assign(obj);
                  const obj2 = {};
                  const merged1 = Object.assign(tmp9);
                  const obj3 = { ids: null, messages: null };
                  const items = [messageRecord.id];
                  HermesBuiltin.arraySpread(tmp9.ids, 1);
                  obj3.ids = items;
                  const obj4 = {};
                  const merged2 = Object.assign(tmp9.messages);
                  obj4[messageRecord.id] = messageRecord;
                  obj3.messages = obj4;
                  const merged3 = Object.assign(obj3);
                  obj[guildId] = obj2;
                }
                const tmp23Result = MessageRecordUtils;
              }
              tmp5 = tmp6;
            }
            return tmp5;
          }
          obj6 = FlagUtils;
        }
        return false;
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let id;
    if (null == message.id) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(message.channel_id);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      if (null == guildId) {
        return false;
      } else if (null == obj[guildId]) {
        return false;
      } else if (null == message.author) {
        if (null != tmp42) {
          const updateMessageRecordResult = MessageRecordUtils.updateMessageRecord(tmp42, message);
          if (null != obj[guildId]) {
            obj = {};
            const merged = Object.assign(obj);
            const obj2 = {};
            const merged1 = Object.assign(tmp27);
            const obj3 = { messages: null };
            const obj4 = {};
            const merged2 = Object.assign(tmp27.messages);
            obj4[updateMessageRecordResult.id] = updateMessageRecordResult;
            obj3.messages = obj4;
            const merged3 = Object.assign(obj3);
            obj[guildId] = obj2;
          }
        }
        return null != tmp42;
      } else {
        let num = message.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = FlagUtils.hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL);
        if (hasFlagResult) {
          if (null == tmp42) {
            const messageRecord = MessageRecordUtils.createMessageRecord(message);
            if (null != obj[guildId]) {
              const obj5 = {};
              const merged4 = Object.assign(obj);
              const obj7 = {};
              const merged5 = Object.assign(tmp8);
              const obj8 = { ids: null, messages: null };
              const items = [messageRecord.id];
              HermesBuiltin.arraySpread(tmp8.ids, 1);
              obj8.ids = items;
              const obj9 = {};
              const merged6 = Object.assign(tmp8.messages);
              obj9[messageRecord.id] = messageRecord;
              obj8.messages = obj9;
              const merged7 = Object.assign(obj8);
              obj5[guildId] = obj7;
              obj = obj5;
            }
            const tmp43Result = MessageRecordUtils;
          }
        }
        if (!hasFlagResult) {
          if (null != tmp42) {
            id = message.id;
            if (null != obj[guildId]) {
              const obj10 = {};
              const merged8 = Object.assign(obj);
              const obj11 = {};
              const merged9 = Object.assign(tmp46);
              const obj13 = {};
              const merged10 = Object.assign(tmp46.messages);
              delete tmp2[tmp];
              const obj14 = { ids: null, messages: null };
              const ids = tmp46.ids;
              obj14.ids = ids.filter((item) => item !== id);
              obj14.messages = obj13;
              const merged11 = Object.assign(obj14);
              obj10[guildId] = obj11;
              obj = obj10;
            }
          }
        }
        if (hasFlagResult) {
          if (null != tmp42) {
            const updateMessageRecordResult1 = MessageRecordUtils.updateMessageRecord(tmp42, message);
            if (null != obj[guildId]) {
              const obj15 = {};
              const merged12 = Object.assign(obj);
              const obj16 = {};
              const merged13 = Object.assign(tmp60);
              const obj17 = { messages: null };
              const obj18 = {};
              const merged14 = Object.assign(tmp60.messages);
              obj18[updateMessageRecordResult1.id] = updateMessageRecordResult1;
              obj17.messages = obj18;
              const merged15 = Object.assign(obj17);
              obj15[guildId] = obj16;
              obj = obj15;
            }
            const tmp43Result2 = MessageRecordUtils;
          }
        }
        return false;
      }
    }
  },
  MESSAGE_REACTION_ADD: function handleMessageReactionAdd(arg0) {
    ({ channelId, messageId, userId, emoji, optimistic, reactionType, colors } = arg0);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (!tmp3) {
        return false;
      }
    }
    const channel = ChannelStore.getChannel(channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    let tmp5 = null;
    if (null != guildId1) {
      tmp5 = null;
      if (null != obj[guildId1]) {
        let tmp9 = null;
        if (null != tmp7.messages[messageId]) {
          obj = { guildId: guildId1, message: tmp8 };
          tmp9 = obj;
        }
        tmp5 = tmp9;
      }
    }
    if (null == tmp5) {
      return false;
    } else {
      const message = tmp5.message;
      const obj2 = { colors, reactionType };
      const addReactionResult = message.addReaction(emoji, tmp3, obj2);
      const guildId = tmp5.guildId;
      if (null != obj[guildId]) {
        const obj3 = {};
        const merged = Object.assign(obj);
        const obj4 = {};
        const merged1 = Object.assign(tmp23);
        const obj5 = { messages: null };
        const obj6 = {};
        const merged2 = Object.assign(tmp23.messages);
        obj6[addReactionResult.id] = addReactionResult;
        obj5.messages = obj6;
        const merged3 = Object.assign(obj5);
        obj3[guildId] = obj4;
        obj = obj3;
      }
    }
  },
  MESSAGE_REACTION_REMOVE: function handleMessageReactionRemove(arg0) {
    ({ channelId, messageId, userId, emoji, optimistic, reactionType } = arg0);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (!tmp3) {
        return false;
      }
    }
    const channel = ChannelStore.getChannel(channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    let tmp5 = null;
    if (null != guildId1) {
      tmp5 = null;
      if (null != obj[guildId1]) {
        let tmp9 = null;
        if (null != tmp7.messages[messageId]) {
          obj = { guildId: guildId1, message: tmp8 };
          tmp9 = obj;
        }
        tmp5 = tmp9;
      }
    }
    if (null == tmp5) {
      return false;
    } else {
      const message = tmp5.message;
      const removeReactionResult = message.removeReaction(emoji, tmp3, reactionType);
      const guildId = tmp5.guildId;
      if (null != obj[guildId]) {
        const obj2 = {};
        const merged = Object.assign(obj);
        const obj3 = {};
        const merged1 = Object.assign(tmp12);
        const obj4 = { messages: null };
        const obj5 = {};
        const merged2 = Object.assign(tmp12.messages);
        obj5[removeReactionResult.id] = removeReactionResult;
        obj4.messages = obj5;
        const merged3 = Object.assign(obj4);
        obj2[guildId] = obj3;
        obj = obj2;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleMessageReactionRemoveAll(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    let tmp2 = null;
    if (null != guildId1) {
      tmp2 = null;
      if (null != obj[guildId1]) {
        let tmp6 = null;
        if (null != tmp4.messages[channelId.messageId]) {
          obj = { guildId: guildId1, message: tmp5 };
          tmp6 = obj;
        }
        tmp2 = tmp6;
      }
    }
    if (null == tmp2) {
      return false;
    } else {
      const message = tmp2.message;
      const result = message.set("reactions", []);
      const guildId = tmp2.guildId;
      if (null != obj[guildId]) {
        const obj2 = {};
        const merged = Object.assign(obj);
        const obj3 = {};
        const merged1 = Object.assign(tmp20);
        const obj4 = { messages: null };
        const obj5 = {};
        const merged2 = Object.assign(tmp20.messages);
        obj5[result.id] = result;
        obj4.messages = obj5;
        const merged3 = Object.assign(obj4);
        obj2[guildId] = obj3;
        obj = obj2;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleMessageReactionRemoveEmoji(channelId) {
    ({ messageId, emoji } = channelId);
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    let tmp2 = null;
    if (null != guildId1) {
      tmp2 = null;
      if (null != obj[guildId1]) {
        let tmp6 = null;
        if (null != tmp4.messages[messageId]) {
          obj = { guildId: guildId1, message: tmp5 };
          tmp6 = obj;
        }
        tmp2 = tmp6;
      }
    }
    if (null == tmp2) {
      return false;
    } else {
      const message = tmp2.message;
      const result = message.removeReactionsForEmoji(emoji);
      const guildId = tmp2.guildId;
      if (null != obj[guildId]) {
        const obj2 = {};
        const merged = Object.assign(obj);
        const obj3 = {};
        const merged1 = Object.assign(tmp9);
        const obj4 = { messages: null };
        const obj5 = {};
        const merged2 = Object.assign(tmp9.messages);
        obj5[result.id] = result;
        obj4.messages = obj5;
        const merged3 = Object.assign(obj4);
        obj2[guildId] = obj3;
        obj = obj2;
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const guildId = id.guildId;
    let tmp3 = null != guildId;
    if (tmp3) {
      let tmp6;
      if (obj[guildId] != null) {
        tmp6 = tmp5.messages[id];
      }
      if (null != tmp6) {
        if (null != obj[guildId]) {
          obj = {};
          const merged = Object.assign(obj);
          const obj2 = {};
          const merged1 = Object.assign(tmp9);
          const obj3 = {};
          const merged2 = Object.assign(tmp9.messages);
          delete tmp2[tmp];
          const obj4 = { ids: null, messages: null };
          const ids = tmp9.ids;
          obj4.ids = ids.filter((item) => item !== id);
          obj4.messages = obj3;
          const merged3 = Object.assign(obj4);
          obj[guildId] = obj2;
        }
      }
      tmp3 = tmp7;
    }
    return tmp3;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    ({ ids, guildId } = arg0);
    let set;
    let found;
    let messages;
    if (null == guildId) {
      return false;
    } else if (null == messages[guildId]) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(ids);
      const ids1 = tmp12.ids;
      found = ids1.filter((item) => !set.has(item));
      if (found.length === tmp12.ids.length) {
        return false;
      } else {
        messages = {};
        const merged = Object.assign(tmp12.messages);
        const ids2 = tmp12.ids;
        for (const item10014 of ids2) {
          if (set.has(item10014)) {
            delete tmp[tmp2];
          }
          continue;
        }
        updateGuildState(guildId, () => {
          messages = { ids: found, messages };
          return messages;
        });
      }
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate
};
const guildOfficialMessagesStore = new GuildOfficialMessagesStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesStore.tsx");

export default guildOfficialMessagesStore;