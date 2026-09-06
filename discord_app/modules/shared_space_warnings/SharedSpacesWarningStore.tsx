// discord_app/modules/shared_space_warnings/SharedSpacesWarningStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import "module_4430";
import 04430__ from "../../../_runtime/metro/04430__.js";
import size from "../../../_runtime/metro/00002__.js";

let useSharedSpacesWarningStore = { name: "shared-spaces-warning-storage", storage: null };
useSharedSpacesWarningStore.storage = module_4430.createJSONStorage(() => require("LocalStorageWrapper"));
useSharedSpacesWarningStore = module_560.create(module_4430.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), useSharedSpacesWarningStore));
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

export { useSharedSpacesWarningStore };
export const getChannelDismissTimestamp = function getChannelDismissTimestamp(arg0) {
  return obj.getState().channelDismissTimestamps[arg0];
};
export const getUserDismissTimestamp = function getUserDismissTimestamp(arg0) {
  return obj.getState().userDismissTimestamps[arg0];
};
export const getGlobalDismissTimestamp = function getGlobalDismissTimestamp() {
  return obj.getState().globalDismissTimestamp;
};
export const isBlockedWarningQueued = function isBlockedWarningQueued() {
  return obj.getState().queuedWarning;
};
export const queueBlockWarning = function queueBlockWarning() {
  obj.setState({ queuedWarning: true });
};
export const dequeueBlockWarning = function dequeueBlockWarning() {
  obj.setState({ queuedWarning: false });
};
export const setDismissalTimeForChannel = function setDismissalTimeForChannel(arg0) {
  closure_0 = arg0;
  obj.setState((channelDismissTimestamps) => {
    channelDismissTimestamps = { channelDismissTimestamps: null };
    channelDismissTimestamps = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    channelDismissTimestamps[closure_0] = Date.now();
    channelDismissTimestamps.channelDismissTimestamps = channelDismissTimestamps;
    return channelDismissTimestamps;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(blockedUserId) {
  closure_0 = blockedUserId;
  obj.setState((userDismissTimestamps) => {
    userDismissTimestamps = { userDismissTimestamps: null, globalDismissTimestamp: null };
    userDismissTimestamps = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    userDismissTimestamps[closure_0] = Date.now();
    userDismissTimestamps.userDismissTimestamps = userDismissTimestamps;
    userDismissTimestamps.globalDismissTimestamp = Date.now();
    return userDismissTimestamps;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  closure_0 = Array.from(arg0).reduce((acc, item) => {
    acc[item] = Date.now();
    return acc;
  }, {});
  obj.setState((userDismissTimestamps) => {
    userDismissTimestamps = { userDismissTimestamps: null, globalDismissTimestamp: null };
    userDismissTimestamps = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    userDismissTimestamps.userDismissTimestamps = userDismissTimestamps;
    userDismissTimestamps.globalDismissTimestamp = Date.now();
    return userDismissTimestamps;
  });
};