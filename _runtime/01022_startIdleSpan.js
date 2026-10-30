// _runtime/01022_startIdleSpan.js
import _mod17 from "metro/00017__.js";
import _mod681 from "metro/00681__.js";
import _mod984 from "metro/00984__.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01020_SPAN_ORIGIN_AUTO_INTERACTION.js";
import _mod1023 from "metro/01023__.js";

const AppState = _mod17.AppState;
let c3 = "Route Change";
const defaultIdleOptions = { idleTimeout: 1000, finalTimeout: 600000 };
function startIdleSpan(name, arg1) {
  ({ finalTimeout, idleTimeout } = arg1);
  const client = _mod681.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = _mod681.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const sentryNonRecordingSpan = new _mod681.SentryNonRecordingSpan();
      return sentryNonRecordingSpan;
    } else {
      const currentScope = _mod681.getCurrentScope();
      const obj2 = { traceId: null, sampleRand: null };
      const tmpResult = _mod681;
      obj2.traceId = _mod681.generateTraceId();
      const _Math = Math;
      obj2.sampleRand = Math.random();
      const result = currentScope.setPropagationContext(obj2);
      const tmpResult4 = _mod681;
      const obj3 = { finalTimeout, idleTimeout };
      const startIdleSpanResult = _mod681.startIdleSpan(name, obj3);
      const tmpResult5 = _mod681;
      _mod1023.cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = _mod681.debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const sentryNonRecordingSpan1 = new _mod681.SentryNonRecordingSpan();
    return sentryNonRecordingSpan1;
  }
}
const _sentrySpan = "_sentrySpan";
let c7 = "thread.name";
const main = "main";
const javascript = "javascript";

export const DEFAULT_NAVIGATION_SPAN_NAME = "Route Change";
export { defaultIdleOptions };
export (arg0) => {
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
  const client = _mod681.getClient();
  const obj3 = _mod681;
  if (client) {
    const activeSpan = obj3.getActiveSpan();
    let isRootSpanResult = activeSpan;
    if (activeSpan) {
      isRootSpanResult = _mod984.isRootSpan(activeSpan);
      const tmp5Result = _mod984;
    }
    if (isRootSpanResult) {
      const items = [SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION];
      const tmp5Result7 = _mod681;
      isRootSpanResult = items.includes(_mod681.spanToJSON(activeSpan).origin || "");
      const tmp10 = _mod681.spanToJSON(activeSpan).origin || "";
    }
    const currentScope = _mod681.getCurrentScope();
    delete tmp2[tmp];
    if (isRootSpanResult) {
      if (flag) {
        const debug3 = _mod681.debug;
        const _HermesInternal2 = HermesInternal;
        debug3.log("[startIdleNavigationSpan] Not canceling " + _mod681.spanToJSON(activeSpan).op + " transaction because navigation is from app restart - preserving error context.");
        const tmp5Result9 = _mod681;
      }
      const _Object = Object;
      const _Object2 = Object;
      const obj4 = { name, op: "navigation", forceTransaction: true, scope: _mod681.getCurrentScope() };
      const merged = Object.assign(Object.assign({}, obj4), arg0);
      const obj5 = { finalTimeout, idleTimeout };
      const obj14 = startIdleSpan(merged, obj5);
      const debug4 = _mod681.debug;
      let str6 = merged.op;
      if (!str6) {
        str6 = "unknown op";
      }
      const _HermesInternal3 = HermesInternal;
      debug4.log("[startIdleNavigationSpan] Starting " + str6 + " transaction \"" + merged.name + "\" on scope");
      const tmp5Result10 = _mod681;
      const result = _mod1023.adjustTransactionDuration(client, obj14, finalTimeout);
      const attr = obj14.setAttribute(_mod681.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM);
      return obj14;
    }
    if (isRootSpanResult) {
      const debug2 = _mod681.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleNavigationSpan] Canceling " + _mod681.spanToJSON(activeSpan).op + " transaction because of a new navigation root span.");
      const obj6 = { code: _mod681.SPAN_STATUS_ERROR, message: "cancelled" };
      activeSpan.setStatus(obj6);
      activeSpan.end();
      const tmp5Result12 = _mod681;
    }
    const tmp5Result8 = _mod681;
  } else {
    const debug = obj3.debug;
    debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
  }
}
export { startIdleSpan };
export function getDefaultIdleNavigationSpanOptions() {
  const obj = { name, op: "navigation", forceTransaction: true, scope: _mod681.getCurrentScope() };
  return obj;
}
export function isSentryInteractionSpan(activeSpan) {
  const items = [SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION];
  return items.includes(_mod681.spanToJSON(activeSpan).origin || "");
}
export const SCOPE_SPAN_FIELD = "_sentrySpan";
export function clearActiveSpanFromScope(currentScope) {
  delete tmp[tmp2];
}
export function addDefaultOpForSpanFrom(on) {
  on.on("spanStart", (setAttribute) => {
    if (!obj.spanToJSON(setAttribute).op) {
      const attr = setAttribute.setAttribute(_mod681.SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
    obj = _mod681;
  });
}
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const data = _mod681.spanToJSON(setAttribute).data;
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
}
export function setMainThreadInfo(childSpanJSON) {
  childSpanJSON.data = childSpanJSON.data || {};
  childSpanJSON.data[c7] = main;
  return childSpanJSON;
}