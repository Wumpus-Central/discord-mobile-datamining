// _runtime/metro/00722__.js
import _mod687 from "00687__.js";
import MAX_BAGGAGE_STRING_LENGTH from "../00700_MAX_BAGGAGE_STRING_LENGTH.js";
import _mod702 from "00702__.js";
import _mod713 from "00713__.js";
import DEFAULT_ENVIRONMENT2 from "../00723_DEFAULT_ENVIRONMENT.js";

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  let obj = _mod713;
  const client = obj.getClient();
  if (client) {
    let tmpResult = tmp(684);
    const rootSpan = tmpResult.getRootSpan(spanContext);
    tmpResult = tmp(684);
    const spanToJSONResult = tmpResult.spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    value = undefined;
    if (traceState != null) {
      let str = "sentry.sample_rate";
      value = traceState.get("sentry.sample_rate");
    }
    if (value == null) {
      value = data[tmp(undefined, 704).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    if (value == null) {
      value = data[tmp(undefined, 704).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
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
        result = tmp(700).baggageHeaderToDynamicSamplingContext(value);
        const tmpResult1 = tmp(700);
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
          DEFAULT_ENVIRONMENT = tmp(723).DEFAULT_ENVIRONMENT;
        }
        obj = {
          environment: DEFAULT_ENVIRONMENT,
          release: options.release,
          public_key: client.getDsn() || {}.publicKey,
          trace_id: spanContext.spanContext().traceId,
          org_id: null,
        };
        const tmp12 = client.getDsn() || {};
        obj.org_id = tmp(702).extractOrgIdFromClient(client);
        client.emit("createDsc", obj);
        const description = spanToJSONResult.description;
        const tmpResult2 = tmp(702);
        if (tmp14) {
          obj.transaction = description;
        }
        tmp14 = "url" !== data[tmp(undefined, 704).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult3.hasSpansEnabled()) {
          const _String = String;
          obj.sampled = String(tmp(684).spanIsSampled(rootSpan));
          let value1;
          if (traceState != null) {
            value1 = traceState.get("sentry.sample_rand");
          }
          if (value1 == null) {
            const scope = tmp(685).getCapturedScopesOnSpan(rootSpan).scope;
            str = undefined;
            if (scope != null) {
              str = scope.getPropagationContext().sampleRand.toString();
              const str6 = scope.getPropagationContext().sampleRand;
            }
            value1 = str;
            const tmpResult5 = tmp(685);
          }
          obj.sample_rand = value1;
          const tmpResult4 = tmp(684);
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

export const freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = _mod687.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
  }
  const obj = {
    environment: DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key: getOptions.getDsn() || {}.publicKey,
    trace_id,
    org_id: null,
  };
  const tmp2 = getOptions.getDsn() || {};
  obj.org_id = _mod702.extractOrgIdFromClient(getOptions);
  getOptions.emit("createDsc", obj);
  return obj;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(
  getOptions,
  getPropagationContext,
) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
    }
    const obj = {
      environment: DEFAULT_ENVIRONMENT,
      release: options.release,
      public_key: getOptions.getDsn() || {}.publicKey,
      trace_id: propagationContext.traceId,
      org_id: null,
    };
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
