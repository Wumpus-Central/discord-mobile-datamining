// === Module 1059: extractNetworkProtocol ===

// Module 1059 (extractNetworkProtocol)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import WINDOW from "WINDOW" /* 1039 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractNetworkProtocol = function extractNetworkProtocol(nextHopProtocol) {
  str = "unknown";
  str2 = "unknown";
  let str3 = "";
  const iter = nextHopProtocol[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("/" === nextResult) {
      let tmp9 = _slicedToArray(nextHopProtocol.split("/"), 2);
      [str, str2] = tmp9;
      iter.return();
      break;
    } else {
      let _isNaN = isNaN;
      let _Number = Number;
      if (isNaN(Number(tmp2))) {
        str3 = `${tmp2}`;
        continue;
      } else {
        let str4 = "http";
        if ("h" !== `${tmp2}`) {
          str4 = str3;
        }
        str = str4;
        str2 = nextHopProtocol.split(str3)[1];
        iter.return();
        break;
      }
      break;
    }
    if (str3 === nextHopProtocol) {
      str = str3;
    }
    let obj = { name: null, version: null };
    obj[0] = str;
    obj[1] = str2;
    return obj;
  }
};
export const getBrowserPerformanceAPI = function getBrowserPerformanceAPI() {
  return WINDOW.WINDOW.addEventListener && WINDOW.WINDOW.performance;
};
export const isMeasurementValue = function isMeasurementValue(deviceMemory) {
  let isFiniteResult = typeof deviceMemory === "number";
  if (typeof deviceMemory === "number") {
    const _isFinite = isFinite;
    isFiniteResult = isFinite(deviceMemory);
  }
  return isFiniteResult;
};
export const listenForWebVitalReportEvents = function listenForWebVitalReportEvents(on, arg1) {
  const _require = arg1;
  c2 = false;
  _require(1060).onHidden(() => {
    let tmp = !c2;
    if (!c2) {
      tmp = closure_1;
    }
    if (tmp) {
      callback("pagehide", closure_1);
    }
    c2 = true;
  });
  closure_3 = on.on("beforeStartNavigationSpan", (arg0, isRedirect) => {
    isRedirect = undefined;
    if (isRedirect != null) {
      isRedirect = isRedirect.isRedirect;
    }
    if (!isRedirect) {
      let tmp3 = !c2;
      if (!c2) {
        tmp3 = closure_1;
      }
      if (tmp3) {
        callback("navigation", closure_1);
      }
      c2 = true;
      callback2();
      callback3();
    }
  });
  closure_4 = on.on("afterStartPageLoadSpan", (spanContext) => {
    const spanId = spanContext.spanContext().spanId;
    callback3();
  });
};
export const msToSec = function msToSec(duration) {
  return duration / 1000;
};
export const startAndEndSpan = function startAndEndSpan(activeSpan, sum, sum1, arg3) {
  const _require = sum;
  dependencyMap = sum1;
  if (arg3 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    closure_2 = Object.assign(arg3, undefined);
    const start_timestamp = _require(817).spanToJSON(activeSpan).start_timestamp;
    let tmp = start_timestamp;
    if (start_timestamp) {
      tmp = start_timestamp > sum;
    }
    if (tmp) {
      tmp = typeof activeSpan.updateStartTime === "function";
    }
    if (tmp) {
      activeSpan.updateStartTime(sum);
    }
    const obj2 = _require(817);
    return _require(817).withActiveSpan(activeSpan, () => {
      sum(sum1[1]);
      const obj = { startTime: sum };
      const merged = Object.assign(closure_2);
      const startInactiveSpanResult = obj.startInactiveSpan(obj);
      if (startInactiveSpanResult) {
        startInactiveSpanResult.end(sum1);
      }
      return startInactiveSpanResult;
    });
  }
};
export const startStandaloneWebVitalSpan = function startStandaloneWebVitalSpan(arg0) {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  if (client) {
    ({ attributes, name, transaction, startTime } = arg0);
    const options = client.getOptions();
    ({ release, environment, sendDefaultPii } = options);
    const integrationByName = client.getIntegrationByName("Replay");
    if (integrationByName != null) {
      const replayId = integrationByName.getReplayId();
    }
    let tmpResult = registerSpanErrorInstrumentation;
    const currentScope = tmpResult.getCurrentScope();
    const user = currentScope.getUser();
    if (undefined !== user) {
      const tmp8 = user.email || user.id || user.ip_address;
    }
    try {
      const profile_id = currentScope.getScopeData().contexts.profile.profile_id;
      obj = { release: null, environment: null, user: null, profile_id: null, replay_id: null, transaction: null, "user_agent.original": null, "client.address": null };
      obj[0] = release;
      obj[1] = environment;
      obj[2] = tmp8;
      obj[3] = profile_id;
      obj[4] = replayId;
      obj[5] = transaction;
      const _navigator = WINDOW.WINDOW.navigator;
      let userAgent;
      if (_navigator != null) {
        userAgent = _navigator.userAgent;
      }
      obj[6] = userAgent;
      let str2;
      if (sendDefaultPii) {
        str2 = "{{auto}}";
      }
      obj[7] = str2;
      const merged = Object.assign(attributes);
      tmpResult = registerSpanErrorInstrumentation;
      obj = { name: null, attributes: null, startTime: null, experimental: null };
      obj[0] = name;
      obj[1] = obj;
      obj[2] = startTime;
      obj[3] = { standalone: true };
      return tmpResult.startInactiveSpan(obj);
    } catch (err) {
    }
  }
};
export const supportsWebVital = function supportsWebVital(arg0) {
  try {
    const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
    return supportedEntryTypes.includes(arg0);
  } catch (err) {
    return false;
  }
};