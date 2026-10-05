// discord_app/stores/SpeakingStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants2 from "../Constants.tsx";
import PermissionUtilsAll from "../utils/PermissionUtils.tsx";
import ProportionalVadIndicatorExperimentDefault from "../modules/calls/ProportionalVadIndicatorExperiment.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "ChannelStore.tsx";
import MediaEngineStore from "MediaEngineStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import Constants from "../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c10;
let c9;
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
const Permissions = Constants2.Permissions;
({ SpeakingFlags: c9, MediaEngineContextTypes: c10 } = Constants);
let map = new Map();
let id = null;
let sessionId = null;
let c14 = null;
let isActive = false;
const Store = get_initializedDefault.Store;
class SpeakingStore extends Store {
  initialize() {
    this.mustEmitChanges((type) => "CONNECTION_OPEN" !== type.type && "VOICE_STATE_UPDATES" !== type.type);
    this.waitFor(ChannelStore, MediaEngineStore, RTCConnectionStore, SelectedChannelStore);
  }
  getSpeakingDuration(id, timestamp) {
    let DEFAULT = arg2;
    if (arg2 === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const value = map.get(DEFAULT);
    let since;
    if (value != null) {
      const value2 = value.get(id);
      if (value2 != null) {
        since = value2.since;
      }
    }
    let num = 0;
    if (null != since) {
      num = timestamp - since;
    }
    return num;
  }
  getSpeakers() {
    let DEFAULT = arg0;
    if (arg0 === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const _Array = Array;
    let value = map.get(DEFAULT);
    let keys;
    if (value != null) {
      keys = value.keys();
    }
    if (keys == null) {
      keys = [];
    }
    const fromResult = from(keys);
    return fromResult.filter((item) => {
      const VOICE = constants.VOICE;
      const value = map.get(DEFAULT);
      let flags;
      if (value != null) {
        const value2 = value.get(item);
        if (value2 != null) {
          flags = value2.flags;
        }
      }
      if (flags == null) {
        flags = constants.NONE;
      }
      return (flags & VOICE) === VOICE;
    });
  }
  isSpeaking(id) {
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const VOICE = constants.VOICE;
    const value = map.get(DEFAULT);
    let flags;
    if (value != null) {
      const value2 = value.get(id);
      if (value2 != null) {
        flags = value2.flags;
      }
    }
    if (flags == null) {
      flags = constants.NONE;
    }
    return (flags & VOICE) === VOICE;
  }
  isPrioritySpeaker(id) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const PRIORITY = constants.PRIORITY;
    const value = map.get(DEFAULT);
    let flags;
    if (value != null) {
      const value2 = value.get(id);
      if (value2 != null) {
        flags = value2.flags;
      }
    }
    if (flags == null) {
      flags = constants.NONE;
    }
    return (flags & PRIORITY) === PRIORITY;
  }
  isSoundSharing(arg0) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const SOUNDSHARE = constants.SOUNDSHARE;
    const value = map.get(DEFAULT);
    let flags;
    if (value != null) {
      const value2 = value.get(arg0);
      if (value2 != null) {
        flags = value2.flags;
      }
    }
    if (flags == null) {
      flags = constants.NONE;
    }
    return (flags & SOUNDSHARE) === SOUNDSHARE;
  }
  isAnyoneElseSpeaking() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    return anyoneHasFlagInContext(DEFAULT, constants.VOICE, true);
  }
  isCurrentUserSpeaking() {
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    let isSpeakingResult = null != id;
    if (isSpeakingResult) {
      const self = this;
      isSpeakingResult = this.isSpeaking(id, DEFAULT);
    }
    return isSpeakingResult;
  }
  isCurrentUserPTTActive() {
    return isActive;
  }
  isAnyonePrioritySpeaking() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    return anyoneHasFlagInContext(DEFAULT, constants.VOICE | constants.PRIORITY);
  }
  isCurrentUserPrioritySpeaker() {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    let isPrioritySpeakerResult = null != id;
    if (isPrioritySpeakerResult) {
      const self = this;
      isPrioritySpeakerResult = this.isPrioritySpeaker(id, DEFAULT);
    }
    return isPrioritySpeakerResult;
  }
  isCurrentUserPrioritySpeaking() {
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const self = this;
    const isPrioritySpeakerResult = null != id && self.isPrioritySpeaker(id, DEFAULT) && self.isSpeaking(id, DEFAULT);
    return isPrioritySpeakerResult;
  }
  getVoiceVolume(arg0) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = constants2.DEFAULT;
    }
    const obj = ProportionalVadIndicatorExperimentDefault;
    const config = obj.getConfig({ location: "SpeakingStore" });
    let num = -Infinity;
    if (config.enabled) {
      num = -Infinity;
      if (!config.disableUI) {
        const value = map.get(DEFAULT);
        let num2;
        if (value != null) {
          const value2 = value.get(arg0);
          if (value2 != null) {
            num2 = value2.voiceDb;
          }
        }
        if (num2 == null) {
          num2 = -Infinity;
        }
        num = num2;
      }
    }
    return num;
  }
}
const prototype = SpeakingStore.prototype;
SpeakingStore.displayName = "SpeakingStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  SPEAKING: function handleSpeaking(arg0) {
    let context;
    let flag3;
    let speakingFlags;
    let userId;
    let voiceDb;
    ({ context, userId, speakingFlags, voiceDb } = arg0);
    let num = speakingFlags;
    if ((speakingFlags & constants.PRIORITY) === constants.PRIORITY) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      if (null != channel) {
        const obj2 = { permission: Permissions.PRIORITY_SPEAKER, user: userId, context: channel };
        const obj = PermissionUtilsAll;
        if (obj.can(obj2)) {
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
    let value = map.get(DEFAULT);
    if (null == value) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const result = obj3.set(DEFAULT, map);
      value = map;
    }
    const value2 = value.get(userId);
    let num2;
    if (value2 != null) {
      num2 = value2.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (0 !== num2) {
      if (0 === num) {
        value.delete(userId);
        flag3 = true;
        if (0 === value.size) {
          map.delete(context);
          flag3 = true;
        }
      } else {
        let since;
        if (value2 != null) {
          since = value2.since;
        }
        if (since == null) {
          since = null;
        }
        if ((((num2 & constants.VOICE) === constants.VOICE) !== (num & constants.VOICE)) === constants.VOICE) {
          let timestamp = null;
          if ((num & constants.VOICE) === constants.VOICE) {
            const _Date = Date;
            timestamp = Date.now();
          }
          since = timestamp;
        }
        const obj4 = { flags: num, since, voiceDb };
        const result1 = value.set(userId, obj4);
        flag3 = true;
      }
    } else {
      flag3 = false;
    }
    return flag3;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let channelId;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, item) => {
      let tmp13;
      let userId;
      ({ userId, channelId, sessionId } = item);
      let tmp4 = tmp;
      const tmp2 = userId === id && sessionId === closure_1_13;
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
        map.delete(constants.DEFAULT) || false;
      }
      if (null == channelId) {
        let flag3;
        if (userId === id) {
          if (sessionId === closure_1_13) {
            flag3 = map.delete(constants.DEFAULT) || flag;
            map.delete(constants.DEFAULT) || flag;
          }
          tmp13 = flag3;
        }
        const DEFAULT2 = constants.DEFAULT;
        const value = map.get(DEFAULT2);
        flag3 = false;
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
      } else {
        if (userId === id) {
          if (sessionId !== closure_1_13) {
            tmp13 = map.delete(constants.DEFAULT) || flag;
            map.delete(constants.DEFAULT) || flag;
          }
        }
        tmp13 = flag;
        const tmp11 = userId !== id && channelId !== channelId.getChannelId();
        if (tmp11) {
          const DEFAULT = constants.DEFAULT;
          const value2 = map.get(DEFAULT);
          let flag2 = false;
          if (null != value2) {
            const deleteResult2 = value2.delete(userId);
            flag2 = deleteResult2;
            if (0 === value2.size) {
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
      if (!tmp13) {
        tmp13 = acc;
      }
      return tmp13;
    }, false);
  },
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange(isActive) {
    isActive = isActive.isActive;
  },
};
const speakingStore = new SpeakingStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/SpeakingStore.tsx");

export default speakingStore;
