// === Module 733: freezeDscOnSpan ===

// Module 733 (freezeDscOnSpan)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import _mod696 from "module_696" /* 696 */;
import _mod698 from "module_698" /* 698 */;
import MAX_BAGGAGE_STRING_LENGTH from "MAX_BAGGAGE_STRING_LENGTH" /* 711 */;
import _mod713 from "module_713" /* 713 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 715 */;
import _mod724 from "module_724" /* 724 */;
import _mod731 from "module_731" /* 731 */;
import DEFAULT_ENVIRONMENT2 from "DEFAULT_ENVIRONMENT" /* 734 */;

function getDynamicSamplingContextFromSpan(spanContext) {
  let tmpResult9;
  const obj = _mod724;
  const client = obj.getClient();
  if (client) {
    const tmpResult = TRACE_FLAG_NONE;
    const rootSpan = tmpResult.getRootSpan(spanContext);
    const tmpResult7 = TRACE_FLAG_NONE;
    const spanToJSONResult = tmpResult7.spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    let value;
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
        rootSpan[_frozenDsc].sample_rate = "" + value;
      }
      return rootSpan[_frozenDsc];
    } else {
      let value3;
      if (traceState != null) {
        value3 = traceState.get("sentry.dsc");
      }
      let result = value3;
      if (result) {
        const tmpResult8 = MAX_BAGGAGE_STRING_LENGTH;
        result = tmpResult8.baggageHeaderToDynamicSamplingContext(value3);
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
        const traceId = spanContext.spanContext().traceId;
        const options = client.getOptions();
        let DEFAULT_ENVIRONMENT = options.environment;
        const publicKey = (client.getDsn() || {}).publicKey;
        client.getDsn() || {};
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId, org_id: tmpResult9.extractOrgIdFromClient(client) };
        tmpResult9 = _mod713;
        client.emit("createDsc", obj2);
        const description = spanToJSONResult.description;
        const tmp14 = "url" !== data[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmp14) {
          obj2.transaction = description;
        }
        const tmpResult10 = _mod731;
        if (tmpResult10.hasSpansEnabled()) {
          const _String = String;
          const tmpResult11 = TRACE_FLAG_NONE;
          obj2.sampled = String(tmpResult11.spanIsSampled(rootSpan));
          let value4;
          if (traceState != null) {
            value4 = traceState.get("sentry.sample_rand");
          }
          if (value4 == null) {
            const tmpResult12 = _mod696;
            const scope = tmpResult12.getCapturedScopesOnSpan(rootSpan).scope;
            let str1;
            if (scope != null) {
              const str6 = scope.getPropagationContext().sampleRand;
              str1 = str6.toString();
            }
            value4 = str1;
          }
          obj2.sample_rand = value4;
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
  } else {
    return {};
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _frozenDsc = "_frozenDsc";

export const freezeDscOnSpan = function freezeDscOnSpan(sentryNonRecordingSpan, dsc) {
  const obj = _mod698;
  const result = obj.addNonEnumerableProperty(sentryNonRecordingSpan, _frozenDsc, dsc);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  let obj2;
  const options = getOptions.getOptions();
  let DEFAULT_ENVIRONMENT = options.environment;
  const publicKey = (getOptions.getDsn() || {}).publicKey;
  getOptions.getDsn() || {};
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
  }
  const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id, org_id: obj2.extractOrgIdFromClient(getOptions) };
  obj2 = _mod713;
  getOptions.emit("createDsc", obj);
  return obj;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  let obj2;
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const traceId = propagationContext.traceId;
    const options = getOptions.getOptions();
    let DEFAULT_ENVIRONMENT = options.environment;
    const publicKey = (getOptions.getDsn() || {}).publicKey;
    getOptions.getDsn() || {};
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
    }
    const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId, org_id: obj2.extractOrgIdFromClient(getOptions) };
    obj2 = _mod713;
    getOptions.emit("createDsc", obj);
    dsc = obj;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  const obj = MAX_BAGGAGE_STRING_LENGTH;
  return obj.dynamicSamplingContextToSentryBaggageHeader(tmp);
};