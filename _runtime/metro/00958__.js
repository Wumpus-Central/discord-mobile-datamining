// _runtime/metro/00958__.js
import _mod682 from "00682__.js";
import ignoreNextOnError from "../00893_ignoreNextOnError.js";
import triggerHandlers from "../00898_triggerHandlers.js";
import _mod937 from "00937__.js";
import extractSafariExtensionDetails from "../00938_extractSafariExtensionDetails.js";
import breadcrumbsIntegration from "../00942_breadcrumbsIntegration.js";
import _wrapTimeFunction from "../00941__wrapTimeFunction.js";
import browserSessionIntegration from "../00946_browserSessionIntegration.js";
import _getUnhandledRejectionError from "../00943__getUnhandledRejectionError.js";
import httpContextIntegration from "../00945_httpContextIntegration.js";
import linkedErrorsIntegration from "00944__.js";
import INTEGRATION_NAME from "00959__.js";

function addPreviousTraceSpanLink(spanContext, spanContext2, propagationContext) {
  _require = propagationContext;
  let obj = require("00682__.js");
  const spanToJSONResult = obj.spanToJSON(spanContext2);
  dependencyMap = spanToJSONResult;
  obj = {
    spanContext: spanContext2.spanContext(),
    startTimestamp: spanToJSONResult.start_timestamp,
    sampleRate: (function getSampleRate() {
      try {
        const dsc = propagationContext.dsc;
        let sample_rate;
        if (dsc != null) {
          sample_rate = dsc.sample_rate;
        }
        let NumberResult = Number(sample_rate);
        if (NumberResult == null) {
          const data = spanToJSONResult.data;
          let tmp7;
          if (data != null) {
            tmp7 = data[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
          }
          NumberResult = Number(tmp7);
        }
        return NumberResult;
      } catch (err) {
        return 0;
      }
    })(),
    sampleRand: propagationContext.sampleRand,
  };
  if (spanContext) {
    spanContext = spanContext.spanContext;
    let tmp4 = spanContext;
    if (spanContext.traceId !== spanToJSONResult.trace_id) {
      const _Date = Date;
      tmp4 = obj;
      if (Date.now() / 1000 - spanContext.startTimestamp <= 3600) {
        if (tmp(937).DEBUG_BUILD) {
          const debug = tmp(682).debug;
          const _JSON = JSON;
          const json = JSON.stringify(spanContext);
          const _JSON2 = JSON;
          obj = { op: spanToJSONResult.op };
          const merged = Object.assign(spanContext2.spanContext());
          const _HermesInternal = HermesInternal;
          debug.log("Adding previous_trace `" + json + "` link to span `" + JSON.stringify(obj) + "`");
        }
        const obj1 = { context: spanContext, attributes: null };
        const obj2 = {};
        obj2[tmp(682).SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE] = "previous_trace";
        obj1.attributes = obj2;
        spanContext2.addLink(obj1);
        ({ traceId, spanId } = spanContext);
        let num2 = 0;
        if (1 === spanContext.traceFlags) {
          num2 = 1;
        }
        const _HermesInternal2 = HermesInternal;
        const attr = spanContext2.setAttribute(c3, "" + traceId + "-" + spanId + "-" + num2);
        tmp4 = obj;
      }
    }
    return tmp4;
  } else {
    return obj;
  }
}
function storePreviousTraceInSessionStorage(arg0) {
  try {
    const sessionStorage = ignoreNextOnError.WINDOW.sessionStorage;
    const _JSON = JSON;
    const result = sessionStorage.setItem(sentry_previous_trace, JSON.stringify(arg0));
  } catch (tmp9) {
    if (_mod937.DEBUG_BUILD) {
      const debug = _mod682.debug;
      debug.warn("Could not store previous trace in sessionStorage", tmp9);
    }
  }
}
function getPreviousTraceFromSessionStorage() {
  try {
    value = undefined;
    const sessionStorage = ignoreNextOnError.WINDOW.sessionStorage;
    if (sessionStorage != null) {
      value = sessionStorage.getItem(sentry_previous_trace);
    }
    const _JSON = JSON;
    return JSON.parse(value);
  } catch (err) {}
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
triggerHandlers;
const sentry_previous_trace = "sentry_previous_trace";
let c3 = "sentry.previous_trace";

export const PREVIOUS_TRACE_KEY = "sentry_previous_trace";
export const PREVIOUS_TRACE_MAX_DURATION = 3600;
export const PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = "sentry.previous_trace";
export { addPreviousTraceSpanLink };
export { getPreviousTraceFromSessionStorage };
export const linkTraces = function linkTraces(on, linkPreviousTrace) {
  closure_1 = undefined;
  c2 = undefined;
  closure_0 = tmp;
  let tmp2;
  if ("session-storage" === linkPreviousTrace.linkPreviousTrace) {
    tmp2 = getPreviousTraceFromSessionStorage();
  }
  closure_1 = tmp2;
  on.on("spanStart", (spanContext2) => {
    if (obj.getRootSpan(spanContext2) === spanContext2) {
      const currentScope = _mod682.getCurrentScope();
      const tmp5 = addPreviousTraceSpanLink(closure_1, spanContext2, currentScope.getPropagationContext());
      closure_1 = tmp5;
      if (closure_0) {
        storePreviousTraceInSessionStorage(tmp5);
      }
      const tmpResult = _mod682;
    }
    obj = _mod682;
  });
  c2 = true;
  if (linkPreviousTrace.consistentTraceSampling) {
    on.on("beforeSampling", (spanAttributes) => {
      if (closure_1) {
        let obj = _mod682;
        const currentScope = obj.getCurrentScope();
        const propagationContext = currentScope.getPropagationContext();
        if (c2) {
          if (propagationContext.parentSpanId) {
            c2 = false;
          }
        }
        obj = {};
        const merged = Object.assign(propagationContext);
        obj = {};
        const merged1 = Object.assign(propagationContext.dsc);
        const _String = String;
        obj.sample_rate = String(closure_1.sampleRate);
        const _String2 = String;
        obj.sampled = String(1 === closure_1.spanContext.traceFlags);
        obj.dsc = obj;
        obj.sampleRand = closure_1.sampleRand;
        const result = currentScope.setPropagationContext(obj);
        spanAttributes.parentSampled = 1 === closure_1.spanContext.traceFlags;
        spanAttributes.parentSampleRate = closure_1.sampleRate;
        const obj1 = {};
        const merged2 = Object.assign(spanAttributes.spanAttributes);
        obj1[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE] = closure_1.sampleRate;
        spanAttributes.spanAttributes = obj1;
      }
    });
  }
};
export const spanContextSampled = function spanContextSampled(traceFlags) {
  return 1 === traceFlags.traceFlags;
};
export { storePreviousTraceInSessionStorage };
