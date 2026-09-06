// discord_app/stores/DraftStore.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import DraftCommand from "../modules/application_commands/DraftCommand.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildAvailabilityStore from "GuildAvailabilityStore.tsx";

require = fn;
function handleChanged(type) {
  ({ channelId, draft, draftType, command } = type);
  const channel = ChannelStore.getChannel(channelId);
  let template;
  if (channel != null) {
    template = channel.template;
  }
  if (draft === template) {
    draft = "";
  }
  let obj = AuthenticationStore;
  const id = AuthenticationStore.getId();
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
        if (command == null) {
          command = undefined;
          if (tmp18 != null) {
            command = tmp18.command;
          }
          let tmp22;
          if (obj5.isDraftCommandValidForText(command, substr)) {
            let command1;
            if (tmp18 != null) {
              command1 = tmp18.command;
            }
            tmp22 = command1;
          }
          command = tmp22;
          obj5 = DraftCommand;
        }
        draft = undefined;
        if (tmp15[draftType] != null) {
          draft = tmp18.draft;
        }
        let isEqualResult = substr === draft;
        if (isEqualResult) {
          let command2;
          if (tmp18 != null) {
            command2 = tmp18.command;
          }
          isEqualResult = _modDef12.isEqual(command, command2);
        }
        if (!isEqualResult) {
          const obj1 = { timestamp: null, draft: null, command: null };
          const _Date = Date;
          obj1.timestamp = Date.now();
          obj1.draft = substr;
          obj1.command = command;
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
      if (obj8.isEmpty(tmp11)) {
        delete tmp[tmp3];
      }
      obj8 = _modDef12;
    }
  }
}
function deleteDraft(arg0, arg1) {
  let id = arg2;
  if (arg2 === undefined) {
    id = AuthenticationStore.getId();
  }
  if (null == id) {
    return false;
  } else {
    let tmp8 = dependencyMap[id];
    if (null == tmp8) {
      const obj = {};
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
  const id = AuthenticationStore.getId();
  if (null != id) {
    if (null == dependencyMap[id]) {
      const obj = {};
      dependencyMap[id] = obj;
    }
    delete tmp[tmp2];
  }
  return false;
}
let closure_7 = fn(1074).MAX_MESSAGE_LENGTH_PREMIUM + 500;
let DraftType = {
  ChannelMessage: 0,
  [0]: "ChannelMessage",
  ThreadSettings: 1,
  [1]: "ThreadSettings",
  FirstThreadMessage: 2,
  [2]: "FirstThreadMessage",
  ApplicationLauncherCommand: 3,
  [3]: "ApplicationLauncherCommand",
  Poll: 4,
  [4]: "Poll",
  SlashCommand: 5,
  [5]: "SlashCommand",
  ForwardContextMessage: 6,
  [6]: "ForwardContextMessage",
  InteractionModal: 7,
  [7]: "InteractionModal",
  ScheduledMessage: 8,
  [8]: "ScheduledMessage",
};
const dependencyMap = {};
const PersistedStore = initializeDefault.PersistedStore;
class DraftStore extends PersistedStore {}
const prototype = DraftStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  closure_9 = obj;
  (function pruneEmptyDrafts() {
    const entries = SnowflakeUtilsDefault.entries(closure_1_9);
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      let obj2 = SnowflakeUtilsDefault;
      let entries1 = obj2.entries(tmp5[1]);
      for (const item10033 of entries1) {
        let tmp13 = _slicedToArray(item10033, 2);
        let first1 = tmp13[0];
        let tmp16 = tmp13[1][ChannelMessage.ChannelMessage];
        let tmp17 = tmp16;
        if (null != tmp16) {
          let tmp19 = "" !== tmp17.draft;
          if (tmp19) {
            let str = tmp17.draft;
            tmp19 = "" !== str.trim();
          }
          if (!tmp19) {
            let tmp24 = deleteDraft(first1, tmp15.ChannelMessage, first);
          }
        }
        continue;
      }
      continue;
    }
  })();
  this.waitFor(AuthenticationStore, ChannelStore, GuildAvailabilityStore);
};
prototype["getState"] = function getState() {
  return closure_9;
};
prototype["getThreadDraftWithParentMessageId"] = function getThreadDraftWithParentMessageId(arg0) {
  const self = this;
  closure_0 = arg0;
  const id = AuthenticationStore.getId();
  if (null != id) {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      const obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    const keys = SnowflakeUtilsDefault.keys(tmp3);
    const found = keys.find((item) => {
      const threadSettings = self.getThreadSettings(item);
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
  closure_0 = ChannelMessage;
  const id = AuthenticationStore.getId();
  if (null == id) {
    return [];
  } else {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      const obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    const obj2 = _modDef12(tmp3);
    const mapValuesResult = _modDef12(tmp3).mapValues((arg0) => {
      let tmp;
      if (arg0 != null) {
        tmp = arg0[closure_0];
      }
      return tmp;
    });
    const pickByResult = _modDef12(tmp3)
      .mapValues((arg0) => {
        let tmp;
        if (arg0 != null) {
          tmp = arg0[closure_0];
        }
        return tmp;
      })
      .pickBy(GlobalUtils.isNotNullish);
    const mapped = _modDef12(tmp3)
      .mapValues((arg0) => {
        let tmp;
        if (arg0 != null) {
          tmp = arg0[closure_0];
        }
        return tmp;
      })
      .pickBy(GlobalUtils.isNotNullish)
      .toPairs()
      .map((item) => {
        [tmp] = item;
        return { channelId, timestamp, draft };
      });
    const toPairsResult = _modDef12(tmp3)
      .mapValues((arg0) => {
        let tmp;
        if (arg0 != null) {
          tmp = arg0[closure_0];
        }
        return tmp;
      })
      .pickBy(GlobalUtils.isNotNullish)
      .toPairs();
    return mapped.sortBy((timestamp) => -timestamp.timestamp).value();
  }
};
prototype["getDraft"] = function getDraft(id, ChannelMessage) {
  id = AuthenticationStore.getId();
  if (null == id) {
    return "";
  } else {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      const obj = {};
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
prototype["getDraftCommand"] = function getDraftCommand(id, ChannelMessage) {
  id = AuthenticationStore.getId();
  if (null != id) {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      const obj = {};
      dependencyMap[id] = obj;
      tmp3 = obj;
    }
    let command;
    if (tmp3[id] != null) {
      if (tmp6[ChannelMessage] != null) {
        command = tmp9.command;
      }
    }
    return command;
  }
};
prototype["getThreadSettings"] = function getThreadSettings(channelId) {
  const id = AuthenticationStore.getId();
  if (null == id) {
    return null;
  } else {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      const obj = {};
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
  id = AuthenticationStore.getId();
  if (null != id) {
    let tmp3 = dependencyMap[id];
    if (null == tmp3) {
      const obj = {};
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
        if (!("timestamp" in arg0[key10005])) {
          continue;
        } else {
          obj = {};
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
    const id = AuthenticationStore.getId();
    if (null != obj) {
      if (null != id) {
        obj = {};
        obj = {};
        obj[id] = obj;
        for (const key10009 in arg0) {
          obj[key10009] = arg0[key10009];
          continue;
        }
        return obj;
      }
    }
    return {};
  },
];
DraftStore.migrations = items;
DraftType = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let obj = AuthenticationStore;
    const id = AuthenticationStore.getId();
    if (!(id in dependencyMap)) {
      dependencyMap[id] = {};
    }
    const id1 = obj.getId();
    if (null != id1) {
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        let tmp8 = dependencyMap[id1];
        if (null == tmp8) {
          obj = {};
          dependencyMap[id1] = obj;
          tmp8 = obj;
        }
        for (const key10019 in tmp8) {
          if (null != ChannelStore.getChannel(key10019)) {
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
    const id = AuthenticationStore.getId();
    if (null != id) {
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        let tmp6 = dependencyMap[id];
        if (null == tmp6) {
          const obj = {};
          dependencyMap[id] = obj;
          tmp6 = obj;
        }
        for (const key10013 in tmp6) {
          if (null != ChannelStore.getChannel(key10013)) {
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
    let obj = AuthenticationStore;
    const id = AuthenticationStore.getId();
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
              const obj1 = { timestamp: null, draft: null };
              const _Date = Date;
              obj1.timestamp = Date.now();
              obj1.draft = str;
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
          obj9 = SnowflakeUtilsDefault;
        }
      }
    }
    return false;
  },
  DRAFT_SAVE: handleChanged,
  DRAFT_CHANGE: handleChanged,
  DRAFT_CLEAR: function handleDraftClear(arg0) {
    const id = AuthenticationStore.getId();
    let flag = false;
    if (null != id) {
      let tmp7 = dependencyMap[id];
      if (null == tmp7) {
        const obj = {};
        dependencyMap[id] = obj;
        tmp7 = obj;
      }
      flag = false;
      if (null != tmp7[arg0.channelId]) {
        delete tmp4[tmp3];
        if (obj2.isEmpty(tmp9)) {
          delete tmp[tmp2];
        }
        obj2 = _modDef12;
      }
    }
    return flag;
  },
  DRAFT_COMMAND_CLEAR: function handleDraftCommandClear(arg0) {
    ({ channelId, draftType } = arg0);
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else {
      let tmp3 = dependencyMap[id];
      if (null == tmp3) {
        const obj = {};
        dependencyMap[id] = obj;
        tmp3 = obj;
      }
      let tmp6;
      if (tmp3[channelId] != null) {
        tmp6 = tmp5[draftType];
      }
      let command;
      if (tmp6 != null) {
        command = tmp6.command;
      }
      if (null != command) {
        tmp6.command = undefined;
      }
      return false;
    }
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function handleThreadSettingsDraftChanged(arg0) {
    ({ channelId, draft } = arg0);
    const id = AuthenticationStore.getId();
    if (null != id) {
      let tmp3 = dependencyMap[id];
      if (null == tmp3) {
        let obj = {};
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
      obj.timestamp = Date.now();
      const merged = Object.assign(tmp5[obj.ThreadSettings]);
      const merged1 = Object.assign(draft);
      obj.parentChannelId = channelId;
      tmp5[obj.ThreadSettings] = obj;
    }
  },
  SCHEDULED_MESSAGE_DRAFT_CHANGE: function handleScheduledMessageDraftChanged(arg0) {
    ({ channelId, draft } = arg0);
    const id = AuthenticationStore.getId();
    if (null != id) {
      let tmp3 = dependencyMap[id];
      if (null == tmp3) {
        let obj = {};
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
    const id = AuthenticationStore.getId();
    let flag = false;
    if (null != id) {
      let tmp7 = dependencyMap[id];
      if (null == tmp7) {
        const obj = {};
        dependencyMap[id] = obj;
        tmp7 = obj;
      }
      flag = false;
      if (null != tmp7[arg0.channelId]) {
        delete tmp4[tmp3];
        if (obj2.isEmpty(tmp9)) {
          delete tmp[tmp2];
        }
        obj2 = _modDef12;
      }
    }
    return flag;
  },
};
const draftStore = new DraftStore(DispatcherDefault, DraftType);
const size = fn(2);
const result = size.fileFinishedImporting("stores/DraftStore.tsx");

export default draftStore;
export { DraftType };
