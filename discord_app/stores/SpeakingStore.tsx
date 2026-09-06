// === Module 5419: SpeakingStore ===

// Module 5419 (SpeakingStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import ProportionalVadIndicatorExperimentDefault from "ProportionalVadIndicatorExperiment" /* 5420 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

function anyoneHasFlagInContext(DEFAULT, VOICE, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  value = map.get(DEFAULT);
  if (null == value) {
    return false;
  } else {
    const obj = value[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2);
      let first = tmp7[0];
      let flags = tmp7[1].flags;
      if (!flag) {
        if ((flags & VOICE) === VOICE) {
          obj.return();
          let flag2 = true;
          return true;
        }
      }
      continue;
    }
    return false;
  }
}
function handleConnectionOpen(user) {
  id = user.user.id;
  sessionId = user.sessionId;
  c14 = null;
}
const Permissions = fn(1074).Permissions;
const Constants = fn(4585);
({ SpeakingFlags: closure_9, MediaEngineContextTypes: c10 } = Constants);
let map = new Map();
let id = null;
let sessionId = null;
let c14 = null;
let isActive = false;
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
  this.waitFor(ChannelStore, MediaEngineStore, RTCConnectionStore, SelectedChannelStore);
};
prototype["getSpeakingDuration"] = function getSpeakingDuration(id, timestamp) {
  let DEFAULT = arg2;
  if (arg2 === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  value = map.get(DEFAULT);
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
  value = map.get(DEFAULT);
  let keys;
  if (value != null) {
    keys = value.keys();
  }
  if (keys == null) {
    keys = [];
  }
  return Array.from(keys).filter((item) => {
    const VOICE = constants.VOICE;
    value = map.get(DEFAULT);
    let flags;
    if (value != null) {
      value = value.get(item);
      if (value != null) {
        flags = value.flags;
      }
    }
    if (flags == null) {
      flags = constants.NONE;
    }
    return (flags & VOICE) === VOICE;
  });
};
prototype["isSpeaking"] = function isSpeaking(id) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const VOICE = constants.VOICE;
  value = map.get(DEFAULT);
  let flags;
  if (value != null) {
    value = value.get(id);
    if (value != null) {
      flags = value.flags;
    }
  }
  if (flags == null) {
    flags = constants.NONE;
  }
  return (flags & VOICE) === VOICE;
};
prototype["isPrioritySpeaker"] = function isPrioritySpeaker(id) {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const PRIORITY = constants.PRIORITY;
  value = map.get(DEFAULT);
  let flags;
  if (value != null) {
    value = value.get(id);
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
  value = map.get(DEFAULT);
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
prototype["isAnyoneElseSpeaking"] = function isAnyoneElseSpeaking() {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  return anyoneHasFlagInContext(DEFAULT, constants.VOICE, true);
};
prototype["isCurrentUserSpeaking"] = function isCurrentUserSpeaking() {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let isSpeakingResult = null != id;
  if (isSpeakingResult) {
    const self = this;
    isSpeakingResult = this.isSpeaking(id, DEFAULT);
  }
  return isSpeakingResult;
};
prototype["isCurrentUserPTTActive"] = function isCurrentUserPTTActive() {
  return isActive;
};
prototype["isAnyonePrioritySpeaking"] = function isAnyonePrioritySpeaking() {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  return anyoneHasFlagInContext(DEFAULT, constants.VOICE | constants.PRIORITY);
};
prototype["isCurrentUserPrioritySpeaker"] = function isCurrentUserPrioritySpeaker() {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let isPrioritySpeakerResult = null != id;
  if (isPrioritySpeakerResult) {
    const self = this;
    isPrioritySpeakerResult = this.isPrioritySpeaker(id, DEFAULT);
  }
  return isPrioritySpeakerResult;
};
prototype["isCurrentUserPrioritySpeaking"] = function isCurrentUserPrioritySpeaking() {
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const self = this;
  let isPrioritySpeakerResult = null != id;
  if (isPrioritySpeakerResult) {
    isPrioritySpeakerResult = self.isPrioritySpeaker(id, DEFAULT);
  }
  if (isPrioritySpeakerResult) {
    isPrioritySpeakerResult = self.isSpeaking(id, DEFAULT);
  }
  return isPrioritySpeakerResult;
};
prototype["getVoiceVolume"] = function getVoiceVolume(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  const config = ProportionalVadIndicatorExperimentDefault.getConfig({ location: "SpeakingStore" });
  let num = -Infinity;
  if (config.enabled) {
    num = -Infinity;
    if (!config.disableUI) {
      value = map.get(DEFAULT);
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
const speakingStore = new SpeakingStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  SPEAKING: function handleSpeaking(arg0) {
    ({ context, userId, speakingFlags, voiceDb } = arg0);
    let num = speakingFlags;
    if ((speakingFlags & constants.PRIORITY) === constants.PRIORITY) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      if (null != channel) {
        let obj = { permission: Permissions.PRIORITY_SPEAKER, user: userId, context: channel };
        if (obj.can(obj)) {
          MediaEngineStore.setCanHavePriority(userId, true);
          num = speakingFlags;
        }
      }
      MediaEngineStore.setCanHavePriority(userId, false);
      num = speakingFlags & ~constants.PRIORITY;
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
    value = map.get(DEFAULT);
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
        if ((num2 & constants.VOICE) === constants.VOICE !== (num & constants.VOICE) === constants.VOICE) {
          let timestamp = null;
          if (tmp18) {
            const _Date = Date;
            timestamp = Date.now();
          }
          since = timestamp;
        }
        obj = { flags: num, since, voiceDb };
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
    return voiceStates.reduce((acc, item) => {
      ({ userId, channelId, sessionId } = item);
      let tmp2 = userId === id;
      if (tmp2) {
        tmp2 = sessionId === closure_1_13;
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
        flag = map.delete(constants.DEFAULT) || false;
        const tmp9 = map.delete(constants.DEFAULT) || false;
      }
      if (null == channelId) {
        if (userId !== id) {
          const DEFAULT2 = constants.DEFAULT;
          value = map.get(DEFAULT2);
          let flag3 = false;
          if (null != value) {
            const deleteResult = value.delete(userId);
            flag3 = deleteResult;
            if (0 === value.size) {
              map.delete(DEFAULT2);
              flag3 = deleteResult;
            }
          }
          if (!flag3) {
            flag3 = flag;
          }
        }
        flag3 = map.delete(constants.DEFAULT) || flag;
        const tmp27 = map.delete(constants.DEFAULT) || flag;
      } else {
        if (userId === id) {
          if (sessionId !== closure_1_13) {
            let tmp13 = map.delete(constants.DEFAULT) || flag;
            const tmp19 = map.delete(constants.DEFAULT) || flag;
          }
          if (!tmp13) {
            tmp13 = acc;
          }
          return tmp13;
        }
        let tmp11 = userId !== id;
        if (tmp11) {
          tmp11 = channelId !== channelId.getChannelId();
        }
        tmp13 = flag;
        if (tmp11) {
          const DEFAULT = constants.DEFAULT;
          value = map.get(DEFAULT);
          let flag2 = false;
          if (null != value) {
            const deleteResult2 = value.delete(userId);
            flag2 = deleteResult2;
            if (0 === value.size) {
              map.delete(DEFAULT);
              flag2 = deleteResult2;
            }
          }
          if (!flag2) {
            flag2 = flag;
          }
          tmp13 = flag2;
        }
      }
    }, false);
  },
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange(isActive) {
    isActive = isActive.isActive;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/SpeakingStore.tsx");

export default speakingStore;