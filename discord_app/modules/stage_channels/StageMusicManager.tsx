// discord_app/modules/stage_channels/StageMusicManager.tsx
import sortKey from "StageChannelParticipants.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";
import importDefaultResult from "../../stores/MediaEngineStore.tsx";
import closure_4 from "../../stores/SelectedChannelStore.tsx";
import closure_5 from "../../stores/VoiceStateStore.tsx";
import closure_6 from "StageChannelParticipantStore.tsx";
import closure_7 from "StageInstanceStore.tsx";
import closure_8 from "StageMusicStore.tsx";
import createSoundForPack from "../sound_playback/SoundUtils.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useStageParticipants } from "StageChannelParticipantStoreHooks.tsx";

require = arg1;
function checkVoiceStates() {
  const voiceChannelId = store2.getVoiceChannelId();
  if (null == voiceChannelId) {
    closure_10.stop();
    c9 = false;
  } else {
    const channel = store.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      if (importDefaultResult.isSelfDeaf()) {
        closure_10.stop();
        c9 = false;
      } else {
        if (closure_8.shouldPlay()) {
          closure_10.volume = obj.getOutputVolume() / 400;
          closure_10.loop();
          c9 = true;
        } else if (closure_7.isLive(voiceChannelId)) {
          closure_10.stop();
          c9 = false;
        } else if (obj2.isMuted()) {
          closure_10.pause();
          c9 = false;
        } else {
          const _Object = Object;
          const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(voiceChannelId));
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
              closure_10.volume = obj.getOutputVolume() / 400;
              closure_10.loop();
              c9 = true;
            }
          }
          if (tmp8) {
            closure_10.pause();
            c9 = false;
          }
        }
        obj2 = closure_8;
      }
    } else {
      closure_10.stop();
      c9 = false;
    }
  }
}
let c3 = importDefaultResult;
let c9 = false;
let closure_10 = createSoundForPack.createSound(
  "stage_waiting",
  "stage_waiting",
  importDefaultResult.getOutputVolume() / 400,
);
initializeDefault;
class StageMusicManager extends tmp2 {
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
    const channel = store.getChannel(channelId);
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
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default stageMusicManager;
export const useShowStageMusicMuteButton = function useShowStageMusicMuteButton(channelId) {
  const _require = channelId;
  const items = [closure_4];
  let stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_4.getVoiceChannelId() === closure_0,
  );
  const obj = initialize;
  const stageParticipants = require("StageChannelParticipantStoreHooks.tsx").useStageParticipants(
    channelId,
    require("StageChannelParticipants.tsx").StageChannelParticipantNamedIndex.SPEAKER,
  );
  const obj2 = useStageParticipants;
  const tmp2 =
    null !=
    stageParticipants.find((voiceState) => {
      voiceState = voiceState.voiceState;
      return !voiceState.isVoiceMuted();
    });
  const items1 = [closure_7];
  if (stateFromStores) {
    stateFromStores = null == obj3.useStateFromStores(items1, () => closure_1_7.getStageInstanceByChannel(closure_0));
  }
  if (stateFromStores) {
    stateFromStores = !tmp2;
  }
  return stateFromStores;
};
export const shouldShowStageMusicMuteButton = function shouldShowStageMusicMuteButton(id) {
  let tmp = store2.getVoiceChannelId() === id;
  mutableParticipants = mutableParticipants.getMutableParticipants(
    id,
    sortKey.StageChannelParticipantNamedIndex.SPEAKER,
  );
  if (tmp) {
    tmp = null == closure_7.getStageInstanceByChannel(id);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
};
