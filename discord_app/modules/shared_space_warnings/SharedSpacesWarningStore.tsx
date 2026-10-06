// === Module 13561: SharedSpacesWarningStore ===

// Module 13561 (SharedSpacesWarningStore)
import module_570 from "module_570" /* 570 */;
import combine_mod from "combine" /* 4756 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const create = module_570.create;
let combine = combine_mod;
let obj = { name: "shared-spaces-warning-storage", storage: combine.createJSONStorage(() => require("LocalStorageWrapper")) };
const persist = combine.persist;
combine = combine_mod;
let obj2 = create(persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
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
  let closure_0 = arg0;
  obj2.setState((channelDismissTimestamps) => {
    const obj = { channelDismissTimestamps: obj2 };
    obj2 = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj2[closure_0] = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(blockedUserId) {
  let closure_0 = blockedUserId;
  obj2.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: obj2, globalDismissTimestamp: Date.now() };
    obj2 = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj2[closure_0] = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  const arr = Array.from(arg0);
  let closure_0 = arr.reduce((acc, item) => {
    acc[item] = Date.now();
    return acc;
  }, {});
  obj2.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: obj2, globalDismissTimestamp: Date.now() };
    obj2 = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    return obj;
  });
};