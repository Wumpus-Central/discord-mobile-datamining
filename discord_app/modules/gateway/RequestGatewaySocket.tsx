// discord_app/modules/gateway/RequestGatewaySocket.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { AnalyticEvents } from "ME";

const require = arg1;
function setRequestedBy(closure_0) {
  let c6 = false;
  let num = map.get(closure_0);
  if (num == null) {
    num = 0;
  }
  const result = obj.set(closure_0, num + 1);
  const combined = "BRIDGE:" + closure_0;
  let num2 = obj.get(combined);
  if (num2 == null) {
    num2 = 0;
  }
  const diff = num2 - 1;
  if (diff <= 0) {
    obj.delete(combined);
  } else {
    const result1 = obj.set(combined, diff);
  }
}
function stopRequest(closure_0) {
  let c6 = false;
  let num = map.get(closure_0);
  if (num == null) {
    num = 0;
  }
  const diff = num - 1;
  if (diff <= 0) {
    obj.delete(closure_0);
  } else {
    const result = obj.set(closure_0, diff);
  }
}
function _withRequest() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let asyncGeneratorStep = tmp3;
              let closure_2 = tmp7;
              let c5 = 1;
              outer1_8(closure_0);
              c6 = 2;
              c7 = 1;
              const obj1 = { value: null, done: false };
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
  const _withRequest = tmp;
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
let result = require("setOriginWindow").fileFinishedImporting("modules/gateway/RequestGatewaySocket.tsx");

export const isRequested = function isRequested() {
  return map.size > 0 || c6;
};
export function recordStartHeadlessTask() {
  let c6 = false;
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
  let closure_1 = performance.now();
  let c6 = false;
  let num = map.get(combined);
  if (num == null) {
    num = 0;
  }
  let result = map.set(combined, num + 1);
  combined(696).requestSafeIdleCallback(() => {
    let obj = outer1_7;
    if (outer1_7.has(combined)) {
      obj = { bridge_token: null, cleared_after: null };
      obj[0] = tmp;
      const _performance = performance;
      obj[1] = performance.now() - callback;
      callback(outer1_2[3]).track(outer1_4.GATEWAY_BRIDGE_TIMEOUT, obj);
      const obj2 = callback(outer1_2[3]);
    }
    let c6 = false;
    let num = obj.get(tmp);
    if (num == null) {
      num = 0;
    }
    const diff = num - 1;
    if (diff <= 0) {
      obj.delete(tmp);
    } else {
      const result = obj.set(tmp, diff);
    }
  }, { timeout: 5000 });
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