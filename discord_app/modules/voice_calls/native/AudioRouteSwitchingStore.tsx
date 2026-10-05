// discord_app/modules/voice_calls/native/AudioRouteSwitchingStore.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import VoiceCallTypes from "../VoiceCallTypes.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import AudioRouteStore from "../AudioRouteStore.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function handleAudioRouteChanged() {
  const tmp = c7;
  if (tmp) {
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
const NativeModules = react_native.NativeModules;
let c6 = null;
let c7 = false;
const Store = get_initializedDefault.Store;
class AudioRouteSwitchingStore extends Store {
  initialize() {
    this.waitFor(AudioRouteStore, ChannelStore, RTCConnectionStore);
    const items = [AudioRouteStore];
    this.syncWith(items, handleAudioRouteChanged);
  }
  getConnectedChannelId() {
    return c6;
  }
  getQueueAudioSwap() {
    return c7;
  }
}
const prototype = AudioRouteSwitchingStore.prototype;
AudioRouteSwitchingStore.displayName = "AudioRouteSwitchingStore";
const obj = {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    let id;
    const isConnectedResult = RTCConnectionStore.isConnected();
    const channelId = RTCConnectionStore.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          const channel = ChannelStore.getChannel(channelId);
          let tmp10 = null == channel;
          if (!tmp10) {
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            tmp10 = !isGuildStageVoiceResult && !channel.isGuildVoice();
            !isGuildStageVoiceResult && !channel.isGuildVoice();
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
    let flag = !isConnectedResult && null == channelId && null != id;
    if (flag) {
      id = null;
      flag = true;
    }
    return flag;
  },
};
const audioRouteSwitchingStore = new AudioRouteSwitchingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/AudioRouteSwitchingStore.tsx");

export default audioRouteSwitchingStore;
