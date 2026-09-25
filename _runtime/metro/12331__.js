// _runtime/metro/12331__.js
import spanTimeInputToSeconds from "../12300_spanTimeInputToSeconds.js";
import _mod12301 from "12301__.js";
import BAGGAGE_HEADER_NAME from "../12308_BAGGAGE_HEADER_NAME.js";
import _mod12310 from "12310__.js";
import _mod12322 from "12322__.js";
import _mod12332 from "12332__.js";

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  const client = _mod12322.getClient();
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
        result = BAGGAGE_HEADER_NAME.baggageHeaderToDynamicSamplingContext(value);
        const tmpResult6 = BAGGAGE_HEADER_NAME;
      }
      if (result) {
        return result;
      } else {
        const options = client.getOptions();
        const tmp9 = client.getDsn() || {};
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = _mod12332.DEFAULT_ENVIRONMENT;
        }
        const obj2 = {
          environment: DEFAULT_ENVIRONMENT,
          release: options.release,
          public_key: tmp9.publicKey,
          trace_id: spanContext.spanContext().traceId,
        };
        const dropUndefinedKeysResult = _mod12301.dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult7 = _mod12301;
        const spanToJSONResult = spanTimeInputToSeconds.spanToJSON(rootSpan);
        const tmp13 = spanToJSONResult.data || {};
        const tmp14 = tmp13[_mod12310.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp14) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp14;
        }
        const description = spanToJSONResult.description;
        const tmpResult8 = spanTimeInputToSeconds;
        if (tmp17) {
          dropUndefinedKeysResult.transaction = description;
        }
        tmp17 = "url" !== tmp13[_mod12310.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
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

export const freezeDscOnSpan = function freezeDscOnSpan(arg0, dsc) {
  const result = _mod12301.addNonEnumerableProperty(arg0, _frozenDsc, dsc);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const tmp2 = getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod12332.DEFAULT_ENVIRONMENT;
  }
  const dropUndefinedKeysResult = _mod12301.dropUndefinedKeys({
    environment: DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key: tmp2.publicKey,
    trace_id,
  });
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
    const tmp4 = getOptions.getDsn() || {};
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = _mod12332.DEFAULT_ENVIRONMENT;
    }
    const obj2 = {
      environment: DEFAULT_ENVIRONMENT,
      release: options.release,
      public_key: tmp4.publicKey,
      trace_id: propagationContext.traceId,
    };
    const dropUndefinedKeysResult = _mod12301.dropUndefinedKeys(obj2);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
