// === Module 17120: StageChannelAudioStore ===

// Module 17120 (StageChannelAudioStore)
import _mod17 from "module_17" /* 17 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import VoiceCallTypes from "VoiceCallTypes" /* 9084 */;
import DefaultAudioRouteExperimentDefault from "DefaultAudioRouteExperiment" /* 17121 */;
import AudioRouteStore from "AudioRouteStore" /* 9083 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import size from "module_2" /* 2 */;

function handleAudioRouteChanged() {
  if (c8) {
    const currentRouteType = AudioRouteStore.getCurrentRouteType();
    let flag2 = currentRouteType !== VoiceCallTypes.RouteTypes.UNKNOWN;
    if (flag2) {
      if (currentRouteType !== VoiceCallTypes.RouteTypes.SPEAKER) {
        if (currentRouteType !== VoiceCallTypes.RouteTypes.BLUETOOTH) {
          if (currentRouteType !== VoiceCallTypes.RouteTypes.WIRED) {
            const AudioRoutePicker = NativeModules.AudioRoutePicker;
            if (AudioRoutePicker != null) {
              AudioRoutePicker.toggleSpeaker(true);
            }
            c8 = false;
            flag2 = true;
          }
        }
      }
      c8 = false;
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
const NativeModules = _mod17.NativeModules;
let c7 = null;
let c8 = false;
const Store = initializeDefault.Store;
class StageChannelAudioStore extends Store {
}
const prototype = StageChannelAudioStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AudioRouteStore, ChannelStore, RTCConnectionStore);
  const items = [AudioRouteStore];
  this.syncWith(items, handleAudioRouteChanged);
};
prototype["getConnectedChannelId"] = function getConnectedChannelId() {
  return c7;
};
prototype["getQueueAudioSwap"] = function getQueueAudioSwap() {
  return c8;
};
StageChannelAudioStore.displayName = "StageChannelAudioStore";
const stageChannelAudioStore = new StageChannelAudioStore(DispatcherDefault, {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = RTCConnectionStore.isConnected();
    const channelId = RTCConnectionStore.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          const channel = ChannelStore.getChannel(channelId);
          let tmp10 = null != channel;
          if (tmp10) {
            let isGuildStageVoiceResult = channel.isGuildStageVoice();
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForGuildCall = channel.isGuildVoice();
              if (defaultSpeakerForGuildCall) {
                defaultSpeakerForGuildCall = DefaultAudioRouteExperimentDefault.getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForGuildCall;
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                defaultSpeakerForDMCall = DefaultAudioRouteExperimentDefault.getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForDMCall;
              }
              isGuildStageVoiceResult = defaultSpeakerForDMCall;
            }
            tmp10 = isGuildStageVoiceResult;
          }
          if (tmp10) {
            if (null != channel) {
              if (id !== channel.id) {
                c8 = true;
              }
              id = channel.id;
            }
          } else {
            id = null;
          }
          return true;
        }
      }
    }
    let flag = !isConnectedResult;
    if (!isConnectedResult) {
      flag = null == channelId;
    }
    if (flag) {
      flag = null != id;
    }
    if (flag) {
      id = null;
      flag = true;
    }
    return flag;
  }
});
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default stageChannelAudioStore;