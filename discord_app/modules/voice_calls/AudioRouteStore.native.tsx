// discord_app/modules/voice_calls/AudioRouteStore.native.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import VoiceCallTypes from "VoiceCallTypes.tsx";
import NativeAudioRouteEmitterModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeAudioRouteEmitterModule.tsx";
import get_ActivityIndicator from "../../../_runtime/metro/00017__.js";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleAudioRouteChanged(arr) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != arr) {
    if ("" !== arr) {
      if (arr.includes("Bluetooth")) {
        UNKNOWN = VoiceCallTypes.RouteTypes.BLUETOOTH;
      } else if (arr.includes("Speaker")) {
        UNKNOWN = VoiceCallTypes.RouteTypes.SPEAKER;
      } else if (arr.includes("Receiver")) {
        UNKNOWN = VoiceCallTypes.RouteTypes.RECEIVER;
      } else {
        const hasItem = arr.includes("Headphones");
        const RouteTypes = VoiceCallTypes.RouteTypes;
        UNKNOWN = hasItem ? RouteTypes.WIRED : RouteTypes.UNKNOWN;
      }
    }
    closure_6 = tmp;
  }
  UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
}
const NativeModules = get_ActivityIndicator.NativeModules;
let UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
let closure_6 = false;
let closure_7 = null;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.AudioRouteEmitter);
const Store = initializeDefault.Store;
class AudioRouteStoreClass extends Store {}
const prototype = AudioRouteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RTCConnectionStore);
};
prototype["getCurrentRouteType"] = function getCurrentRouteType() {
  return UNKNOWN;
};
prototype["getMultipleRoutesAvailable"] = function getMultipleRoutesAvailable() {
  return closure_6;
};
AudioRouteStoreClass.displayName = "AudioRouteStore";
const audioRouteStoreClass = new AudioRouteStoreClass(DispatcherDefault, {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = RTCConnectionStore.isConnected();
    let tmp3 = null;
    if (null === closure_7) {
      if (isConnectedResult) {
        let _catch = dependencyMap;
        UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
        let addListenerResult;
        if (nativeEventEmitter != tmp3) {
          addListenerResult = nativeEventEmitter.addListener("audio-route-changed", (routeType) => {
            handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
            audioRouteStoreClass.emitChange();
          });
        }
        closure_7 = addListenerResult;
        if (tmp11Result.isAndroid()) {
          const obj3 = NativeAudioRouteEmitterModuleDefault;
          tmp3 = obj3 == tmp3;
          let currentRoute;
          if (!tmp3) {
            currentRoute = obj3.getCurrentRoute();
          }
          let currentRoute1 = currentRoute;
        } else {
          const AudioRouteEmitter = NativeModules.AudioRouteEmitter;
          currentRoute1 = AudioRouteEmitter.getCurrentRoute();
        }
        tmp11Result = PlatformUtils;
        const nextPromise = currentRoute1.then((routeType) => {
          handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        _catch = currentRoute1
          .then((routeType) => {
            handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
          })
          .then(() => {
            let emitChangeResult;
            if (audioRouteStoreClass != null) {
              emitChangeResult = audioRouteStoreClass.emitChange();
            }
            return emitChangeResult;
          }).catch;
        _catch(() => {});
        const nextPromise1 = currentRoute1
          .then((routeType) => {
            handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
          })
          .then(() => {
            let emitChangeResult;
            if (audioRouteStoreClass != null) {
              emitChangeResult = audioRouteStoreClass.emitChange();
            }
            return emitChangeResult;
          });
      }
    }
    if (!tmp4) {
      const AudioRoutePicker = NativeModules.AudioRoutePicker;
      if (AudioRoutePicker != tmp3) {
        AudioRoutePicker.resetPortOverride();
      }
      UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
      closure_7.remove();
      closure_7 = tmp3;
    }
    return false;
  },
});
const result = size.fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default audioRouteStoreClass;
