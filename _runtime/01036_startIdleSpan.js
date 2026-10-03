// === Module 1036: startIdleSpan ===

// Module 1036 (startIdleSpan)
import _mod17 from "module_17" /* 17 */;
import _mod693 from "module_693" /* 693 */;
import _mod998 from "module_998" /* 998 */;
import SPAN_ORIGIN_AUTO_INTERACTION from "SPAN_ORIGIN_AUTO_INTERACTION" /* 1034 */;
import _mod1037 from "module_1037" /* 1037 */;

const AppState = _mod17.AppState;
let c3 = "Route Change";
const defaultIdleOptions = { idleTimeout: 1000, finalTimeout: 600000 };
function startIdleSpan(name, arg1) {
  ({ finalTimeout, idleTimeout } = arg1);
  const client = _mod693.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const sentryNonRecordingSpan = new _mod693.SentryNonRecordingSpan();
      return sentryNonRecordingSpan;
    } else {
      const currentScope = _mod693.getCurrentScope();
      const obj2 = { traceId: null, sampleRand: null };
      const tmpResult = _mod693;
      obj2.traceId = _mod693.generateTraceId();
      const _Math = Math;
      obj2.sampleRand = Math.random();
      const result = currentScope.setPropagationContext(obj2);
      const tmpResult4 = _mod693;
      const obj3 = { finalTimeout, idleTimeout };
      const startIdleSpanResult = _mod693.startIdleSpan(name, obj3);
      const tmpResult5 = _mod693;
      _mod1037.cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = _mod693.debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const sentryNonRecordingSpan1 = new _mod693.SentryNonRecordingSpan();
    return sentryNonRecordingSpan1;
  }
}
const _sentrySpan = "_sentrySpan";
let c7 = "thread.name";
const main = "main";
const javascript = "javascript";

export const DEFAULT_NAVIGATION_SPAN_NAME = "Route Change";
export { defaultIdleOptions };
export const startIdleNavigationSpan = (arg0) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let finalTimeout = obj.finalTimeout;
  if (finalTimeout === undefined) {
    finalTimeout = obj.finalTimeout;
  }
  let idleTimeout = obj.idleTimeout;
  if (idleTimeout === undefined) {
    idleTimeout = obj.idleTimeout;
  }
  let flag = obj.isAppRestart;
  if (flag === undefined) {
    flag = false;
  }
  const client = _mod693.getClient();
  const obj3 = _mod693;
  if (client) {
    const activeSpan = obj3.getActiveSpan();
    let isRootSpanResult = activeSpan;
    if (activeSpan) {
      isRootSpanResult = _mod998.isRootSpan(activeSpan);
      const tmp5Result = _mod998;
    }
    if (isRootSpanResult) {
      const items = [SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION];
      const tmp5Result7 = _mod693;
      isRootSpanResult = items.includes(_mod693.spanToJSON(activeSpan).origin || "");
      const tmp10 = _mod693.spanToJSON(activeSpan).origin || "";
    }
    const currentScope = _mod693.getCurrentScope();
    delete tmp2[tmp];
    if (isRootSpanResult) {
      if (flag) {
        const debug3 = _mod693.debug;
        const _HermesInternal2 = HermesInternal;
        debug3.log("[startIdleNavigationSpan] Not canceling " + _mod693.spanToJSON(activeSpan).op + " transaction because navigation is from app restart - preserving error context.");
        const tmp5Result9 = _mod693;
      }
      const _Object = Object;
      const _Object2 = Object;
      const obj4 = { name, op: "navigation", forceTransaction: true, scope: _mod693.getCurrentScope() };
      const merged = Object.assign(Object.assign({}, obj4), arg0);
      const obj5 = { finalTimeout, idleTimeout };
      const obj14 = startIdleSpan(merged, obj5);
      const debug4 = _mod693.debug;
      let str6 = merged.op;
      if (!str6) {
        str6 = "unknown op";
      }
      const _HermesInternal3 = HermesInternal;
      debug4.log("[startIdleNavigationSpan] Starting " + str6 + " transaction \"" + merged.name + "\" on scope");
      const tmp5Result10 = _mod693;
      const result = _mod1037.adjustTransactionDuration(client, obj14, finalTimeout);
      const attr = obj14.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM);
      return obj14;
    }
    if (isRootSpanResult) {
      const debug2 = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleNavigationSpan] Canceling " + _mod693.spanToJSON(activeSpan).op + " transaction because of a new navigation root span.");
      const obj6 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
      activeSpan.setStatus(obj6);
      activeSpan.end();
      const tmp5Result12 = _mod693;
    }
    const tmp5Result8 = _mod693;
  } else {
    const debug = obj3.debug;
    debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
  }
};
export { startIdleSpan };
export const getDefaultIdleNavigationSpanOptions = function getDefaultIdleNavigationSpanOptions() {
  const obj = { name, op: "navigation", forceTransaction: true, scope: _mod693.getCurrentScope() };
  return obj;
};
export const isSentryInteractionSpan = function isSentryInteractionSpan(activeSpan) {
  const items = [SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION];
  return items.includes(_mod693.spanToJSON(activeSpan).origin || "");
};
export const SCOPE_SPAN_FIELD = "_sentrySpan";
export const clearActiveSpanFromScope = function clearActiveSpanFromScope(currentScope) {
  delete tmp[tmp2];
};
export const addDefaultOpForSpanFrom = function addDefaultOpForSpanFrom(on) {
  on.on("spanStart", (setAttribute) => {
    if (!obj.spanToJSON(setAttribute).op) {
      const attr = setAttribute.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
    obj = _mod693;
  });
};
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export const addThreadInfoToSpan = function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const data = _mod693.spanToJSON(setAttribute).data;
    let tmp;
    if (null !== data) {
      if (undefined !== data) {
        tmp = data[closure_1_7];
      }
    }
    if (!tmp) {
      const attr = setAttribute.setAttribute(closure_1_7, javascript);
    }
  });
};
export const setMainThreadInfo = function setMainThreadInfo(childSpanJSON) {
  childSpanJSON.data = childSpanJSON.data || {};
  childSpanJSON.data[c7] = main;
  return childSpanJSON;
};