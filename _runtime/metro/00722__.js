// === Module 722: ? ===

// Module 722
import spanToJSON from "spanToJSON" /* 684 */;
import unwrapScopeFromWeakRef from "unwrapScopeFromWeakRef" /* 685 */;
import _mod687 from "module_687" /* 687 */;
import MAX_BAGGAGE_STRING_LENGTH from "MAX_BAGGAGE_STRING_LENGTH" /* 700 */;
import _mod702 from "module_702" /* 702 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import _mod713 from "module_713" /* 713 */;
import DEFAULT_ENVIRONMENT2 from "DEFAULT_ENVIRONMENT" /* 723 */;

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  const client = _mod713.getClient();
  if (client) {
    const rootSpan = spanToJSON.getRootSpan(spanContext);
    const tmpResult = spanToJSON;
    const spanToJSONResult = spanToJSON.spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    value = undefined;
    if (traceState != null) {
      value = traceState.get("sentry.sample_rate");
    }
    if (value == null) {
      value = data[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    if (value == null) {
      value = data[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
    }
    if (rootSpan[_frozenDsc]) {
      let tmp23 = typeof value !== "number";
      if (typeof value !== "number") {
        tmp23 = typeof value !== "string";
      }
      if (!tmp23) {
        const _HermesInternal3 = HermesInternal;
        tmp8.sample_rate = "" + value;
      }
      return tmp8;
    } else {
      let value3;
      if (traceState != null) {
        value3 = traceState.get("sentry.dsc");
      }
      let result = value3;
      if (value3) {
        result = MAX_BAGGAGE_STRING_LENGTH.baggageHeaderToDynamicSamplingContext(value3);
        const tmpResult8 = MAX_BAGGAGE_STRING_LENGTH;
      }
      if (result) {
        let tmp21 = typeof value !== "number";
        if (typeof value !== "number") {
          tmp21 = typeof value !== "string";
        }
        if (!tmp21) {
          const _HermesInternal2 = HermesInternal;
          result.sample_rate = "" + value;
        }
        return result;
      } else {
        const options = client.getOptions();
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: client.getDsn() || {}.publicKey, trace_id: spanContext.spanContext().traceId, org_id: null };
        const tmp12 = client.getDsn() || {};
        obj2.org_id = _mod702.extractOrgIdFromClient(client);
        client.emit("createDsc", obj2);
        const description = spanToJSONResult.description;
        const tmpResult9 = _mod702;
        if (tmp14) {
          obj2.transaction = description;
        }
        tmp14 = "url" !== data[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult10.hasSpansEnabled()) {
          const _String = String;
          obj2.sampled = String(spanToJSON.spanIsSampled(rootSpan));
          let value4;
          if (traceState != null) {
            value4 = traceState.get("sentry.sample_rand");
          }
          if (value4 == null) {
            const scope = unwrapScopeFromWeakRef.getCapturedScopesOnSpan(rootSpan).scope;
            let str1;
            if (scope != null) {
              str1 = scope.getPropagationContext().sampleRand.toString();
              const str6 = scope.getPropagationContext().sampleRand;
            }
            value4 = str1;
            const tmpResult12 = unwrapScopeFromWeakRef;
          }
          obj2.sample_rand = value4;
          const tmpResult11 = spanToJSON;
        }
        let tmp18 = typeof value !== "number";
        if (typeof value !== "number") {
          tmp18 = typeof value !== "string";
        }
        if (!tmp18) {
          const _HermesInternal = HermesInternal;
          obj2.sample_rate = "" + value;
        }
        client.emit("createDsc", obj2, rootSpan);
        return obj2;
      }
    }
    const tmpResult7 = spanToJSON;
  } else {
    return {};
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _frozenDsc = "_frozenDsc";

export const freezeDscOnSpan = function freezeDscOnSpan(sentryNonRecordingSpan, dsc) {
  const result = _mod687.addNonEnumerableProperty(sentryNonRecordingSpan, _frozenDsc, dsc);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
  }
  const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: getOptions.getDsn() || {}.publicKey, trace_id, org_id: null };
  const tmp2 = getOptions.getDsn() || {};
  obj.org_id = _mod702.extractOrgIdFromClient(getOptions);
  getOptions.emit("createDsc", obj);
  return obj;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
    }
    const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: getOptions.getDsn() || {}.publicKey, trace_id: propagationContext.traceId, org_id: null };
    const tmp4 = getOptions.getDsn() || {};
    obj.org_id = _mod702.extractOrgIdFromClient(getOptions);
    getOptions.emit("createDsc", obj);
    dsc = obj;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return MAX_BAGGAGE_STRING_LENGTH.dynamicSamplingContextToSentryBaggageHeader(tmp);
};