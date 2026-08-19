// === Module 13283: useSharedSpacesWarningStore ===

// Module 13283 (useSharedSpacesWarningStore)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;
import "createJSONStorage";
import createJSONStorage from "createJSONStorage" /* 4242 */;

let obj = { name: "shared-spaces-warning-storage", storage: null };
obj[1] = createJSONStorage.createJSONStorage(() => importDefault(7457));
obj = keys.create(createJSONStorage.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
const result = obj132.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

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
    obj = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj[closure_0] = Date.now();
    obj[0] = obj;
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(blockedUserId) {
  closure_0 = blockedUserId;
  obj.setState((userDismissTimestamps) => {
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj[closure_0] = Date.now();
    obj[0] = obj;
    obj[1] = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  closure_0 = Array.from(arg0).reduce((acc, item, index) => {
    acc[item] = Date.now();
    return acc;
  }, {});
  obj.setState((userDismissTimestamps) => {
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    obj[0] = obj;
    obj[1] = Date.now();
    return obj;
  });
};