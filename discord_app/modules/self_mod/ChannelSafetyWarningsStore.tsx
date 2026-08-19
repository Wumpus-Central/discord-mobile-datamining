// discord_app/modules/self_mod/ChannelSafetyWarningsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import obj132Default from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";

function handleConnectionOpen() {
  closure_4 = {};
  const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
  const item = values.forEach((item, index) => {
    const safetyWarnings = item.safetyWarnings;
    if (null != safetyWarnings) {
      table[item.id] = safetyWarnings;
      if (safetyWarnings.some((item, index) => {
        let tmp2 = item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || item.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        if (tmp2) {
          tmp2 = null != item.dismiss_timestamp;
        }
        if (tmp2) {
          const _Date = Date;
          const date = new Date(item.dismiss_timestamp);
          const _Date2 = Date;
          const time = date.getTime();
          tmp2 = time <= Date.now() - closure_1;
        }
        return tmp2;
      })) {
        set.add(item.id);
      } else {
        set.delete(item.id);
      }
    }
    if (null == safetyWarnings) {
      if (null != table[item.id]) {
        const id = item.id;
        delete tmp2[tmp];
      }
      set.delete(item.id);
    }
  });
}
let closure_1 = 5 * obj132Default.Millis.SECOND;
let obj = { STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", INAPPROPRIATE_CONVERSATION_TIER_1: 2, [2]: "INAPPROPRIATE_CONVERSATION_TIER_1", INAPPROPRIATE_CONVERSATION_TIER_2: 3, [3]: "INAPPROPRIATE_CONVERSATION_TIER_2", LIKELY_ATO: 4, [4]: "LIKELY_ATO" };
let closure_3 = [];
let closure_4 = {};
const set = new Set();
const Store = initializeDefault.Store;
class ChannelSafetyWarningsStore extends Store {
}
const prototype = ChannelSafetyWarningsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["getChannelSafetyWarning"] = function getChannelSafetyWarning(c0, c1) {
  closure_0 = c1;
  let found;
  if (dependencyMap[c0] != null) {
    found = arr.find((item, index) => item.id === closure_0);
  }
  return found;
};
prototype["getChannelSafetyWarnings"] = function getChannelSafetyWarnings(closure_0) {
  let tmp = dependencyMap[closure_0];
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
prototype["hasShownInitialTooltipForChannel"] = function hasShownInitialTooltipForChannel(closure_0) {
  return set.has(closure_0);
};
obj = {
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const safetyWarnings = channel.safetyWarnings;
    if (null != safetyWarnings) {
      dependencyMap[channel.id] = safetyWarnings;
      if (safetyWarnings.some((item, index) => {
        let tmp2 = item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || item.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        if (tmp2) {
          tmp2 = null != item.dismiss_timestamp;
        }
        if (tmp2) {
          const _Date = Date;
          const date = new Date(item.dismiss_timestamp);
          const _Date2 = Date;
          const time = date.getTime();
          tmp2 = time <= Date.now() - closure_1;
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
    const item = channels.forEach((item, index) => {
      const safetyWarnings = item.safetyWarnings;
      if (null != safetyWarnings) {
        table[item.id] = safetyWarnings;
        if (safetyWarnings.some((item, index) => {
          let tmp2 = item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || item.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
          if (tmp2) {
            tmp2 = null != item.dismiss_timestamp;
          }
          if (tmp2) {
            const _Date = Date;
            const date = new Date(item.dismiss_timestamp);
            const _Date2 = Date;
            const time = date.getTime();
            tmp2 = time <= Date.now() - closure_1;
          }
          return tmp2;
        })) {
          set.add(item.id);
        } else {
          set.delete(item.id);
        }
      }
      if (null == safetyWarnings) {
        if (null != table[item.id]) {
          const id = item.id;
          delete tmp2[tmp];
        }
        set.delete(item.id);
      }
    });
  },
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function handleChannelSafetyWarningFeedback(arg0) {
    ({ channelId, warningId: closure_0, feedbackType: closure_1 } = arg0);
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((item, index) => {
        let tmp = item;
        if (item.id === closure_0) {
          obj = {};
          const merged = Object.assign(item);
          obj.feedback_type = closure_1;
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
      dependencyMap[channelId] = arr.map((item, index) => {
        obj = {};
        const merged = Object.assign(item);
        obj.dismiss_timestamp = undefined;
        return obj;
      });
    }
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function handleDismissChannelSafetyWarnings(arg0) {
    ({ channelId, warningIds: closure_0 } = arg0);
    closure_1 = undefined;
    if (null != dependencyMap[channelId]) {
      const _Date = Date;
      const date = new Date();
      closure_1 = date.toISOString();
      dependencyMap[channelId] = arr.map((item, index) => {
        let tmp = item;
        if (closure_0.includes(item.id)) {
          obj = {};
          const merged = Object.assign(item);
          obj.dismiss_timestamp = closure_1;
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
const channelSafetyWarningsStore = new ChannelSafetyWarningsStore(dispatcherDefault, obj);
const result = require("obj132").fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsStore.tsx");

export default channelSafetyWarningsStore;
export const SafetyWarningTypes = obj;
export const SafetyWarningFeedbackTypes = { UPVOTE: 0, [0]: "UPVOTE", DOWNVOTE: 1, [1]: "DOWNVOTE" };