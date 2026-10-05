// === Module 9300: AudioRouteStore ===

// Module 9300 (AudioRouteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import VoiceCallTypes from "VoiceCallTypes" /* 9301 */;
import react_nativeDefault from "react-native" /* 9302 */;
import react_native from "react-native" /* 17 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import size from "module_2" /* 2 */;

let _null;

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
const NativeModules = react_native.NativeModules;
const NativeEventEmitter = react_native.NativeEventEmitter;
let UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
let closure_6 = false;
let c7 = null;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.AudioRouteEmitter);
const Store = get_initializedDefault.Store;
class AudioRouteStoreClass extends Store {
  initialize() {
    this.waitFor(RTCConnectionStore);
  }
  getCurrentRouteType() {
    return UNKNOWN;
  }
  getMultipleRoutesAvailable() {
    return closure_6;
  }
}
const prototype = AudioRouteStoreClass.prototype;
AudioRouteStoreClass.displayName = "AudioRouteStore";
const obj = {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = RTCConnectionStore.isConnected();
    const tmp2 = _null;
    if (null === _null) {
      if (isConnectedResult) {
        let currentRoute1;
        UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
        let addListenerResult;
        if (nativeEventEmitter != null) {
          addListenerResult = nativeEventEmitter.addListener("audio-route-changed", (routeType) => {
            handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
            audioRouteStoreClass.emitChange();
          });
        }
        _null = addListenerResult;
        const tmp10Result = PlatformUtils;
        if (tmp10Result.isAndroid()) {
          const obj3 = react_nativeDefault;
          let currentRoute;
          if (obj3 != null) {
            currentRoute = obj3.getCurrentRoute();
          }
          currentRoute1 = currentRoute;
        } else {
          const AudioRouteEmitter = NativeModules.AudioRouteEmitter;
          currentRoute1 = AudioRouteEmitter.getCurrentRoute();
        }
        const nextPromise = currentRoute1.then((routeType) => {
          handleAudioRouteChanged(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        const nextPromise1 = nextPromise.then(() => {
          let emitChangeResult;
          if (audioRouteStoreClass != null) {
            emitChangeResult = audioRouteStoreClass.emitChange();
          }
          return emitChangeResult;
        });
        nextPromise1.catch(() => {

        });
      }
      return false;
    }
    const tmp3 = null == tmp2 || isConnectedResult;
    if (!tmp3) {
      const AudioRoutePicker = NativeModules.AudioRoutePicker;
      if (AudioRoutePicker != null) {
        AudioRoutePicker.resetPortOverride();
      }
      UNKNOWN = VoiceCallTypes.RouteTypes.UNKNOWN;
      _null.remove();
      _null = null;
    }
  }
};
const audioRouteStoreClass = new AudioRouteStoreClass(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default audioRouteStoreClass;