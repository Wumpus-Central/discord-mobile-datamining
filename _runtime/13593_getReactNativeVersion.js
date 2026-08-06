// _runtime/13593_getReactNativeVersion.js
import get_ActivityIndicator from "get ActivityIndicator";
import { getReactNativeVersionWithModules } from "13594_getReactNativeVersionWithModules.js";


export default function getReactNativeVersion() {
  return getReactNativeVersionWithModules.getReactNativeVersionWithModules(get_ActivityIndicator.Platform.constants);
};