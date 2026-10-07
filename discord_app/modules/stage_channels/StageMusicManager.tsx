// discord_app/modules/stage_channels/StageMusicManager.tsx
import StageChannelParticipants from "StageChannelParticipants.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";
import StageInstanceStore from "StageInstanceStore.tsx";
import StageMusicStore from "StageMusicStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

const require = globalThis.__r;

require = fn;
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
            suppress = suppress.suppress;
            let tmp = !suppress;
            if (!suppress) {
              tmp = !suppress.isVoiceMuted();
            }
            return tmp;
          });
        if (!tmp8) {
          if (!c9) {
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
const SoundUtils = fn(9575);
let closure_10 = SoundUtils.createSound("stage_waiting", "stage_waiting", MediaEngineStore.getOutputVolume() / 400);
const ReactCompilerGating = fn(558);
class StageMusicManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
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
}
const prototype = StageMusicManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
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
};
prototype["handleLogout"] = function handleLogout() {
  closure_10.stop();
  c9 = false;
};
prototype["handlePlay"] = function handlePlay(play) {
  if (play.play) {
    checkVoiceStates();
  } else {
    closure_10.pause();
    c9 = false;
  }
};
prototype["handleMute"] = function handleMute(muted) {
  if (muted.muted) {
    closure_10.pause();
    c9 = false;
  } else {
    checkVoiceStates();
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates() {
  checkVoiceStates();
};
prototype["handleSetOutputVolume"] = function handleSetOutputVolume(volume) {
  closure_10.volume = volume.volume / 400;
};
prototype["handleToggleSelfDeaf"] = function handleToggleSelfDeaf() {
  checkVoiceStates();
};
const stageMusicManager = new StageMusicManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default stageMusicManager;
export const useShowStageMusicMuteButton = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return SelectedChannelStore.getVoiceChannelId() === closure_0;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmpResult = require("initialize");
      const stageParticipants = require("StageChannelParticipantStoreHooks").useStageParticipants(
        arg0,
        tmp(5589).StageChannelParticipantNamedIndex.SPEAKER,
      );
      if (cResult[3] !== stageParticipants) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
          cResult[5] = S;
        } else {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
        }
        const found = stageParticipants.find(S);
        cResult[3] = stageParticipants;
        cResult[4] = found;
      } else {
        class S {
          constructor(arg0) {
            voiceState = arg0.voiceState;
            return !voiceState.isVoiceMuted();
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
          const items1 = [StageInstanceStore];
          cResult[6] = items1;
        } else {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
        }
        if (cResult[7] !== arg0) {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
          cResult[7] = arg0;
          cResult[8] = tmp14;
        } else {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
        }
        tmp(504);
        if (stateFromStores) {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
        }
        if (stateFromStores) {
          class S {
            constructor(arg0) {
              voiceState = arg0.voiceState;
              return !voiceState.isVoiceMuted();
            }
          }
        }
        return stateFromStores;
      }
      const tmpResult3 = require("StageChannelParticipantStoreHooks");
    }
  : (arg0) => {
      _require = arg0;
      const items = [SelectedChannelStore];
      let stateFromStores = require("initialize").useStateFromStores(
        items,
        () => SelectedChannelStore.getVoiceChannelId() === closure_0,
      );
      const obj = require("initialize");
      const stageParticipants = require("StageChannelParticipantStoreHooks").useStageParticipants(
        arg0,
        require("StageChannelParticipants").StageChannelParticipantNamedIndex.SPEAKER,
      );
      const obj2 = require("StageChannelParticipantStoreHooks");
      const tmp2 =
        null !=
        stageParticipants.find((voiceState) => {
          voiceState = voiceState.voiceState;
          return !voiceState.isVoiceMuted();
        });
      const items1 = [StageInstanceStore];
      if (stateFromStores) {
        stateFromStores =
          null == obj3.useStateFromStores(items1, () => StageInstanceStore.getStageInstanceByChannel(closure_0));
      }
      if (stateFromStores) {
        stateFromStores = !tmp2;
      }
      return stateFromStores;
    };
export const shouldShowStageMusicMuteButton = function shouldShowStageMusicMuteButton(id) {
  let tmp = SelectedChannelStore.getVoiceChannelId() === id;
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  if (tmp) {
    tmp = null == StageInstanceStore.getStageInstanceByChannel(id);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
};
