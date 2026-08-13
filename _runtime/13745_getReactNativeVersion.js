// _runtime/13745_getReactNativeVersion.js
import get_ActivityIndicator from "get ActivityIndicator";
import { getReactNativeVersionWithModules } from "13746_getReactNativeVersionWithModules.js";


export default function getReactNativeVersion() {
  return getReactNativeVersionWithModules.getReactNativeVersionWithModules(get_ActivityIndicator.Platform.constants);
};