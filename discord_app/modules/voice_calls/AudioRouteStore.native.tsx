// === Module 9648: handleAudioRouteChanged ===

// Module 9648 (handleAudioRouteChanged)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import RouteTypes2 from "RouteTypes" /* 9649 */;
import enforcingDefault from "enforcing" /* 9650 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;

function handleAudioRouteChanged(arr) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != arr) {
    if ("" !== arr) {
      if (arr.includes("Bluetooth")) {
        UNKNOWN = RouteTypes2.RouteTypes.BLUETOOTH;
      } else if (arr.includes("Speaker")) {
        UNKNOWN = RouteTypes2.RouteTypes.SPEAKER;
      } else if (arr.includes("Receiver")) {
        UNKNOWN = RouteTypes2.RouteTypes.RECEIVER;
      } else {
        const hasItem = arr.includes("Headphones");
        const RouteTypes = RouteTypes2.RouteTypes;
        UNKNOWN = hasItem ? RouteTypes.WIRED : RouteTypes.UNKNOWN;
      }
    }
    closure_6 = tmp;
  }
  UNKNOWN = RouteTypes2.RouteTypes.UNKNOWN;
}
const NativeModules = get_ActivityIndicator.NativeModules;
let UNKNOWN = RouteTypes2.RouteTypes.UNKNOWN;
let c6 = false;
let c7 = null;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.AudioRouteEmitter);
const Store = initializeDefault.Store;
class AudioRouteStoreClass extends Store {
}
const prototype = AudioRouteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4);
};
prototype["getCurrentRouteType"] = function getCurrentRouteType() {
  return UNKNOWN;
};
prototype["getMultipleRoutesAvailable"] = function getMultipleRoutesAvailable() {
  return c6;
};
AudioRouteStoreClass.displayName = "AudioRouteStore";
const audioRouteStoreClass = new AudioRouteStoreClass(dispatcherDefault, {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = connected.isConnected();
    let tmp3 = null;
    if (null === _null) {
      if (isConnectedResult) {
        let _catch = dependencyMap;
        UNKNOWN = RouteTypes2.RouteTypes.UNKNOWN;
        let addListenerResult;
        if (nativeEventEmitter != tmp3) {
          addListenerResult = nativeEventEmitter.addListener("audio-route-changed", (routeType) => {
            callback(routeType.routeType, routeType.multipleRoutesAvailable);
            closure_10.emitChange();
          });
        }
        _null = addListenerResult;
        if (tmp11Result.isAndroid()) {
          const obj3 = enforcingDefault;
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
        tmp11Result = obj1322;
        const nextPromise = currentRoute1.then((result) => {
          callback(result.routeType, result.multipleRoutesAvailable);
        });
        _catch = currentRoute1.then((result) => {
          callback(result.routeType, result.multipleRoutesAvailable);
        }).then((result) => {
          let emitChangeResult;
          if (closure_10 != null) {
            emitChangeResult = closure_10.emitChange();
          }
          return emitChangeResult;
        }).catch;
        _catch(() => {

        });
        const nextPromise1 = currentRoute1.then((result) => {
          callback(result.routeType, result.multipleRoutesAvailable);
        }).then((result) => {
          let emitChangeResult;
          if (closure_10 != null) {
            emitChangeResult = closure_10.emitChange();
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
      UNKNOWN = RouteTypes2.RouteTypes.UNKNOWN;
      _null.remove();
      _null = tmp3;
    }
    return false;
  }
});
const result = obj132.fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default audioRouteStoreClass;