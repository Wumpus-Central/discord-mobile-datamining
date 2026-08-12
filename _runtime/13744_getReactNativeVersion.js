// _runtime/13744_getReactNativeVersion.js
import get_ActivityIndicator from "get ActivityIndicator";
import { getReactNativeVersionWithModules } from "13745_getReactNativeVersionWithModules.js";


export default function getReactNativeVersion() {
  return getReactNativeVersionWithModules.getReactNativeVersionWithModules(get_ActivityIndicator.Platform.constants);
};