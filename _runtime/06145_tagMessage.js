// _runtime/06145_tagMessage.js
let hasOwnProperty;

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

export const toArray = function toArray(blocksHandlers) {
  let tmp = blocksHandlers;
  if (!Array.isArray(blocksHandlers)) {
    const items = [blocksHandlers];
    tmp = items;
  }
  return tmp;
};
export const withPrevAndCurrent = function withPrevAndCurrent(arg0, arg1) {
  let closure_0 = arg1;
  let closure_1 = [null];
  const items = [...arg0];
  const items1 = [];
  const item = items.forEach((item, index) => {
    const tmp = closure_0(closure_1[index], item);
    closure_1.push(tmp);
    items1.push(tmp);
  });
  return items1;
};
export const hasProperty = function hasProperty(arg0, arg1) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(arg0, arg1);
};
export const isTestEnv = function isTestEnv() {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const tmp = hasOwnProperty.call(global, "process") && false;
  return tmp;
};
export { tagMessage };
export const isRemoteDebuggingEnabled = function isRemoteDebuggingEnabled() {
  return !((global.nativeCallSyncHook && !global.__REMOTEDEV__) || global.RN$Bridgeless);
};
export { deepEqual };
export const INT32_MAX = 2147483647;
