import get_ActivityIndicator from "get ActivityIndicator";
import createRTCConnection from "createRTCConnection";
import { Store } from "initialize";

function handleAudioRouteChanged(arr) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = c6;
  }
  if (null != arr) {
    if ("" !== arr) {
      if (arr.includes("Bluetooth")) {
        let UNKNOWN = require(9019) /* RouteTypes */.RouteTypes.BLUETOOTH;
      } else if (arr.includes("Speaker")) {
        UNKNOWN = require(9019) /* RouteTypes */.RouteTypes.SPEAKER;
      } else if (arr.includes("Receiver")) {
        UNKNOWN = require(9019) /* RouteTypes */.RouteTypes.RECEIVER;
      } else {
        const hasItem = arr.includes("Headphones");
        const RouteTypes = require(9019) /* RouteTypes */.RouteTypes;
        UNKNOWN = hasItem ? RouteTypes.WIRED : RouteTypes.UNKNOWN;
      }
    }
    c6 = tmp;
  }
  UNKNOWN = require(9019) /* RouteTypes */.RouteTypes.UNKNOWN;
}
const NativeModules = get_ActivityIndicator.NativeModules;
let UNKNOWN = require("RouteTypes").RouteTypes.UNKNOWN;
let c6 = false;
let c7 = null;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.AudioRouteEmitter);
class AudioRouteStoreClass extends Store {
}
const prototype = AudioRouteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(createRTCConnection);
};
prototype["getCurrentRouteType"] = function getCurrentRouteType() {
  return UNKNOWN;
};
prototype["getMultipleRoutesAvailable"] = function getMultipleRoutesAvailable() {
  return c6;
};
AudioRouteStoreClass.displayName = "AudioRouteStore";
const audioRouteStoreClass = new AudioRouteStoreClass(require("dispatcher"), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = connected.isConnected();
    let tmp3 = null;
    if (null === _null) {
      if (isConnectedResult) {
        let _catch = dependencyMap;
        let UNKNOWN = require(9019) /* RouteTypes */.RouteTypes.UNKNOWN;
        let addListenerResult;
        if (nativeEventEmitter != tmp3) {
          addListenerResult = obj.addListener("audio-route-changed", (routeType) => {
            callback(routeType.routeType, routeType.multipleRoutesAvailable);
            closure_10.emitChange();
          });
        }
        _null = addListenerResult;
        if (tmp11Result.isAndroid()) {
          const obj3 = importDefault(9020);
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
        obj = nativeEventEmitter;
        const tmp11 = require;
        tmp11Result = require(500) /* set */;
        const nextPromise = currentRoute1.then((routeType) => {
          callback(routeType.routeType, routeType.multipleRoutesAvailable);
        });
        _catch = currentRoute1.then((routeType) => {
          callback(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
          let emitChangeResult;
          if (closure_10 != null) {
            emitChangeResult = closure_10.emitChange();
          }
          return emitChangeResult;
        }).catch;
        _catch(() => {

        });
        const nextPromise1 = currentRoute1.then((routeType) => {
          callback(routeType.routeType, routeType.multipleRoutesAvailable);
        }).then(() => {
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
      UNKNOWN = require(9019) /* RouteTypes */.RouteTypes.UNKNOWN;
      _null.remove();
      _null = tmp3;
    }
    return false;
  }
});
const result = require("RouteTypes").fileFinishedImporting("modules/voice_calls/AudioRouteStore.native.tsx");

export default audioRouteStoreClass;