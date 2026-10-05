// discord_app/modules/stage_channels/StageMusicManager.tsx
import StageChannelParticipants from "StageChannelParticipants.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";
import StageInstanceStore from "StageInstanceStore.tsx";
import StageMusicStore from "StageMusicStore.tsx";
import SoundUtils from "../sound_playback/SoundUtils.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function checkVoiceStates() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (null == voiceChannelId) {
    closure_10.stop();
    c9 = false;
  } else {
    const channel = ChannelStore.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      if (MediaEngineStore.isSelfDeaf()) {
        closure_10.stop();
        c9 = false;
      } else if (StageMusicStore.shouldPlay()) {
        closure_10.volume = MediaEngineStore.getOutputVolume() / 400;
        closure_10.loop();
        c9 = true;
      } else if (StageInstanceStore.isLive(voiceChannelId)) {
        closure_10.stop();
        c9 = false;
      } else if (StageMusicStore.isMuted()) {
        closure_10.pause();
        c9 = false;
      } else {
        const _Object = Object;
        const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(voiceChannelId));
        const tmp8 =
          null !=
          values.find((suppress) => {
            const tmp = !suppress.suppress && !suppress.isVoiceMuted();
            return tmp;
          });
        if (!tmp8) {
          const tmp9 = c9;
          if (!tmp9) {
            closure_10.volume = MediaEngineStore.getOutputVolume() / 400;
            closure_10.loop();
            c9 = true;
          }
        }
        if (tmp8) {
          closure_10.pause();
          c9 = false;
        }
      }
    } else {
      closure_10.stop();
      c9 = false;
    }
  }
}
let c9 = false;
const authStore = SoundUtils.createSound("stage_waiting", "stage_waiting", MediaEngineStore.getOutputVolume() / 400);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return SelectedChannelStore.getVoiceChannelId() === closure_0;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult3 = require("StageChannelParticipantStoreHooks");
      const stageParticipants = tmpResult3.useStageParticipants(
        arg0,
        tmp(5582).StageChannelParticipantNamedIndex.SPEAKER,
      );
      if (cResult[3] !== stageParticipants) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(voiceState) {
              voiceState = voiceState.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
          cResult[5] = S;
        } else {
          class S {
            constructor(voiceState) {
              voiceState = voiceState.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
        }
        const found = stageParticipants.find(S);
        cResult[3] = stageParticipants;
        cResult[4] = found;
      } else {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
        const items1 = [StageInstanceStore];
        cResult[6] = items1;
      } else {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
      }
      if (cResult[7] !== arg0) {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
        cResult[7] = arg0;
        cResult[8] = tmp13;
      } else {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
      }
      require("get initialized");
      if (stateFromStores) {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
      }
      if (stateFromStores) {
        class S {
          constructor(voiceState) {
            voiceState = voiceState.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
      }
      return stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [SelectedChannelStore];
      const obj = require("get initialized");
      let stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === closure_0);
      const obj2 = require("StageChannelParticipantStoreHooks");
      const stageParticipants = obj2.useStageParticipants(
        arg0,
        require("StageChannelParticipants").StageChannelParticipantNamedIndex.SPEAKER,
      );
      const items1 = [StageInstanceStore];
      const tmp2 =
        null !=
        stageParticipants.find((voiceState) => {
          voiceState = voiceState.voiceState;
          return !voiceState.isVoiceMuted();
        });
      const obj3 = require("get initialized");
      if (stateFromStores) {
        stateFromStores =
          null == obj3.useStateFromStores(items1, () => StageInstanceStore.getStageInstanceByChannel(closure_0));
      }
      if (stateFromStores) {
        stateFromStores = !tmp2;
      }
      return stateFromStores;
    };
class StageMusicManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect,
      LOGOUT: applyArgumentsResult.handleLogout,
      STAGE_MUSIC_MUTE: applyArgumentsResult.handleMute,
      STAGE_MUSIC_PLAY: applyArgumentsResult.handlePlay,
      VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates,
      AUDIO_SET_OUTPUT_VOLUME: applyArgumentsResult.handleSetOutputVolume,
      AUDIO_TOGGLE_SELF_DEAF: applyArgumentsResult.handleToggleSelfDeaf,
    };
    return applyArgumentsResult;
  }
  handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        checkVoiceStates();
      } else {
        closure_10.stop();
        c9 = false;
      }
    } else {
      closure_10.stop();
      c9 = false;
    }
  }
  handleLogout() {
    closure_10.stop();
    c9 = false;
  }
  handlePlay(play) {
    if (play.play) {
      checkVoiceStates();
    } else {
      closure_10.pause();
      c9 = false;
    }
  }
  handleMute(muted) {
    if (muted.muted) {
      closure_10.pause();
      c9 = false;
    } else {
      checkVoiceStates();
    }
  }
  handleVoiceStateUpdates() {
    checkVoiceStates();
  }
  handleSetOutputVolume(volume) {
    closure_10.volume = volume.volume / 400;
  }
  handleToggleSelfDeaf() {
    checkVoiceStates();
  }
}
const prototype = StageMusicManager.prototype;
const stageMusicManager = new StageMusicManager();
const result = size.fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default stageMusicManager;
export const useShowStageMusicMuteButton = tmp2;
export const shouldShowStageMusicMuteButton = function shouldShowStageMusicMuteButton(id) {
  let tmp = SelectedChannelStore.getVoiceChannelId() === id;
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  const tmp2 =
    null !=
    mutableParticipants.find((voiceState) => {
      voiceState = voiceState.voiceState;
      return !voiceState.isVoiceMuted();
    });
  if (tmp) {
    tmp = null == StageInstanceStore.getStageInstanceByChannel(id);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
};
