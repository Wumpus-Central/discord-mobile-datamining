// === Module 675: setRequestedBy ===

// Module 675 (setRequestedBy)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = fn;
function setRequestedBy(closure_0) {
  c6 = false;
  let num = map.get(closure_0);
  if (num == null) {
    num = 0;
  }
  const result = map.set(closure_0, num + 1);
  const combined = "BRIDGE:" + closure_0;
  let num2 = map.get(combined);
  if (num2 == null) {
    num2 = 0;
  }
  const diff = num2 - 1;
  if (diff <= 0) {
    map.delete(combined);
  } else {
    const result1 = map.set(combined, diff);
  }
}
function stopRequest(closure_0) {
  c6 = false;
  let num = map.get(closure_0);
  if (num == null) {
    num = 0;
  }
  const diff = num - 1;
  if (diff <= 0) {
    map.delete(closure_0);
  } else {
    const result = map.set(closure_0, diff);
  }
}
function _withRequest() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              c5 = 1;
              closure_1_8(closure_0);
              c6 = 2;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback();
              return obj1;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback2(closure_0);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            callback2(closure_0);
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c5 = 0;
            callback2(closure_0);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp29) {
          closure_4 = tmp29;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp29;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = ["COLD_START"];
let c6 = true;
const map = new Map();
let result = require("obj132").fileFinishedImporting("modules/gateway/RequestGatewaySocket.tsx");

export const isRequested = function isRequested() {
  return map.size > 0 || c6;
};
export function recordStartHeadlessTask() {
  c6 = false;
}
export const describeConnectionReasons = function describeConnectionReasons() {
  const items = [...c6 ? closure_5 : [], ...map.keys()];
  const sorted = items.sort();
  let str = "NO_REASONS";
  if (sorted.length > 0) {
    str = sorted.join(",");
  }
  return str;
};
export { setRequestedBy };
export const startBridgeTo = function startBridgeTo(arg0) {
  const combined = "BRIDGE:" + arg0;
  closure_1 = performance.now();
  c6 = false;
  let num = map.get(combined);
  if (num == null) {
    num = 0;
  }
  let result = map.set(combined, num + 1);
  combined(696).requestSafeIdleCallback(() => {
    let obj = map;
    if (map.has(combined)) {
      obj = { bridge_token: null, cleared_after: null };
      obj[0] = combined;
      const _performance = performance;
      obj[1] = performance.now() - callback;
      callback(dependencyMap[3]).track(AnalyticEvents.GATEWAY_BRIDGE_TIMEOUT, obj);
      const obj2 = callback(dependencyMap[3]);
    }
    c6 = false;
    let num = obj.get(combined);
    if (num == null) {
      num = 0;
    }
    const diff = num - 1;
    if (diff <= 0) {
      obj.delete(combined);
    } else {
      const result = obj.set(combined, diff);
    }
  }, { timeout: 5000 });
  let obj2 = combined(696);
};
export { stopRequest };
export const withRequest = function withRequest(combined, arg1) {
  const self = this;
  const apply = _withRequest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};