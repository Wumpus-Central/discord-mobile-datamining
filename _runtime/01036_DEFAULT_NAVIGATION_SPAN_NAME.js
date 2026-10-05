// _runtime/01036_DEFAULT_NAVIGATION_SPAN_NAME.js
import react_native from "00017_react-native.js";
import _mod693 from "metro/00693__.js";
import _mod998 from "metro/00998__.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01034_SPAN_ORIGIN_AUTO_INTERACTION.js";
import _mod1037 from "metro/01037__.js";

const AppState = react_native.AppState;
let c3 = "Route Change";
const defaultIdleOptions = { idleTimeout: 1000, finalTimeout: 600000 };
function startIdleSpan(name, arg1) {
  let finalTimeout;
  let idleTimeout;
  let tmpResult4;
  ({ finalTimeout, idleTimeout } = arg1);
  const obj = _mod693;
  const client = obj.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const self3 = this;
      const self4 = this;
      const sentryNonRecordingSpan = new _mod693.SentryNonRecordingSpan();
      return sentryNonRecordingSpan;
    } else {
      const tmpResult = _mod693;
      const currentScope = tmpResult.getCurrentScope();
      const setPropagationContext = currentScope.setPropagationContext;
      const obj2 = { traceId: tmpResult4.generateTraceId(), sampleRand: Math.random() };
      const _Math = Math;
      tmpResult4 = _mod693;
      const result = setPropagationContext(obj2);
      const obj3 = { finalTimeout, idleTimeout };
      const tmpResult5 = _mod693;
      const startIdleSpanResult = tmpResult5.startIdleSpan(name, obj3);
      const tmpResult6 = _mod1037;
      tmpResult6.cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = _mod693.debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const self = this;
    const self2 = this;
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
  let tmp3Result10;
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
  const obj2 = _mod693;
  const client = obj2.getClient();
  const obj3 = _mod693;
  if (client) {
    const activeSpan = obj3.getActiveSpan();
    let isRootSpanResult = activeSpan;
    if (isRootSpanResult) {
      const tmp3Result = _mod998;
      isRootSpanResult = tmp3Result.isRootSpan(activeSpan);
    }
    if (isRootSpanResult) {
      const items = [
        SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION,
        SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION,
      ];
      const includes = items.includes;
      const tmp3Result7 = _mod693;
      const tmp8 = tmp3Result7.spanToJSON(activeSpan).origin || "";
      isRootSpanResult = includes(tmp8);
    }
    _mod693;
    delete obj7.getCurrentScope(obj7)[_sentrySpan];
    if (isRootSpanResult) {
      if (flag) {
        const debug3 = _mod693.debug;
        const log2 = debug3.log;
        const _HermesInternal2 = HermesInternal;
        const tmp3Result9 = _mod693;
        log2(
          "[startIdleNavigationSpan] Not canceling " +
            tmp3Result9.spanToJSON(activeSpan).op +
            " transaction because navigation is from app restart - preserving error context.",
        );
      }
      const _Object = Object;
      const _Object2 = Object;
      const assign2 = Object.assign;
      const obj4 = { name, op: "navigation", forceTransaction: true, scope: tmp3Result10.getCurrentScope() };
      tmp3Result10 = _mod693;
      const obj5 = assign(assign2({}, obj4), arg0);
      const obj6 = { finalTimeout, idleTimeout };
      const tmp20 = startIdleSpan(obj5, obj6);
      const debug4 = _mod693.debug;
      let str6 = obj5.op;
      const log3 = debug4.log;
      if (!str6) {
        str6 = "unknown op";
      }
      const _HermesInternal3 = HermesInternal;
      log3("[startIdleNavigationSpan] Starting " + str6 + ' transaction "' + obj5.name + '" on scope');
      const tmp3Result11 = _mod1037;
      const result = tmp3Result11.adjustTransactionDuration(client, tmp20, finalTimeout);
      const setAttribute = tmp20.setAttribute;
      const attr = setAttribute(
        _mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM,
      );
      return tmp20;
    }
    if (isRootSpanResult) {
      const debug2 = _mod693.debug;
      const log = debug2.log;
      const _HermesInternal = HermesInternal;
      const tmp3Result12 = _mod693;
      log(
        "[startIdleNavigationSpan] Canceling " +
          tmp3Result12.spanToJSON(activeSpan).op +
          " transaction because of a new navigation root span.",
      );
      const setStatus = activeSpan.setStatus;
      const obj8 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
      setStatus(obj8);
      activeSpan.end();
    }
  } else {
    const debug = obj3.debug;
    debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
  }
};
export { startIdleSpan };
export const getDefaultIdleNavigationSpanOptions = function getDefaultIdleNavigationSpanOptions() {
  let obj2;
  const obj = { name, op: "navigation", forceTransaction: true, scope: obj2.getCurrentScope() };
  obj2 = _mod693;
  return obj;
};
export const isSentryInteractionSpan = function isSentryInteractionSpan(activeSpan) {
  const items = [
    SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION,
    SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_MANUAL_INTERACTION,
  ];
  const includes = items.includes;
  const obj = _mod693;
  const tmp = obj.spanToJSON(activeSpan).origin || "";
  return includes(tmp);
};
export const SCOPE_SPAN_FIELD = "_sentrySpan";
export const clearActiveSpanFromScope = function clearActiveSpanFromScope(currentScope) {
  delete currentScope[_sentrySpan];
};
export const addDefaultOpForSpanFrom = function addDefaultOpForSpanFrom(on) {
  on.on("spanStart", (setAttribute) => {
    const obj = _mod693;
    if (!obj.spanToJSON(setAttribute).op) {
      const attr = setAttribute.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
  });
};
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export const addThreadInfoToSpan = function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const obj = _mod693;
    const data = obj.spanToJSON(setAttribute).data;
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
export const setMainThreadInfo = function setMainThreadInfo(childSpanJSON2) {
  childSpanJSON2.data = childSpanJSON2.data || {};
  childSpanJSON2.data[c7] = main;
  return childSpanJSON2;
};
