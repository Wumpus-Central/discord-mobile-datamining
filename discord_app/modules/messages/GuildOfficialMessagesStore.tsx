// discord_app/modules/messages/GuildOfficialMessagesStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MessageRecordUtils from "MessageRecordUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function updateGuildState(guildId, fn) {
  if (null != obj[guildId]) {
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp);
    const merged2 = Object.assign(fn(tmp));
    obj[guildId] = obj;
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let items;
  messages = undefined;
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
  let obj = {};
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
      let obj1 = tmp12;
      if (null != tmp12) {
        let isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(obj1);
        let tmp36 = isBlockedForMessageResult;
        let isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(obj1);
        let tmp15 = obj1.blocked === isBlockedForMessageResult;
        if (tmp15) {
          tmp15 = obj1.ignored === isIgnoredForMessageResult;
        }
        if (!tmp15) {
          if (null == tmp7) {
            obj = {};
            let merged = Object.assign(tmp6.messages);
            tmp7 = obj;
          }
          obj = { blocked: null, ignored: null };
          obj.blocked = tmp36;
          obj.ignored = isIgnoredForMessageResult;
          tmp7[tmp10] = obj1.merge(obj);
        }
      }
      continue;
    }
    if (null == tmp7) {
      obj[tmp3] = tmp6;
    } else {
      obj1 = {};
      let merged1 = Object.assign(tmp6);
      obj1.messages = tmp7;
      obj[tmp3] = obj1;
      flag = true;
    }
    continue;
  }
  if (!flag) {
    return false;
  }
}
const MessageFlags = fn(1074).MessageFlags;
let messages = {};
const Store = initializeDefault.Store;
class GuildOfficialMessagesStore extends Store {}
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
  messages = tmp;
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
messages = {
  CONNECTION_OPEN: function handleConnectionOpen() {},
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
        obj = {};
        const merged = Object.assign(obj);
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.loading = true;
        obj[guildId] = obj;
      }
    } else {
      obj = {};
      const merged2 = Object.assign(obj);
      const obj1 = { ids: [], messages: {}, hasMore: false, loading: true, loaded: false, error: false };
      obj[guildId] = obj1;
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
          obj = {};
          const merged = Object.assign(tmp.messages);
        } else {
          obj = {};
        }
        tmp = dependencyMap[Symbol.iterator]();
      };
      let merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(fn(tmp2));
      obj[guildId] = obj;
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
        obj = {};
        const merged1 = Object.assign(tmp3);
        const merged2 = Object.assign(fn(tmp3));
        obj[guildId] = obj;
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
                  obj = {};
                  const merged1 = Object.assign(tmp9);
                  const obj1 = { ids: null, messages: null };
                  const items = [messageRecord.id];
                  HermesBuiltin.arraySpread(tmp9.ids, 1);
                  obj1.ids = items;
                  const obj2 = {};
                  const merged2 = Object.assign(tmp9.messages);
                  obj2[messageRecord.id] = messageRecord;
                  obj1.messages = obj2;
                  const merged3 = Object.assign(obj1);
                  obj[guildId] = obj;
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
        if (null != tmp45) {
          let obj6 = MessageRecordUtils;
          const updateMessageRecordResult = obj6.updateMessageRecord(tmp45, message);
          if (null != obj[guildId]) {
            obj = {};
            const merged = Object.assign(obj);
            obj = {};
            const merged1 = Object.assign(tmp30);
            const obj1 = { messages: null };
            const obj2 = {};
            const merged2 = Object.assign(tmp30.messages);
            obj2[updateMessageRecordResult.id] = updateMessageRecordResult;
            obj1.messages = obj2;
            const merged3 = Object.assign(obj1);
            obj[guildId] = obj;
          }
        }
        return null != tmp45;
      } else {
        let obj12 = FlagUtils;
        let num = message.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = obj12.hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL);
        if (hasFlagResult) {
          if (null == tmp45) {
            let tmp46Result = MessageRecordUtils;
            const messageRecord = tmp46Result.createMessageRecord(message);
            if (null != obj[guildId]) {
              const obj3 = {};
              const merged4 = Object.assign(obj);
              const obj4 = {};
              const merged5 = Object.assign(tmp11);
              const obj5 = { ids: null, messages: null };
              const items = [messageRecord.id];
              HermesBuiltin.arraySpread(tmp11.ids, 1);
              obj5.ids = items;
              obj6 = {};
              const merged6 = Object.assign(tmp11.messages);
              obj6[messageRecord.id] = messageRecord;
              obj5.messages = obj6;
              const merged7 = Object.assign(obj5);
              obj3[guildId] = obj4;
              obj = obj3;
            }
          }
        }
        if (!hasFlagResult) {
          if (null != tmp45) {
            id = message.id;
            if (null != obj[guildId]) {
              const obj7 = {};
              const merged8 = Object.assign(obj);
              const obj8 = {};
              const merged9 = Object.assign(tmp49);
              const obj9 = {};
              const merged10 = Object.assign(tmp49.messages);
              delete tmp2[tmp];
              const obj10 = { ids: null, messages: null };
              const ids = tmp49.ids;
              obj10.ids = ids.filter((item) => item !== id);
              obj10.messages = obj9;
              const merged11 = Object.assign(obj10);
              obj7[guildId] = obj8;
              obj = obj7;
            }
          }
        }
        if (hasFlagResult) {
          if (null != tmp45) {
            tmp46Result = MessageRecordUtils;
            const updateMessageRecordResult1 = tmp46Result.updateMessageRecord(tmp45, message);
            if (null != obj[guildId]) {
              const obj11 = {};
              const merged12 = Object.assign(obj);
              obj12 = {};
              const merged13 = Object.assign(tmp8);
              const obj13 = { messages: null };
              const obj14 = {};
              const merged14 = Object.assign(tmp8.messages);
              obj14[updateMessageRecordResult1.id] = updateMessageRecordResult1;
              obj13.messages = obj14;
              const merged15 = Object.assign(obj13);
              obj11[guildId] = obj12;
              obj = obj11;
            }
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
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp5 = null;
    if (null != guildId) {
      tmp5 = null;
      if (null != obj[guildId]) {
        let tmp9 = null;
        if (null != tmp7.messages[messageId]) {
          obj = { guildId, message: tmp8 };
          tmp9 = obj;
        }
        tmp5 = tmp9;
      }
    }
    if (null == tmp5) {
      return false;
    } else {
      const message = tmp5.message;
      obj = { colors, reactionType };
      const addReactionResult = message.addReaction(emoji, tmp3, obj);
      guildId = tmp5.guildId;
      if (null != obj[guildId]) {
        const obj1 = {};
        const merged = Object.assign(obj);
        const obj2 = {};
        const merged1 = Object.assign(tmp23);
        const obj3 = { messages: null };
        const obj4 = {};
        const merged2 = Object.assign(tmp23.messages);
        obj4[addReactionResult.id] = addReactionResult;
        obj3.messages = obj4;
        const merged3 = Object.assign(obj3);
        obj1[guildId] = obj2;
        obj = obj1;
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
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp5 = null;
    if (null != guildId) {
      tmp5 = null;
      if (null != obj[guildId]) {
        let tmp9 = null;
        if (null != tmp7.messages[messageId]) {
          obj = { guildId, message: tmp8 };
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
      guildId = tmp5.guildId;
      if (null != obj[guildId]) {
        obj = {};
        const merged = Object.assign(obj);
        const obj1 = {};
        const merged1 = Object.assign(tmp12);
        const obj2 = { messages: null };
        const obj3 = {};
        const merged2 = Object.assign(tmp12.messages);
        obj3[removeReactionResult.id] = removeReactionResult;
        obj2.messages = obj3;
        const merged3 = Object.assign(obj2);
        obj[guildId] = obj1;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleMessageReactionRemoveAll(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = null;
      if (null != obj[guildId]) {
        let tmp6 = null;
        if (null != tmp4.messages[channelId.messageId]) {
          obj = { guildId, message: tmp5 };
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
      guildId = tmp2.guildId;
      if (null != obj[guildId]) {
        obj = {};
        const merged = Object.assign(obj);
        const obj1 = {};
        const merged1 = Object.assign(tmp20);
        const obj2 = { messages: null };
        const obj3 = {};
        const merged2 = Object.assign(tmp20.messages);
        obj3[result.id] = result;
        obj2.messages = obj3;
        const merged3 = Object.assign(obj2);
        obj[guildId] = obj1;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleMessageReactionRemoveEmoji(channelId) {
    ({ messageId, emoji } = channelId);
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = null;
      if (null != obj[guildId]) {
        let tmp6 = null;
        if (null != tmp4.messages[messageId]) {
          obj = { guildId, message: tmp5 };
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
      guildId = tmp2.guildId;
      if (null != obj[guildId]) {
        obj = {};
        const merged = Object.assign(obj);
        const obj1 = {};
        const merged1 = Object.assign(tmp9);
        const obj2 = { messages: null };
        const obj3 = {};
        const merged2 = Object.assign(tmp9.messages);
        obj3[result.id] = result;
        obj2.messages = obj3;
        const merged3 = Object.assign(obj2);
        obj[guildId] = obj1;
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const guildId = id.guildId;
    let tmp3 = null != guildId;
    if (tmp3) {
      let tmp6;
      if (messages[guildId] != null) {
        tmp6 = tmp5.messages[id];
      }
      if (null != tmp6) {
        if (null != messages[guildId]) {
          messages = {};
          const merged = Object.assign(messages);
          messages = {};
          const merged1 = Object.assign(tmp9);
          messages = {};
          const merged2 = Object.assign(tmp9.messages);
          delete tmp2[tmp];
          const obj1 = { ids: null, messages: null };
          const ids = tmp9.ids;
          obj1.ids = ids.filter((item) => item !== id);
          obj1.messages = messages;
          const merged3 = Object.assign(obj1);
          messages[guildId] = messages;
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
    messages = undefined;
    if (null == guildId) {
      return false;
    } else if (null == messages[guildId]) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(ids);
      ids = tmp12.ids;
      found = ids.filter((item) => !set.has(item));
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
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
};
const guildOfficialMessagesStore = new GuildOfficialMessagesStore(DispatcherDefault, messages);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesStore.tsx");

export default guildOfficialMessagesStore;
