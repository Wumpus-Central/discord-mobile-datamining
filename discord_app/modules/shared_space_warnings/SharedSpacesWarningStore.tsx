// === Module 13950: SharedSpacesWarningStore ===

// Module 13950 (SharedSpacesWarningStore)
import DurationsDefault from "Durations" /* 1102 */;

const require = globalThis.__r;

let closure_2 = 3 * DurationsDefault.Millis.DAY;
let closure_3 = 2 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const module_570 = fn(570);
fn(4951);
const obj3 = { name: "shared-spaces-warning-storage", storage: null };
const module_4951 = fn(4951);
obj3.storage = module_4951.createJSONStorage(() => require("LocalStorageWrapper"));
const obj7 = module_570.create(module_4951.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj3));
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

export const useSharedSpacesWarningStore = obj7;
export const getChannelDismissTimestamp = function getChannelDismissTimestamp(arg0) {
  return obj7.getState().channelDismissTimestamps[arg0];
};
export const getUserDismissTimestamp = function getUserDismissTimestamp(arg0) {
  return obj7.getState().userDismissTimestamps[arg0];
};
export const getGlobalDismissTimestamp = function getGlobalDismissTimestamp() {
  return obj7.getState().globalDismissTimestamp;
};
export const isBlockedWarningQueued = function isBlockedWarningQueued() {
  return obj7.getState().queuedWarning;
};
export const queueBlockWarning = function queueBlockWarning() {
  obj7.setState({ queuedWarning: true });
};
export const dequeueBlockWarning = function dequeueBlockWarning() {
  obj7.setState({ queuedWarning: false });
};
export const setDismissalTimeForChannel = function setDismissalTimeForChannel(arg0) {
  closure_0 = arg0;
  obj7.setState((channelDismissTimestamps) => {
    const obj = { channelDismissTimestamps: null };
    const obj2 = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj2[closure_0] = Date.now();
    obj.channelDismissTimestamps = obj2;
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(blockedUserId) {
  closure_0 = blockedUserId;
  obj7.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: null, globalDismissTimestamp: null };
    const obj2 = {};
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
  obj7.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: null, globalDismissTimestamp: null };
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    obj.userDismissTimestamps = {};
    obj.globalDismissTimestamp = Date.now();
    return obj;
  });
};
export const voiceBlockedWarningInCooldownForUsers = function voiceBlockedWarningInCooldownForUsers(arg0) {
  let num = obj7.getState().globalDismissTimestamp;
  if (num == null) {
    num = 0;
  }
  let everyResult = num > Date.now() - HOUR;
  if (!everyResult) {
    const _Array = Array;
    everyResult = Array.from(arg0).every((item) => {
      // // eliminated: always false
      let tmp = !flag;
      if (true) {
        let num = state.getState().userDismissTimestamps[item];
        if (num == null) {
          num = 0;
        }
        const _Date = Date;
        tmp = num > Date.now() - closure_1_3;
      }
      return tmp;
    });
    const arr = Array.from(arg0);
  }
  return everyResult;
};
export const userBlockedWarningInCooldown = function userBlockedWarningInCooldown(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    let num = obj7.getState().globalDismissTimestamp;
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    flag = num <= Date.now() - HOUR;
  }
  let tmp5 = !flag;
  if (flag) {
    let num2 = obj7.getState().userDismissTimestamps[arg0];
    if (num2 == null) {
      num2 = 0;
    }
    const _Date2 = Date;
    tmp5 = num2 > Date.now() - closure_3;
  }
  return tmp5;
};
export const gdmBlockedWarningInCooldown = function gdmBlockedWarningInCooldown(arg0) {
  let num = obj7.getState().channelDismissTimestamps[arg0];
  if (num == null) {
    num = 0;
  }
  return num > Date.now() - closure_2;
};