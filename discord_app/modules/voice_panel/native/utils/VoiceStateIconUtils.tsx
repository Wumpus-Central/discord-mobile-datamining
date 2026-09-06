// discord_app/modules/voice_panel/native/utils/VoiceStateIconUtils.tsx
import discord_common_shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

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
let obj = {
  DEAFENED_SERVER: 0,
  [0]: "DEAFENED_SERVER",
  DEAFENED: 1,
  [1]: "DEAFENED",
  MUTED_SERVER: 2,
  [2]: "MUTED_SERVER",
  MUTED_LOCAL: 3,
  [3]: "MUTED_LOCAL",
  MUTED: 4,
  [4]: "MUTED",
};
obj = {
  VIDEO_DISABLED_LOCAL_AUTO: 0,
  [0]: "VIDEO_DISABLED_LOCAL_AUTO",
  VIDEO_DISABLED_LOCAL: 1,
  [1]: "VIDEO_DISABLED_LOCAL",
  VIDEO_ACTIVE: 2,
  [2]: "VIDEO_ACTIVE",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoiceStateIconUtils.tsx");

export const MuteDeafenIconState = obj;
export const VideoIconState = obj;
export const useStableVoiceParticipant = function useStableVoiceParticipant(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null != closure_0) {
        const voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
        if (null != voiceState) {
          obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: null, selfMute: null };
          ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
          obj.isLocalMute = MediaEngineStore.isLocalMute(voiceState.userId);
          obj.selfMute = voiceState.selfMute;
          return obj;
        }
      }
    },
    items1,
    isStableVoiceStateEqual,
  );
};
export const useMuteDeafenIconState = function useMuteDeafenIconState(id, guildId) {
  _require = id;
  closure_1 = guildId;
  obj = require("initialize");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [id, guildId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      if (null != closure_0) {
        const voiceState = VoiceStateStore.getVoiceState(closure_1, tmp);
        if (null != voiceState) {
          obj = { deaf: null, selfDeaf: null, mute: null, isLocalMute: null, selfMute: null };
          ({ deaf: obj.deaf, selfDeaf: obj.selfDeaf, mute: obj.mute } = voiceState);
          obj.isLocalMute = MediaEngineStore.isLocalMute(voiceState.userId);
          obj.selfMute = voiceState.selfMute;
          return obj;
        }
      }
    },
    items1,
    isStableVoiceStateEqual,
  );
  if (null == stateFromStores) {
    return null;
  } else if (stateFromStores.deaf) {
    let DEAFENED_SERVER = obj.DEAFENED_SERVER;
  } else if (stateFromStores.selfDeaf) {
    DEAFENED_SERVER = obj.DEAFENED;
  } else if (stateFromStores.mute) {
    DEAFENED_SERVER = obj.MUTED_SERVER;
  } else if (stateFromStores.isLocalMute) {
    DEAFENED_SERVER = obj.MUTED_LOCAL;
  } else {
    DEAFENED_SERVER = null;
    if (stateFromStores.selfMute) {
      DEAFENED_SERVER = obj.MUTED;
    }
  }
};
export const useStableVideoState = function useStableVideoState(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
      if (null != closure_0) {
        const voiceState = VoiceStateStore.getVoiceState(closure_1, closure_0);
      }
      if (null != closure_0) {
        if (null != voiceState) {
          obj = { selfVideo: voiceState.selfVideo, localVideoDisabledState: null };
          let tmp5 = null;
          if (MediaEngineStore.isLocalVideoDisabled(voiceState.userId)) {
            let str = "manual";
            if (obj.isLocalVideoAutoDisabled(voiceState.userId)) {
              str = "auto";
            }
            tmp5 = str;
          }
          obj.localVideoDisabledState = tmp5;
          return obj;
        }
      }
      return { selfVideo: false, localVideoDisabledState: null };
    },
    items1,
  );
};
export const useVideoIconState = function useVideoIconState(id, guildId) {
  _require = id;
  closure_1 = guildId;
  obj = require("initialize");
  const items = [MediaEngineStore, VoiceStateStore];
  const items1 = [guildId, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      if (null != closure_0) {
        const voiceState = VoiceStateStore.getVoiceState(closure_1, closure_0);
      }
      if (null != closure_0) {
        if (null != voiceState) {
          obj = { selfVideo: voiceState.selfVideo, localVideoDisabledState: null };
          let tmp5 = null;
          if (MediaEngineStore.isLocalVideoDisabled(voiceState.userId)) {
            let str = "manual";
            if (obj.isLocalVideoAutoDisabled(voiceState.userId)) {
              str = "auto";
            }
            tmp5 = str;
          }
          obj.localVideoDisabledState = tmp5;
          return obj;
        }
      }
      return { selfVideo: false, localVideoDisabledState: null };
    },
    items1,
  );
  let tmp2 = null;
  if (null != stateFromStoresObject) {
    if (!stateFromStoresObject.selfVideo) {
      tmp2 = null;
    } else if ("auto" === stateFromStoresObject.localVideoDisabledState) {
      let VIDEO_ACTIVE = obj.VIDEO_DISABLED_LOCAL_AUTO;
    } else if ("manual" === stateFromStoresObject.localVideoDisabledState) {
      VIDEO_ACTIVE = obj.VIDEO_DISABLED_LOCAL;
    } else {
      VIDEO_ACTIVE = obj.VIDEO_ACTIVE;
    }
  }
  return tmp2;
};
