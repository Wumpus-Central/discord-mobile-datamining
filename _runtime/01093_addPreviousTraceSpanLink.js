// _runtime/01093_addPreviousTraceSpanLink.js
import "addClsInstrumentationHandler";
import items from "items";
import breadcrumbsIntegration from "breadcrumbsIntegration";
import _wrapTimeFunction from "_wrapTimeFunction";
import browserSessionIntegration from "browserSessionIntegration";
import _getUnhandledRejectionError from "_getUnhandledRejectionError";
import httpContextIntegration from "httpContextIntegration";
import linkedErrorsIntegration from "linkedErrorsIntegration";
import INTEGRATION_NAME from "INTEGRATION_NAME";

function addPreviousTraceSpanLink(spanContext, spanContext2, sampleRand) {
  let spanId;
  let traceId;
  const _require = sampleRand;
  let obj = _require(817);
  const spanToJSONResult = obj.spanToJSON(spanContext2);
  const dependencyMap = spanToJSONResult;
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
        if (tmp(1072).DEBUG_BUILD) {
          const debug = tmp(817).debug;
          const _JSON = JSON;
          const json = JSON.stringify(spanContext);
          const _JSON2 = JSON;
          obj = { op: null };
          obj[0] = spanToJSONResult.op;
          const merged = Object.assign(spanContext2.spanContext());
          const _HermesInternal = HermesInternal;
          debug.log("Adding previous_trace `" + json + "` link to span `" + JSON.stringify(obj) + "`");
        }
        const obj1 = { context: null, attributes: null };
        obj1[0] = spanContext;
        const obj2 = {};
        obj2[tmp(817).SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE] = "previous_trace";
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
    const sessionStorage = require(1028) /* ignoreNextOnError */.WINDOW.sessionStorage;
    const _JSON = JSON;
    const result = sessionStorage.setItem(sentry_previous_trace, JSON.stringify(arg0));
  } catch (tmp9) {
    if (require(1072) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const debug = tmp10(817).debug;
      debug.warn("Could not store previous trace in sessionStorage", tmp9);
    }
    tmp10 = require;
  }
}
function getPreviousTraceFromSessionStorage() {
  try {
    let value;
    const sessionStorage = require(1028) /* ignoreNextOnError */.WINDOW.sessionStorage;
    if (sessionStorage != null) {
      value = sessionStorage.getItem(sentry_previous_trace);
    }
    const _JSON = JSON;
    return JSON.parse(value);
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const sentry_previous_trace = "sentry_previous_trace";
let c3 = "sentry.previous_trace";

export const PREVIOUS_TRACE_KEY = "sentry_previous_trace";
export const PREVIOUS_TRACE_MAX_DURATION = 3600;
export const PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = "sentry.previous_trace";
export { addPreviousTraceSpanLink };
export { getPreviousTraceFromSessionStorage };
export const linkTraces = function linkTraces(on, linkPreviousTrace) {
  let c1;
  let c2;
  const require = tmp;
  let tmp2;
  if ("session-storage" === linkPreviousTrace.linkPreviousTrace) {
    tmp2 = getPreviousTraceFromSessionStorage();
  }
  c1 = tmp2;
  on.on("spanStart", (arg0) => {
    if (obj.getRootSpan(arg0) === arg0) {
      const currentScope = tmp(_undefined[9]).getCurrentScope();
      const tmp5 = outer1_4(_undefined, arg0, currentScope.getPropagationContext());
      _undefined = tmp5;
      if (tmp) {
        outer1_5(tmp5);
      }
      const tmpResult = tmp(_undefined[9]);
    }
  });
  c2 = true;
  if (linkPreviousTrace.consistentTraceSampling) {
    on.on("beforeSampling", (spanAttributes) => {
      if (_undefined) {
        let obj = tmp(_undefined[9]);
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
        obj.sample_rate = String(_undefined.sampleRate);
        const _String2 = String;
        obj.sampled = String(1 === _undefined.spanContext.traceFlags);
        obj.dsc = obj;
        obj.sampleRand = _undefined.sampleRand;
        const result = currentScope.setPropagationContext(obj);
        spanAttributes.parentSampled = 1 === _undefined.spanContext.traceFlags;
        spanAttributes.parentSampleRate = _undefined.sampleRate;
        const obj1 = {};
        const merged2 = Object.assign(spanAttributes.spanAttributes);
        obj1[tmp(_undefined[9]).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE] = _undefined.sampleRate;
        spanAttributes.spanAttributes = obj1;
        const tmp2 = _undefined;
      }
    });
  }
};
export const spanContextSampled = function spanContextSampled(traceFlags) {
  return 1 === traceFlags.traceFlags;
};
export { storePreviousTraceInSessionStorage };