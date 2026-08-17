// _runtime/00866_createChildOrRootSpan.js
import _mod839 from "metro/00839__.js";
import getClient from "00848_getClient.js";
import hasSpansEnabled from "00855_hasSpansEnabled.js";
import closure_2 from "metro/00032__slicedToArray.js";
import { getGlobalSingleton } from "00825_getGlobalSingleton.js";
import { getAsyncContextStrategy } from "00841_getAsyncContextStrategy.js";
import { getClient } from "00848_getClient.js";

function createChildOrRootSpan(arg0) {
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  let obj = hasSpansEnabled;
  if (obj.hasSpansEnabled()) {
    let tmpResult = tmp(848);
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp12 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp12;
        if (!tmp12) {
          tmpResult = tmp(819);
          spanIsSampledResult = tmpResult.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          obj = {};
          const merged = Object.assign(spanArguments);
          obj.parentSpanId = spanId;
          obj.traceId = traceId;
          obj.sampled = spanIsSampledResult;
          let sentrySpan = new tmp(860).SentrySpan(obj);
        } else {
          obj = { traceId: null };
          obj[0] = traceId;
          sentrySpan = new tmp(856).SentryNonRecordingSpan(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        tmp(819).addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult1 = tmp(819);
        const client = tmp(848).getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult2 = tmp(848);
        tmp(819).addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult3 = tmp(819);
      }
      tmp(861).logSpanStart(sentrySpan);
      const tmpResult4 = tmp(861);
      const result = tmp(820).setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = tmp(857).getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult6 = tmp(857);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      obj1 = { traceId: null, parentSpanId: null };
      obj1[0] = traceId2;
      obj1[1] = spanId2;
      const tmpResult7 = tmp(819);
      const merged1 = Object.assign(spanArguments);
      const tmp45 = _startRootSpan(obj1, scope, tmp(819).spanIsSampled(parentSpan));
      const spanIsSampledResult1 = tmp(819).spanIsSampled(parentSpan);
      tmp(857).freezeDscOnSpan(tmp45, dynamicSamplingContextFromSpan);
      sentrySpan = tmp45;
      const tmpResult8 = tmp(857);
    } else {
      const obj2 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj2.dsc;
      const obj3 = { traceId: null, parentSpanId: null };
      ({ traceId: obj15[0], parentSpanId: obj15[1] } = obj2);
      const merged4 = Object.assign(spanArguments);
      const tmp36 = _startRootSpan(obj3, scope, obj2.sampled);
      sentrySpan = tmp36;
      if (dsc) {
        tmp(857).freezeDscOnSpan(tmp36, dsc);
        sentrySpan = tmp36;
        const tmpResult9 = tmp(857);
      }
    }
  } else {
    const sentryNonRecordingSpan = new tmp(856).SentryNonRecordingSpan();
    if (forceTransaction) {
      const obj4 = { sampled: "false", sample_rate: "0", transaction: null };
      obj4[2] = spanArguments.name;
      const merged5 = Object.assign(tmp(857).getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      const tmpResult10 = tmp(857);
      tmp(857).freezeDscOnSpan(sentryNonRecordingSpan, obj4);
      const tmpResult11 = tmp(857);
    }
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, getPropagationContext) {
  let obj = getClient;
  const client = obj.getClient();
  let options;
  if (client != null) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  name = name.name;
  let str = "";
  if (undefined !== name) {
    str = name;
  }
  obj = { spanAttributes: null, spanName: null, parentSampled: null };
  obj = {};
  const merged = Object.assign(name.attributes);
  obj[0] = obj;
  obj[1] = str;
  obj[2] = arg2;
  if (client != null) {
    client.emit("beforeSampling", obj, { decision: false });
  }
  let parentSampled = obj.parentSampled;
  if (parentSampled == null) {
    parentSampled = arg2;
  }
  const spanAttributes = obj.spanAttributes;
  const propagationContext = getPropagationContext.getPropagationContext();
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    let tmpResult = tmp(868);
    obj1 = { name: null, parentSampled: null, attributes: null, parentSampleRate: null };
    obj1[0] = str;
    obj1[1] = parentSampled;
    obj1[2] = spanAttributes;
    tmpResult = tmp(836);
    const dsc = propagationContext.dsc;
    let sample_rate;
    if (dsc != null) {
      sample_rate = dsc.sample_rate;
    }
    obj1[3] = tmpResult.parseSampleRate(sample_rate);
    sampleSpanResult = tmpResult.sampleSpan(options, obj1, propagationContext.sampleRand);
  }
  [tmp9, tmp10, tmp11] = callback(sampleSpanResult, 3);
  const obj2 = {};
  const merged1 = Object.assign(name);
  const obj3 = { [_mod839.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  let tmp13;
  if (undefined !== tmp10) {
    if (tmp11) {
      tmp13 = tmp10;
    }
  }
  obj3[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] = tmp13;
  const merged2 = Object.assign(spanAttributes);
  obj2.attributes = obj3;
  obj2.sampled = tmp9;
  const sentrySpan = new tmp(860).SentrySpan(obj2);
  let tmp16 = !tmp9;
  if (!tmp9) {
    tmp16 = client;
  }
  if (tmp16) {
    if (tmp(823).DEBUG_BUILD) {
      const debug = tmp(824).debug;
      debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    }
    client.recordDroppedEvent("sample_rate", "transaction");
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  let _require = arg1;
  let mainCarrier = _getGlobalSingleton.getMainCarrier();
  let obj = _getGlobalSingleton;
  let asyncContextStrategy = _getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage } = arg0);
    let tmpResult = tmp(848);
    const client = tmpResult.getClient();
    tmpResult = tmp(835);
    let result = tmpResult.baggageHeaderToDynamicSamplingContext(baggage);
    if (client) {
      let org_id;
      if (result != null) {
        org_id = result.org_id;
      }
      if (!tmpResult1.shouldContinueTrace(client, org_id)) {
        _require = arg1;
        let withScopeResult = tmp(848).withScope((setPropagationContext) => {
          const obj = { traceId: callback(closure_1_1[11]).generateTraceId(), sampleRand: null };
          const obj2 = callback(closure_1_1[11]);
          obj[1] = callback(closure_1_1[12]).safeMathRandom();
          const result = setPropagationContext.setPropagationContext(obj);
          if (callback(closure_1_1[13]).DEBUG_BUILD) {
            const debug = tmp(tmp2[14]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
          }
          c0 = null;
          closure_1 = c0;
          let tmpResult = tmp(tmp2[7]);
          const mainCarrier = tmpResult.getMainCarrier();
          tmpResult = tmp(tmp2[8]);
          const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
          if (asyncContextStrategy.withActiveSpan) {
            let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, c0);
          } else {
            withActiveSpanResult = tmp(tmp2[1]).withScope((arg0) => {
              callback(844)._setSpanForScope(arg0, callback);
              return dependencyMap(arg0);
            });
            const tmpResult1 = tmp(tmp2[1]);
          }
          return withActiveSpanResult;
        });
        const tmpResult2 = tmp(848);
      }
      return withScopeResult;
    }
    withScopeResult = tmp(848).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(callback(closure_1_1[10]).propagationContextFromHeaders(closure_1, baggage));
      const obj = callback(closure_1_1[10]);
      callback(closure_1_1[3])._setSpanForScope(setPropagationContext, undefined);
      return callback();
    });
    const tmpResult3 = tmp(848);
  }
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  const _require = experimental;
  obj = _require(obj[7]);
  let mainCarrier = obj.getMainCarrier();
  let asyncContextStrategy = _require(obj[8]).getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    obj = { isStandalone: null };
    obj[0] = experimental.experimental || {}.standalone;
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj.startTimestamp = tmp3(tmp4[5]).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
      const tmp3Result = tmp3(tmp4[5]);
    }
    obj = tmp10;
    ({ forceTransaction: closure_2, parentSpan } = experimental);
    if (experimental.scope) {
      let fn = (arg0) => {
        obj = experimental(obj[1]);
        return obj.withScope(experimental.scope, arg0);
      };
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        experimental = parentSpan;
        closure_1 = arg0;
        obj = experimental(obj[7]);
        const mainCarrier = obj.getMainCarrier();
        const asyncContextStrategy = experimental(obj[8]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
        } else {
          withActiveSpanResult = experimental(obj[1]).withScope((arg0) => {
            callback(844)._setSpanForScope(arg0, callback);
            return dependencyMap(arg0);
          });
          const tmp2Result = experimental(obj[1]);
        }
        return withActiveSpanResult;
      }) : ((arg0) => arg0());
    }
    return fn(() => {
      obj = experimental(obj[1]);
      const currentScope = obj.getCurrentScope();
      let tmp5 = parentSpan;
      if (!parentSpan) {
        if (null !== tmp4) {
          let tmpResult = tmp(tmp2[3]);
          const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
          if (_getSpanForScopeResult) {
            tmpResult = tmp(tmp2[1]);
            const client = tmpResult.getClient();
            if (client) {
              let options = client.getOptions();
            } else {
              options = {};
            }
            let rootSpan = _getSpanForScopeResult;
            if (options.parentSpanIsAlwaysRootSpan) {
              rootSpan = tmp(tmp2[5]).getRootSpan(_getSpanForScopeResult);
              const tmpResult1 = tmp(tmp2[5]);
            }
            tmp5 = rootSpan;
          }
        }
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      obj = { parentSpan: tmp5, spanArguments: obj, forceTransaction: closure_2, scope: currentScope };
      sentryNonRecordingSpan = closure_1_4(obj);
    });
  }
  const obj2 = _require(obj[8]);
  tmp3 = _require;
  tmp4 = obj;
};
export const startNewTrace = function startNewTrace(arg0) {
  const _require = arg0;
  return _getClient.withScope((setPropagationContext) => {
    const obj = { traceId: callback(closure_1_1[11]).generateTraceId(), sampleRand: null };
    const obj2 = callback(closure_1_1[11]);
    obj[1] = callback(closure_1_1[12]).safeMathRandom();
    const result = setPropagationContext.setPropagationContext(obj);
    if (callback(closure_1_1[13]).DEBUG_BUILD) {
      const debug = tmp(tmp2[14]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = c0;
    let tmpResult = tmp(tmp2[7]);
    const mainCarrier = tmpResult.getMainCarrier();
    tmpResult = tmp(tmp2[8]);
    const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, c0);
    } else {
      withActiveSpanResult = tmp(tmp2[1]).withScope((arg0) => {
        callback(844)._setSpanForScope(arg0, callback);
        return dependencyMap(arg0);
      });
      const tmpResult1 = tmp(tmp2[1]);
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental) {
  const _require = experimental;
  dependencyMap = arg1;
  let obj = _getGlobalSingleton;
  const mainCarrier = obj.getMainCarrier();
  const asyncContextStrategy = _getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    obj = { isStandalone: null };
    obj[0] = experimental.experimental || {}.standalone;
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      let tmp3Result = tmp3(819);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    tmp3Result = tmp3(848);
    return tmp3Result.withScope(cloneResult, () => {
      closure_0 = closure_4;
      return undefined !== closure_4 ? ((arg0) => {
        closure_1 = arg0;
        const mainCarrier = callback(closure_1_1[7]).getMainCarrier();
        obj = callback(closure_1_1[7]);
        const tmp = callback;
        const tmp2 = callback;
        const tmp3 = closure_1_1;
        const asyncContextStrategy = callback(closure_1_1[8]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(tmp3[1]).withScope((arg0) => {
            callback(844)._setSpanForScope(arg0, callback);
            return dependencyMap(arg0);
          });
          const tmp2Result = tmp2(tmp3[1]);
        }
        return withActiveSpanResult;
      }) : ((arg0) => arg0())(() => {
        obj = callback(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let tmp5 = closure_4;
        if (!closure_4) {
          if (null !== tmp4) {
            let tmpResult = tmp(tmp2[3]);
            const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              tmpResult = tmp(tmp2[1]);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = tmp(tmp2[5]).getRootSpan(_getSpanForScopeResult);
                const tmpResult1 = tmp(tmp2[5]);
              }
              tmp5 = rootSpan;
            }
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
          }
          tmp(tmp2[3])._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult2 = tmp(tmp2[3]);
          return tmp(tmp2[4]).handleCallbackErrors(() => closure_1_1(sentryNonRecordingSpan), () => {
            obj = sentryNonRecordingSpan(closure_2_1[5]);
            const status = obj.spanToJSON(sentryNonRecordingSpan).status;
            const isRecordingResult = sentryNonRecordingSpan.isRecording();
            let tmp4 = !isRecordingResult;
            if (isRecordingResult) {
              let tmp5 = status;
              if (status) {
                tmp5 = "ok" !== status;
              }
              tmp4 = tmp5;
            }
            if (!tmp4) {
              obj = { code: null, message: "internal_error" };
              obj[0] = sentryNonRecordingSpan(closure_2_1[6]).SPAN_STATUS_ERROR;
              sentryNonRecordingSpan.setStatus(obj);
            }
          }, () => {
            sentryNonRecordingSpan.end();
          });
        }
        obj = { parentSpan: tmp5, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj);
      });
    });
  }
  const obj2 = _getAsyncContextStrategy;
};
export const startSpanManual = function startSpanManual(experimental) {
  const _require = experimental;
  dependencyMap = arg1;
  let obj = _getGlobalSingleton;
  let mainCarrier = obj.getMainCarrier();
  let asyncContextStrategy = _getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    obj = { isStandalone: null };
    obj[0] = experimental.experimental || {}.standalone;
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      let tmp3Result = tmp3(819);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    tmp3Result = tmp3(848);
    return tmp3Result.withScope(cloneResult, () => {
      closure_0 = closure_4;
      return undefined !== closure_4 ? ((arg0) => {
        closure_1 = arg0;
        const mainCarrier = callback(closure_1_1[7]).getMainCarrier();
        obj = callback(closure_1_1[7]);
        const tmp = callback;
        const tmp2 = callback;
        const tmp3 = closure_1_1;
        const asyncContextStrategy = callback(closure_1_1[8]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(tmp3[1]).withScope((arg0) => {
            callback(844)._setSpanForScope(arg0, callback);
            return dependencyMap(arg0);
          });
          const tmp2Result = tmp2(tmp3[1]);
        }
        return withActiveSpanResult;
      }) : ((arg0) => arg0())(() => {
        obj = callback(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let tmp5 = closure_4;
        if (!closure_4) {
          if (null !== tmp4) {
            let tmpResult = tmp(tmp2[3]);
            const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              tmpResult = tmp(tmp2[1]);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = tmp(tmp2[5]).getRootSpan(_getSpanForScopeResult);
                const tmpResult1 = tmp(tmp2[5]);
              }
              tmp5 = rootSpan;
            }
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
          }
          tmp(tmp2[3])._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult2 = tmp(tmp2[3]);
          return tmp(tmp2[4]).handleCallbackErrors(() => closure_1_1(sentryNonRecordingSpan, () => closure_0.end()), () => {
            obj = sentryNonRecordingSpan(closure_2_1[5]);
            const status = obj.spanToJSON(sentryNonRecordingSpan).status;
            const isRecordingResult = sentryNonRecordingSpan.isRecording();
            let tmp4 = !isRecordingResult;
            if (isRecordingResult) {
              let tmp5 = status;
              if (status) {
                tmp5 = "ok" !== status;
              }
              tmp4 = tmp5;
            }
            if (!tmp4) {
              obj = { code: null, message: "internal_error" };
              obj[0] = sentryNonRecordingSpan(closure_2_1[6]).SPAN_STATUS_ERROR;
              sentryNonRecordingSpan.setStatus(obj);
            }
          });
        }
        obj = { parentSpan: tmp5, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj);
      });
    });
  }
  const obj2 = _getAsyncContextStrategy;
};
export const suppressTracing = function suppressTracing(arg0) {
  const _require = arg0;
  const mainCarrier = _getGlobalSingleton.getMainCarrier();
  const obj = _getGlobalSingleton;
  const tmp = _require;
  const asyncContextStrategy = _getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(848).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_1_3]: true });
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_1_3]: undefined });
      return callback();
    });
    const tmpResult = tmp(848);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = _getGlobalSingleton.getMainCarrier();
  const obj = _getGlobalSingleton;
  const tmp = _require;
  const asyncContextStrategy = _getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(848).withScope((arg0) => {
      callback(844)._setSpanForScope(arg0, callback);
      return dependencyMap(arg0);
    });
    const tmpResult = tmp(848);
  }
  return withActiveSpanResult;
};