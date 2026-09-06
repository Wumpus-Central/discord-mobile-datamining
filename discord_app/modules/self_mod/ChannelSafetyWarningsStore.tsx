// === Module 10915: ChannelSafetyWarningsStore ===

// Module 10915 (ChannelSafetyWarningsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import ChannelStore from "ChannelStore" /* 1957 */;

function handleConnectionOpen() {
  closure_4 = {};
  const values = Object.values(ChannelStore.getMutablePrivateChannels());
  const item = values.forEach((safetyWarnings) => {
    safetyWarnings = safetyWarnings.safetyWarnings;
    if (null != safetyWarnings) {
      dependencyMap[safetyWarnings.id] = safetyWarnings;
      if (safetyWarnings.some((type) => {
        let tmp2 = type.type === closure_1_2.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        if (tmp2) {
          tmp2 = null != type.dismiss_timestamp;
        }
        if (tmp2) {
          const _Date = Date;
          const date = new Date(type.dismiss_timestamp);
          const _Date2 = Date;
          const time = date.getTime();
          tmp2 = time <= Date.now() - closure_1_1;
        }
        return tmp2;
      })) {
        set.add(safetyWarnings.id);
      } else {
        set.delete(safetyWarnings.id);
      }
    }
    if (null == safetyWarnings) {
      if (null != dependencyMap[safetyWarnings.id]) {
        const id = safetyWarnings.id;
        delete tmp2[tmp];
      }
      set.delete(safetyWarnings.id);
    }
  });
}
let closure_1 = 5 * DurationsDefault.Millis.SECOND;
let SafetyWarningTypes = { STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", INAPPROPRIATE_CONVERSATION_TIER_1: 2, [2]: "INAPPROPRIATE_CONVERSATION_TIER_1", INAPPROPRIATE_CONVERSATION_TIER_2: 3, [3]: "INAPPROPRIATE_CONVERSATION_TIER_2", LIKELY_ATO: 4, [4]: "LIKELY_ATO" };
let closure_3 = [];
const dependencyMap = {};
const set = new Set();
const Store = initializeDefault.Store;
class ChannelSafetyWarningsStore extends Store {
}
const prototype = ChannelSafetyWarningsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore);
};
prototype["getChannelSafetyWarning"] = function getChannelSafetyWarning(channelId, warningId) {
  closure_0 = warningId;
  let found;
  if (dependencyMap[channelId] != null) {
    found = arr.find((id) => id.id === closure_0);
  }
  return found;
};
prototype["getChannelSafetyWarnings"] = function getChannelSafetyWarnings(channelId) {
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
prototype["hasShownInitialTooltipForChannel"] = function hasShownInitialTooltipForChannel(arg0) {
  return set.has(arg0);
};
SafetyWarningTypes = {
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const safetyWarnings = channel.safetyWarnings;
    if (null != safetyWarnings) {
      dependencyMap[channel.id] = safetyWarnings;
      if (safetyWarnings.some((type) => {
        let tmp2 = type.type === closure_1_2.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        if (tmp2) {
          tmp2 = null != type.dismiss_timestamp;
        }
        if (tmp2) {
          const _Date = Date;
          const date = new Date(type.dismiss_timestamp);
          const _Date2 = Date;
          const time = date.getTime();
          tmp2 = time <= Date.now() - closure_1_1;
        }
        return tmp2;
      })) {
        set.add(channel.id);
      } else {
        set.delete(channel.id);
      }
    }
    if (null == safetyWarnings) {
      if (null != dependencyMap[channel.id]) {
        const id = channel.id;
        delete tmp2[tmp];
      }
      set.delete(channel.id);
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap[channel.id]) {
      const id = channel.id;
      delete tmp2[tmp];
    }
    set.delete(channel.id);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((safetyWarnings) => {
      safetyWarnings = safetyWarnings.safetyWarnings;
      if (null != safetyWarnings) {
        dependencyMap[safetyWarnings.id] = safetyWarnings;
        if (safetyWarnings.some((type) => {
          let tmp2 = type.type === closure_1_2.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
          if (tmp2) {
            tmp2 = null != type.dismiss_timestamp;
          }
          if (tmp2) {
            const _Date = Date;
            const date = new Date(type.dismiss_timestamp);
            const _Date2 = Date;
            const time = date.getTime();
            tmp2 = time <= Date.now() - closure_1_1;
          }
          return tmp2;
        })) {
          set.add(safetyWarnings.id);
        } else {
          set.delete(safetyWarnings.id);
        }
      }
      if (null == safetyWarnings) {
        if (null != dependencyMap[safetyWarnings.id]) {
          const id = safetyWarnings.id;
          delete tmp2[tmp];
        }
        set.delete(safetyWarnings.id);
      }
    });
  },
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function handleChannelSafetyWarningFeedback(arg0) {
    ({ channelId, warningId: ChannelStore, feedbackType: closure_1 } = arg0);
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((id) => {
        let tmp = id;
        if (id.id === ChannelStore) {
          const obj = {};
          const merged = Object.assign(id);
          obj.feedback_type = feedback_type;
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function handleClearChannelSafetyWarnings(channelId) {
    channelId = channelId.channelId;
    set.delete(channelId);
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((item) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.dismiss_timestamp = undefined;
        return obj;
      });
    }
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function handleDismissChannelSafetyWarnings(arg0) {
    ({ channelId, warningIds: ChannelStore } = arg0);
    let dismiss_timestamp;
    if (null != dependencyMap[channelId]) {
      const _Date = Date;
      const date = new Date();
      dismiss_timestamp = date.toISOString();
      dependencyMap[channelId] = arr.map((id) => {
        let tmp = id;
        if (ChannelStore.includes(id.id)) {
          const obj = {};
          const merged = Object.assign(id);
          obj.dismiss_timestamp = dismiss_timestamp;
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function handleAcknowledgeChannelSafetyWarningTooltip(channelId) {
    set.add(channelId.channelId);
  }
};
const channelSafetyWarningsStore = new ChannelSafetyWarningsStore(DispatcherDefault, SafetyWarningTypes);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsStore.tsx");

export default channelSafetyWarningsStore;
export { SafetyWarningTypes };
export const SafetyWarningFeedbackTypes = { UPVOTE: 0, [0]: "UPVOTE", DOWNVOTE: 1, [1]: "DOWNVOTE" };