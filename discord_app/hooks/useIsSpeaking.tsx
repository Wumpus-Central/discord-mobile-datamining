// discord_app/hooks/useIsSpeaking.tsx
import SoundboardStore from "../modules/soundboard/SoundboardStore.tsx";
import SelectedChannelStore_mod from "../stores/SelectedChannelStore.tsx";
import SpeakingStore_mod from "../stores/SpeakingStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let SelectedChannelStore = SelectedChannelStore_mod;
let SpeakingStore = SpeakingStore_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let checkIsMuted;
      let checkSoundSharing;
      let checkSoundboardSounds;
      let closure_3;
      let closure_4;
      let context;
      let first;
      let tmp = userId;
      const obj = userId(context[5]);
      const cResult = obj.c(20);
      userId = userId.userId;
      ({ checkSoundSharing, checkSoundboardSounds, checkIsMuted, context } = userId);
      let closure_2 = undefined !== checkSoundSharing && checkSoundSharing;
      SelectedChannelStore = undefined === checkSoundboardSounds || checkSoundboardSounds;
      let tmp4 = undefined !== checkIsMuted && checkIsMuted;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VoiceStateStore, SelectedChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        class S {
          constructor() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            let voiceStateForChannel = null;
            if (null != voiceChannelId) {
              voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
        cResult[1] = userId;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            let voiceStateForChannel = null;
            if (null != voiceChannelId) {
              voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
      }
      const tmpResult = tmp(context[6]);
      const stateFromStores = tmpResult.useStateFromStores(first, S);
      if (tmp4) {
        class S {
          constructor() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            let voiceStateForChannel = null;
            if (null != voiceChannelId) {
              voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
        let tmp10;
        if (stateFromStores != null) {
          class S {
            constructor() {
              const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
              let voiceStateForChannel = null;
              if (null != voiceChannelId) {
                voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
              }
              return voiceStateForChannel;
            }
          }
        }
        if (!tmp10) {
          class S {
            constructor() {
              const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
              let voiceStateForChannel = null;
              if (null != voiceChannelId) {
                voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
              }
              return voiceStateForChannel;
            }
          }
          if (stateFromStores != null) {
            class S {
              constructor() {
                const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
                let voiceStateForChannel = null;
                if (null != voiceChannelId) {
                  voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
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
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            let voiceStateForChannel = null;
            if (null != voiceChannelId) {
              voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
        const items1 = [SpeakingStore];
        cResult[3] = items1;
      } else {
        class S {
          constructor() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            let voiceStateForChannel = null;
            if (null != voiceChannelId) {
              voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
      }
      if (cResult[4] === context) {
        class S {
          constructor() {
            const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
            let voiceStateForChannel = null;
            if (null != voiceChannelId) {
              voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, userId);
            }
            return voiceStateForChannel;
          }
        }
      }
      const fn = function y() {
        const isSpeakingResult = SpeakingStore.isSpeaking(userId, context) && !SpeakingStore;
        return isSpeakingResult;
      };
      cResult[4] = context;
      cResult[5] = tmp4;
      cResult[6] = userId;
      cResult[7] = fn;
    }
  : (checkSoundboardSounds) => {
      let checkSoundSharing;
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
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
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
      const items1 = [flag2];
      const tmpResult = require("get initialized");
      let stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
        const isSpeakingResult = SpeakingStore.isSpeaking(require, context) && !flag2;
        return isSpeakingResult;
      });
      const items2 = [flag2];
      const tmpResult3 = require("get initialized");
      const stateFromStores2 = tmpResult3.useStateFromStores(items2, () => {
        const tmp = SpeakingStore.isSoundSharing(require) && checkSoundSharing;
        return tmp;
      });
      const items3 = [flag];
      const tmpResult4 = require("get initialized");
      if (!stateFromStores1) {
        stateFromStores1 = tmpResult4.useStateFromStores(items3, () => {
          const tmp = SoundboardStore.isUserPlayingSounds(require) && flag;
          return tmp;
        });
      }
      if (!stateFromStores1) {
        stateFromStores1 = stateFromStores2;
      }
      return stateFromStores1;
    };
const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default tmp2;
export const getIsSpeaking = function getIsSpeaking(checkSoundboardSounds) {
  let checkSoundSharing;
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let userId;
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
  const context = checkSoundboardSounds.context;
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
  let tmp10 = obj3.isSpeaking(userId, context) && !flag2;
  const tmp11 = obj3.isSoundSharing(userId) && checkSoundSharing;
  const tmp12 = obj4.isUserPlayingSounds(userId) && flag;
  if (!tmp10) {
    tmp10 = tmp12;
  }
  if (!tmp10) {
    tmp10 = tmp11;
  }
  return tmp10;
};
