// === Module 13202: useSharedSpacesWarningStore ===

// Module 13202 (useSharedSpacesWarningStore)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;
import createJSONStorage from "createJSONStorage" /* 4247 */;

let obj = { name: "shared-spaces-warning-storage", storage: null };
obj[1] = createJSONStorage.createJSONStorage(() => importDefault(7309));
obj = keys.create(createJSONStorage.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
const result = set.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

export const useSharedSpacesWarningStore = obj;
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
    obj = { channelDismissTimestamps: null };
    obj = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj[closure_0] = Date.now();
    obj[0] = obj;
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(arg0) {
  closure_0 = arg0;
  obj.setState((userDismissTimestamps) => {
    obj = { userDismissTimestamps: null, globalDismissTimestamp: null };
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj[closure_0] = Date.now();
    obj[0] = obj;
    obj[1] = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  closure_0 = Array.from(arg0).reduce((arg0, arg1) => {
    arg0[arg1] = Date.now();
    return arg0;
  }, {});
  obj.setState((userDismissTimestamps) => {
    obj = { userDismissTimestamps: null, globalDismissTimestamp: null };
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    obj[0] = obj;
    obj[1] = Date.now();
    return obj;
  });
};