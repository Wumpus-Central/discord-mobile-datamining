// === Module 4742: handleChanged ===

// Module 4742 (handleChanged)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "handleConnectionOpen" /* 4743 */;

const require = arg1;
function handleChanged(type) {
  ({ channelId, draft, draftType } = type);
  const channel = store2.getChannel(channelId);
  let template;
  if (channel != null) {
    template = channel.template;
  }
  if (draft === template) {
    draft = "";
  }
  obj = store;
  const id = store.getId();
  if (null != id) {
    if (null != draft) {
      if ("" !== draft) {
        let tmp13 = dependencyMap[id];
        if (null == tmp13) {
          obj = {};
          dependencyMap[id] = obj;
          tmp13 = obj;
        }
        let tmp15 = tmp13[channelId];
        if (null == tmp15) {
          obj = {};
          tmp13[channelId] = obj;
          tmp15 = obj;
        }
        let substr = draft;
        if (draft.length > closure_7) {
          substr = draft.substr(0, tmp16);
        }
        draft = undefined;
        if (tmp15[draftType] != null) {
          draft = tmp18.draft;
        }
        if (substr !== draft) {
          obj1 = { timestamp: null, draft: null };
          const _Date = Date;
          obj1[0] = Date.now();
          obj1[1] = substr;
          tmp15[draftType] = obj1;
        }
      }
      return "DRAFT_SAVE" === type.type;
    }
  }
  const id1 = obj.getId();
  if (null != id1) {
    let tmp10 = dependencyMap[id1];
    if (null == tmp10) {
      const obj2 = {};
      dependencyMap[id1] = obj2;
      tmp10 = obj2;
    }
    if (null != tmp10[channelId]) {
      delete tmp4[tmp2];
      if (obj6.isEmpty(tmp11)) {
        delete tmp[tmp3];
      }
      obj6 = applyDefault;
    }
  }
}
function deleteDraft(arg0, arg1) {
  let id = arg2;
  if (arg2 === undefined) {
    id = store.getId();
  }
  if (null == id) {
    return false;
  } else {
    let tmp8 = dependencyMap[id];
    if (null == tmp8) {
      obj = {};
      dependencyMap[id] = obj;
      tmp8 = obj;
    }
    if (null == tmp8[arg0]) {
      return false;
    } else {
      delete tmp4[tmp3];
      if (obj2.isEmpty(tmp11)) {
        delete tmp2[tmp];
      }
    }
  }
}
function handleChannelDelete(arg0) {
  const id = store.getId();
  if (null != id) {
    if (null == dependencyMap[id]) {
      obj = {};
      dependencyMap[id] = obj;
    }
    delete tmp[tmp2];
  }
  return false;
}
let closure_7 = require("ME").MAX_MESSAGE_LENGTH_PREMIUM + 500;
let obj = { ChannelMessage: 0, [0]: "ChannelMessage", ThreadSettings: 1, [1]: "ThreadSettings", FirstThreadMessage: 2, [2]: "FirstThreadMessage", ApplicationLauncherCommand: 3, [3]: "ApplicationLauncherCommand", Poll: 4, [4]: "Poll", SlashCommand: 5, [5]: "SlashCommand", ForwardContextMessage: 6, [6]: "ForwardContextMessage", InteractionModal: 7, [7]: "InteractionModal", ScheduledMessage: 8, [8]: "ScheduledMessage" };
let closure_9 = {};
const PersistedStore = initializeDefault.PersistedStore;
class DraftStore extends PersistedStore {
}
const prototype = DraftStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  (function pruneEmptyDrafts() {
    obj = callback(11);
    const entries = obj.entries(obj);
    while (tmp2 !== undefined) {
      let tmp4 = callback2;
      let tmp5 = callback2(tmp3, 2);
      let first = tmp5[0];
      let tmp7 = callback;
      let tmp8 = dependencyMap;
      let obj2 = callback(11);
      let entries1 = obj2.entries(tmp5[1]);
      let tmp10 = entries1;
      let tmp11 = entries1;
      for (const item10033 of entries1) {
        let tmp12 = callback2;
        let tmp13 = callback2(item10033, 2);
        let first1 = tmp13[0];
        let tmp16 = tmp13[1][ChannelMessage.ChannelMessage];
        let tmp17 = tmp16;
        if (null != tmp16) {
          let tmp18 = tmp16;
          let tmp19 = "" !== tmp17.draft;
          if (tmp19) {
            let tmp20 = tmp16;
            let str = tmp17.draft;
            tmp19 = "" !== str.trim();
          }
          if (!tmp19) {
            let tmp21 = callback3;
            let tmp22 = first1;
            let tmp23 = first;
            let tmp24 = callback3(first1, tmp15.ChannelMessage, first);
          }
        }
        continue;
      }
      continue;
    }
  })();
  this.waitFor(closure_4, closure_5, closure_6);
};
prototype["getState"] = function getState() {
  return closure_9;
};
prototype["getThreadDraftWithParentMessageId"] = function getThreadDraftWithParentMessageId(arg0) {
  let self = this;
  self = this;
  closure_0 = arg0;
  const id = store.getId();
  if (null != id) {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    const keys = self(11).keys(tmp3);
    const found = keys.find((channelId) => {
      const threadSettings = self.getThreadSettings(channelId);
      let parentMessageId;
      if (threadSettings != null) {
        parentMessageId = threadSettings.parentMessageId;
      }
      return parentMessageId === closure_0;
    });
    let threadSettings;
    if (null != found) {
      threadSettings = self.getThreadSettings(found);
    }
    return threadSettings;
  }
};
prototype["getRecentlyEditedDrafts"] = function getRecentlyEditedDrafts(ChannelMessage) {
  const _require = ChannelMessage;
  const id = store.getId();
  if (null == id) {
    return [];
  } else {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    const obj2 = applyDefault(tmp3);
    const mapValuesResult = applyDefault(tmp3).mapValues((arg0) => {
      let tmp;
      if (arg0 != null) {
        tmp = arg0[closure_0];
      }
      return tmp;
    });
    const pickByResult = applyDefault(tmp3).mapValues((arg0) => {
      let tmp;
      if (arg0 != null) {
        tmp = arg0[closure_0];
      }
      return tmp;
    }).pickBy(_require(1370).isNotNullish);
    const mapped = applyDefault(tmp3).mapValues((arg0) => {
      let tmp;
      if (arg0 != null) {
        tmp = arg0[closure_0];
      }
      return tmp;
    }).pickBy(_require(1370).isNotNullish).toPairs().map((arg0) => {
      [tmp, ] = arg0;
      return { channelId, timestamp, draft };
    });
    const toPairsResult = applyDefault(tmp3).mapValues((arg0) => {
      let tmp;
      if (arg0 != null) {
        tmp = arg0[closure_0];
      }
      return tmp;
    }).pickBy(_require(1370).isNotNullish).toPairs();
    return mapped.sortBy((timestamp) => -timestamp.timestamp).value();
  }
};
prototype["getDraft"] = function getDraft(id, ChannelMessage) {
  id = store.getId();
  if (null == id) {
    return "";
  } else {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    if (null != tmp3[id]) {
      if (null != tmp6[ChannelMessage]) {
        return tmp8.draft;
      }
    }
    return "";
  }
};
prototype["getThreadSettings"] = function getThreadSettings(channelId) {
  const id = store.getId();
  if (null == id) {
    return null;
  } else {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    let tmp7 = null;
    if (null != tmp3[channelId]) {
      tmp7 = tmp6[obj.ThreadSettings];
    }
    return tmp7;
  }
};
prototype["getScheduledMessage"] = function getScheduledMessage(id) {
  id = store.getId();
  if (null != id) {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    let tmp7;
    if (tmp3[id] != null) {
      tmp7 = tmp6[obj.ScheduledMessage];
    }
    return tmp7;
  }
};
DraftStore.displayName = "DraftStore";
DraftStore.persistKey = "DraftStore";
const items = [
  (obj) => {
    if (null == obj) {
      return {};
    } else {
      for (const key10005 in arg0) {
        let tmp3 = key10005;
        if (!("timestamp" in arg0[key10005])) {
          continue;
        } else {
          obj = {};
          let tmp2 = obj;
          obj[obj.ChannelMessage] = arg0[key10005];
          arg0[key10005] = obj;
          continue;
        }
        continue;
      }
      return obj;
    }
  },
  (obj) => {
    const id = store.getId();
    if (null != obj) {
      if (null != id) {
        obj = {};
        obj = {};
        obj[id] = obj;
        for (const key10009 in arg0) {
          let tmp3 = key10009;
          obj[key10009] = arg0[key10009];
          continue;
        }
        return obj;
      }
    }
    return {};
  }
];
DraftStore.migrations = items;
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    obj = store;
    const id = store.getId();
    if (!(id in dependencyMap)) {
      dependencyMap[id] = {};
    }
    const id1 = obj.getId();
    if (null != id1) {
      if (closure_6.totalUnavailableGuilds <= 0) {
        let tmp8 = dependencyMap[id1];
        if (null == tmp8) {
          obj = {};
          dependencyMap[id1] = obj;
          tmp8 = obj;
        }
        for (const key10019 in tmp8) {
          let tmp11 = key10019;
          let tmp12 = store2;
          if (null != store2.getChannel(key10019)) {
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        }
      }
    }
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      closure_9 = {};
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemove(userId) {
    if (userId.userId in closure_9) {
      userId = userId.userId;
      delete tmp2[tmp];
    }
  },
  GUILD_DELETE: function handleGuildDelete() {
    const id = store.getId();
    if (null != id) {
      if (closure_6.totalUnavailableGuilds <= 0) {
        let tmp6 = dependencyMap[id];
        if (null == tmp6) {
          obj = {};
          dependencyMap[id] = obj;
          tmp6 = obj;
        }
        for (const key10013 in tmp6) {
          let tmp9 = key10013;
          let tmp10 = store2;
          if (null != store2.getChannel(key10013)) {
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        }
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    obj = store;
    const id = store.getId();
    if (null != id) {
      if (channel.ownerId !== id) {
        let tmp10 = dependencyMap[id];
        if (null == tmp10) {
          obj = {};
          dependencyMap[id] = obj;
          tmp10 = obj;
        }
        if (null == tmp10[channel.parent_id]) {
          return false;
        } else if (null == tmp11[obj.ThreadSettings]) {
          return false;
        } else {
          if (tmp25.parentMessageId !== obj9.castChannelIdAsMessageId(channel.id)) {
            return false;
          } else if (null == tmp10[channel.parent_id]) {
            return false;
          } else {
            let str;
            if (tmp28[tmp24.FirstThreadMessage] != null) {
              str = tmp29.draft;
            }
            if (str == null) {
              str = "";
            }
            if ("" !== str) {
              obj = {};
              obj1 = { timestamp: null, draft: null };
              const _Date = Date;
              obj1[0] = Date.now();
              obj1[1] = str;
              obj[tmp24.ChannelMessage] = obj1;
              tmp10[channel.id] = obj;
            }
            const ThreadSettings = tmp24.ThreadSettings;
            const id1 = obj.getId();
            if (null != id1) {
              let tmp15 = dependencyMap[id1];
              if (null == tmp15) {
                const obj2 = {};
                dependencyMap[id1] = obj2;
                tmp15 = obj2;
              }
              if (null != tmp15[channel.parent_id]) {
                delete tmp7[tmp6];
                let tmp26Result = tmp26(12);
                if (tmp26Result.isEmpty(tmp17)) {
                  delete tmp4[tmp5];
                }
              }
            }
            const FirstThreadMessage = tmp24.FirstThreadMessage;
            const id2 = obj.getId();
            if (null != id2) {
              let tmp20 = dependencyMap[id2];
              if (null == tmp20) {
                const obj3 = {};
                dependencyMap[id2] = obj3;
                tmp20 = obj3;
              }
              if (null != tmp20[channel.parent_id]) {
                delete tmp3[tmp4];
                tmp26Result = tmp26(12);
                if (tmp26Result.isEmpty(tmp22)) {
                  delete tmp[tmp2];
                }
              }
            }
          }
          obj9 = DISCORD_EPOCHDefault;
        }
      }
    }
    return false;
  },
  DRAFT_SAVE: handleChanged,
  DRAFT_CHANGE: handleChanged,
  DRAFT_CLEAR: function handleDraftClear(arg0) {
    const id = store.getId();
    let flag = false;
    if (null != id) {
      let tmp7 = dependencyMap[id];
      if (null == tmp7) {
        obj = {};
        dependencyMap[id] = obj;
        tmp7 = obj;
      }
      flag = false;
      if (null != tmp7[arg0.channelId]) {
        delete tmp4[tmp3];
        if (obj2.isEmpty(tmp9)) {
          delete tmp[tmp2];
        }
        obj2 = applyDefault;
      }
    }
    return flag;
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function handleThreadSettingsDraftChanged(arg0) {
    ({ channelId, draft } = arg0);
    const id = store.getId();
    if (null != id) {
      let tmp3 = dependencyMap[id];
      if (null == tmp3) {
        obj = {};
        dependencyMap[id] = obj;
        tmp3 = obj;
      }
      let tmp5 = tmp3[channelId];
      if (null == tmp5) {
        obj = {};
        tmp3[channelId] = obj;
        tmp5 = obj;
      }
      obj = { timestamp: null };
      const _Date = Date;
      obj[0] = Date.now();
      const merged = Object.assign(tmp5[obj.ThreadSettings]);
      const merged1 = Object.assign(draft);
      obj.parentChannelId = channelId;
      tmp5[obj.ThreadSettings] = obj;
    }
  },
  SCHEDULED_MESSAGE_DRAFT_CHANGE: function handleScheduledMessageDraftChanged(arg0) {
    ({ channelId, draft } = arg0);
    const id = store.getId();
    if (null != id) {
      let tmp3 = dependencyMap[id];
      if (null == tmp3) {
        obj = {};
        dependencyMap[id] = obj;
        tmp3 = obj;
      }
      let tmp5 = tmp3[channelId];
      if (null == tmp5) {
        obj = {};
        tmp3[channelId] = obj;
        tmp5 = obj;
      }
      obj = {};
      const merged = Object.assign(tmp5[obj.ScheduledMessage]);
      const merged1 = Object.assign(draft);
      const _Date = Date;
      obj.timestamp = Date.now();
      tmp5[obj.ScheduledMessage] = obj;
    }
  },
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(arg0) {
    const id = store.getId();
    let flag = false;
    if (null != id) {
      let tmp7 = dependencyMap[id];
      if (null == tmp7) {
        obj = {};
        dependencyMap[id] = obj;
        tmp7 = obj;
      }
      flag = false;
      if (null != tmp7[arg0.channelId]) {
        delete tmp4[tmp3];
        if (obj2.isEmpty(tmp9)) {
          delete tmp[tmp2];
        }
        obj2 = applyDefault;
      }
    }
    return flag;
  }
};
const draftStore = new DraftStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("stores/DraftStore.tsx");

export default draftStore;
export const DraftType = obj;