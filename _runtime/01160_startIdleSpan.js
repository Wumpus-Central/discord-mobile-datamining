// === Module 1160: startIdleSpan ===

// Module 1160 (startIdleSpan)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import isSentrySpan from "isSentrySpan" /* 1122 */;
import _mod1158 from "module_1158" /* 1158 */;
import onThisSpanEnd from "onThisSpanEnd" /* 1161 */;

const AppState = get_ActivityIndicator.AppState;
let c3 = "Route Change";
let obj = { idleTimeout: 1000, finalTimeout: 600000 };
function startIdleSpan(name) {
  ({ finalTimeout, idleTimeout } = arg1);
  obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = registerSpanErrorInstrumentation.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const sentryNonRecordingSpan = new registerSpanErrorInstrumentation.SentryNonRecordingSpan();
      return sentryNonRecordingSpan;
    } else {
      let tmpResult = registerSpanErrorInstrumentation;
      const currentScope = tmpResult.getCurrentScope();
      obj = { traceId: null, sampleRand: null };
      tmpResult = registerSpanErrorInstrumentation;
      obj[0] = tmpResult.generateTraceId();
      const _Math = Math;
      obj[1] = Math.random();
      const result = currentScope.setPropagationContext(obj);
      obj = { finalTimeout: null, idleTimeout: null };
      obj[0] = finalTimeout;
      obj[1] = idleTimeout;
      const startIdleSpanResult = registerSpanErrorInstrumentation.startIdleSpan(name, obj);
      const tmpResult1 = registerSpanErrorInstrumentation;
      onThisSpanEnd.cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = registerSpanErrorInstrumentation.debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const sentryNonRecordingSpan1 = new registerSpanErrorInstrumentation.SentryNonRecordingSpan();
    return sentryNonRecordingSpan1;
  }
}
const _sentrySpan = "_sentrySpan";
let c7 = "thread.name";
const main = "main";
const javascript = "javascript";

export const DEFAULT_NAVIGATION_SPAN_NAME = "Route Change";
export const defaultIdleOptions = obj;
export const startIdleNavigationSpan = (arg0) => {
  obj = arg1;
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
  obj1 = registerSpanErrorInstrumentation;
  const client = obj1.getClient();
  const obj3 = registerSpanErrorInstrumentation;
  if (client) {
    const activeSpan = obj3.getActiveSpan();
    let isRootSpanResult = activeSpan;
    if (activeSpan) {
      let tmp5Result = isSentrySpan;
      isRootSpanResult = tmp5Result.isRootSpan(activeSpan);
    }
    if (isRootSpanResult) {
      const items = [_mod1158.SPAN_ORIGIN_AUTO_INTERACTION, _mod1158.SPAN_ORIGIN_MANUAL_INTERACTION];
      tmp5Result = registerSpanErrorInstrumentation;
      isRootSpanResult = items.includes(tmp5Result.spanToJSON(activeSpan).origin || "");
      const tmp10 = tmp5Result.spanToJSON(activeSpan).origin || "";
    }
    const currentScope = registerSpanErrorInstrumentation.getCurrentScope();
    delete tmp2[tmp];
    if (isRootSpanResult) {
      if (flag) {
        const debug3 = registerSpanErrorInstrumentation.debug;
        const _HermesInternal2 = HermesInternal;
        debug3.log("[startIdleNavigationSpan] Not canceling " + registerSpanErrorInstrumentation.spanToJSON(activeSpan).op + " transaction because navigation is from app restart - preserving error context.");
        const tmp5Result2 = registerSpanErrorInstrumentation;
      }
      const _Object = Object;
      const _Object2 = Object;
      obj = { name: null, op: "navigation", forceTransaction: true, scope: null };
      obj[0] = c3;
      obj[3] = registerSpanErrorInstrumentation.getCurrentScope();
      const merged = Object.assign(Object.assign({}, obj), arg0);
      obj = { finalTimeout: null, idleTimeout: null };
      obj[0] = finalTimeout;
      obj[1] = idleTimeout;
      const obj14 = startIdleSpan(merged, obj);
      const debug4 = registerSpanErrorInstrumentation.debug;
      let str6 = merged.op;
      if (!str6) {
        str6 = "unknown op";
      }
      const _HermesInternal3 = HermesInternal;
      debug4.log("[startIdleNavigationSpan] Starting " + str6 + " transaction \"" + merged.name + "\" on scope");
      const tmp5Result3 = registerSpanErrorInstrumentation;
      const result = onThisSpanEnd.adjustTransactionDuration(client, obj14, finalTimeout);
      const attr = obj14.setAttribute(registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, _mod1158.SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM);
      return obj14;
    }
    if (isRootSpanResult) {
      const debug2 = registerSpanErrorInstrumentation.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleNavigationSpan] Canceling " + registerSpanErrorInstrumentation.spanToJSON(activeSpan).op + " transaction because of a new navigation root span.");
      obj1 = { code: null, message: "cancelled" };
      obj1[0] = registerSpanErrorInstrumentation.SPAN_STATUS_ERROR;
      activeSpan.setStatus(obj1);
      activeSpan.end();
      const tmp5Result5 = registerSpanErrorInstrumentation;
    }
    const tmp5Result1 = registerSpanErrorInstrumentation;
  } else {
    const debug = obj3.debug;
    debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
  }
};
export { startIdleSpan };
export const getDefaultIdleNavigationSpanOptions = function getDefaultIdleNavigationSpanOptions() {
  obj = { name: c3, op: "navigation", forceTransaction: true, scope: registerSpanErrorInstrumentation.getCurrentScope() };
  return obj;
};
export const isSentryInteractionSpan = function isSentryInteractionSpan(activeSpan) {
  const items = [_mod1158.SPAN_ORIGIN_AUTO_INTERACTION, _mod1158.SPAN_ORIGIN_MANUAL_INTERACTION];
  return items.includes(registerSpanErrorInstrumentation.spanToJSON(activeSpan).origin || "");
};
export const SCOPE_SPAN_FIELD = "_sentrySpan";
export const clearActiveSpanFromScope = function clearActiveSpanFromScope(currentScope) {
  delete tmp[tmp2];
};
export const addDefaultOpForSpanFrom = function addDefaultOpForSpanFrom(on) {
  on.on("spanStart", (setAttribute) => {
    if (!obj.spanToJSON(setAttribute).op) {
      const attr = setAttribute.setAttribute(callback(table[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
    obj = callback(table[1]);
  });
};
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export const addThreadInfoToSpan = function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const data = callback(table[1]).spanToJSON(setAttribute).data;
    let tmp;
    if (null !== data) {
      if (undefined !== data) {
        tmp = data[closure_7];
      }
    }
    if (!tmp) {
      const attr = setAttribute.setAttribute(closure_7, closure_9);
    }
    obj = callback(table[1]);
  });
};
export const setMainThreadInfo = function setMainThreadInfo(childSpanJSON) {
  childSpanJSON.data = childSpanJSON.data || {};
  childSpanJSON.data[c7] = main;
  return childSpanJSON;
};