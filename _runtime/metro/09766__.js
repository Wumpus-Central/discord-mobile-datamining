// === Module 9766: ? ===

// Module 9766
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9735 */;
import _mod9736 from "module_9736" /* 9736 */;
import _mod9743 from "module_9743" /* 9743 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 9745 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9767 from "module_9767" /* 9767 */;

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  const client = _mod9757.getClient();
  if (client) {
    const rootSpan = spanTimeInputToSeconds.getRootSpan(spanContext);
    if (rootSpan[_frozenDsc]) {
      return tmp5;
    } else {
      const traceState = rootSpan.spanContext().traceState;
      value = traceState;
      if (traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result = value;
      if (value) {
        result = _mod9743.baggageHeaderToDynamicSamplingContext(value);
        const tmpResult6 = _mod9743;
      }
      if (result) {
        return result;
      } else {
        const options = client.getOptions();
        const tmp9 = client.getDsn() || {};
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = _mod9767.DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: tmp9.publicKey, trace_id: spanContext.spanContext().traceId };
        const dropUndefinedKeysResult = _mod9736.dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult7 = _mod9736;
        const spanToJSONResult = spanTimeInputToSeconds.spanToJSON(rootSpan);
        const tmp13 = spanToJSONResult.data || {};
        const tmp14 = tmp13[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp14) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp14;
        }
        const description = spanToJSONResult.description;
        const tmpResult8 = spanTimeInputToSeconds;
        if (tmp17) {
          dropUndefinedKeysResult.transaction = description;
        }
        tmp17 = "url" !== tmp13[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult9.hasTracingEnabled()) {
          const _String = String;
          dropUndefinedKeysResult.sampled = String(spanTimeInputToSeconds.spanIsSampled(rootSpan));
          const tmpResult10 = spanTimeInputToSeconds;
        }
        client.emit("createDsc", dropUndefinedKeysResult, rootSpan);
        return dropUndefinedKeysResult;
      }
    }
    const tmpResult = spanTimeInputToSeconds;
  } else {
    return {};
  }
}
const _frozenDsc = "_frozenDsc";

export function freezeDscOnSpan(arg0, dsc) {
  const result = _mod9736.addNonEnumerableProperty(arg0, _frozenDsc, dsc);
}
export function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const tmp2 = getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod9767.DEFAULT_ENVIRONMENT;
  }
  const dropUndefinedKeysResult = _mod9736.dropUndefinedKeys({ environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: tmp2.publicKey, trace_id });
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
}
export function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    const tmp4 = getOptions.getDsn() || {};
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = _mod9767.DEFAULT_ENVIRONMENT;
    }
    const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: tmp4.publicKey, trace_id: propagationContext.traceId };
    const dropUndefinedKeysResult = _mod9736.dropUndefinedKeys(obj2);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
  }
  return dsc;
}
export { getDynamicSamplingContextFromSpan };
export function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return _mod9743.dynamicSamplingContextToSentryBaggageHeader(tmp);
}