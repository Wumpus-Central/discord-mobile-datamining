// _runtime/13780_getReactNativeVersion.js
import getReactNativeVersionWithModules from "13781_getReactNativeVersionWithModules.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";


export default function getReactNativeVersion() {
  return getReactNativeVersionWithModules.getReactNativeVersionWithModules(get_ActivityIndicator.Platform.constants);
};