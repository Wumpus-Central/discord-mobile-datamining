// _runtime/14026_getReactNativeVersion.js
import getReactNativeVersionWithModules from "14027_getReactNativeVersionWithModules.js";
import closure_2 from "00017_get_ActivityIndicator.js";


export default function getReactNativeVersion() {
  return getReactNativeVersionWithModules.getReactNativeVersionWithModules(Platform.Platform.constants);
};