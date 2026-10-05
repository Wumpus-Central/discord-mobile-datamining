// _runtime/00969_PREVIOUS_TRACE_KEY.js
import _mod693 from "metro/00693__.js";
import _mod904 from "metro/00904__.js";
import _mod948 from "metro/00948__.js";
import _addMeasureSpans from "00909__addMeasureSpans.js";
import chromeStackLineParser from "00949_chromeStackLineParser.js";
import breadcrumbsIntegration from "00953_breadcrumbsIntegration.js";
import browserApiErrorsIntegration from "00952_browserApiErrorsIntegration.js";
import browserSessionIntegration from "00957_browserSessionIntegration.js";
import _eventFromRejectionWithPrimitive from "00954__eventFromRejectionWithPrimitive.js";
import httpContextIntegration from "00956_httpContextIntegration.js";
import linkedErrorsIntegration from "metro/00955__.js";
import INTEGRATION_NAME from "metro/00970__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function addPreviousTraceSpanLink(spanContext, spanContext2, propagationContext) {
  let obj5;
  let spanId;
  let traceId;
  function getSampleRate() {
    try {
      const dsc = propagationContext.dsc;
      let sample_rate;
      const _Number = Number;
      if (dsc != null) {
        sample_rate = dsc.sample_rate;
      }
      let _NumberResult = _Number(sample_rate);
      if (_NumberResult == null) {
        const data = dependencyMap.data;
        let tmp7;
        const _Number2 = Number;
        if (data != null) {
          tmp7 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        }
        _NumberResult = _Number2(tmp7);
      }
      return _NumberResult;
    } catch (err) {
      return 0;
    }
  }
  _require = propagationContext;
  const obj = require("metro/00693__.js");
  const spanToJSONResult = obj.spanToJSON(spanContext2);
  dependencyMap = spanToJSONResult;
  const obj2 = {
    spanContext: spanContext2.spanContext(),
    startTimestamp: spanToJSONResult.start_timestamp,
    sampleRate: getSampleRate(),
    sampleRand: propagationContext.sampleRand,
  };
  if (spanContext) {
    spanContext = spanContext.spanContext;
    let tmp4 = spanContext;
    if (spanContext.traceId !== spanToJSONResult.trace_id) {
      const _Date = Date;
      tmp4 = obj2;
      if (Date.now() / 1000 - spanContext.startTimestamp <= 3600) {
        if (require("metro/00948__.js").DEBUG_BUILD) {
          const debug = tmp(693).debug;
          const _JSON = JSON;
          const log = debug.log;
          const json = JSON.stringify(spanContext);
          const _JSON2 = JSON;
          const obj3 = { op: spanToJSONResult.op };
          const merged = Object.assign(spanContext2.spanContext());
          const _HermesInternal = HermesInternal;
          log("Adding previous_trace `" + json + "` link to span `" + stringify(obj3) + "`");
        }
        const obj4 = { context: spanContext, attributes: obj5 };
        obj5 = {};
        obj5[require("metro/00693__.js").SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE] = "previous_trace";
        spanContext2.addLink(obj4);
        ({ traceId, spanId } = spanContext);
        let num2 = 0;
        const setAttribute = spanContext2.setAttribute;
        if (1 === spanContext.traceFlags) {
          num2 = 1;
        }
        const _HermesInternal2 = HermesInternal;
        const attr = setAttribute(c3, "" + traceId + "-" + spanId + "-" + num2);
        tmp4 = obj2;
      }
    }
    return tmp4;
  } else {
    return obj2;
  }
}
function storePreviousTraceInSessionStorage(arg0) {
  try {
    const sessionStorage = _mod904.WINDOW.sessionStorage;
    const _JSON = JSON;
    const result = sessionStorage.setItem(sentry_previous_trace, JSON.stringify(arg0));
  } catch (tmp9) {
    if (_mod948.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.warn("Could not store previous trace in sessionStorage", tmp9);
    }
  }
}
function getPreviousTraceFromSessionStorage() {
  try {
    let value;
    const sessionStorage = _mod904.WINDOW.sessionStorage;
    if (sessionStorage != null) {
      value = sessionStorage.getItem(sentry_previous_trace);
    }
    const _JSON = JSON;
    return JSON.parse(value);
  } catch (err) {}
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
  let closure_1;
  let c2;
  let closure_0 = tmp;
  let tmp2;
  const consistentTraceSampling = linkPreviousTrace.consistentTraceSampling;
  if ("session-storage" === linkPreviousTrace.linkPreviousTrace) {
    tmp2 = getPreviousTraceFromSessionStorage();
  }
  closure_1 = tmp2;
  on.on("spanStart", (spanContext2) => {
    const obj = _mod693;
    if (obj.getRootSpan(spanContext2) === spanContext2) {
      const tmpResult = _mod693;
      const currentScope = tmpResult.getCurrentScope();
      const tmp5 = addPreviousTraceSpanLink(closure_1, spanContext2, currentScope.getPropagationContext());
      closure_1 = tmp5;
      if (closure_0) {
        storePreviousTraceInSessionStorage(tmp5);
      }
    }
  });
  c2 = true;
  if (consistentTraceSampling) {
    on.on("beforeSampling", (spanAttributes) => {
      let obj3;
      if (closure_1) {
        const obj = _mod693;
        const currentScope = obj.getCurrentScope();
        const propagationContext = currentScope.getPropagationContext();
        const tmp5 = c2;
        if (tmp5) {
          if (propagationContext.parentSpanId) {
            c2 = false;
          }
        }
        const setPropagationContext = currentScope.setPropagationContext;
        const obj2 = { dsc: obj3, sampleRand: closure_1.sampleRand };
        const merged = Object.assign(propagationContext);
        obj3 = { sample_rate: String(closure_1.sampleRate), sampled: String(1 === closure_1.spanContext.traceFlags) };
        const merged1 = Object.assign(propagationContext.dsc);
        const _String = String;
        const _String2 = String;
        const result = setPropagationContext(obj2);
        spanAttributes.parentSampled = 1 === closure_1.spanContext.traceFlags;
        spanAttributes.parentSampleRate = closure_1.sampleRate;
        const obj4 = {};
        const merged2 = Object.assign(spanAttributes.spanAttributes);
        obj4[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE] = closure_1.sampleRate;
        spanAttributes.spanAttributes = obj4;
      }
    });
  }
};
export const spanContextSampled = function spanContextSampled(traceFlags) {
  return 1 === traceFlags.traceFlags;
};
export { storePreviousTraceInSessionStorage };
