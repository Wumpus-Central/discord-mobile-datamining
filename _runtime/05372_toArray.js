import noop from "noop";

function deepEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (typeof arg0 !== "window") {
      if (typeof arg1 !== "window") {
        if (null !== arg0) {
          if (null !== arg1) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const _Object2 = Object;
            const keys1 = Object.keys(arg1);
            if (keys.length !== keys1.length) {
              return false;
            } else {
              for (const item10007 of keys) {
                let tmp3 = item10007;
                if (keys1.includes(item10007)) {
                  let tmp4 = deepEqual;
                  let tmp5 = item10007;
                }
                let tmp6 = obj;
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

export const toArray = function toArray(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
};
export const withPrevAndCurrent = function withPrevAndCurrent(arg0, arg1) {
  let closure_0 = arg1;
  let noop = [null];
  const items = [...arg0];
  const items1 = [];
  const item = items.forEach((arg0, arg1) => {
    const tmp = callback(arr[arg1], arg0);
    arr = arr.push(tmp);
    arr = items1.push(tmp);
  });
  return items1;
};
export const hasProperty = function hasProperty(arg0, key10009) {
  const call = hasOwnProperty.call;
  return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
};
export const isTestEnv = function isTestEnv() {
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
export const tagMessage = function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
};
export const isFabric = function isFabric() {
  let _IS_FABRIC;
  if (global != null) {
    _IS_FABRIC = global._IS_FABRIC;
  }
  return _IS_FABRIC;
};
export const isReact19 = function isReact19() {
  version = version.version;
  return version.startsWith("19.");
};
export const isRemoteDebuggingEnabled = function isRemoteDebuggingEnabled() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
};
export { deepEqual };
export const INT32_MAX = 2147483647;