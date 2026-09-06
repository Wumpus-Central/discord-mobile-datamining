// === Module 958: addPreviousTraceSpanLink ===

// Module 958 (addPreviousTraceSpanLink)
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import addClsInstrumentationHandler from "addClsInstrumentationHandler" /* 898 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 937 */;
import items from "items" /* 938 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 942 */;
import _wrapTimeFunction from "_wrapTimeFunction" /* 941 */;
import browserSessionIntegration from "browserSessionIntegration" /* 946 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 943 */;
import httpContextIntegration from "httpContextIntegration" /* 945 */;
import linkedErrorsIntegration from "linkedErrorsIntegration" /* 944 */;
import INTEGRATION_NAME from "INTEGRATION_NAME" /* 959 */;

function addPreviousTraceSpanLink(spanContext, spanContext2, sampleRand) {
  const _require = sampleRand;
  let obj = _require(682);
  const spanToJSONResult = obj.spanToJSON(spanContext2);
  dependencyMap = spanToJSONResult;
  obj = {
    spanContext: spanContext2.spanContext(),
    startTimestamp: spanToJSONResult.start_timestamp,
    sampleRate: (function getSampleRate() {
      try {
        const dsc = sampleRand.dsc;
        let sample_rate;
        if (dsc != null) {
          sample_rate = dsc.sample_rate;
        }
        let NumberResult = Number(sample_rate);
        if (NumberResult == null) {
          const data = spanToJSONResult.data;
          let tmp7;
          if (data != null) {
            tmp7 = data[sampleRand(undefined, spanToJSONResult[9]).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
          }
          NumberResult = Number(tmp7);
        }
        return NumberResult;
      } catch (err) {
        return 0;
      }
    })(),
    sampleRand: sampleRand.sampleRand
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
          obj = { op: null };
          obj[0] = spanToJSONResult.op;
          const merged = Object.assign(spanContext2.spanContext());
          const _HermesInternal = HermesInternal;
          debug.log("Adding previous_trace `" + json + "` link to span `" + JSON.stringify(obj) + "`");
        }
        obj1 = { context: null, attributes: null };
        obj1[0] = spanContext;
        const obj2 = {};
        obj2[tmp(682).SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE] = "previous_trace";
        obj1[1] = obj2;
        spanContext2.addLink(obj1);
        ({ traceId, spanId } = spanContext);
        let num2 = 0;
        if (1 === spanContext.traceFlags) {
          num2 = 1;
        }
        const _HermesInternal2 = HermesInternal;
        const attr = spanContext2.setAttribute(c3, "" + traceId + "-" + spanId + "-" + num2);
        tmp4 = obj;
        const tmp11 = c3;
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
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = tmp10(682).debug;
      debug.warn("Could not store previous trace in sessionStorage", tmp9);
    }
    tmp10 = require;
  }
}
function getPreviousTraceFromSessionStorage() {
  try {
    let value;
    const sessionStorage = ignoreNextOnError.WINDOW.sessionStorage;
    if (sessionStorage != null) {
      value = sessionStorage.getItem(sentry_previous_trace);
    }
    const _JSON = JSON;
    return JSON.parse(value);
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
addClsInstrumentationHandler;
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
  on.on("spanStart", (arg0) => {
    if (obj.getRootSpan(arg0) === arg0) {
      const currentScope = callback(closure_1[9]).getCurrentScope();
      const tmp5 = closure_1_4(closure_1, arg0, currentScope.getPropagationContext());
      closure_1 = tmp5;
      if (callback) {
        closure_1_5(tmp5);
      }
      const tmpResult = callback(closure_1[9]);
    }
  });
  c2 = true;
  if (linkPreviousTrace.consistentTraceSampling) {
    on.on("beforeSampling", (spanAttributes) => {
      if (closure_1) {
        let obj = callback(closure_1[9]);
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
        obj1 = {};
        const merged2 = Object.assign(spanAttributes.spanAttributes);
        obj1[callback(closure_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE] = closure_1.sampleRate;
        spanAttributes.spanAttributes = obj1;
        const tmp = callback;
        const tmp2 = closure_1;
      }
    });
  }
};
export const spanContextSampled = function spanContextSampled(traceFlags) {
  return 1 === traceFlags.traceFlags;
};
export { storePreviousTraceInSessionStorage };