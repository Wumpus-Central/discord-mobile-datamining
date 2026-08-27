// discord_app/modules/messages/GuildOfficialMessagesStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";
import closure_3 from "../../stores/GuildMemberStore.tsx";
import closure_4 from "../../stores/GuildStore.tsx";
import closure_5 from "../../stores/RelationshipStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";
import { MessageFlags } from "../../Constants.tsx";

require = arg1;
function updateGuildState(guildId, arg1) {
  if (null != obj[guildId]) {
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp);
    const merged2 = Object.assign(arg1(tmp));
    obj[guildId] = obj;
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let items;
  let obj;
  const guild_id = channel.guild_id;
  if (null == guild_id) {
    return false;
  } else if (null == dependencyMap[guild_id]) {
    return false;
  } else {
    items = [];
    obj = {};
    const merged = Object.assign(tmp13.messages);
    const ids = tmp13.ids;
    for (const item10007 of ids) {
      let tmp5 = tmp13.messages[item10007];
      let channel_id;
      let tmp4 = item10007;
      if (tmp5 != null) {
        channel_id = tmp5.channel_id;
      }
      if (channel_id === channel.id) {
        let tmp9 = item10007;
        delete tmp[tmp2];
      } else {
        let tmp7 = item10007;
        let arr = items.push(tmp4);
      }
      continue;
    }
    if (items.length === tmp13.ids.length) {
      return false;
    } else {
      updateGuildState(guild_id, () => {
        obj = { ids: items, messages: obj };
        return obj;
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
    let tmp4 = obj;
    let tmp5 = obj[nextResult];
    let tmp6 = tmp5;
    let tmp7 = null;
    let ids = tmp5.ids;
    let tmp8 = ids;
    let tmp9 = ids;
    for (const item10031 of ids) {
      let tmp11 = tmp5;
      let tmp12 = tmp6.messages[item10031];
      obj1 = tmp12;
      if (null != tmp12) {
        let tmp33 = closure_5;
        let tmp34 = tmp12;
        let isBlockedForMessageResult = closure_5.isBlockedForMessage(obj1);
        let tmp36 = isBlockedForMessageResult;
        let isIgnoredForMessageResult = closure_5.isIgnoredForMessage(obj1);
        let tmp15 = obj1.blocked === isBlockedForMessageResult;
        if (tmp15) {
          let tmp13 = tmp12;
          let tmp14 = isIgnoredForMessageResult;
          tmp15 = obj1.ignored === isIgnoredForMessageResult;
        }
        if (!tmp15) {
          let tmp16 = tmp7;
          if (null == tmp7) {
            obj = {};
            let tmp17 = tmp5;
            let tmp18 = obj;
            let merged = Object.assign(tmp6.messages);
            tmp7 = obj;
          }
          let tmp20 = tmp7;
          let tmp21 = item10031;
          let tmp22 = tmp12;
          obj = { blocked: null, ignored: null };
          let tmp23 = isBlockedForMessageResult;
          obj[0] = tmp36;
          let tmp24 = isIgnoredForMessageResult;
          obj[1] = isIgnoredForMessageResult;
          tmp7[tmp10] = obj1.merge(obj);
        }
      }
      continue;
    }
    let tmp25 = tmp7;
    if (null == tmp7) {
      let tmp31 = nextResult;
      let tmp32 = tmp5;
      obj[tmp3] = tmp6;
    } else {
      let tmp26 = nextResult;
      obj1 = {};
      let tmp27 = tmp5;
      let tmp28 = obj1;
      let merged1 = Object.assign(tmp6);
      let tmp30 = tmp7;
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
let closure_8 = {};
const Store = initializeDefault.Store;
class GuildOfficialMessagesStore extends Store {
}
const prototype = GuildOfficialMessagesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3, closure_4, closure_5, closure_6);
};
prototype["getState"] = function getState(arg0) {
  return dependencyMap[arg0];
};
prototype["getMessage"] = function getMessage(arg0, arg1) {
  let tmp2;
  if (dependencyMap[arg0] != null) {
    tmp2 = tmp.messages[arg1];
  }
  return tmp2;
};
prototype["getMessages"] = function getMessages(arg0) {
  closure_0 = tmp;
  if (null == dependencyMap[arg0]) {
    let items = [];
  } else {
    const ids = tmp.ids;
    const mapped = ids.map((arg0) => messages.messages[arg0]);
    items = mapped.filter((arg0) => null != arg0);
  }
  return items;
};
prototype["isLoading"] = function isLoading(arg0) {
  let flag;
  if (dependencyMap[arg0] != null) {
    flag = tmp.loading;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isLoaded"] = function isLoaded(arg0) {
  let flag;
  if (dependencyMap[arg0] != null) {
    flag = tmp.loaded;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasMore"] = function hasMore(arg0) {
  let flag;
  if (dependencyMap[arg0] != null) {
    flag = tmp.hasMore;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
GuildOfficialMessagesStore.displayName = "GuildOfficialMessagesStore";
const guildOfficialMessagesStore = new GuildOfficialMessagesStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_8 = {};
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
      obj1 = { ids: null, messages: null, hasMore: false, loading: true, loaded: false, error: false };
      obj1[0] = [];
      obj1[1] = {};
      obj[guildId] = obj1;
    }
  },
  LOAD_OFFICIAL_MESSAGES_SUCCESS: function handleLoadOfficialMessagesSuccess(arg0) {
    ({ guildId, messages: require, hasMore: dependencyMap, before: closure_2 } = arg0);
    if (null == obj[guildId]) {
      return false;
    } else if (null != obj[guildId]) {
      obj = {};
      const fn = (arg0) => {
        let tmp = arg0;
        if (null != closure_2) {
          const items = [];
          HermesBuiltin.arraySpread(tmp.ids, 0);
        } else {
          const items1 = [];
        }
        if (null != closure_2) {
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
        fn = (arg0) => ({ loading: false, error: true });
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
                const messageRecord = tmp23(4690).createMessageRecord(message);
                if (null != obj[guildId]) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj = {};
                  const merged1 = Object.assign(tmp9);
                  obj1 = { ids: null, messages: null };
                  const items = [messageRecord.id];
                  HermesBuiltin.arraySpread(tmp9.ids, 1);
                  obj1[0] = items;
                  const obj2 = {};
                  const merged2 = Object.assign(tmp9.messages);
                  obj2[messageRecord.id] = messageRecord;
                  obj1[1] = obj2;
                  const merged3 = Object.assign(obj1);
                  obj[guildId] = obj;
                }
                const tmp23Result = tmp23(4690);
              }
              tmp5 = tmp6;
            }
            return tmp5;
          }
          obj6 = hasFlag;
          tmp23 = require;
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
      const channel = store.getChannel(message.channel_id);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      if (null == guildId) {
        return false;
      } else if (null == obj11[guildId]) {
        return false;
      } else if (null == message.author) {
        if (null != tmp42) {
          let obj5 = id(4690);
          const updateMessageRecordResult = obj5.updateMessageRecord(tmp42, message);
          if (null != obj11[guildId]) {
            let obj = {};
            const merged = Object.assign(obj11);
            obj = {};
            const merged1 = Object.assign(tmp27);
            obj1 = { messages: null };
            const obj2 = {};
            const merged2 = Object.assign(tmp27.messages);
            obj2[updateMessageRecordResult.id] = updateMessageRecordResult;
            obj1[0] = obj2;
            const merged3 = Object.assign(obj1);
            obj[guildId] = obj;
            obj11 = obj;
          }
        }
        return null != tmp42;
      } else {
        obj11 = id(1403);
        let num = message.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = obj11.hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL);
        if (hasFlagResult) {
          if (null == tmp42) {
            let tmp43Result = tmp43(4690);
            const messageRecord = tmp43Result.createMessageRecord(message);
            if (null != obj11[guildId]) {
              const obj3 = {};
              const merged4 = Object.assign(obj11);
              const obj4 = {};
              const merged5 = Object.assign(tmp8);
              obj5 = { ids: null, messages: null };
              const items = [messageRecord.id];
              HermesBuiltin.arraySpread(tmp8.ids, 1);
              obj5[0] = items;
              const obj6 = {};
              const merged6 = Object.assign(tmp8.messages);
              obj6[messageRecord.id] = messageRecord;
              obj5[1] = obj6;
              const merged7 = Object.assign(obj5);
              obj3[guildId] = obj4;
              obj11 = obj3;
            }
          }
        }
        if (!hasFlagResult) {
          if (null != tmp42) {
            id = message.id;
            if (null != obj11[guildId]) {
              const obj7 = {};
              const merged8 = Object.assign(obj11);
              const obj8 = {};
              const merged9 = Object.assign(tmp46);
              const obj9 = {};
              const merged10 = Object.assign(tmp46.messages);
              delete tmp2[tmp];
              const obj10 = { ids: null, messages: null };
              const ids = tmp46.ids;
              obj10[0] = ids.filter((arg0) => arg0 !== id);
              obj10[1] = obj9;
              const merged11 = Object.assign(obj10);
              obj7[guildId] = obj8;
              obj11 = obj7;
            }
          }
        }
        if (hasFlagResult) {
          if (null != tmp42) {
            tmp43Result = tmp43(4690);
            const updateMessageRecordResult1 = tmp43Result.updateMessageRecord(tmp42, message);
            if (null != obj11[guildId]) {
              obj11 = {};
              const merged12 = Object.assign(obj11);
              const obj12 = {};
              const merged13 = Object.assign(tmp60);
              const obj13 = { messages: null };
              const obj14 = {};
              const merged14 = Object.assign(tmp60.messages);
              obj14[updateMessageRecordResult1.id] = updateMessageRecordResult1;
              obj13[0] = obj14;
              const merged15 = Object.assign(obj13);
              obj11[guildId] = obj12;
            }
          }
        }
        return false;
      }
    }
  },
  MESSAGE_REACTION_ADD: function handleMessageReactionAdd(arg0) {
    ({ channelId, messageId, userId, emoji, optimistic, reactionType, colors } = arg0);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (!tmp3) {
        return false;
      }
    }
    const channel = store.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp5 = null;
    if (null != guildId) {
      tmp5 = null;
      if (null != obj1[guildId]) {
        let tmp9 = null;
        if (null != tmp7.messages[messageId]) {
          let obj = { guildId: null, message: null };
          obj[0] = guildId;
          obj[1] = tmp8;
          tmp9 = obj;
        }
        tmp5 = tmp9;
      }
    }
    if (null == tmp5) {
      return false;
    } else {
      const message = tmp5.message;
      obj = { colors: null, reactionType: null };
      obj[0] = colors;
      obj[1] = reactionType;
      const addReactionResult = message.addReaction(emoji, tmp3, obj);
      guildId = tmp5.guildId;
      if (null != obj1[guildId]) {
        obj1 = {};
        const merged = Object.assign(obj1);
        const obj2 = {};
        const merged1 = Object.assign(tmp23);
        const obj3 = { messages: null };
        const obj4 = {};
        const merged2 = Object.assign(tmp23.messages);
        obj4[addReactionResult.id] = addReactionResult;
        obj3[0] = obj4;
        const merged3 = Object.assign(obj3);
        obj1[guildId] = obj2;
      }
    }
  },
  MESSAGE_REACTION_REMOVE: function handleMessageReactionRemove(arg0) {
    ({ channelId, messageId, userId, emoji, optimistic, reactionType } = arg0);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (!tmp3) {
        return false;
      }
    }
    const channel = store.getChannel(channelId);
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
          obj = { guildId: null, message: null };
          obj[0] = guildId;
          obj[1] = tmp8;
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
        obj1 = {};
        const merged1 = Object.assign(tmp12);
        const obj2 = { messages: null };
        const obj3 = {};
        const merged2 = Object.assign(tmp12.messages);
        obj3[removeReactionResult.id] = removeReactionResult;
        obj2[0] = obj3;
        const merged3 = Object.assign(obj2);
        obj[guildId] = obj1;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleMessageReactionRemoveAll(channelId) {
    const channel = store.getChannel(channelId.channelId);
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
          obj = { guildId: null, message: null };
          obj[0] = guildId;
          obj[1] = tmp5;
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
        obj1 = {};
        const merged1 = Object.assign(tmp20);
        const obj2 = { messages: null };
        const obj3 = {};
        const merged2 = Object.assign(tmp20.messages);
        obj3[result.id] = result;
        obj2[0] = obj3;
        const merged3 = Object.assign(obj2);
        obj[guildId] = obj1;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleMessageReactionRemoveEmoji(channelId) {
    ({ messageId, emoji } = channelId);
    const channel = store.getChannel(channelId.channelId);
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
          obj = { guildId: null, message: null };
          obj[0] = guildId;
          obj[1] = tmp5;
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
        obj1 = {};
        const merged1 = Object.assign(tmp9);
        const obj2 = { messages: null };
        const obj3 = {};
        const merged2 = Object.assign(tmp9.messages);
        obj3[result.id] = result;
        obj2[0] = obj3;
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
      if (obj[guildId] != null) {
        tmp6 = tmp5.messages[id];
      }
      if (null != tmp6) {
        if (null != obj[guildId]) {
          obj = {};
          const merged = Object.assign(obj);
          obj = {};
          const merged1 = Object.assign(tmp9);
          obj = {};
          const merged2 = Object.assign(tmp9.messages);
          delete tmp2[tmp];
          obj1 = { ids: null, messages: null };
          const ids = tmp9.ids;
          obj1[0] = ids.filter((arg0) => arg0 !== id);
          obj1[1] = obj;
          const merged3 = Object.assign(obj1);
          obj[guildId] = obj;
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
    let obj;
    if (null == guildId) {
      return false;
    } else if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(ids);
      ids = tmp12.ids;
      found = ids.filter((arg0) => !set.has(arg0));
      if (found.length === tmp12.ids.length) {
        return false;
      } else {
        obj = {};
        const merged = Object.assign(tmp12.messages);
        const ids2 = tmp12.ids;
        for (const item10014 of ids2) {
          let tmp7 = item10014;
          if (set.has(item10014)) {
            let tmp8 = item10014;
            delete tmp[tmp2];
          }
          continue;
        }
        updateGuildState(guildId, () => {
          obj = { ids: found, messages: obj };
          return obj;
        });
      }
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate
});
let result = require("set").fileFinishedImporting("modules/messages/GuildOfficialMessagesStore.tsx");

export default guildOfficialMessagesStore;