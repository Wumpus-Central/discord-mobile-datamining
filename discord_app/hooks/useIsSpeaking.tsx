// discord_app/hooks/useIsSpeaking.tsx
import SoundboardStore from "../modules/soundboard/SoundboardStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../stores/SpeakingStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default function useIsSpeaking(checkSoundboardSounds) {
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
  let tmpResult = tmp(tmp2[4]);
  const items1 = [flag2];
  let stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let isSpeakingResult = SpeakingStore.isSpeaking(require, context);
    if (isSpeakingResult) {
      isSpeakingResult = !flag2;
    }
    return isSpeakingResult;
  });
  tmpResult = tmp(tmp2[4]);
  const items2 = [flag2];
  const stateFromStores2 = tmpResult.useStateFromStores(
    items2,
    () => SpeakingStore.isSoundSharing(require) && checkSoundSharing,
  );
  const obj = require("initialize");
  const items3 = [flag];
  if (!stateFromStores1) {
    stateFromStores1 = tmpResult1.useStateFromStores(
      items3,
      () => SoundboardStore.isUserPlayingSounds(require) && flag,
    );
  }
  if (!stateFromStores1) {
    stateFromStores1 = stateFromStores2;
  }
  return stateFromStores1;
}
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
