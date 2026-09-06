// discord_app/modules/gateway/RequestGatewaySocket.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
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
let closure_10 = async function _withRequest(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          c5 = 1;
          setRequestedBy(closure_0);
          c6 = 2;
          c7 = 1;
          const obj1 = { value: importDefault(), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_131_9(closure_130_0);
        throw closure_4;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        closure_131_9(closure_130_0);
        c7 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        c5 = 0;
        closure_131_9(closure_130_0);
        c7 = 3;
        obj = { value, done: true };
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
};
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_5 = ["COLD_START"];
let c6 = true;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/gateway/RequestGatewaySocket.tsx");

export const isRequested = function isRequested() {
  return map.size > 0 || c6;
};
export function recordStartHeadlessTask() {
  c6 = false;
}
export const describeConnectionReasons = function describeConnectionReasons() {
  const items = [...(c6 ? closure_5 : []), ...map.keys()];
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
  combined(7472).requestSafeIdleCallback(
    () => {
      let obj = map;
      if (map.has(combined)) {
        obj = { bridge_token: combined, cleared_after: null };
        const _performance = performance;
        obj.cleared_after = performance.now() - closure_1;
        AnalyticsUtilsDefault.track(AnalyticEvents.GATEWAY_BRIDGE_TIMEOUT, obj);
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
    },
    { timeout: 5000 },
  );
  let obj2 = combined(7472);
};
export { stopRequest };
export const withRequest = function withRequest() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
