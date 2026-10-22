// === Module 6767: useIsSpeaking ===

// Module 6767 (useIsSpeaking)
import SoundboardStore from "SoundboardStore" /* 5993 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SpeakingStore from "SpeakingStore" /* 6671 */;
import VoiceStateStore from "VoiceStateStore" /* 5616 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSpeaking(userId) {
  const cResult = userId(context[5]).c(15);
  userId = userId.userId;
  ({ checkSoundSharing, checkIsMuted, context } = userId);
  closure_2 = tmp4;
  let tmp5 = undefined !== checkIsMuted && checkIsMuted;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, mute];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function c() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let voiceStateForChannel = null;
      if (null != voiceChannelId) {
        voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
      }
      return voiceStateForChannel;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj = userId(context[5]);
  const stateFromStores = userId(context[6]).useStateFromStores(first, tmp9);
  if (tmp5) {
    mute = undefined;
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
    tmp5 = mute;
  }
  mute = tmp5;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SpeakingStore];
    cResult[3] = items1;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === context) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === userId) {
        let tmp16 = cResult[7];
      }
      const stateFromStores1 = tmp(context[6]).useStateFromStores(tmp14, tmp16);
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SpeakingStore];
        cResult[8] = items2;
        let tmp18 = items2;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === userId) {
          let tmp20 = cResult[11];
        }
        const stateFromStores2 = tmp(context[6]).useStateFromStores(tmp18, tmp20);
        if (cResult[12] === stateFromStores2) {
          if (cResult[13] === stateFromStores1) {
            let tmp22 = cResult[14];
          }
          return tmp22;
        }
        let tmp23 = stateFromStores1;
        if (!stateFromStores1) {
          tmp23 = stateFromStores2;
        }
        class V {
          constructor() {
            tmp = closure_4.isSoundSharing(userId) && checkSoundSharing;
            return tmp;
          }
        }
        cResult[13] = stateFromStores1;
        cResult[14] = tmp23;
        tmp22 = tmp23;
        const tmpResult4 = tmp(context[6]);
      }
      class V {
        constructor() {
          tmp = closure_4.isSoundSharing(userId) && checkSoundSharing;
          return tmp;
        }
      }
      cResult[9] = tmp4;
      cResult[10] = userId;
      cResult[11] = V;
      tmp20 = V;
      const tmpResult3 = tmp(context[6]);
    }
  }
  const fn2 = function v() {
    let isSpeakingResult = SpeakingStore.isSpeaking(userId, context);
    if (isSpeakingResult) {
      isSpeakingResult = !mute;
    }
    return isSpeakingResult;
  };
  cResult[4] = context;
  cResult[5] = tmp5;
  cResult[6] = userId;
  cResult[7] = fn2;
  tmp16 = fn2;
  const tmpResult = userId(context[6]);
}) : (function useIsSpeaking(checkIsMuted) {
  ({ userId: require, checkSoundSharing } = checkIsMuted);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkIsMuted.checkIsMuted;
  if (flag === undefined) {
    flag = false;
  }
  const context = checkIsMuted.context;
  flag = undefined;
  const items = [VoiceStateStore, flag];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, require);
    }
    return voiceStateForChannel;
  });
  if (flag) {
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
    flag = mute;
  }
  const obj = require("initialize");
  const items1 = [SpeakingStore];
  let stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let isSpeakingResult = SpeakingStore.isSpeaking(require, context);
    if (isSpeakingResult) {
      isSpeakingResult = !flag;
    }
    return isSpeakingResult;
  });
  const tmpResult = require("initialize");
  const items2 = [SpeakingStore];
  if (!stateFromStores1) {
    stateFromStores1 = tmpResult2.useStateFromStores(items2, () => SpeakingStore.isSoundSharing(require) && checkSoundSharing);
  }
  return stateFromStores1;
});
export const getIsSpeaking = function getIsSpeaking(checkIsMuted) {
  ({ userId, checkSoundSharing } = checkIsMuted);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkIsMuted.checkIsMuted;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [VoiceStateStore, SelectedChannelStore, SpeakingStore, SoundboardStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const voiceChannelId = obj2.getVoiceChannelId();
  let voiceStateForChannel = null;
  if (null != voiceChannelId) {
    voiceStateForChannel = obj.getVoiceStateForChannel(voiceChannelId, userId);
  }
  if (flag) {
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
    flag = mute;
  }
  let tmp10 = obj3.isSpeaking(userId, checkIsMuted.context) && !flag;
  if (!tmp10) {
    tmp10 = tmp11;
  }
  return tmp10;
};