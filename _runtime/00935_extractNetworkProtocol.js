// === Module 935: extractNetworkProtocol ===

// Module 935 (extractNetworkProtocol)
import _mod693 from "module_693" /* 693 */;
import _mod915 from "module_915" /* 915 */;
import _mod936 from "module_936" /* 936 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, dependencyMap, spanId;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractNetworkProtocol = function extractNetworkProtocol(nextHopProtocol) {
  let str;
  let str2;
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
        let str5 = "h";
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
    let obj = { name: str, version: str2 };
    return obj;
  }
};
export const getBrowserPerformanceAPI = function getBrowserPerformanceAPI() {
  const tmp3 = _mod915.WINDOW.addEventListener && _mod915.WINDOW.performance;
  return tmp3;
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
  let closure_0 = arg1;
  let c2 = false;
  const obj = _mod936;
  obj.onHidden(() => {
    const tmp = !c2 && spanId;
    if (tmp) {
      closure_0("pagehide", spanId);
    }
    c2 = true;
  });
  let closure_3 = on.on("beforeStartNavigationSpan", (arg0, isRedirect) => {
    isRedirect = undefined;
    if (isRedirect != null) {
      isRedirect = isRedirect.isRedirect;
    }
    if (!isRedirect) {
      const tmp3 = !c2 && spanId;
      if (tmp3) {
        closure_0("navigation", spanId);
      }
      c2 = true;
      closure_3();
      closure_4();
    }
  });
  let closure_4 = on.on("afterStartPageLoadSpan", (spanContext) => {
    spanId = spanContext.spanContext().spanId;
    closure_4();
  });
};
export const msToSec = function msToSec(duration) {
  return duration / 1000;
};
export const startAndEndSpan = function startAndEndSpan(activeSpan, sum, sum1, arg3) {
  let startTime;
  _require = sum;
  dependencyMap = sum1;
  if (arg3 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let closure_2 = Object.assign(arg3, undefined);
    const obj2 = require("module_693");
    const start_timestamp = obj2.spanToJSON(activeSpan).start_timestamp;
    const tmp = start_timestamp && start_timestamp > sum && typeof activeSpan.updateStartTime === "function";
    const tmp5 = _require;
    if (tmp) {
      activeSpan.updateStartTime(sum);
    }
    const tmp5Result = tmp5(693);
    return tmp5Result.withActiveSpan(activeSpan, () => {
      const startInactiveSpan = _mod693.startInactiveSpan;
      const obj = { startTime };
      _mod693;
      const merged = Object.assign(closure_2);
      const startInactiveSpanResult = startInactiveSpan(obj);
      if (startInactiveSpanResult) {
        startInactiveSpanResult.end(sum1);
      }
      return startInactiveSpanResult;
    });
  }
};
export const startStandaloneWebVitalSpan = function startStandaloneWebVitalSpan(arg0) {
  let attributes;
  let environment;
  let name;
  let release;
  let sendDefaultPii;
  let startTime;
  let str2;
  let transaction;
  let userAgent;
  const obj = _mod693;
  const client = obj.getClient();
  if (client) {
    let profile_id;
    ({ attributes, name, transaction, startTime } = arg0);
    const options = client.getOptions();
    ({ release, environment, sendDefaultPii } = options);
    const integrationByName = client.getIntegrationByName("Replay");
    let replayId;
    if (integrationByName != null) {
      replayId = integrationByName.getReplayId();
    }
    const tmpResult = _mod693;
    const currentScope = tmpResult.getCurrentScope();
    const user = currentScope.getUser();
    let tmp8;
    if (undefined !== user) {
      tmp8 = user.email || user.id || user.ip_address;
    }
    try {
      profile_id = currentScope.getScopeData().contexts.profile.profile_id;
    } catch (err) {
    }
    const obj2 = { release, environment, user: tmp8, profile_id, replay_id: replayId, transaction, "user_agent.original": userAgent, "client.address": str2 };
    const _navigator = _mod915.WINDOW.navigator;
    userAgent = undefined;
    if (_navigator != null) {
      userAgent = _navigator.userAgent;
    }
    str2 = undefined;
    if (sendDefaultPii) {
      str2 = "{{auto}}";
    }
    const merged = Object.assign(attributes);
    const obj3 = { name, attributes: obj2, startTime, experimental: { standalone: true } };
    const tmpResult2 = _mod693;
    return tmpResult2.startInactiveSpan(obj3);
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