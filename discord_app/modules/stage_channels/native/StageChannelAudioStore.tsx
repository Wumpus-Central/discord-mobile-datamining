// === Module 16338: handleAudioRouteChanged ===

// Module 16338 (handleAudioRouteChanged)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import RouteTypes from "RouteTypes" /* 9649 */;
import apexExperimentDefault from "apexExperiment" /* 16339 */;
import closure_4 from "handleAudioRouteChanged" /* 9648 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createRTCConnection" /* 4539 */;

function handleAudioRouteChanged() {
  if (c8) {
    currentRouteType = currentRouteType.getCurrentRouteType();
    let flag2 = currentRouteType !== RouteTypes.RouteTypes.UNKNOWN;
    if (flag2) {
      if (currentRouteType !== tmp3(9649).RouteTypes.SPEAKER) {
        if (currentRouteType !== tmp3(9649).RouteTypes.BLUETOOTH) {
          if (currentRouteType !== tmp3(9649).RouteTypes.WIRED) {
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
const NativeModules = get_ActivityIndicator.NativeModules;
let c7 = null;
let c8 = false;
const Store = initializeDefault.Store;
class StageChannelAudioStore extends Store {
}
const prototype = StageChannelAudioStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5, closure_6);
  const items = [closure_4];
  this.syncWith(items, handleAudioRouteChanged);
};
prototype["getConnectedChannelId"] = function getConnectedChannelId() {
  return c7;
};
prototype["getQueueAudioSwap"] = function getQueueAudioSwap() {
  return c8;
};
StageChannelAudioStore.displayName = "StageChannelAudioStore";
const stageChannelAudioStore = new StageChannelAudioStore(dispatcherDefault, {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = closure_6.isConnected();
    const channelId = closure_6.getChannelId();
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
                defaultSpeakerForGuildCall = apexExperimentDefault.getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForGuildCall;
                const obj2 = apexExperimentDefault;
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                defaultSpeakerForDMCall = apexExperimentDefault.getConfig({ location: "StageChannelAudioStore" }).defaultSpeakerForDMCall;
                const obj3 = apexExperimentDefault;
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
const result = set.fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default stageChannelAudioStore;