// _runtime/metro/12833__.js
import _mod12803 from "12803__.js";
import BAGGAGE_HEADER_NAME from "../12810_BAGGAGE_HEADER_NAME.js";
import _mod12824 from "12824__.js";
import _mod12834 from "12834__.js";

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  let obj = _mod12824;
  const client = obj.getClient();
  if (client) {
    let tmpResult = tmp(12802);
    const rootSpan = tmpResult.getRootSpan(spanContext);
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
        tmpResult = tmp(12810);
        result = tmpResult.baggageHeaderToDynamicSamplingContext(value);
      }
      if (result) {
        return result;
      } else {
        const options = client.getOptions();
        const tmp9 = client.getDsn() || {};
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(12834).DEFAULT_ENVIRONMENT;
        }
        obj = {
          environment: DEFAULT_ENVIRONMENT,
          release: options.release,
          public_key: tmp9.publicKey,
          trace_id: spanContext.spanContext().traceId,
        };
        const dropUndefinedKeysResult = tmp(12803).dropUndefinedKeys(obj);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult1 = tmp(12803);
        const spanToJSONResult = tmp(12802).spanToJSON(rootSpan);
        const tmp13 = spanToJSONResult.data || {};
        const tmp14 = tmp13[tmp(undefined, 12812).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp14) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp14;
        }
        const description = spanToJSONResult.description;
        const tmpResult2 = tmp(12802);
        if (tmp17) {
          dropUndefinedKeysResult.transaction = description;
        }
        tmp17 = "url" !== tmp13[tmp(undefined, 12812).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult3.hasTracingEnabled()) {
          const _String = String;
          dropUndefinedKeysResult.sampled = String(tmp(12802).spanIsSampled(rootSpan));
          const tmpResult4 = tmp(12802);
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

export const freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = _mod12803.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let obj = _mod12803;
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod12834.DEFAULT_ENVIRONMENT;
  }
  obj = {
    environment: DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key: getOptions.getDsn() || {}.publicKey,
    trace_id,
  };
  const dropUndefinedKeysResult = obj.dropUndefinedKeys(obj);
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(
  getOptions,
  getPropagationContext,
) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    let obj = _mod12803;
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(12834).DEFAULT_ENVIRONMENT;
    }
    obj = {
      environment: DEFAULT_ENVIRONMENT,
      release: options.release,
      public_key: getOptions.getDsn() || {}.publicKey,
      trace_id: propagationContext.traceId,
    };
    const dropUndefinedKeysResult = obj.dropUndefinedKeys(obj);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
    const tmp4 = getOptions.getDsn() || {};
    tmp5 = require;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
