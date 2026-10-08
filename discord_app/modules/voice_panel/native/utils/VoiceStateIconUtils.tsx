// === Module 8772: VoiceStateIconUtils ===

// Module 8772 (VoiceStateIconUtils)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;

const require = fn;
function isStableVoiceStateEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = discord_common_shallowEqualDefault(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const MuteDeafenIconState = { DEAFENED_SERVER: 0, [0]: "DEAFENED_SERVER", DEAFENED: 1, [1]: "DEAFENED", MUTED_SERVER: 2, [2]: "MUTED_SERVER", MUTED_LOCAL: 3, [3]: "MUTED_LOCAL", MUTED: 4, [4]: "MUTED" };
let obj2 = { VIDEO_DISABLED_LOCAL_AUTO: 0, [0]: "VIDEO_DISABLED_LOCAL_AUTO", VIDEO_DISABLED_LOCAL: 1, [1]: "VIDEO_DISABLED_LOCAL", VIDEO_ACTIVE: 2, [2]: "VIDEO_ACTIVE" };
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStableVoiceParticipant(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, VoiceStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7, tmp8, isStableVoiceStateEqual);
  }
  const fn = function s() {
    if (null != closure_0) {
      const voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
      if (null != voiceState) {
        const obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: null, selfMute: null };
        ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
        obj.isLocalMute = MediaEngineStore.isLocalMute(voiceState.userId);
        obj.selfMute = voiceState.selfMute;
        return obj;
      }
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useStableVoiceParticipant(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
      if (null != voiceState) {
        const obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: null, selfMute: null };
        ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
        obj.isLocalMute = MediaEngineStore.isLocalMute(voiceState.userId);
        obj.selfMute = voiceState.selfMute;
        return obj;
      }
    }
  }, items1, isStableVoiceStateEqual);
});
let closure_8 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStableVideoState(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, VoiceStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return tmp(504).useStateFromStoresObject(first, tmp7, tmp8);
  }
  const fn = function s() {
    if (null != closure_0) {
      const voiceState = VoiceStateStore.getVoiceState(closure_1, closure_0);
    }
    if (null != closure_0) {
      if (null != voiceState) {
        obj2 = { selfVideo: voiceState.selfVideo, localVideoDisabledState: null };
        let tmp5 = null;
        if (MediaEngineStore.isLocalVideoDisabled(voiceState.userId)) {
          let str = "manual";
          if (MediaEngineStore.isLocalVideoAutoDisabled(voiceState.userId)) {
            str = "auto";
          }
          tmp5 = str;
        }
        obj2.localVideoDisabledState = tmp5;
        return obj2;
      }
    }
    return { selfVideo: false, localVideoDisabledState: null };
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useStableVideoState(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    if (null != closure_0) {
      const voiceState = VoiceStateStore.getVoiceState(closure_1, closure_0);
    }
    if (null != closure_0) {
      if (null != voiceState) {
        obj2 = { selfVideo: voiceState.selfVideo, localVideoDisabledState: null };
        let tmp5 = null;
        if (MediaEngineStore.isLocalVideoDisabled(voiceState.userId)) {
          let str = "manual";
          if (MediaEngineStore.isLocalVideoAutoDisabled(voiceState.userId)) {
            str = "auto";
          }
          tmp5 = str;
        }
        obj2.localVideoDisabledState = tmp5;
        return obj2;
      }
    }
    return { selfVideo: false, localVideoDisabledState: null };
  }, items1);
});
let closure_9 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMuteDeafenIconState(arg0, arg1) {
  const tmp = closure_8(arg0, arg1);
  if (null == tmp) {
    return null;
  } else if (tmp.deaf) {
    let DEAFENED_SERVER = obj.DEAFENED_SERVER;
  } else if (tmp.selfDeaf) {
    DEAFENED_SERVER = obj.DEAFENED;
  } else if (tmp.mute) {
    DEAFENED_SERVER = obj.MUTED_SERVER;
  } else if (tmp.isLocalMute) {
    DEAFENED_SERVER = obj.MUTED_LOCAL;
  } else {
    DEAFENED_SERVER = null;
    if (tmp.selfMute) {
      DEAFENED_SERVER = obj.MUTED;
    }
  }
}) : (function useMuteDeafenIconState(arg0, arg1) {
  const tmp = closure_8(arg0, arg1);
  if (null == tmp) {
    return null;
  } else if (tmp.deaf) {
    let DEAFENED_SERVER = obj.DEAFENED_SERVER;
  } else if (tmp.selfDeaf) {
    DEAFENED_SERVER = obj.DEAFENED;
  } else if (tmp.mute) {
    DEAFENED_SERVER = obj.MUTED_SERVER;
  } else if (tmp.isLocalMute) {
    DEAFENED_SERVER = obj.MUTED_LOCAL;
  } else {
    DEAFENED_SERVER = null;
    if (tmp.selfMute) {
      DEAFENED_SERVER = obj.MUTED;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

export { MuteDeafenIconState };
export const VideoIconState = obj2;
export const useStableVoiceParticipant = tmp2;
export const useMuteDeafenIconState = tmp3;
export const useStableVideoState = tmp4;
export const useVideoIconState = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoIconState(arg0, arg1) {
  const tmp = closure_9(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    if (!tmp.selfVideo) {
      tmp2 = null;
    } else if ("auto" === tmp.localVideoDisabledState) {
      let VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL_AUTO;
    } else if ("manual" === tmp.localVideoDisabledState) {
      VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL;
    } else {
      VIDEO_ACTIVE = obj2.VIDEO_ACTIVE;
    }
  }
  return tmp2;
}) : (function useVideoIconState(arg0, arg1) {
  const tmp = closure_9(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    if (!tmp.selfVideo) {
      tmp2 = null;
    } else if ("auto" === tmp.localVideoDisabledState) {
      let VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL_AUTO;
    } else if ("manual" === tmp.localVideoDisabledState) {
      VIDEO_ACTIVE = obj2.VIDEO_DISABLED_LOCAL;
    } else {
      VIDEO_ACTIVE = obj2.VIDEO_ACTIVE;
    }
  }
  return tmp2;
});