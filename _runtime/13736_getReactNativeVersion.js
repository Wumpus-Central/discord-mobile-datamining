// _runtime/13736_getReactNativeVersion.js
import get_ActivityIndicator from "get ActivityIndicator";
import { getReactNativeVersionWithModules } from "13737_getReactNativeVersionWithModules.js";


export default function getReactNativeVersion() {
  return getReactNativeVersionWithModules.getReactNativeVersionWithModules(get_ActivityIndicator.Platform.constants);
};