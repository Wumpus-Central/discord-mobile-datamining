// === Module 7812: getDynamicSamplingContextFromSpan ===

// Module 7812 (getDynamicSamplingContextFromSpan)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 7782 */;
import baggageHeaderToDynamicSamplingContext from "baggageHeaderToDynamicSamplingContext" /* 7789 */;
import getClient from "getClient" /* 7803 */;
import _mod7813 from "module_7813" /* 7813 */;

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  let obj = getClient;
  const client = obj.getClient();
  if (client) {
    let tmpResult = tmp(7781);
    const rootSpan = tmpResult.getRootSpan(spanContext);
    if (rootSpan[_frozenDsc]) {
      return tmp5;
    } else {
      const traceState = rootSpan.spanContext().traceState;
      let value = traceState;
      if (traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result = value;
      if (value) {
        tmpResult = tmp(7789);
        result = tmpResult.baggageHeaderToDynamicSamplingContext(value);
      }
      if (result) {
        return result;
      } else {
        const options = client.getOptions();
        const tmp9 = client.getDsn() || {};
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(7813).DEFAULT_ENVIRONMENT;
        }
        obj = { environment: null, release: null, public_key: null, trace_id: null };
        obj[0] = DEFAULT_ENVIRONMENT;
        obj[1] = options.release;
        obj[2] = tmp9.publicKey;
        obj[3] = spanContext.spanContext().traceId;
        const dropUndefinedKeysResult = tmp(7782).dropUndefinedKeys(obj);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult1 = tmp(7782);
        const spanToJSONResult = tmp(7781).spanToJSON(rootSpan);
        const tmp13 = spanToJSONResult.data || {};
        const tmp14 = tmp13[tmp(undefined, 7791).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp14) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp14;
        }
        const description = spanToJSONResult.description;
        const tmpResult2 = tmp(7781);
        if (tmp17) {
          dropUndefinedKeysResult.transaction = description;
        }
        tmp17 = "url" !== tmp13[tmp(undefined, 7791).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult3.hasTracingEnabled()) {
          const _String = String;
          dropUndefinedKeysResult.sampled = String(tmp(7781).spanIsSampled(rootSpan));
          const tmpResult4 = tmp(7781);
        }
        client.emit("createDsc", dropUndefinedKeysResult, rootSpan);
        return dropUndefinedKeysResult;
      }
    }
  } else {
    return {};
  }
}
const _frozenDsc = "_frozenDsc";
arg5.freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
arg5.getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let obj = addNonEnumerableProperty;
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod7813.DEFAULT_ENVIRONMENT;
  }
  obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: getOptions.getDsn() || {}.publicKey, trace_id };
  const dropUndefinedKeysResult = obj.dropUndefinedKeys(obj);
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
};
arg5.getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    let obj = addNonEnumerableProperty;
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(7813).DEFAULT_ENVIRONMENT;
    }
    obj = { environment: null, release: null, public_key: null, trace_id: null };
    obj[0] = DEFAULT_ENVIRONMENT;
    obj[1] = options.release;
    obj[2] = getOptions.getDsn() || {}.publicKey;
    obj[3] = propagationContext.traceId;
    const dropUndefinedKeysResult = obj.dropUndefinedKeys(obj);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
    const tmp4 = getOptions.getDsn() || {};
    tmp5 = require;
  }
  return dsc;
};
arg5.getDynamicSamplingContextFromSpan = getDynamicSamplingContextFromSpan;
arg5.spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return baggageHeaderToDynamicSamplingContext.dynamicSamplingContextToSentryBaggageHeader(tmp);
};