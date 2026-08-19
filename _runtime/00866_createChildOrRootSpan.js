// === Module 866: createChildOrRootSpan ===

// Module 866 (createChildOrRootSpan)
import spanToJSON from "spanToJSON" /* 819 */;
import unwrapScopeFromWeakRef from "unwrapScopeFromWeakRef" /* 820 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import parseSampleRate from "parseSampleRate" /* 836 */;
import _mod839 from "module_839" /* 839 */;
import getClient from "getClient" /* 848 */;
import hasSpansEnabled from "hasSpansEnabled" /* 855 */;
import SentryNonRecordingSpan from "SentryNonRecordingSpan" /* 856 */;
import getDynamicSamplingContextFromSpan from "getDynamicSamplingContextFromSpan" /* 857 */;
import isFullFinishedSpan from "isFullFinishedSpan" /* 860 */;
import logSpanEnd from "logSpanEnd" /* 861 */;
import sampleSpan from "sampleSpan" /* 868 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function createChildOrRootSpan(arg0) {
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  let obj = hasSpansEnabled;
  if (obj.hasSpansEnabled()) {
    let tmpResult = getClient;
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp12 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp12;
        if (!tmp12) {
          tmpResult = spanToJSON;
          spanIsSampledResult = tmpResult.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          obj = {};
          const merged = Object.assign(spanArguments);
          obj.parentSpanId = spanId;
          obj.traceId = traceId;
          obj.sampled = spanIsSampledResult;
          let sentrySpan = new isFullFinishedSpan.SentrySpan(obj);
        } else {
          obj = { traceId: null };
          obj[0] = traceId;
          sentrySpan = new SentryNonRecordingSpan.SentryNonRecordingSpan(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        spanToJSON.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult1 = spanToJSON;
        const client = getClient.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult2 = getClient;
        spanToJSON.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult3 = spanToJSON;
      }
      logSpanEnd.logSpanStart(sentrySpan);
      const tmpResult4 = logSpanEnd;
      const result = unwrapScopeFromWeakRef.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = getDynamicSamplingContextFromSpan.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult6 = getDynamicSamplingContextFromSpan;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      obj1 = { traceId: null, parentSpanId: null };
      obj1[0] = traceId2;
      obj1[1] = spanId2;
      const tmpResult7 = spanToJSON;
      const merged1 = Object.assign(spanArguments);
      const tmp45 = _startRootSpan(obj1, scope, spanToJSON.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanToJSON.spanIsSampled(parentSpan);
      getDynamicSamplingContextFromSpan.freezeDscOnSpan(tmp45, dynamicSamplingContextFromSpan);
      sentrySpan = tmp45;
      const tmpResult8 = getDynamicSamplingContextFromSpan;
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
        getDynamicSamplingContextFromSpan.freezeDscOnSpan(tmp36, dsc);
        sentrySpan = tmp36;
        const tmpResult9 = getDynamicSamplingContextFromSpan;
      }
    }
  } else {
    const sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
    if (forceTransaction) {
      const obj4 = { sampled: "false", sample_rate: "0", transaction: null };
      obj4[2] = spanArguments.name;
      const merged5 = Object.assign(getDynamicSamplingContextFromSpan.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      const tmpResult10 = getDynamicSamplingContextFromSpan;
      getDynamicSamplingContextFromSpan.freezeDscOnSpan(sentryNonRecordingSpan, obj4);
      const tmpResult11 = getDynamicSamplingContextFromSpan;
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
    obj1 = { name: null, parentSampled: null, attributes: null, parentSampleRate: null };
    obj1[0] = str;
    obj1[1] = parentSampled;
    obj1[2] = spanAttributes;
    const tmpResult = parseSampleRate;
    const dsc = propagationContext.dsc;
    let sample_rate;
    if (dsc != null) {
      sample_rate = dsc.sample_rate;
    }
    obj1[3] = tmpResult.parseSampleRate(sample_rate);
    sampleSpanResult = tmpResult.sampleSpan(options, obj1, propagationContext.sampleRand);
  }
  [tmp9, tmp10, tmp11] = _slicedToArray(sampleSpanResult, 3);
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
  const sentrySpan = new isFullFinishedSpan.SentrySpan(obj2);
  let tmp16 = !tmp9;
  if (!tmp9) {
    tmp16 = client;
  }
  if (tmp16) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
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
  let mainCarrier = _require(825).getMainCarrier();
  let obj = _require(825);
  let asyncContextStrategy = _require(841).getAsyncContextStrategy(mainCarrier);
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
          const obj = { traceId: callback(dependencyMap[11]).generateTraceId(), sampleRand: null };
          const obj2 = callback(dependencyMap[11]);
          obj[1] = callback(dependencyMap[12]).safeMathRandom();
          const result = setPropagationContext.setPropagationContext(obj);
          if (callback(dependencyMap[13]).DEBUG_BUILD) {
            const debug = callback(dependencyMap[14]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
          }
          c0 = null;
          closure_1 = c0;
          let tmpResult = callback(dependencyMap[7]);
          const mainCarrier = tmpResult.getMainCarrier();
          tmpResult = callback(dependencyMap[8]);
          const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
          if (asyncContextStrategy.withActiveSpan) {
            let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, c0);
          } else {
            withActiveSpanResult = callback(dependencyMap[1]).withScope((arg0) => {
              callback(844)._setSpanForScope(arg0, callback);
              return dependencyMap(arg0);
            });
            const tmpResult1 = callback(dependencyMap[1]);
          }
          return withActiveSpanResult;
        });
        const tmpResult2 = tmp(848);
      }
      return withScopeResult;
    }
    withScopeResult = tmp(848).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(callback(dependencyMap[10]).propagationContextFromHeaders(closure_1, baggage));
      const obj = callback(dependencyMap[10]);
      callback(dependencyMap[3])._setSpanForScope(setPropagationContext, undefined);
      return callback();
    });
    const tmpResult3 = tmp(848);
  }
  let obj2 = _require(841);
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
    ({ forceTransaction: _slicedToArray, parentSpan } = experimental);
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
      }) : ((fn) => fn());
    }
    return fn(() => {
      obj = experimental(obj[1]);
      const currentScope = obj.getCurrentScope();
      let tmp5 = parentSpan;
      if (!parentSpan) {
        if (null !== tmp4) {
          let tmpResult = experimental(tmp2[3]);
          const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
          if (_getSpanForScopeResult) {
            tmpResult = experimental(tmp2[1]);
            const client = tmpResult.getClient();
            if (client) {
              let options = client.getOptions();
            } else {
              options = {};
            }
            let rootSpan = _getSpanForScopeResult;
            if (options.parentSpanIsAlwaysRootSpan) {
              rootSpan = experimental(tmp2[5]).getRootSpan(_getSpanForScopeResult);
              const tmpResult1 = experimental(tmp2[5]);
            }
            tmp5 = rootSpan;
          }
        }
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new experimental(tmp2[2]).SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      obj = { parentSpan: tmp5, spanArguments: obj, forceTransaction: closure_2, scope: currentScope };
      sentryNonRecordingSpan = createChildOrRootSpan(obj);
    });
  }
  const obj2 = _require(obj[8]);
  tmp3 = _require;
  tmp4 = obj;
};
export const startNewTrace = function startNewTrace(arg0) {
  const _require = arg0;
  return _require(848).withScope((setPropagationContext) => {
    const obj = { traceId: callback(dependencyMap[11]).generateTraceId(), sampleRand: null };
    const obj2 = callback(dependencyMap[11]);
    obj[1] = callback(dependencyMap[12]).safeMathRandom();
    const result = setPropagationContext.setPropagationContext(obj);
    if (callback(dependencyMap[13]).DEBUG_BUILD) {
      const debug = callback(dependencyMap[14]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = c0;
    let tmpResult = callback(dependencyMap[7]);
    const mainCarrier = tmpResult.getMainCarrier();
    tmpResult = callback(dependencyMap[8]);
    const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, c0);
    } else {
      withActiveSpanResult = callback(dependencyMap[1]).withScope((arg0) => {
        callback(844)._setSpanForScope(arg0, callback);
        return dependencyMap(arg0);
      });
      const tmpResult1 = callback(dependencyMap[1]);
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental) {
  const _require = experimental;
  dependencyMap = arg1;
  let obj = _require(825);
  const mainCarrier = obj.getMainCarrier();
  const asyncContextStrategy = _require(841).getAsyncContextStrategy(mainCarrier);
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
        const asyncContextStrategy = callback(closure_1_1[8]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(callback, arg0);
        } else {
          withActiveSpanResult = callback(closure_1_1[1]).withScope((arg0) => {
            callback(844)._setSpanForScope(arg0, callback);
            return dependencyMap(arg0);
          });
          const tmp2Result = callback(closure_1_1[1]);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        obj = callback(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let tmp5 = closure_4;
        if (!closure_4) {
          if (null !== tmp4) {
            let tmpResult = callback(closure_1_1[3]);
            const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              tmpResult = callback(closure_1_1[1]);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = callback(closure_1_1[5]).getRootSpan(_getSpanForScopeResult);
                const tmpResult1 = callback(closure_1_1[5]);
              }
              tmp5 = rootSpan;
            }
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new callback(closure_1_1[2]).SentryNonRecordingSpan();
          }
          callback(closure_1_1[3])._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult2 = callback(closure_1_1[3]);
          return callback(closure_1_1[4]).handleCallbackErrors(() => closure_1_1(sentryNonRecordingSpan), () => {
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
  const obj2 = _require(841);
};
export const startSpanManual = function startSpanManual(experimental) {
  const _require = experimental;
  dependencyMap = arg1;
  let obj = _require(825);
  let mainCarrier = obj.getMainCarrier();
  let asyncContextStrategy = _require(841).getAsyncContextStrategy(mainCarrier);
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
        const asyncContextStrategy = callback(closure_1_1[8]).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(callback, arg0);
        } else {
          withActiveSpanResult = callback(closure_1_1[1]).withScope((arg0) => {
            callback(844)._setSpanForScope(arg0, callback);
            return dependencyMap(arg0);
          });
          const tmp2Result = callback(closure_1_1[1]);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        obj = callback(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let tmp5 = closure_4;
        if (!closure_4) {
          if (null !== tmp4) {
            let tmpResult = callback(closure_1_1[3]);
            const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              tmpResult = callback(closure_1_1[1]);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = callback(closure_1_1[5]).getRootSpan(_getSpanForScopeResult);
                const tmpResult1 = callback(closure_1_1[5]);
              }
              tmp5 = rootSpan;
            }
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new callback(closure_1_1[2]).SentryNonRecordingSpan();
          }
          callback(closure_1_1[3])._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult2 = callback(closure_1_1[3]);
          return callback(closure_1_1[4]).handleCallbackErrors(() => closure_1_1(sentryNonRecordingSpan, () => closure_0.end()), () => {
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
  const obj2 = _require(841);
};
export const suppressTracing = function suppressTracing(arg0) {
  const _require = arg0;
  const mainCarrier = _require(825).getMainCarrier();
  const obj = _require(825);
  const tmp = _require;
  const asyncContextStrategy = _require(841).getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _require(825).getMainCarrier();
  const obj = _require(825);
  const tmp = _require;
  const asyncContextStrategy = _require(841).getAsyncContextStrategy(mainCarrier);
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