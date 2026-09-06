// === Module 1025: startIdleSpan ===

// Module 1025 (startIdleSpan)
import _mod17 from "module_17" /* 17 */;
import _mod682 from "module_682" /* 682 */;
import _mod987 from "module_987" /* 987 */;
import SPAN_ORIGIN_AUTO_INTERACTION from "SPAN_ORIGIN_AUTO_INTERACTION" /* 1023 */;
import _mod1026 from "module_1026" /* 1026 */;

const AppState = _mod17.AppState;
let c3 = "Route Change";
const defaultIdleOptions = { idleTimeout: 1000, finalTimeout: 600000 };
function startIdleSpan(name, arg1) {
  ({ finalTimeout, idleTimeout } = arg1);
  let obj = _mod682;
  const client = obj.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = _mod682.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const sentryNonRecordingSpan = new _mod682.SentryNonRecordingSpan();
      return sentryNonRecordingSpan;
    } else {
      let tmpResult = _mod682;
      const currentScope = tmpResult.getCurrentScope();
      obj = { traceId: null, sampleRand: null };
      tmpResult = _mod682;
      obj.traceId = tmpResult.generateTraceId();
      const _Math = Math;
      obj.sampleRand = Math.random();
      const result = currentScope.setPropagationContext(obj);
      obj = { finalTimeout, idleTimeout };
      const startIdleSpanResult = _mod682.startIdleSpan(name, obj);
      const tmpResult1 = _mod682;
      _mod1026.cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = _mod682.debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const sentryNonRecordingSpan1 = new _mod682.SentryNonRecordingSpan();
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
  let obj1 = _mod682;
  const client = obj1.getClient();
  const obj3 = _mod682;
  if (client) {
    const activeSpan = obj3.getActiveSpan();
    let isRootSpanResult = activeSpan;
    if (activeSpan) {
      let tmp5Result = _mod987;
      isRootSpanResult = tmp5Result.isRootSpan(activeSpan);
    }
    if (isRootSpanResult) {
      const items = [SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION];
      tmp5Result = _mod682;
      isRootSpanResult = items.includes(tmp5Result.spanToJSON(activeSpan).origin || "");
      const tmp10 = tmp5Result.spanToJSON(activeSpan).origin || "";
    }
    const currentScope = _mod682.getCurrentScope();
    delete tmp2[tmp];
    if (isRootSpanResult) {
      if (flag) {
        const debug3 = _mod682.debug;
        const _HermesInternal2 = HermesInternal;
        debug3.log("[startIdleNavigationSpan] Not canceling " + _mod682.spanToJSON(activeSpan).op + " transaction because navigation is from app restart - preserving error context.");
        const tmp5Result2 = _mod682;
      }
      const _Object = Object;
      const _Object2 = Object;
      obj = { name, op: "navigation", forceTransaction: true, scope: _mod682.getCurrentScope() };
      const merged = Object.assign(Object.assign({}, obj), arg0);
      obj = { finalTimeout, idleTimeout };
      const obj14 = startIdleSpan(merged, obj);
      const debug4 = _mod682.debug;
      let str6 = merged.op;
      if (!str6) {
        str6 = "unknown op";
      }
      const _HermesInternal3 = HermesInternal;
      debug4.log("[startIdleNavigationSpan] Starting " + str6 + " transaction \"" + merged.name + "\" on scope");
      const tmp5Result3 = _mod682;
      const result = _mod1026.adjustTransactionDuration(client, obj14, finalTimeout);
      const attr = obj14.setAttribute(_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM);
      return obj14;
    }
    if (isRootSpanResult) {
      const debug2 = _mod682.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleNavigationSpan] Canceling " + _mod682.spanToJSON(activeSpan).op + " transaction because of a new navigation root span.");
      obj1 = { code: _mod682.SPAN_STATUS_ERROR, message: "cancelled" };
      activeSpan.setStatus(obj1);
      activeSpan.end();
      const tmp5Result5 = _mod682;
    }
    const tmp5Result1 = _mod682;
  } else {
    const debug = obj3.debug;
    debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
  }
};
export { startIdleSpan };
export const getDefaultIdleNavigationSpanOptions = function getDefaultIdleNavigationSpanOptions() {
  const obj = { name, op: "navigation", forceTransaction: true, scope: _mod682.getCurrentScope() };
  return obj;
};
export const isSentryInteractionSpan = function isSentryInteractionSpan(activeSpan) {
  const items = [SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION];
  return items.includes(_mod682.spanToJSON(activeSpan).origin || "");
};
export const SCOPE_SPAN_FIELD = "_sentrySpan";
export const clearActiveSpanFromScope = function clearActiveSpanFromScope(currentScope) {
  delete tmp[tmp2];
};
export const addDefaultOpForSpanFrom = function addDefaultOpForSpanFrom(on) {
  on.on("spanStart", (setAttribute) => {
    if (!obj.spanToJSON(setAttribute).op) {
      const attr = setAttribute.setAttribute(_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
    obj = _mod682;
  });
};
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export const addThreadInfoToSpan = function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const data = _mod682.spanToJSON(setAttribute).data;
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