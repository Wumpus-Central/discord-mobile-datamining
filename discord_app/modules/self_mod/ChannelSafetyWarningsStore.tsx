// === Module 9106: handleConnectionOpen ===

// Module 9106 (handleConnectionOpen)
import ensureGuildLoaded from "ensureGuildLoaded";
import { Store } from "initialize";
import set from "initialize";

function handleConnectionOpen() {
  let closure_4 = {};
  const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
  const item = values.forEach((safetyWarnings) => {
    safetyWarnings = safetyWarnings.safetyWarnings;
    if (null != safetyWarnings) {
      table[safetyWarnings.id] = safetyWarnings;
      if (safetyWarnings.some((type) => {
        let tmp2 = type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        if (tmp2) {
          tmp2 = null != type.dismiss_timestamp;
        }
        if (tmp2) {
          const _Date = Date;
          const date = new Date(type.dismiss_timestamp);
          const _Date2 = Date;
          const time = date.getTime();
          tmp2 = time <= Date.now() - closure_1;
        }
        return tmp2;
      })) {
        obj.add(safetyWarnings.id);
      } else {
        obj.delete(safetyWarnings.id);
      }
    }
    if (null == safetyWarnings) {
      if (null != table[safetyWarnings.id]) {
        const id = safetyWarnings.id;
        delete tmp2[tmp];
      }
      set.delete(safetyWarnings.id);
    }
  });
}
let closure_1 = 5 * require("set").Millis.SECOND;
let obj = { STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", INAPPROPRIATE_CONVERSATION_TIER_1: 2, [2]: "INAPPROPRIATE_CONVERSATION_TIER_1", INAPPROPRIATE_CONVERSATION_TIER_2: 3, [3]: "INAPPROPRIATE_CONVERSATION_TIER_2", LIKELY_ATO: 4, [4]: "LIKELY_ATO" };
let closure_3 = [];
let closure_4 = {};
let set = new Set();
class ChannelSafetyWarningsStore extends Store {
}
const prototype = ChannelSafetyWarningsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded);
};
prototype["getChannelSafetyWarning"] = function getChannelSafetyWarning(c0, c1) {
  let ensureGuildLoaded = c1;
  let found;
  if (dependencyMap[c0] != null) {
    found = arr.find((id) => id.id === ensureGuildLoaded);
  }
  return found;
};
prototype["getChannelSafetyWarnings"] = function getChannelSafetyWarnings(ensureGuildLoaded) {
  let tmp = dependencyMap[ensureGuildLoaded];
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
prototype["hasShownInitialTooltipForChannel"] = function hasShownInitialTooltipForChannel(ensureGuildLoaded) {
  return set.has(ensureGuildLoaded);
};
obj = {
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const safetyWarnings = channel.safetyWarnings;
    if (null != safetyWarnings) {
      dependencyMap[channel.id] = safetyWarnings;
      if (safetyWarnings.some((type) => {
        let tmp2 = type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        if (tmp2) {
          tmp2 = null != type.dismiss_timestamp;
        }
        if (tmp2) {
          const _Date = Date;
          const date = new Date(type.dismiss_timestamp);
          const _Date2 = Date;
          const time = date.getTime();
          tmp2 = time <= Date.now() - closure_1;
        }
        return tmp2;
      })) {
        obj.add(channel.id);
      } else {
        obj.delete(channel.id);
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
        table[safetyWarnings.id] = safetyWarnings;
        if (safetyWarnings.some((type) => {
          let tmp2 = type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
          if (tmp2) {
            tmp2 = null != type.dismiss_timestamp;
          }
          if (tmp2) {
            const _Date = Date;
            const date = new Date(type.dismiss_timestamp);
            const _Date2 = Date;
            const time = date.getTime();
            tmp2 = time <= Date.now() - closure_1;
          }
          return tmp2;
        })) {
          obj.add(safetyWarnings.id);
        } else {
          obj.delete(safetyWarnings.id);
        }
      }
      if (null == safetyWarnings) {
        if (null != table[safetyWarnings.id]) {
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
    let channelId;
    let ensureGuildLoaded;
    let closure_1;
    ({ channelId, warningId: ensureGuildLoaded, feedbackType: closure_1 } = arg0);
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((id) => {
        let tmp = id;
        if (id.id === ensureGuildLoaded) {
          const obj = {};
          const merged = Object.assign(id);
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
      dependencyMap[channelId] = arr.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.dismiss_timestamp = undefined;
        return obj;
      });
    }
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function handleDismissChannelSafetyWarnings(arg0) {
    let channelId;
    let ensureGuildLoaded;
    ({ channelId, warningIds: ensureGuildLoaded } = arg0);
    let closure_1;
    if (null != dependencyMap[channelId]) {
      const _Date = Date;
      const date = new Date();
      closure_1 = date.toISOString();
      dependencyMap[channelId] = arr.map((id) => {
        let tmp = id;
        if (ensureGuildLoaded.includes(id.id)) {
          const obj = {};
          const merged = Object.assign(id);
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
const channelSafetyWarningsStore = new ChannelSafetyWarningsStore(require("dispatcher"), obj);
const result = set.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsStore.tsx");

export default channelSafetyWarningsStore;
export const SafetyWarningTypes = obj;
export const SafetyWarningFeedbackTypes = { UPVOTE: 0, [0]: "UPVOTE", DOWNVOTE: 1, [1]: "DOWNVOTE" };