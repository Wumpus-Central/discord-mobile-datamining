import { toArray } from "05372_toArray.js";
// _runtime/05408_enableExperimentalWebImplementation.js
import { Platform } from "get ActivityIndicator";

let c2 = true;

export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(toArray /* toArray */.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(toArray /* toArray */.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return c2;
}