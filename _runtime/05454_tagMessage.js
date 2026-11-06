// _runtime/05454_tagMessage.js
let items = [{ code: '(function tagMessage_Pnpm_utilsTs1(msg){return"[react-native-gesture-handler] "+msg;})' }];
[tmp2] = items;
function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
}
tagMessage.__workletHash = 15113571351126;
tagMessage.__initData = tmp2;
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

export function toArray(items) {
  let tmp = items;
  if (!Array.isArray(items)) {
    items = [];
    items[0] = items;
    tmp = items;
  }
  return tmp;
}
export function withPrevAndCurrent(arg0, arg1) {
  closure_0 = arg1;
  closure_1 = [null];
  items = [...arg0];
  const items1 = [];
  const item = items.forEach((item, index) => {
    const tmp = closure_0(closure_1[index], item);
    closure_1.push(tmp);
    items1.push(tmp);
  });
  return items1;
}
export function hasProperty(arg0, key10009) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
}
export function isTestEnv() {
  const _globalThis = globalThis;
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let flag = hasOwnProperty("process");
  } else {
    flag = call(_globalThis, "process");
  }
  if (flag) {
    flag = false;
  }
  return flag;
}
export { tagMessage };
export function isRemoteDebuggingEnabled() {
  const _globalThis = globalThis;
  return !((globalThis.nativeCallSyncHook && !_globalThis.__REMOTEDEV__) || _globalThis.RN$Bridgeless);
}
export { deepEqual };
export const INT32_MAX = 2147483647;
