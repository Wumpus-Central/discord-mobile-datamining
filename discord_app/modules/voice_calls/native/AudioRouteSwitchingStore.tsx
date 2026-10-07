// discord_app/modules/voice_calls/native/AudioRouteSwitchingStore.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import VoiceCallTypes from "../VoiceCallTypes.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import AudioRouteStore from "../AudioRouteStore.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function handleAudioRouteChanged() {
  if (c7) {
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
            c7 = false;
            flag2 = true;
          }
        }
      }
      c7 = false;
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
const NativeModules = _mod17.NativeModules;
let c6 = null;
let c7 = false;
const Store = initializeDefault.Store;
class AudioRouteSwitchingStore extends Store {}
const prototype = AudioRouteSwitchingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AudioRouteStore, ChannelStore, RTCConnectionStore);
  const items = [AudioRouteStore];
  this.syncWith(items, handleAudioRouteChanged);
};
prototype["getConnectedChannelId"] = function getConnectedChannelId() {
  return c6;
};
prototype["getQueueAudioSwap"] = function getQueueAudioSwap() {
  return c7;
};
AudioRouteSwitchingStore.displayName = "AudioRouteSwitchingStore";
const audioRouteSwitchingStore = new AudioRouteSwitchingStore(DispatcherDefault, {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = RTCConnectionStore.isConnected();
    const channelId = RTCConnectionStore.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          const channel = ChannelStore.getChannel(channelId);
          let tmp10 = null == channel;
          if (!tmp10) {
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            let tmp12 = !isGuildStageVoiceResult;
            if (!isGuildStageVoiceResult) {
              tmp12 = !channel.isGuildVoice();
            }
            tmp10 = tmp12;
          }
          if (!tmp10) {
            if (null != channel) {
              if (id !== channel.id) {
                c7 = true;
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
const result = size.fileFinishedImporting("modules/voice_calls/native/AudioRouteSwitchingStore.tsx");

export default audioRouteSwitchingStore;
