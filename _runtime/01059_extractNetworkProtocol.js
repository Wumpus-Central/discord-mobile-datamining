import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { WINDOW } from "01039_WINDOW.js";
import { onHidden } from "01060_onHidden.js";
// _runtime/01059_extractNetworkProtocol.js
import _slicedToArray from "_slicedToArray";

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
      let tmp8 = _slicedToArray;
      let num = 2;
      let tmp9 = _slicedToArray(nextHopProtocol.split("/"), 2);
      [str, str2] = tmp9;
      let tmp10 = iter;
      iter.return();
      break;
    } else {
      let _isNaN = isNaN;
      let _Number = Number;
      let tmp3 = nextResult;
      let tmp4 = str3;
      if (isNaN(Number(tmp2))) {
        let tmp7 = nextResult;
        str3 = `${tmp2}`;
        continue;
      } else {
        let str4 = "http";
        let str5 = "h";
        if ("h" !== `${tmp2}`) {
          str4 = str3;
        }
        str = str4;
        let tmp5 = str3;
        str2 = nextHopProtocol.split(str3)[1];
        let tmp6 = iter;
        iter.return();
        break;
      }
      break;
    }
    let tmp11 = str3;
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
  return WINDOW /* WINDOW */.WINDOW.addEventListener && WINDOW /* WINDOW */.WINDOW.performance;
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
  let c2 = false;
  _onHidden.onHidden(() => {
    let tmp = !c2;
    if (!c2) {
      tmp = closure_1;
    }
    if (tmp) {
      callback("pagehide", closure_1);
    }
    c2 = true;
  });
  let closure_3 = on.on("beforeStartNavigationSpan", (arg0, isRedirect) => {
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
  let closure_4 = on.on("afterStartPageLoadSpan", (spanContext) => {
    const spanId = spanContext.spanContext().spanId;
    callback3();
  });
};
export const msToSec = function msToSec(duration) {
  return duration / 1000;
};
export const startAndEndSpan = function startAndEndSpan(activeSpan, sum, sum1, arg3) {
  const _require = sum;
  const dependencyMap = sum1;
  if (arg3 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let closure_2 = Object.assign(arg3, undefined);
    const start_timestamp = _registerSpanErrorInstrumentation.spanToJSON(activeSpan).start_timestamp;
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
    const obj2 = _registerSpanErrorInstrumentation;
    const tmp6 = _require;
    return _registerSpanErrorInstrumentation.withActiveSpan(activeSpan, () => {
      let obj = sum(sum1[1]);
      obj = { startTime: sum };
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
  let attributes;
  let environment;
  let name;
  let release;
  let sendDefaultPii;
  let startTime;
  let transaction;
  let obj = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  if (client) {
    ({ attributes, name, transaction, startTime } = arg0);
    const options = client.getOptions();
    ({ release, environment, sendDefaultPii } = options);
    const integrationByName = client.getIntegrationByName("Replay");
    if (integrationByName != null) {
      const replayId = integrationByName.getReplayId();
    }
    let tmpResult = tmp(817);
    const currentScope = tmpResult.getCurrentScope();
    const user = currentScope.getUser();
    if (undefined !== user) {
      const tmp9 = user.email || user.id || user.ip_address;
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
      const _navigator = tmp(1039).WINDOW.navigator;
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
      tmpResult = tmp(817);
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