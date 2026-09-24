// discord_app/modules/shared_space_warnings/SharedSpacesWarningStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import "module_4700";
import 04700__ from "../../../_runtime/metro/04700__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let obj = { name: "shared-spaces-warning-storage", storage: null };
obj.storage = module_4700.createJSONStorage(() => require("LocalStorageWrapper"));
let obj2 = module_560.create(module_4700.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

export const useSharedSpacesWarningStore = obj2;
export const getChannelDismissTimestamp = function getChannelDismissTimestamp(arg0) {
  return obj2.getState().channelDismissTimestamps[arg0];
};
export const getUserDismissTimestamp = function getUserDismissTimestamp(arg0) {
  return obj2.getState().userDismissTimestamps[arg0];
};
export const getGlobalDismissTimestamp = function getGlobalDismissTimestamp() {
  return obj2.getState().globalDismissTimestamp;
};
export const isBlockedWarningQueued = function isBlockedWarningQueued() {
  return obj2.getState().queuedWarning;
};
export const queueBlockWarning = function queueBlockWarning() {
  obj2.setState({ queuedWarning: true });
};
export const dequeueBlockWarning = function dequeueBlockWarning() {
  obj2.setState({ queuedWarning: false });
};
export const setDismissalTimeForChannel = function setDismissalTimeForChannel(arg0) {
  closure_0 = arg0;
  obj2.setState((channelDismissTimestamps) => {
    const obj = { channelDismissTimestamps: null };
    obj2 = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj2[closure_0] = Date.now();
    obj.channelDismissTimestamps = obj2;
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(blockedUserId) {
  closure_0 = blockedUserId;
  obj2.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: null, globalDismissTimestamp: null };
    obj2 = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj2[closure_0] = Date.now();
    obj.userDismissTimestamps = obj2;
    obj.globalDismissTimestamp = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  closure_0 = Array.from(arg0).reduce((acc, item) => {
    acc[item] = Date.now();
    return acc;
  }, {});
  obj2.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: null, globalDismissTimestamp: null };
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    obj.userDismissTimestamps = {};
    obj.globalDismissTimestamp = Date.now();
    return obj;
  });
};