// discord_app/utils/GlobalUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";

let closure_0 = "development" === window.GLOBAL_ENV.PROJECT_ENV;
const result = obj132.fileFinishedImporting("utils/GlobalUtils.tsx");

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