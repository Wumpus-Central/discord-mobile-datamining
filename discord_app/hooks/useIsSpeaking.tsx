// === Module 6846: useIsSpeaking ===

// Module 6846 (useIsSpeaking)
import SoundboardStore from "SoundboardStore" /* 6053 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SpeakingStore from "SpeakingStore" /* 6750 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default function useIsSpeaking(checkIsMuted) {
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
};
export function getIsSpeaking(checkIsMuted) {
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
}