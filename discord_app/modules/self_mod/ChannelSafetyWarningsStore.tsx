// discord_app/modules/self_mod/ChannelSafetyWarningsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;

const f101655 = function (type) {
  let tmp2 =
    (type.type === closure_1_2.INAPPROPRIATE_CONVERSATION_TIER_1 ||
      type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2) &&
    null != type.dismiss_timestamp;
  if (tmp2) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const date = new Date(type.dismiss_timestamp);
    const time = date.getTime();
    tmp2 = time <= Date.now() - closure_1_1;
  }
  return tmp2;
};
function handleConnectionOpen() {
  closure_4 = {};
  const values = Object.values(ChannelStore.getMutablePrivateChannels());
  const item = values.forEach((safetyWarnings) => {
    safetyWarnings = safetyWarnings.safetyWarnings;
    if (null != safetyWarnings) {
      closure_1_4[safetyWarnings.id] = safetyWarnings;
      if (safetyWarnings.some(f101655)) {
        set.add(safetyWarnings.id);
      } else {
        set.delete(safetyWarnings.id);
      }
    }
    if (null == safetyWarnings) {
      if (null != closure_1_4[safetyWarnings.id]) {
        delete closure_1_4[safetyWarnings.id];
      }
      set.delete(safetyWarnings.id);
    }
  });
}
let closure_1 = 5 * DurationsDefault.Millis.SECOND;
const SafetyWarningTypes = {
  STRANGER_DANGER: 1,
  [1]: "STRANGER_DANGER",
  INAPPROPRIATE_CONVERSATION_TIER_1: 2,
  [2]: "INAPPROPRIATE_CONVERSATION_TIER_1",
  INAPPROPRIATE_CONVERSATION_TIER_2: 3,
  [3]: "INAPPROPRIATE_CONVERSATION_TIER_2",
  LIKELY_ATO: 4,
  [4]: "LIKELY_ATO",
};
let closure_3 = [];
const React3 = {};
const set = new Set();
const Store = get_initializedDefault.Store;
class ChannelSafetyWarningsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  getChannelSafetyWarning(channelId, warningId) {
    let closure_0 = warningId;
    let found;
    if (closure_4[channelId] != null) {
      found = arr.find((id) => id.id === closure_0);
    }
    return found;
  }
  getChannelSafetyWarnings(channelId) {
    let tmp = closure_4[channelId];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }
  hasShownInitialTooltipForChannel(arg0) {
    return set.has(arg0);
  }
}
const prototype = ChannelSafetyWarningsStore.prototype;
const obj2 = {
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const safetyWarnings = channel.safetyWarnings;
    if (null != safetyWarnings) {
      closure_4[channel.id] = safetyWarnings;
      if (safetyWarnings.some(f101655)) {
        set.add(channel.id);
      } else {
        set.delete(channel.id);
      }
    }
    if (null == safetyWarnings) {
      if (null != closure_4[channel.id]) {
        delete closure_4[channel.id];
      }
      set.delete(channel.id);
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != closure_4[channel.id]) {
      delete closure_4[channel.id];
    }
    set.delete(channel.id);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((safetyWarnings) => {
      safetyWarnings = safetyWarnings.safetyWarnings;
      if (null != safetyWarnings) {
        closure_1_4[safetyWarnings.id] = safetyWarnings;
        if (safetyWarnings.some(f101655)) {
          set.add(safetyWarnings.id);
        } else {
          set.delete(safetyWarnings.id);
        }
      }
      if (null == safetyWarnings) {
        if (null != closure_1_4[safetyWarnings.id]) {
          delete closure_1_4[safetyWarnings.id];
        }
        set.delete(safetyWarnings.id);
      }
    });
  },
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function handleChannelSafetyWarningFeedback(arg0) {
    let channelId;
    let closure_129_0;
    let closure_129_1;
    ({ channelId, warningId: closure_129_0, feedbackType: closure_129_1 } = arg0);
    if (null != closure_4[channelId]) {
      closure_4[channelId] = closure_4[channelId].map((id) => {
        let tmp = id;
        if (id.id === closure_1_0) {
          const obj = { feedback_type };
          const merged = Object.assign(id);
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function handleClearChannelSafetyWarnings(channelId) {
    channelId = channelId.channelId;
    set.delete(channelId);
    if (null != closure_4[channelId]) {
      closure_4[channelId] = closure_4[channelId].map((item) => {
        const obj = { dismiss_timestamp: undefined };
        const merged = Object.assign(item);
        return obj;
      });
    }
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function handleDismissChannelSafetyWarnings(arg0) {
    let channelId;
    let closure_129_0;
    ({ channelId, warningIds: closure_129_0 } = arg0);
    closure_1 = undefined;
    if (null != closure_4[channelId]) {
      let tmp = globalThis;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date();
      closure_1 = date.toISOString();
      closure_4[channelId] = closure_4[channelId].map((id) => {
        let tmp = id;
        if (closure_1_0.includes(id.id)) {
          const obj = { dismiss_timestamp };
          const merged = Object.assign(id);
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function handleAcknowledgeChannelSafetyWarningTooltip(channelId) {
    set.add(channelId.channelId);
  },
};
const channelSafetyWarningsStore = new ChannelSafetyWarningsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsStore.tsx");

export default channelSafetyWarningsStore;
export { SafetyWarningTypes };
export const SafetyWarningFeedbackTypes = { UPVOTE: 0, [0]: "UPVOTE", DOWNVOTE: 1, [1]: "DOWNVOTE" };
