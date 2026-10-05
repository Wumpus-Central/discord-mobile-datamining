// === Module 7253: RequestGatewaySocket ===

// Module 7253 (RequestGatewaySocket)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c7, closure_4;

function setRequestedBy(arg0) {
  c6 = false;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = map.set(arg0, num + 1);
  const combined = "BRIDGE:" + arg0;
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
function stopRequest(arg0) {
  c6 = false;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const diff = num - 1;
  if (diff <= 0) {
    map.delete(arg0);
  } else {
    const result = map.set(arg0, diff);
  }
}
let obj = function _withRequest() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c5 = 1;
            setRequestedBy(closure_0);
            c6 = 2;
            c7 = 1;
            const obj4 = { value: closure_1(), done: false };
            return obj4;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_131_9(closure_0);
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_9(closure_0);
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 0;
          closure_131_9(closure_0);
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp26) {
        closure_4 = tmp26;
        if (0 === c5) {
          c7 = 3;
          throw tmp26;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = ["COLD_START"];
let c6 = true;
const map = new Map();
let result = size.fileFinishedImporting("modules/gateway/RequestGatewaySocket.tsx");

export const isRequested = function isRequested() {
  return map.size > 0 || c6;
};
export function recordStartHeadlessTask() {
  c6 = false;
}
export const describeConnectionReasons = function describeConnectionReasons() {
  const tmp = c6 ? closure_5 : [];
  const items = [...tmp, ...map.keys()];
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
  c6 = false;
  let num = map.get(combined);
  if (num == null) {
    num = 0;
  }
  let result = map.set(combined, num + 1);
  let obj2 = combined(6981);
  obj2.requestSafeIdleCallback(() => {
    if (map.has(combined)) {
      const _performance = performance;
      const obj2 = { bridge_token: combined, cleared_after: performance.now() - closure_1 };
      const track = AnalyticsUtilsDefault.track;
      const GATEWAY_BRIDGE_TIMEOUT = AnalyticEvents.GATEWAY_BRIDGE_TIMEOUT;
      AnalyticsUtilsDefault;
      track(GATEWAY_BRIDGE_TIMEOUT, obj2);
    }
    c6 = false;
    let num = map.get(combined);
    if (num == null) {
      num = 0;
    }
    const diff = num - 1;
    if (diff <= 0) {
      map.delete(combined);
    } else {
      const result = map.set(combined, diff);
    }
  }, { timeout: 5000 });
};
export { stopRequest };
export const withRequest = function withRequest() {
  return obj(...arguments);
};