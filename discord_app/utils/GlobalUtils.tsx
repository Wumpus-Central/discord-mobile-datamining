// discord_app/utils/GlobalUtils.tsx
import size from "../../_runtime/metro/00002__.js";

let closure_0 = "development" === window.GLOBAL_ENV.PROJECT_ENV;
const result = size.fileFinishedImporting("utils/GlobalUtils.tsx");

export function isDiscordFrontendDevelopment() {
  return false;
}
export function isDiscordBackendDevelopment() {
  return closure_0;
}
export function getDevTunnelHostname() {
  return null;
}
export function assertNever(type) {
  const error = new Error("Unhandled value: " + type);
  throw error;
}
export function isNotNullish(channel) {
  return null != channel;
}
export function isIn(arg0, arr) {
  return arr.includes(arg0);
}
export function isInSet(type, set) {
  return set.has(type);
}
export function isObjectEntryNotNullish(arg0) {
  return null != arg0[1];
}
