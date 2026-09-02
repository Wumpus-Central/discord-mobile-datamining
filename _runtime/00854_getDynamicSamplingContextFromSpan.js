// === Module 854: getDynamicSamplingContextFromSpan ===

// Module 854 (getDynamicSamplingContextFromSpan)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 819 */;
import baggageHeaderToDynamicSamplingContext from "baggageHeaderToDynamicSamplingContext" /* 832 */;
import dsnFromString from "dsnFromString" /* 834 */;
import getClient from "getClient" /* 845 */;
import _mod855 from "module_855" /* 855 */;

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  let obj = getClient;
  const client = obj.getClient();
  if (client) {
    let tmpResult = tmp(816);
    const rootSpan = tmpResult.getRootSpan(spanContext);
    tmpResult = tmp(816);
    const spanToJSONResult = tmpResult.spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    let value;
    if (traceState != null) {
      let str = "sentry.sample_rate";
      value = traceState.get("sentry.sample_rate");
    }
    if (value == null) {
      value = data[tmp(undefined, 836).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    if (value == null) {
      value = data[tmp(undefined, 836).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
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
      value = undefined;
      if (traceState != null) {
        value = traceState.get("sentry.dsc");
      }
      let result = value;
      if (value) {
        result = tmp(832).baggageHeaderToDynamicSamplingContext(value);
        const tmpResult1 = tmp(832);
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
          DEFAULT_ENVIRONMENT = tmp(855).DEFAULT_ENVIRONMENT;
        }
        obj = { environment: null, release: null, public_key: null, trace_id: null, org_id: null };
        obj[0] = DEFAULT_ENVIRONMENT;
        obj[1] = options.release;
        obj[2] = client.getDsn() || {}.publicKey;
        obj[3] = spanContext.spanContext().traceId;
        const tmp12 = client.getDsn() || {};
        obj[4] = tmp(834).extractOrgIdFromClient(client);
        client.emit("createDsc", obj);
        const description = spanToJSONResult.description;
        const tmpResult2 = tmp(834);
        if (tmp14) {
          obj.transaction = description;
        }
        tmp14 = "url" !== data[tmp(undefined, 836).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult3.hasSpansEnabled()) {
          const _String = String;
          obj.sampled = String(tmp(816).spanIsSampled(rootSpan));
          let value1;
          if (traceState != null) {
            value1 = traceState.get("sentry.sample_rand");
          }
          if (value1 == null) {
            const scope = tmp(817).getCapturedScopesOnSpan(rootSpan).scope;
            str = undefined;
            if (scope != null) {
              str = scope.getPropagationContext().sampleRand.toString();
              const str6 = scope.getPropagationContext().sampleRand;
            }
            value1 = str;
            const tmpResult5 = tmp(817);
          }
          obj.sample_rand = value1;
          const tmpResult4 = tmp(816);
        }
        let tmp18 = typeof value !== "number";
        if (typeof value !== "number") {
          tmp18 = typeof value !== "string";
        }
        if (!tmp18) {
          const _HermesInternal = HermesInternal;
          obj.sample_rate = "" + value;
        }
        client.emit("createDsc", obj, rootSpan);
        return obj;
      }
    }
  } else {
    return {};
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _frozenDsc = "_frozenDsc";
arg5.freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
arg5.getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod855.DEFAULT_ENVIRONMENT;
  }
  const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: getOptions.getDsn() || {}.publicKey, trace_id, org_id: null };
  const tmp2 = getOptions.getDsn() || {};
  obj[4] = dsnFromString.extractOrgIdFromClient(getOptions);
  getOptions.emit("createDsc", obj);
  return obj;
};
arg5.getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = _mod855.DEFAULT_ENVIRONMENT;
    }
    const obj = { environment: null, release: null, public_key: null, trace_id: null, org_id: null };
    obj[0] = DEFAULT_ENVIRONMENT;
    obj[1] = options.release;
    obj[2] = getOptions.getDsn() || {}.publicKey;
    obj[3] = propagationContext.traceId;
    const tmp4 = getOptions.getDsn() || {};
    obj[4] = dsnFromString.extractOrgIdFromClient(getOptions);
    getOptions.emit("createDsc", obj);
    dsc = obj;
    const obj2 = dsnFromString;
  }
  return dsc;
};
arg5.getDynamicSamplingContextFromSpan = getDynamicSamplingContextFromSpan;
arg5.spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return baggageHeaderToDynamicSamplingContext.dynamicSamplingContextToSentryBaggageHeader(tmp);
};