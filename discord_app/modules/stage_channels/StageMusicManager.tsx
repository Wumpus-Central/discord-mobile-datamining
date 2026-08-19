// === Module 12508: checkVoiceStates ===

// Module 12508 (checkVoiceStates)
import initializeDefault from "initialize" /* 5038 */;
import sortKey from "sortKey" /* 6703 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import importDefaultResult from "_detectH265HardwareDecode" /* 4497 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import getActiveStageChannelIds from "getActiveStageChannelIds" /* 4989 */;
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import initialize from "initialize" /* 12506 */;
import createSoundForPack from "createSoundForPack" /* 10040 */;

require = fn;
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
      } else if (closure_8.shouldPlay()) {
        closure_10.volume = importDefaultResult.getOutputVolume() / 400;
        closure_10.loop();
        c9 = true;
      } else if (closure_7.isLive(voiceChannelId)) {
        closure_10.stop();
        c9 = false;
      } else if (closure_8.isMuted()) {
        closure_10.pause();
        c9 = false;
      } else {
        const _Object = Object;
        const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(voiceChannelId));
        const tmp8 = null != values.find((item, index) => {
          const suppress = item.suppress;
          let tmp = !suppress;
          if (!suppress) {
            tmp = !item.isVoiceMuted();
          }
          return tmp;
        });
        if (!tmp8) {
          if (!c9) {
            closure_10.volume = importDefaultResult.getOutputVolume() / 400;
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
let c3 = importDefaultResult;
let c9 = false;
let closure_10 = createSoundForPack.createSound("stage_waiting", "stage_waiting", importDefaultResult.getOutputVolume() / 400);
initializeDefault;
class StageMusicManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, LOGOUT: applyArgumentsResult.handleLogout, STAGE_MUSIC_MUTE: applyArgumentsResult.handleMute, STAGE_MUSIC_PLAY: applyArgumentsResult.handlePlay, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, AUDIO_SET_OUTPUT_VOLUME: applyArgumentsResult.handleSetOutputVolume, AUDIO_TOGGLE_SELF_DEAF: applyArgumentsResult.handleToggleSelfDeaf };
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
const result = require("obj132").fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default stageMusicManager;
export const useShowStageMusicMuteButton = function useShowStageMusicMuteButton(channelId) {
  const _require = channelId;
  const items = [closure_4];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_4.getVoiceChannelId() === closure_0);
  const obj = _require(589);
  const stageParticipants = _require(6708).useStageParticipants(channelId, _require(6703).StageChannelParticipantNamedIndex.SPEAKER);
  const obj2 = _require(6708);
  const tmp2 = null != stageParticipants.find((item, index) => {
    const voiceState = item.voiceState;
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
  mutableParticipants = mutableParticipants.getMutableParticipants(id, sortKey.StageChannelParticipantNamedIndex.SPEAKER);
  if (tmp) {
    tmp = null == closure_7.getStageInstanceByChannel(id);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
};