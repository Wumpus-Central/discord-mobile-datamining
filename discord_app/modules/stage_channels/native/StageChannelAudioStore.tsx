// discord_app/modules/stage_channels/native/StageChannelAudioStore.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import VoiceCallTypes from "../../voice_calls/VoiceCallTypes.tsx";
import DefaultAudioRouteExperimentDefault from "../../voice_calls/DefaultAudioRouteExperiment.tsx";
import AudioRouteStore from "../../voice_calls/AudioRouteStore.native.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function handleAudioRouteChanged() {
  if (c8) {
    const currentRouteType = AudioRouteStore.getCurrentRouteType();
    let flag2 = currentRouteType !== VoiceCallTypes.RouteTypes.UNKNOWN;
    if (flag2) {
      if (currentRouteType !== tmp3(9084).RouteTypes.SPEAKER) {
        if (currentRouteType !== tmp3(9084).RouteTypes.BLUETOOTH) {
          if (currentRouteType !== tmp3(9084).RouteTypes.WIRED) {
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
class StageChannelAudioStore extends Store {}
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
                defaultSpeakerForGuildCall = DefaultAudioRouteExperimentDefault.getConfig({
                  location: "StageChannelAudioStore",
                }).defaultSpeakerForGuildCall;
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                defaultSpeakerForDMCall = DefaultAudioRouteExperimentDefault.getConfig({
                  location: "StageChannelAudioStore",
                }).defaultSpeakerForDMCall;
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
  },
});
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default stageChannelAudioStore;
