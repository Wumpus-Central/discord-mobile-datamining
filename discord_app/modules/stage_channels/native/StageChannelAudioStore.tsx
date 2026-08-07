// discord_app/modules/stage_channels/native/StageChannelAudioStore.tsx
import { NativeModules } from "get ActivityIndicator";
import handleAudioRouteChanged from "handleAudioRouteChanged";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { Store } from "initialize";
import { apexExperiment } from "../../voice_calls/DefaultAudioRouteExperiment.tsx";
import { RouteTypes } from "../../voice_calls/VoiceCallTypes.tsx";

function handleAudioRouteChanged() {
  if (c8) {
    currentRouteType = currentRouteType.getCurrentRouteType();
    let flag2 = currentRouteType !== RouteTypes.RouteTypes.UNKNOWN;
    if (flag2) {
      if (currentRouteType !== tmp3(9090).RouteTypes.SPEAKER) {
        if (currentRouteType !== tmp3(9090).RouteTypes.BLUETOOTH) {
          if (currentRouteType !== tmp3(9090).RouteTypes.WIRED) {
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
let c7 = null;
let c8 = false;
class StageChannelAudioStore extends Store {
}
const prototype = StageChannelAudioStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleAudioRouteChanged, ensureGuildLoaded, createRTCConnection);
  const items = [handleAudioRouteChanged];
  this.syncWith(items, handleAudioRouteChanged);
};
prototype["getConnectedChannelId"] = function getConnectedChannelId() {
  return c7;
};
prototype["getQueueAudioSwap"] = function getQueueAudioSwap() {
  return c8;
};
StageChannelAudioStore.displayName = "StageChannelAudioStore";
const stageChannelAudioStore = new StageChannelAudioStore(require("dispatcher"), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = createRTCConnection.isConnected();
    const channelId = createRTCConnection.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          channel = channel.getChannel(channelId);
          let tmp10 = null != channel;
          if (tmp10) {
            let isGuildStageVoiceResult = channel.isGuildStageVoice();
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForGuildCall = channel.isGuildVoice();
              if (defaultSpeakerForGuildCall) {
                defaultSpeakerForGuildCall = apexExperiment.getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForGuildCall;
                const obj2 = apexExperiment;
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                defaultSpeakerForDMCall = apexExperiment.getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForDMCall;
                const obj3 = apexExperiment;
              }
              isGuildStageVoiceResult = defaultSpeakerForDMCall;
            }
            tmp10 = isGuildStageVoiceResult;
          }
          if (tmp10) {
            if (null != channel) {
              if (id !== channel.id) {
                let c8 = true;
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
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default stageChannelAudioStore;