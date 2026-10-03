// === Module 9018: useIsSpeaking ===

// Module 9018 (useIsSpeaking)
import SoundboardStore from "SoundboardStore" /* 5680 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(context[5]).c(20);
  userId = userId.userId;
  ({ checkSoundSharing, checkSoundboardSounds, checkIsMuted, context } = userId);
  closure_2 = undefined !== checkSoundSharing && checkSoundSharing;
  SelectedChannelStore = undefined === checkSoundboardSounds || checkSoundboardSounds;
  let tmp4 = undefined !== checkIsMuted && checkIsMuted;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, SelectedChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class S {
      constructor() {
        voiceChannelId = closure_3.getVoiceChannelId();
        voiceStateForChannel = null;
        if (null != voiceChannelId) {
          tmp3 = closure_5;
          tmp4 = userId;
          voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
        }
        return voiceStateForChannel;
      }
    }
    cResult[1] = userId;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        voiceChannelId = closure_3.getVoiceChannelId();
        voiceStateForChannel = null;
        if (null != voiceChannelId) {
          tmp3 = closure_5;
          tmp4 = userId;
          voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
        }
        return voiceStateForChannel;
      }
    }
  }
  const obj = userId(context[5]);
  const stateFromStores = userId(context[6]).useStateFromStores(first, S);
  if (tmp4) {
    class S {
      constructor() {
        voiceChannelId = closure_3.getVoiceChannelId();
        voiceStateForChannel = null;
        if (null != voiceChannelId) {
          tmp3 = closure_5;
          tmp4 = userId;
          voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
        }
        return voiceStateForChannel;
      }
    }
    let tmp10;
    if (stateFromStores != null) {
      class S {
        constructor() {
          voiceChannelId = closure_3.getVoiceChannelId();
          voiceStateForChannel = null;
          if (null != voiceChannelId) {
            tmp3 = closure_5;
            tmp4 = userId;
            voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
          }
          return voiceStateForChannel;
        }
      }
    }
    if (!tmp10) {
      class S {
        constructor() {
          voiceChannelId = closure_3.getVoiceChannelId();
          voiceStateForChannel = null;
          if (null != voiceChannelId) {
            tmp3 = closure_5;
            tmp4 = userId;
            voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
          }
          return voiceStateForChannel;
        }
      }
      if (stateFromStores != null) {
        class S {
          constructor() {
            voiceChannelId = closure_3.getVoiceChannelId();
            voiceStateForChannel = null;
            if (null != voiceChannelId) {
              tmp3 = closure_5;
              tmp4 = userId;
              voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
      }
      tmp10 = tmp11;
    }
    tmp4 = tmp10;
  }
  SpeakingStore = tmp4;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        voiceChannelId = closure_3.getVoiceChannelId();
        voiceStateForChannel = null;
        if (null != voiceChannelId) {
          tmp3 = closure_5;
          tmp4 = userId;
          voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
        }
        return voiceStateForChannel;
      }
    }
    const items1 = [SpeakingStore];
    cResult[3] = items1;
  } else {
    class S {
      constructor() {
        voiceChannelId = closure_3.getVoiceChannelId();
        voiceStateForChannel = null;
        if (null != voiceChannelId) {
          tmp3 = closure_5;
          tmp4 = userId;
          voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
        }
        return voiceStateForChannel;
      }
    }
  }
  if (cResult[4] === context) {
    class S {
      constructor() {
        voiceChannelId = closure_3.getVoiceChannelId();
        voiceStateForChannel = null;
        if (null != voiceChannelId) {
          tmp3 = closure_5;
          tmp4 = userId;
          voiceStateForChannel = closure_5.getVoiceStateForChannel(voiceChannelId, userId);
        }
        return voiceStateForChannel;
      }
    }
  }
  const fn = function y() {
    let isSpeakingResult = SpeakingStore.isSpeaking(userId, context);
    if (isSpeakingResult) {
      isSpeakingResult = !closure_4;
    }
    return isSpeakingResult;
  };
  cResult[4] = context;
  cResult[5] = tmp4;
  cResult[6] = userId;
  cResult[7] = fn;
  const tmpResult = userId(context[6]);
}) : ((checkSoundboardSounds) => {
  ({ userId: require, checkSoundSharing } = checkSoundboardSounds);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkSoundboardSounds.checkSoundboardSounds;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = checkSoundboardSounds.checkIsMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const context = checkSoundboardSounds.context;
  flag2 = undefined;
  const items = [VoiceStateStore, context];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, require);
    }
    return voiceStateForChannel;
  });
  if (flag2) {
    let mute;
    if (stateFromStores != null) {
      mute = stateFromStores.mute;
    }
    if (!mute) {
      let selfMute;
      if (stateFromStores != null) {
        selfMute = stateFromStores.selfMute;
      }
      mute = selfMute;
    }
    flag2 = mute;
  }
  const obj = require("initialize");
  const items1 = [flag2];
  let stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let isSpeakingResult = SpeakingStore.isSpeaking(require, context);
    if (isSpeakingResult) {
      isSpeakingResult = !flag2;
    }
    return isSpeakingResult;
  });
  const tmpResult = require("initialize");
  const items2 = [flag2];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => SpeakingStore.isSoundSharing(require) && checkSoundSharing);
  const tmpResult3 = require("initialize");
  const items3 = [flag];
  if (!stateFromStores1) {
    stateFromStores1 = tmpResult4.useStateFromStores(items3, () => SoundboardStore.isUserPlayingSounds(require) && flag);
  }
  if (!stateFromStores1) {
    stateFromStores1 = stateFromStores2;
  }
  return stateFromStores1;
});
export const getIsSpeaking = function getIsSpeaking(checkSoundboardSounds) {
  ({ userId, checkSoundSharing } = checkSoundboardSounds);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkSoundboardSounds.checkSoundboardSounds;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = checkSoundboardSounds.checkIsMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [VoiceStateStore, SelectedChannelStore, SpeakingStore, SoundboardStore];
    tmp = items;
  }
  [obj, obj2, obj3, obj4] = tmp;
  const voiceChannelId = obj2.getVoiceChannelId();
  let voiceStateForChannel = null;
  if (null != voiceChannelId) {
    voiceStateForChannel = obj.getVoiceStateForChannel(voiceChannelId, userId);
  }
  if (flag2) {
    let mute;
    if (voiceStateForChannel != null) {
      mute = voiceStateForChannel.mute;
    }
    if (!mute) {
      let selfMute;
      if (voiceStateForChannel != null) {
        selfMute = voiceStateForChannel.selfMute;
      }
      mute = selfMute;
    }
    flag2 = mute;
  }
  let tmp10 = obj3.isSpeaking(userId, checkSoundboardSounds.context) && !flag2;
  const tmp11 = obj3.isSoundSharing(userId) && checkSoundSharing;
  if (!tmp10) {
    tmp10 = tmp12;
  }
  if (!tmp10) {
    tmp10 = tmp11;
  }
  return tmp10;
};