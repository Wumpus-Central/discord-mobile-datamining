// === Module 5784: AudioRouteStore ===

// Module 5784 (AudioRouteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import VoiceCallTypes from "VoiceCallTypes" /* 5785 */;
import NativeAudioRouteEmitterModuleDefault from "NativeAudioRouteEmitterModule" /* 5786 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import size from "module_2" /* 2 */;

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
({ NativeModules: c3, NativeEventEmitter } = get_ActivityIndicator);
let UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
let closure_6 = false;
let c7 = null;
const nativeEventEmitter = new NativeEventEmitter(NativeAudioRouteEmitterModuleDefault);
const Store = initializeDefault.Store;
class AudioRouteStoreClass extends Store {
}
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
    if (null === _null) {
      if (isConnectedResult) {
        UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
        let addListenerResult;
        if (nativeEventEmitter != null) {
          addListenerResult = nativeEventEmitter.addListener("audio-route-changed", (routeType) => {
            handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
            audioRouteStoreClass.emitChange();
          });
        }
        _null = addListenerResult;
        const currentRoute = NativeAudioRouteEmitterModuleDefault.getCurrentRoute();
        const nextPromise = currentRoute.then((routeType) => {
          handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        currentRoute.then((routeType) => {
          handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (audioRouteStoreClass != null) {
            emitChangeResult = audioRouteStoreClass.emitChange();
          }
          return emitChangeResult;
        }).catch(() => {

        });
        const nextPromise1 = currentRoute.then((routeType) => {
          handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (audioRouteStoreClass != null) {
            emitChangeResult = audioRouteStoreClass.emitChange();
          }
          return emitChangeResult;
        });
      }
      return false;
    }
    if (!tmp3) {
      AudioRoutePicker = AudioRoutePicker.AudioRoutePicker;
      if (AudioRoutePicker != null) {
        AudioRoutePicker.resetPortOverride();
      }
      UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
      _null.remove();
      _null = null;
    }
    tmp3 = null == _null || isConnectedResult;
  }
});
const result = size.fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default audioRouteStoreClass;