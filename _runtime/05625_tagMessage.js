// _runtime/05625_tagMessage.js
const global = arg0;
function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
}
tagMessage.__closure = {};
tagMessage.__workletHash = 15816194647415;
tagMessage.__initData = { code: "function tagMessage_Pnpm_utilsTs1(msg){return\"[react-native-gesture-handler] \"+msg;}" };
arg5.toArray = function toArray(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
};
arg5.withPrevAndCurrent = function withPrevAndCurrent(arg0, arg1) {
  closure_0 = arg1;
  closure_1 = [null];
  const items = [...arg0];
  const items1 = [];
  const item = items.forEach((arg0, arg1) => {
    const tmp = callback(arr[arg1], arg0);
    arr = arr.push(tmp);
    arr = items1.push(tmp);
  });
  return items1;
};
arg5.hasProperty = function hasProperty(arg0, key10009) {
  const call = hasOwnProperty.call;
  return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
};
arg5.isTestEnv = function isTestEnv() {
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
arg5.tagMessage = tagMessage;
arg5.isRemoteDebuggingEnabled = function isRemoteDebuggingEnabled() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
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
arg5.deepEqual = deepEqual;
arg5.INT32_MAX = 2147483647;