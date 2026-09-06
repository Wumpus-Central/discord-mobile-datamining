// === Module 924: extractNetworkProtocol ===

// Module 924 (extractNetworkProtocol)
import _mod682 from "module_682" /* 682 */;
import _mod904 from "module_904" /* 904 */;
import _mod925 from "module_925" /* 925 */;
import _slicedToArray from "module_32" /* 32 */;

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
  return _mod904.WINDOW.addEventListener && _mod904.WINDOW.performance;
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
  closure_0 = arg1;
  c2 = false;
  _mod925.onHidden(() => {
    let tmp = !c2;
    if (!c2) {
      tmp = spanId;
    }
    if (tmp) {
      closure_0("pagehide", spanId);
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
        tmp3 = spanId;
      }
      if (tmp3) {
        closure_0("navigation", spanId);
      }
      c2 = true;
      closure_3();
      closure_4();
    }
  });
  closure_4 = on.on("afterStartPageLoadSpan", (spanContext) => {
    spanId = spanContext.spanContext().spanId;
    closure_4();
  });
};
export const msToSec = function msToSec(duration) {
  return duration / 1000;
};
export const startAndEndSpan = function startAndEndSpan(activeSpan, sum, sum1, attributes) {
  _require = sum;
  dependencyMap = sum1;
  if (attributes == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    closure_2 = Object.assign(attributes, undefined);
    const start_timestamp = require("module_682").spanToJSON(activeSpan).start_timestamp;
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
    const obj2 = require("module_682");
    return require("module_682").withActiveSpan(activeSpan, () => {
      const obj = { startTime };
      const merged = Object.assign(closure_2);
      const startInactiveSpanResult = obj.startInactiveSpan(obj);
      if (startInactiveSpanResult) {
        startInactiveSpanResult.end(closure_1);
      }
      return startInactiveSpanResult;
    });
  }
};
export const startStandaloneWebVitalSpan = function startStandaloneWebVitalSpan(arg0) {
  let obj = _mod682;
  const client = obj.getClient();
  if (client) {
    ({ attributes, name, transaction, startTime } = arg0);
    const options = client.getOptions();
    ({ release, environment, sendDefaultPii } = options);
    const integrationByName = client.getIntegrationByName("Replay");
    if (integrationByName != null) {
      const replayId = integrationByName.getReplayId();
    }
    let tmpResult = _mod682;
    const currentScope = tmpResult.getCurrentScope();
    const user = currentScope.getUser();
    if (undefined !== user) {
      const tmp8 = user.email || user.id || user.ip_address;
      const tmp9 = user.email || user.id || user.ip_address;
    }
    try {
      const profile_id = currentScope.getScopeData().contexts.profile.profile_id;
      obj = { release, environment, user: tmp8, profile_id, replay_id: replayId, transaction, "user_agent.original": null, "client.address": null };
      const _navigator = _mod904.WINDOW.navigator;
      let userAgent;
      if (_navigator != null) {
        userAgent = _navigator.userAgent;
      }
      obj["user_agent.original"] = userAgent;
      let str2;
      if (sendDefaultPii) {
        str2 = "{{auto}}";
      }
      obj["client.address"] = str2;
      const merged = Object.assign(attributes);
      tmpResult = _mod682;
      obj = { name, attributes: null, startTime: null, experimental: null };
      obj.attributes = obj;
      obj.startTime = startTime;
      obj.experimental = { standalone: true };
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