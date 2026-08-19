// === Module 1370: isDiscordFrontendDevelopment ===

// Module 1370 (isDiscordFrontendDevelopment)
import set2 from "set" /* 2 */;

let closure_0 = "development" === window.GLOBAL_ENV.PROJECT_ENV;
const result = set2.fileFinishedImporting("utils/GlobalUtils.tsx");

export function isDiscordFrontendDevelopment() {
  return false;
}
export function isDiscordBackendDevelopment() {
  return closure_0;
}
export const assertNever = function assertNever(arg0) {
  error = new Error("Unhandled value: " + arg0);
  throw error;
};
export const isNotNullish = function isNotNullish(channel) {
  return null != channel;
};
export const isIn = function isIn(arg0, arr) {
  return arr.includes(arg0);
};
export const isInSet = function isInSet(type, set) {
  return set.has(type);
};
export const isObjectEntryNotNullish = function isObjectEntryNotNullish(arg0) {
  return null != arg0[1];
};