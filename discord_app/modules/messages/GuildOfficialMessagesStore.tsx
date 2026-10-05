// discord_app/modules/messages/GuildOfficialMessagesStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MessageRecordUtils from "MessageRecordUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

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
  obj = undefined;
  const guild_id = channel.guild_id;
  if (null == guild_id) {
    return false;
  } else if (null == obj[guild_id]) {
    return false;
  } else {
    items = [];
    obj = {};
    const merged = Object.assign(tmp10.messages);
    const ids = tmp10.ids;
    for (const item10007 of ids) {
      let tmp3 = tmp10.messages[item10007];
      let channel_id;
      if (tmp3 != null) {
        channel_id = tmp3.channel_id;
      }
      if (channel_id === channel.id) {
        delete obj[item10007];
      } else {
        let arr = items.push(item10007);
      }
      continue;
    }
    if (items.length === obj[guild_id].ids.length) {
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
          let obj4 = { blocked: tmp36, ignored: isIgnoredForMessageResult };
          tmp7[tmp10] = obj2.merge(obj4);
        }
      }
      continue;
    }
    if (null == tmp7) {
      obj[tmp3] = tmp6;
    } else {
      let obj5 = { messages: tmp7 };
      let merged1 = Object.assign(tmp6);
      obj[tmp3] = obj5;
      flag = true;
    }
    continue;
  }
  if (!flag) {
    return false;
  }
}
const MessageFlags = Constants.MessageFlags;
let obj = {};
const Store = get_initializedDefault.Store;
class GuildOfficialMessagesStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore, GuildStore, RelationshipStore, UserStore);
  }
  getState(arg0) {
    return obj[arg0];
  }
  getMessage(arg0, arg1) {
    let tmp2;
    if (obj[arg0] != null) {
      tmp2 = tmp.messages[arg1];
    }
    return tmp2;
  }
  getMessages(arg0) {
    let items;
    let closure_0 = tmp;
    if (null == obj[arg0]) {
      items = [];
    } else {
      const ids = tmp.ids;
      const mapped = ids.map((item) => messages.messages[item]);
      items = mapped.filter((item) => null != item);
    }
    return items;
  }
  isLoading(arg0) {
    let flag;
    if (obj[arg0] != null) {
      flag = tmp.loading;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isLoaded(arg0) {
    let flag;
    if (obj[arg0] != null) {
      flag = tmp.loaded;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasMore(arg0) {
    let flag;
    if (obj[arg0] != null) {
      flag = tmp.hasMore;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
const prototype = GuildOfficialMessagesStore.prototype;
GuildOfficialMessagesStore.displayName = "GuildOfficialMessagesStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {},
  LOAD_OFFICIAL_MESSAGES: function handleLoadOfficialMessages(guildId) {
    guildId = guildId.guildId;
    let loading;
    const before = guildId.before;
    if (obj[guildId] != null) {
      loading = tmp.loading;
    }
    if (true === loading) {
      return false;
    } else if (null != before) {
      if (null == obj[guildId]) {
        return false;
      } else {
        const obj2 = {};
        const merged = Object.assign(obj);
        const obj3 = { loading: true };
        const merged1 = Object.assign(tmp);
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
    let guildId;
    let hasMore;
    let messages;
    ({ guildId, messages: require, hasMore: dependencyMap, before: ChannelStore } = arg0);
    if (null == messages[guildId]) {
      return false;
    } else if (null != messages[guildId]) {
      messages = {};
      const fn = (ids) => {
        let items1;
        if (null != ChannelStore) {
          const items = [];
          HermesBuiltin.arraySpread(items, ids.ids, 0);
          items1 = items;
        } else {
          items1 = [];
        }
        if (null != ChannelStore) {
          const obj2 = {};
          const merged = Object.assign(ids.messages);
          messages = obj2;
        } else {
          messages = {};
        }
        for (const item10020 of require) {
          let obj3 = MessageRecordUtils;
          let messageRecord = obj3.createMessageRecord(item10020);
          let tmp10 = messageRecord;
          if (null == messages[messageRecord.id]) {
            let arr = items1.push(tmp10.id);
          }
          messages[tmp10.id] = tmp10;
          continue;
        }
        return { ids: items1, messages, hasMore: dependencyMap, loading: false, loaded: true, error: false };
      };
      let merged = Object.assign(messages);
      let obj2 = {};
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(fn(tmp2));
      messages[guildId] = obj2;
    }
  },
  LOAD_OFFICIAL_MESSAGES_FAILURE: function handleLoadOfficialMessagesFailure(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      return false;
    } else {
      let fn;
      if (null != tmp) {
        fn = () => ({ loading: false });
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
      delete obj[guild.id];
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    let guildId;
    let items;
    let message;
    let obj4;
    ({ message, guildId } = optimistic);
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        if (null != guildId) {
          let num = message.flags;
          const hasFlag = FlagUtils.hasFlag;
          FlagUtils;
          if (num == null) {
            num = 0;
          }
          if (hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL)) {
            let tmp6 = null != tmp5;
            if (tmp6) {
              if (null == obj[guildId].messages[message.id]) {
                const tmp24Result = MessageRecordUtils;
                const messageRecord = tmp24Result.createMessageRecord(message);
                if (null != obj[guildId]) {
                  obj = {};
                  const merged = Object.assign(obj);
                  const obj2 = {};
                  const merged1 = Object.assign(tmp10);
                  const obj3 = { ids: items, messages: obj4 };
                  items = [messageRecord.id];
                  HermesBuiltin.arraySpread(items, obj[guildId].ids, 1);
                  obj4 = {};
                  const merged2 = Object.assign(tmp10.messages);
                  obj4[messageRecord.id] = messageRecord;
                  const merged3 = Object.assign(obj3);
                  obj[guildId] = obj2;
                }
              }
              tmp6 = tmp7;
            }
            return tmp6;
          }
        }
        return false;
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let ids;
    let items;
    let obj18;
    let obj4;
    let obj9;
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
        if (null != obj[guildId].messages[message.id]) {
          const obj7 = MessageRecordUtils;
          const updateMessageRecordResult = obj7.updateMessageRecord(obj[guildId].messages[message.id], message);
          if (null != obj[guildId]) {
            obj = {};
            const merged = Object.assign(obj);
            const obj2 = {};
            const merged1 = Object.assign(tmp29);
            const obj3 = { messages: obj4 };
            obj4 = {};
            const merged2 = Object.assign(tmp29.messages);
            obj4[updateMessageRecordResult.id] = updateMessageRecordResult;
            const merged3 = Object.assign(obj3);
            obj[guildId] = obj2;
          }
        }
        return null != obj[guildId].messages[message.id];
      } else {
        let num = message.flags;
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL);
        if (hasFlagResult) {
          if (null == obj[guildId].messages[message.id]) {
            const tmp45Result = MessageRecordUtils;
            const messageRecord = tmp45Result.createMessageRecord(message);
            if (null != obj[guildId]) {
              const obj5 = {};
              const merged4 = Object.assign(obj);
              const obj6 = {};
              const merged5 = Object.assign(tmp10);
              const obj8 = { ids: items, messages: obj9 };
              items = [messageRecord.id];
              HermesBuiltin.arraySpread(items, obj[guildId].ids, 1);
              obj9 = {};
              const merged6 = Object.assign(tmp10.messages);
              obj9[messageRecord.id] = messageRecord;
              const merged7 = Object.assign(obj8);
              obj5[guildId] = obj6;
              obj = obj5;
            }
          }
        }
        if (!hasFlagResult) {
          if (null != obj[guildId].messages[message.id]) {
            id = message.id;
            if (null != obj[guildId]) {
              const obj10 = {};
              const merged8 = Object.assign(obj);
              const obj11 = {};
              const merged9 = Object.assign(tmp49);
              const obj12 = {};
              const merged10 = Object.assign(tmp49.messages);
              delete obj15[id];
              const obj13 = { ids: ids.filter((item) => item !== id), messages: obj12 };
              ids = tmp49.ids;
              const merged11 = Object.assign(obj13);
              obj10[guildId] = obj11;
              obj = obj10;
            }
          }
        }
        if (hasFlagResult) {
          if (null != obj[guildId].messages[message.id]) {
            const tmp45Result2 = MessageRecordUtils;
            const updateMessageRecordResult1 = tmp45Result2.updateMessageRecord(
              obj[guildId].messages[message.id],
              message,
            );
            if (null != obj[guildId]) {
              const obj14 = {};
              const merged12 = Object.assign(obj);
              const obj16 = {};
              const merged13 = Object.assign(tmp7);
              const obj17 = { messages: obj18 };
              obj18 = {};
              const merged14 = Object.assign(tmp7.messages);
              obj18[updateMessageRecordResult1.id] = updateMessageRecordResult1;
              const merged15 = Object.assign(obj17);
              obj14[guildId] = obj16;
              obj = obj14;
            }
          }
        }
        return false;
      }
    }
  },
  MESSAGE_REACTION_ADD: function handleMessageReactionAdd(arg0) {
    let channelId;
    let colors;
    let emoji;
    let messageId;
    let obj6;
    let optimistic;
    let reactionType;
    let userId;
    ({ channelId, messageId, userId, emoji, optimistic, reactionType, colors } = arg0);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (id !== userId) {
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
        if (null != obj[guildId1].messages[messageId]) {
          obj = { guildId: guildId1, message: obj[guildId1].messages[messageId] };
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
      const addReactionResult = message.addReaction(emoji, id === userId, obj2);
      const guildId = tmp5.guildId;
      if (null != obj[guildId]) {
        const obj3 = {};
        const merged = Object.assign(obj);
        const obj4 = {};
        const merged1 = Object.assign(tmp23);
        const obj5 = { messages: obj6 };
        obj6 = {};
        const merged2 = Object.assign(tmp23.messages);
        obj6[addReactionResult.id] = addReactionResult;
        const merged3 = Object.assign(obj5);
        obj3[guildId] = obj4;
        obj = obj3;
      }
    }
  },
  MESSAGE_REACTION_REMOVE: function handleMessageReactionRemove(arg0) {
    let channelId;
    let emoji;
    let messageId;
    let obj5;
    let optimistic;
    let reactionType;
    let userId;
    ({ channelId, messageId, userId, emoji, optimistic, reactionType } = arg0);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (id !== userId) {
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
        if (null != obj[guildId1].messages[messageId]) {
          obj = { guildId: guildId1, message: obj[guildId1].messages[messageId] };
          tmp9 = obj;
        }
        tmp5 = tmp9;
      }
    }
    if (null == tmp5) {
      return false;
    } else {
      const message = tmp5.message;
      const removeReactionResult = message.removeReaction(emoji, id === userId, reactionType);
      const guildId = tmp5.guildId;
      if (null != obj[guildId]) {
        const obj2 = {};
        const merged = Object.assign(obj);
        const obj3 = {};
        const merged1 = Object.assign(tmp12);
        const obj4 = { messages: obj5 };
        obj5 = {};
        const merged2 = Object.assign(tmp12.messages);
        obj5[removeReactionResult.id] = removeReactionResult;
        const merged3 = Object.assign(obj4);
        obj2[guildId] = obj3;
        obj = obj2;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleMessageReactionRemoveAll(messageId) {
    let obj5;
    messageId = messageId.messageId;
    const channel = ChannelStore.getChannel(messageId.channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    let tmp2 = null;
    if (null != guildId1) {
      tmp2 = null;
      if (null != obj[guildId1]) {
        let tmp6 = null;
        if (null != obj[guildId1].messages[messageId]) {
          obj = { guildId: guildId1, message: obj[guildId1].messages[messageId] };
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
        const obj4 = { messages: obj5 };
        obj5 = {};
        const merged2 = Object.assign(tmp20.messages);
        obj5[result.id] = result;
        const merged3 = Object.assign(obj4);
        obj2[guildId] = obj3;
        obj = obj2;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleMessageReactionRemoveEmoji(channelId) {
    let emoji;
    let messageId;
    let obj5;
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
        if (null != obj[guildId1].messages[messageId]) {
          obj = { guildId: guildId1, message: obj[guildId1].messages[messageId] };
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
        const obj4 = { messages: obj5 };
        obj5 = {};
        const merged2 = Object.assign(tmp9.messages);
        obj5[result.id] = result;
        const merged3 = Object.assign(obj4);
        obj2[guildId] = obj3;
        obj = obj2;
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    let ids;
    id = id.id;
    const guildId = id.guildId;
    let tmp = null != guildId;
    if (tmp) {
      let tmp4;
      if (obj[guildId] != null) {
        tmp4 = tmp3.messages[id];
      }
      if (null != tmp4) {
        if (null != obj[guildId]) {
          obj = {};
          const merged = Object.assign(obj);
          const obj2 = {};
          const merged1 = Object.assign(tmp7);
          const obj4 = {};
          const merged2 = Object.assign(tmp7.messages);
          delete obj3[id];
          const obj7 = { ids: ids.filter((item) => item !== id), messages: obj4 };
          ids = tmp7.ids;
          const merged3 = Object.assign(obj7);
          obj[guildId] = obj2;
        }
      }
      tmp = tmp5;
    }
    return tmp;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let guildId;
    let ids;
    ({ ids, guildId } = arg0);
    set = undefined;
    let found;
    obj = undefined;
    if (null == guildId) {
      return false;
    } else if (null == obj[guildId]) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(ids);
      const ids1 = tmp9.ids;
      found = ids1.filter((item) => !set.has(item));
      if (found.length === obj[guildId].ids.length) {
        return false;
      } else {
        obj = {};
        const merged = Object.assign(tmp9.messages);
        const ids2 = tmp9.ids;
        for (const item10014 of ids2) {
          if (set.has(item10014)) {
            delete obj[item10014];
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
const guildOfficialMessagesStore = new GuildOfficialMessagesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesStore.tsx");

export default guildOfficialMessagesStore;
