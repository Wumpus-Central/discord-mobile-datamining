// _runtime/06660_tagMessage.js
const global = arg0;
function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
}
tagMessage.__closure = {};
tagMessage.__workletHash = 15816194647415;
tagMessage.__initData = {
  code: 'function tagMessage_Pnpm_utilsTs1(msg){return"[react-native-gesture-handler] "+msg;}',
};
function deepEqual(obj, obj2) {
  if (obj === obj2) {
    return true;
  } else {
    if (typeof obj === "object") {
      if (typeof obj2 === "object") {
        if (null !== obj) {
          if (null !== obj2) {
            const _Object = Object;
            const keys = Object.keys(obj);
            const _Object2 = Object;
            const keys1 = Object.keys(obj2);
            if (keys.length !== keys1.length) {
              return false;
            } else {
              for (const item10007 of keys) {
                obj.return();
                let flag = false;
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}

export const toArray = function toArray(items) {
  let tmp = items;
  if (!Array.isArray(items)) {
    items = [];
    items[0] = items;
    tmp = items;
  }
  return tmp;
};
export const withPrevAndCurrent = function withPrevAndCurrent(arg0, arg1) {
  closure_0 = arg1;
  closure_1 = [null];
  const items = [...arg0];
  const items1 = [];
  const item = items.forEach((item, index) => {
    const tmp = closure_0(closure_1[index], item);
    closure_1.push(tmp);
    items1.push(tmp);
  });
  return items1;
};
export const hasProperty = function hasProperty(arg0, key10009) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
};
export const isTestEnv = function isTestEnv() {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let flag = hasOwnProperty("process");
  } else {
    flag = call(global, "process");
  }
  if (flag) {
    flag = false;
  }
  return flag;
};
export { tagMessage };
export const isRemoteDebuggingEnabled = function isRemoteDebuggingEnabled() {
  return !((global.nativeCallSyncHook && !global.__REMOTEDEV__) || global.RN$Bridgeless);
};
export { deepEqual };
export const INT32_MAX = 2147483647;
