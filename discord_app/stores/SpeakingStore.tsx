// discord_app/stores/SpeakingStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import applyOverwritesAll from "../utils/PermissionUtils.tsx";
import getUnitIdDefault from "../modules/calls/ProportionalVadIndicatorExperiment.tsx";
import closure_3 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "ChannelStore.tsx";
import closure_5 from "MediaEngineStore.tsx";
import closure_6 from "RTCConnectionStore.tsx";
import closure_7 from "SelectedChannelStore.tsx";
import { Permissions } from "../Constants.tsx";
import DesktopSources from "../../discord_common/js/packages/media-engine/Constants.tsx";

function anyoneHasFlagInContext(DEFAULT, VOICE, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const value = map.get(DEFAULT);
  if (null == value) {
    return false;
  } else {
    const obj = value[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp6 = callback;
      let tmp7 = callback(tmp4, 2);
      let first = tmp7[0];
      let flags = tmp7[1].flags;
      if (!flag) {
        let tmp11 = flags;
        if ((flags & VOICE) === VOICE) {
          let tmp12 = obj;
          obj.return();
          let flag2 = true;
          return true;
        }
      } else {
        let tmp9 = first;
        let tmp10 = c12;
      }
      continue;
    }
    return false;
  }
}
function handleConnectionOpen(user) {
  const id = user.user.id;
  const sessionId = user.sessionId;
  c14 = null;
}
({ SpeakingFlags: c9, MediaEngineContextTypes: c10 } = DesktopSources);
let map = new Map();
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = false;
const Store = initializeDefault.Store;
class SpeakingStore extends Store {
}
const prototype = SpeakingStore.prototype;
prototype["initialize"] = function initialize() {
  this.mustEmitChanges((type) => {
    let tmp = "CONNECTION_OPEN" !== type.type;
    if (tmp) {
      tmp = "VOICE_STATE_UPDATES" !== type.type;
    }
    return tmp;
  });
  this.waitFor(closure_4, closure_5, closure_6, closure_7);
};
prototype["getSpeakingDuration"] = function getSpeakingDuration(id, timestamp) {
  let DEFAULT = arg2;
  if (arg2 === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let value = map.get(DEFAULT);
  let since;
  if (value != null) {
    value = value.get(id);
    if (value != null) {
      since = value.since;
    }
  }
  let num = 0;
  if (null != since) {
    num = timestamp - since;
  }
  return num;
};
prototype["getSpeakers"] = function getSpeakers() {
  let DEFAULT = arg0;
  if (arg0 === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let value = map.get(DEFAULT);
  let keys;
  if (value != null) {
    keys = value.keys();
  }
  if (keys == null) {
    keys = [];
  }
  return Array.from(keys).filter((arg0) => {
    const VOICE = closure_1_9.VOICE;
    let value = closure_1_11.get(DEFAULT);
    let flags;
    if (value != null) {
      value = value.get(arg0);
      if (value != null) {
        flags = value.flags;
      }
    }
    if (flags == null) {
      flags = closure_1_9.NONE;
    }
    return (flags & VOICE) === VOICE;
  });
};
prototype["isSpeaking"] = function isSpeaking(c12, DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const VOICE = constants.VOICE;
  let value = map.get(DEFAULT);
  let flags;
  if (value != null) {
    value = value.get(c12);
    if (value != null) {
      flags = value.flags;
    }
  }
  if (flags == null) {
    flags = constants.NONE;
  }
  return (flags & VOICE) === VOICE;
};
prototype["isPrioritySpeaker"] = function isPrioritySpeaker(c12, DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const PRIORITY = constants.PRIORITY;
  let value = map.get(DEFAULT);
  let flags;
  if (value != null) {
    value = value.get(c12);
    if (value != null) {
      flags = value.flags;
    }
  }
  if (flags == null) {
    flags = constants.NONE;
  }
  return (flags & PRIORITY) === PRIORITY;
};
prototype["isSoundSharing"] = function isSoundSharing(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const SOUNDSHARE = constants.SOUNDSHARE;
  let value = map.get(DEFAULT);
  let flags;
  if (value != null) {
    value = value.get(arg0);
    if (value != null) {
      flags = value.flags;
    }
  }
  if (flags == null) {
    flags = constants.NONE;
  }
  return (flags & SOUNDSHARE) === SOUNDSHARE;
};
prototype["isAnyoneElseSpeaking"] = function isAnyoneElseSpeaking(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  return anyoneHasFlagInContext(DEFAULT, constants.VOICE, true);
};
prototype["isCurrentUserSpeaking"] = function isCurrentUserSpeaking(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let isSpeakingResult = null != c12;
  if (isSpeakingResult) {
    const self = this;
    isSpeakingResult = this.isSpeaking(c12, DEFAULT);
  }
  return isSpeakingResult;
};
prototype["isCurrentUserPTTActive"] = function isCurrentUserPTTActive() {
  return c15;
};
prototype["isAnyonePrioritySpeaking"] = function isAnyonePrioritySpeaking(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  return anyoneHasFlagInContext(DEFAULT, constants.VOICE | constants.PRIORITY);
};
prototype["isCurrentUserPrioritySpeaker"] = function isCurrentUserPrioritySpeaker(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let isPrioritySpeakerResult = null != c12;
  if (isPrioritySpeakerResult) {
    const self = this;
    isPrioritySpeakerResult = this.isPrioritySpeaker(c12, DEFAULT);
  }
  return isPrioritySpeakerResult;
};
prototype["isCurrentUserPrioritySpeaking"] = function isCurrentUserPrioritySpeaking(DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const self = this;
  let isPrioritySpeakerResult = null != c12;
  if (isPrioritySpeakerResult) {
    isPrioritySpeakerResult = self.isPrioritySpeaker(c12, DEFAULT);
  }
  if (isPrioritySpeakerResult) {
    isPrioritySpeakerResult = self.isSpeaking(c12, DEFAULT);
  }
  return isPrioritySpeakerResult;
};
prototype["getVoiceVolume"] = function getVoiceVolume(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const config = getUnitIdDefault.getConfig({ location: "SpeakingStore" });
  let num = -Infinity;
  if (config.enabled) {
    num = -Infinity;
    if (!config.disableUI) {
      let value = map.get(DEFAULT);
      let num2;
      if (value != null) {
        value = value.get(arg0);
        if (value != null) {
          num2 = value.voiceDb;
        }
      }
      if (num2 == null) {
        num2 = -Infinity;
      }
      num = num2;
    }
  }
  return num;
};
SpeakingStore.displayName = "SpeakingStore";
const speakingStore = new SpeakingStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  SPEAKING: function handleSpeaking(arg0) {
    ({ context, userId, speakingFlags, voiceDb } = arg0);
    let num = speakingFlags;
    if ((speakingFlags & constants.PRIORITY) === constants.PRIORITY) {
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      if (null != channel) {
        let obj = applyOverwritesAll;
        obj = { permission: null, user: null, context: null };
        obj[0] = Permissions.PRIORITY_SPEAKER;
        obj[1] = userId;
        obj[2] = channel;
        if (obj.can(obj)) {
          store.setCanHavePriority(userId, true);
          num = speakingFlags;
        }
      }
      store.setCanHavePriority(userId, false);
      num = speakingFlags & ~tmp.PRIORITY;
    }
    if ((num & constants.HIDDEN) === constants.HIDDEN) {
      num = 0;
    }
    if (voiceDb === undefined) {
      voiceDb = -Infinity;
    }
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    let value = map.get(DEFAULT);
    if (null == value) {
      const _Map = Map;
      map = new Map();
      const result = obj3.set(DEFAULT, map);
      value = map;
    }
    value = value.get(userId);
    let num2;
    if (value != null) {
      num2 = value.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (0 !== num2) {
      if (0 === num) {
        value.delete(userId);
        let flag3 = true;
        if (0 === value.size) {
          obj3.delete(context);
          flag3 = true;
        }
      } else {
        let since;
        if (value != null) {
          since = value.since;
        }
        if (since == null) {
          since = null;
        }
        if ((num2 & tmp.VOICE) === tmp.VOICE !== (num & tmp.VOICE) === tmp.VOICE) {
          let timestamp = null;
          if (tmp18) {
            const _Date = Date;
            timestamp = Date.now();
          }
          since = timestamp;
        }
        obj = { flags: null, since: null, voiceDb: null };
        obj[0] = num;
        obj[1] = since;
        obj[2] = voiceDb;
        const result1 = value.set(userId, obj);
        flag3 = true;
      }
    } else {
      flag3 = false;
    }
    return flag3;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, arg1) => {
      ({ userId, channelId, sessionId } = arg1);
      let tmp2 = userId === closure_12;
      if (tmp2) {
        tmp2 = sessionId === closure_13;
      }
      let tmp4 = tmp;
      if (tmp2) {
        let tmp6 = channelId;
        if (channelId == null) {
          tmp6 = null;
        }
        c14 = tmp6;
        tmp4 = tmp6;
      }
      let flag = false;
      if (c14 !== tmp4) {
        flag = store.delete(constants.DEFAULT) || false;
        const tmp9 = store.delete(constants.DEFAULT) || false;
      }
      if (null == channelId) {
        if (userId !== closure_12) {
          const DEFAULT2 = constants.DEFAULT;
          let value = store.get(DEFAULT2);
          let flag3 = false;
          if (null != value) {
            const deleteResult = value.delete(userId);
            flag3 = deleteResult;
            if (0 === value.size) {
              obj3.delete(DEFAULT2);
              flag3 = deleteResult;
            }
          }
          if (!flag3) {
            flag3 = flag;
          }
          obj3 = store;
        }
        flag3 = store.delete(constants.DEFAULT) || flag;
        const tmp27 = store.delete(constants.DEFAULT) || flag;
      } else {
        if (userId === closure_12) {
          if (sessionId !== closure_13) {
            let tmp13 = store.delete(constants.DEFAULT) || flag;
            const tmp19 = store.delete(constants.DEFAULT) || flag;
          }
          if (!tmp13) {
            tmp13 = arg0;
          }
          return tmp13;
        }
        let tmp11 = userId !== closure_12;
        if (tmp11) {
          tmp11 = channelId !== channelId.getChannelId();
        }
        tmp13 = flag;
        if (tmp11) {
          const DEFAULT = constants.DEFAULT;
          value = store.get(DEFAULT);
          let flag2 = false;
          if (null != value) {
            const deleteResult2 = value.delete(userId);
            flag2 = deleteResult2;
            if (0 === value.size) {
              obj.delete(DEFAULT);
              flag2 = deleteResult2;
            }
          }
          if (!flag2) {
            flag2 = flag;
          }
          tmp13 = flag2;
          obj = store;
        }
        const tmp29 = closure_12;
      }
    }, false);
  },
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange(isActive) {
    isActive = isActive.isActive;
  }
});
let result = require("set").fileFinishedImporting("stores/SpeakingStore.tsx");

export default speakingStore;