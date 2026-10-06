// === Module 7044: DraftStore ===

// Module 7044 (DraftStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import DraftCommand from "DraftCommand" /* 7045 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5625 */;
import size from "module_2" /* 2 */;

let closure_9;

function handleChanged(type) {
  let channelId;
  let command;
  let draft;
  let draftType;
  ({ channelId, draft, draftType, command } = type);
  type = type.type;
  const channel = ChannelStore.getChannel(channelId);
  let template;
  if (channel != null) {
    template = channel.template;
  }
  if (draft === template) {
    draft = "";
  }
  const id = AuthenticationStore.getId();
  if (null != id) {
    if (null != draft) {
      if ("" !== draft) {
        let tmp9 = closure_9[id];
        if (null == tmp9) {
          const obj2 = {};
          closure_9[id] = obj2;
          tmp9 = obj2;
        }
        let tmp11 = tmp9[channelId];
        if (null == tmp11) {
          const obj3 = {};
          tmp9[channelId] = obj3;
          tmp11 = obj3;
        }
        let substr = draft;
        if (draft.length > closure_7) {
          substr = draft.substr(0, tmp12);
        }
        if (command == null) {
          let command1;
          const isDraftCommandValidForText = DraftCommand.isDraftCommandValidForText;
          DraftCommand;
          if (tmp11[draftType] != null) {
            command1 = tmp14.command;
          }
          let tmp19;
          if (isDraftCommandValidForText(command1, substr)) {
            let command2;
            if (tmp11[draftType] != null) {
              command2 = tmp14.command;
            }
            tmp19 = command2;
          }
          command = tmp19;
        }
        let draft1;
        if (tmp11[draftType] != null) {
          draft1 = tmp14.draft;
        }
        let isEqualResult = substr === draft1;
        if (isEqualResult) {
          let command3;
          const isEqual = _modDef12.isEqual;
          _modDef12;
          if (tmp11[draftType] != null) {
            command3 = tmp14.command;
          }
          isEqualResult = isEqual(command, command3);
        }
        if (!isEqualResult) {
          const _Date = Date;
          tmp11[draftType] = { timestamp: Date.now(), draft: substr, command };
          const obj4 = { timestamp: Date.now(), draft: substr, command };
        }
      }
      return "DRAFT_SAVE" === type;
    }
  }
  const id1 = AuthenticationStore.getId();
  if (null != id1) {
    let tmp6 = closure_9[id1];
    if (null == tmp6) {
      const obj5 = {};
      closure_9[id1] = obj5;
      tmp6 = obj5;
    }
    if (null != tmp6[channelId]) {
      delete tmp6[channelId][draftType];
      const obj6 = _modDef12;
      if (obj6.isEmpty(tmp6[channelId])) {
        delete tmp6[channelId];
      }
    }
  }
}
function deleteDraft(first1, ChannelMessage, arg2) {
  let id = arg2;
  if (arg2 === undefined) {
    id = AuthenticationStore.getId();
  }
  if (null == id) {
    return false;
  } else {
    let tmp4 = closure_9[id];
    if (null == tmp4) {
      const obj = {};
      closure_9[id] = obj;
      tmp4 = obj;
    }
    if (null == tmp4[first1]) {
      return false;
    } else {
      delete tmp4[first1][ChannelMessage];
      const obj2 = _modDef12;
      if (obj2.isEmpty(tmp4[first1])) {
        delete tmp4[tmp6];
      }
    }
  }
}
function handleChannelDelete(channel) {
  const id = channel.channel.id;
  const id1 = AuthenticationStore.getId();
  if (null != id1) {
    let tmp3 = closure_9[id1];
    if (null == tmp3) {
      const obj = {};
      closure_9[id1] = obj;
      tmp3 = obj;
    }
    delete tmp3[id];
  }
  return false;
}
let closure_7 = Constants.MAX_MESSAGE_LENGTH_PREMIUM + 500;
const DraftType = { ChannelMessage: 0, [0]: "ChannelMessage", ThreadSettings: 1, [1]: "ThreadSettings", FirstThreadMessage: 2, [2]: "FirstThreadMessage", ApplicationLauncherCommand: 3, [3]: "ApplicationLauncherCommand", Poll: 4, [4]: "Poll", SlashCommand: 5, [5]: "SlashCommand", ForwardContextMessage: 6, [6]: "ForwardContextMessage", InteractionModal: 7, [7]: "InteractionModal", ScheduledMessage: 8, [8]: "ScheduledMessage" };
const React4 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class DraftStore extends PersistedStore {
  initialize(arg0) {
    let ChannelMessage;
    function pruneEmptyDrafts() {
      let first;
      let tmp7;
      const obj = SnowflakeUtilsDefault;
      const entries = obj.entries(closure_1_9);
      const tmp2 = entries[Symbol.iterator]();
      while (tmp2 !== undefined) {
        [first, tmp7] = tmp3;
        let obj2 = SnowflakeUtilsDefault;
        let entries1 = obj2.entries(tmp7);
        for (const item10033 of entries1) {
          let tmp14 = _slicedToArray(item10033, 2);
          let first1 = tmp14[0];
          let tmp17 = tmp14[1][ChannelMessage.ChannelMessage];
          let tmp18 = tmp17;
          if (null != tmp17) {
            let tmp20 = "" !== tmp18.draft;
            if (tmp20) {
              let str = tmp18.draft;
              tmp20 = "" !== str.trim();
            }
            if (!tmp20) {
              let tmp25 = deleteDraft(first1, tmp16.ChannelMessage, first);
            }
          }
          continue;
        }
        continue;
      }
    }
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_9 = obj;
    pruneEmptyDrafts();
    this.waitFor(AuthenticationStore, ChannelStore, GuildAvailabilityStore);
  }
  getState() {
    return closure_9;
  }
  getThreadDraftWithParentMessageId(arg0) {
    const self = this;
    let closure_0 = arg0;
    const id = AuthenticationStore.getId();
    if (null != id) {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        const obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      const obj2 = SnowflakeUtilsDefault;
      const keys = obj2.keys(tmp3);
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
  }
  getRecentlyEditedDrafts(ChannelMessage) {
    let closure_0 = ChannelMessage;
    const id = AuthenticationStore.getId();
    if (null == id) {
      return [];
    } else {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        const obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      const obj2 = _modDef12(tmp3);
      const mapValuesResult = obj2.mapValues((arg0) => {
        let tmp;
        if (arg0 != null) {
          tmp = arg0[closure_0];
        }
        return tmp;
      });
      const pickByResult = mapValuesResult.pickBy(GlobalUtils.isNotNullish);
      const toPairsResult = pickByResult.toPairs();
      const mapped = toPairsResult.map((item) => {
        let tmp;
        [tmp, ] = item;
        return { channelId, timestamp, draft };
      });
      const iter = mapped.sortBy((timestamp) => -timestamp.timestamp);
      return iter.value();
    }
  }
  getDraft(arg0, arg1) {
    const id = AuthenticationStore.getId();
    if (null == id) {
      return "";
    } else {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        const obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      if (null != tmp3[arg0]) {
        if (null != tmp3[arg0][arg1]) {
          return tmp3[arg0][arg1].draft;
        }
      }
      return "";
    }
  }
  getDraftCommand(id, ChannelMessage) {
    id = AuthenticationStore.getId();
    if (null != id) {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        const obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      let command;
      if (tmp3[id] != null) {
        if (tmp3[id][ChannelMessage] != null) {
          command = tmp9.command;
        }
      }
      return command;
    }
  }
  getThreadSettings(id) {
    id = AuthenticationStore.getId();
    if (null == id) {
      return null;
    } else {
      let obj;
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      let tmp7 = null;
      if (null != tmp3[id]) {
        tmp7 = tmp6[obj.ThreadSettings];
      }
      return tmp7;
    }
  }
  getScheduledMessage(id) {
    id = AuthenticationStore.getId();
    if (null != id) {
      let obj;
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      let tmp7;
      if (tmp3[id] != null) {
        tmp7 = tmp6[obj.ScheduledMessage];
      }
      return tmp7;
    }
  }
}
const prototype = DraftStore.prototype;
DraftStore.displayName = "DraftStore";
DraftStore.persistKey = "DraftStore";
const items = [
  (obj) => {
    if (null == obj) {
      return {};
    } else {
      for (const key10005 in obj) {
        if (!("timestamp" in obj[key10005])) {
          continue;
        } else {
          obj = {};
          obj[obj.ChannelMessage] = obj[key10005];
          obj[key10005] = obj;
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
        const obj2 = {};
        obj[id] = obj2;
        for (const key10009 in obj) {
          obj2[key10009] = obj[key10009];
          continue;
        }
        return obj;
      }
    }
    return {};
  }
];
DraftStore.migrations = items;
let obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const id = AuthenticationStore.getId();
    if (!(id in closure_9)) {
      closure_9[id] = {};
    }
    const id1 = AuthenticationStore.getId();
    if (null != id1) {
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        let tmp6 = closure_9[id1];
        if (null == tmp6) {
          const obj2 = {};
          closure_9[id1] = obj2;
          tmp6 = obj2;
        }
        for (const key10019 in tmp6) {
          if (null != ChannelStore.getChannel(key10019)) {
            continue;
          } else {
            delete tmp6[key10019];
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
      delete closure_9[userId.userId];
    }
  },
  GUILD_DELETE: function handleGuildDelete() {
    const id = AuthenticationStore.getId();
    if (null != id) {
      if (GuildAvailabilityStore.totalUnavailableGuilds <= 0) {
        let tmp4 = closure_9[id];
        if (null == tmp4) {
          const obj = {};
          closure_9[id] = obj;
          tmp4 = obj;
        }
        for (const key10013 in tmp4) {
          if (null != ChannelStore.getChannel(key10013)) {
            continue;
          } else {
            delete tmp4[key10013];
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
    const id1 = AuthenticationStore.getId();
    if (null != id1) {
      if (channel.ownerId !== id1) {
        let tmp3 = closure_9[id1];
        if (null == tmp3) {
          const obj2 = {};
          closure_9[id1] = obj2;
          tmp3 = obj2;
        }
        if (null == tmp3[channel.parent_id]) {
          return false;
        } else if (null == tmp3[channel.parent_id][AuthenticationStore.ThreadSettings]) {
          return false;
        } else {
          const parentMessageId = tmp18.parentMessageId;
          const obj9 = SnowflakeUtilsDefault;
          if (parentMessageId !== obj9.castChannelIdAsMessageId(channel.id)) {
            return false;
          } else if (null == tmp3[channel.parent_id]) {
            return false;
          } else {
            let str;
            if (tmp3[channel.parent_id][AuthenticationStore.FirstThreadMessage] != null) {
              str = tmp22.draft;
            }
            if (str == null) {
              str = "";
            }
            if ("" !== str) {
              const obj3 = {};
              const _Date = Date;
              const id = channel.id;
              const ChannelMessage = AuthenticationStore.ChannelMessage;
              obj3[ChannelMessage] = { timestamp: Date.now(), draft: str };
              tmp3[id] = obj3;
              const obj4 = { timestamp: Date.now(), draft: str };
            }
            const parent_id = channel.parent_id;
            const ThreadSettings = AuthenticationStore.ThreadSettings;
            const id2 = AuthenticationStore.getId();
            if (null != id2) {
              let tmp8 = closure_9[id2];
              if (null == tmp8) {
                const obj5 = {};
                closure_9[id2] = obj5;
                tmp8 = obj5;
              }
              if (null != tmp8[parent_id]) {
                delete tmp8[parent_id][ThreadSettings];
                const tmp19Result = _modDef12;
                if (tmp19Result.isEmpty(tmp8[parent_id])) {
                  delete tmp8[parent_id];
                }
              }
            }
            const parent_id2 = channel.parent_id;
            const FirstThreadMessage = AuthenticationStore.FirstThreadMessage;
            const id3 = AuthenticationStore.getId();
            if (null != id3) {
              let tmp13 = closure_9[id3];
              if (null == tmp13) {
                const obj6 = {};
                closure_9[id3] = obj6;
                tmp13 = obj6;
              }
              if (null != tmp13[parent_id2]) {
                delete tmp13[parent_id2][FirstThreadMessage];
                const tmp19Result2 = _modDef12;
                if (tmp19Result2.isEmpty(tmp13[parent_id2])) {
                  delete tmp13[parent_id2];
                }
              }
            }
          }
        }
      }
    }
    return false;
  },
  DRAFT_SAVE: handleChanged,
  DRAFT_CHANGE: handleChanged,
  DRAFT_CLEAR: function handleDraftClear(channelId) {
    channelId = channelId.channelId;
    const draftType = channelId.draftType;
    const id = AuthenticationStore.getId();
    let flag = false;
    if (null != id) {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        const obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      flag = false;
      if (null != tmp3[channelId]) {
        delete tmp3[channelId][draftType];
        const obj2 = _modDef12;
        if (obj2.isEmpty(tmp3[channelId])) {
          delete tmp3[channelId];
        }
      }
    }
    return flag;
  },
  DRAFT_COMMAND_CLEAR: function handleDraftCommandClear(arg0) {
    let channelId;
    let draftType;
    ({ channelId, draftType } = arg0);
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        const obj = {};
        closure_9[id] = obj;
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
    let channelId;
    let draft;
    ({ channelId, draft } = arg0);
    const id = AuthenticationStore.getId();
    if (null != id) {
      let obj;
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      let tmp5 = tmp3[channelId];
      if (null == tmp5) {
        const obj2 = {};
        tmp3[channelId] = obj2;
        tmp5 = obj2;
      }
      const _Date = Date;
      const ThreadSettings = obj.ThreadSettings;
      const obj3 = { timestamp: Date.now(), parentChannelId: channelId };
      const merged = Object.assign(tmp5[obj.ThreadSettings]);
      const merged1 = Object.assign(draft);
      tmp5[ThreadSettings] = obj3;
    }
  },
  SCHEDULED_MESSAGE_DRAFT_CHANGE: function handleScheduledMessageDraftChanged(arg0) {
    let channelId;
    let draft;
    ({ channelId, draft } = arg0);
    const id = AuthenticationStore.getId();
    if (null != id) {
      let obj;
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      let tmp5 = tmp3[channelId];
      if (null == tmp5) {
        const obj2 = {};
        tmp3[channelId] = obj2;
        tmp5 = obj2;
      }
      const ScheduledMessage = obj.ScheduledMessage;
      const obj3 = { timestamp: Date.now() };
      const merged = Object.assign(tmp5[obj.ScheduledMessage]);
      const merged1 = Object.assign(draft);
      const _Date = Date;
      tmp5[ScheduledMessage] = obj3;
    }
  },
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(channelId) {
    let obj;
    channelId = channelId.channelId;
    const ScheduledMessage = obj.ScheduledMessage;
    const id = AuthenticationStore.getId();
    let flag = false;
    if (null != id) {
      let tmp3 = closure_9[id];
      if (null == tmp3) {
        obj = {};
        closure_9[id] = obj;
        tmp3 = obj;
      }
      flag = false;
      if (null != tmp3[channelId]) {
        delete tmp3[channelId][ScheduledMessage];
        const obj2 = _modDef12;
        if (obj2.isEmpty(tmp3[channelId])) {
          delete tmp3[channelId];
        }
      }
    }
    return flag;
  }
};
const draftStore = new DraftStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/DraftStore.tsx");

export default draftStore;
export { DraftType };