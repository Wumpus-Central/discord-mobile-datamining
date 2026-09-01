// _runtime/12369_createChildOrRootSpan.js
import _mod12350 from "metro/12350__.js";
import getClient from "12362_getClient.js";
import hasTracingEnabled from "12367_hasTracingEnabled.js";
import closure_2 from "metro/00032__slicedToArray.js";
import { getMainCarrier } from "12353_getMainCarrier.js";
import { getAsyncContextStrategy } from "12354_getAsyncContextStrategy.js";

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  let obj = hasTracingEnabled;
  if (obj.hasTracingEnabled()) {
    let tmpResult = tmp(12362);
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction.forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp9 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp9;
        if (!tmp9) {
          tmpResult = tmp(12340);
          spanIsSampledResult = tmpResult.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          obj = {};
          const merged = Object.assign(spanArguments);
          obj.parentSpanId = spanId;
          obj.traceId = traceId;
          obj.sampled = spanIsSampledResult;
          let sentrySpan = new tmp(12376).SentrySpan(obj);
        } else {
          obj = { traceId: null };
          obj[0] = traceId;
          sentrySpan = new tmp(12368).SentryNonRecordingSpan(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        tmp(12340).addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult1 = tmp(12340);
        const client = tmp(12362).getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult2 = tmp(12362);
        tmp(12340).addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult3 = tmp(12340);
      }
      tmp(12373).logSpanStart(sentrySpan);
      const tmpResult4 = tmp(12373);
      const result = tmp(12364).setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = tmp(12371).getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult6 = tmp(12371);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      obj1 = { traceId: null, parentSpanId: null };
      obj1[0] = traceId2;
      obj1[1] = spanId2;
      const tmpResult7 = tmp(12340);
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj1, scope, tmp(12340).spanIsSampled(parentSpan));
      const spanIsSampledResult1 = tmp(12340).spanIsSampled(parentSpan);
      tmp(12371).freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult8 = tmp(12371);
    } else {
      const obj2 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj2.dsc;
      const obj3 = { traceId: null, parentSpanId: null };
      ({ traceId: obj12[0], parentSpanId: obj12[1] } = obj2);
      const merged4 = Object.assign(spanArguments);
      const tmp33 = _startRootSpan(obj3, scope, obj2.sampled);
      sentrySpan = tmp33;
      if (dsc) {
        tmp(12371).freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult9 = tmp(12371);
      }
    }
  } else {
    const sentryNonRecordingSpan = new tmp(12368).SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name) {
  let obj = getClient;
  const client = obj.getClient();
  let options = client;
  if (client) {
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
  if (arg1.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    obj = { name: null, parentSampled: null, attributes: null, transactionContext: null };
    obj[0] = str;
    obj[1] = arg2;
    obj[2] = name.attributes;
    obj = { name: null, parentSampled: null };
    obj[0] = str;
    obj[1] = arg2;
    obj[3] = obj;
    sampleSpanResult = tmp(12374).sampleSpan(options, obj);
    const tmpResult = tmp(12374);
  }
  [tmp6, tmp7] = callback(sampleSpanResult, 2);
  obj1 = {};
  const merged = Object.assign(name);
  const tmp5 = callback(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj1.attributes = { [_mod12350.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj1.sampled = tmp6;
  const sentrySpan = new tmp(12376).SentrySpan(obj1);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(tmp(12350).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  const _require = arg1;
  const mainCarrier = require("12353_getMainCarrier.js").getMainCarrier();
  const obj = getMainCarrier;
  const tmp = _require;
  const asyncContextStrategy = require("12354_getAsyncContextStrategy.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: closure_2 } = arg0);
    return tmp(12362).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(
        callback(closure_1_1[9]).propagationContextFromHeaders(closure_1, closure_2),
      );
      return callback();
    });
  }
  const obj2 = getAsyncContextStrategy;
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
      fn =
        undefined !== parentSpan
          ? (arg0) => {
              experimental = parentSpan;
              closure_1 = arg0;
              obj = experimental(obj[7]);
              const mainCarrier = obj.getMainCarrier();
              const asyncContextStrategy = experimental(obj[8]).getAsyncContextStrategy(mainCarrier);
              if (asyncContextStrategy.withActiveSpan) {
                let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
              } else {
                withActiveSpanResult = experimental(obj[1]).withScope((arg0) => {
                  _null(12357)._setSpanForScope(arg0, _null);
                  return dependencyMap(arg0);
                });
                const tmp2Result = experimental(obj[1]);
              }
              return withActiveSpanResult;
            }
          : (arg0) => arg0();
    }
    return fn(() => {
      obj = experimental(obj[1]);
      const currentScope = obj.getCurrentScope();
      const _getSpanForScopeResult = experimental(obj[3])._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        let tmpResult = tmp(tmp2[1]);
        const client = tmpResult.getClient();
        if (client) {
          let options = client.getOptions();
        } else {
          options = {};
        }
        let rootSpan = _getSpanForScopeResult;
        if (options.parentSpanIsAlwaysRootSpan) {
          tmpResult = tmp(tmp2[5]);
          rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
        }
        tmp5 = rootSpan;
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
  return require("12362_getClient.js").withScope((setPropagationContext) => {
    const obj = { traceId: callback(closure_1_1[10]).generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (callback(closure_1_1[11]).DEBUG_BUILD) {
      const logger = tmp(tmp2[12]).logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
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
        _null(12357)._setSpanForScope(arg0, _null);
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
  let obj = getMainCarrier;
  const mainCarrier = obj.getMainCarrier();
  const asyncContextStrategy = require("12354_getAsyncContextStrategy.js").getAsyncContextStrategy(mainCarrier);
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
      let tmp3Result = tmp3(12340);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    tmp3Result = tmp3(12362);
    return tmp3Result.withScope(experimental.scope, () => {
      closure_0 = closure_4;
      return undefined !== closure_4
        ? (arg0) => {
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
                _null(12357)._setSpanForScope(arg0, _null);
                return dependencyMap(arg0);
              });
              const tmp2Result = tmp2(tmp3[1]);
            }
            return withActiveSpanResult;
          }
        : ((arg0) => arg0())(() => {
            obj = callback(closure_1_1[1]);
            const currentScope = obj.getCurrentScope();
            const _getSpanForScopeResult = callback(closure_1_1[3])._getSpanForScope(currentScope);
            let tmp5;
            if (_getSpanForScopeResult) {
              let tmpResult = tmp(tmp2[1]);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                tmpResult = tmp(tmp2[5]);
                rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
              }
              tmp5 = rootSpan;
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
              }
              tmp(tmp2[3])._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult1 = tmp(tmp2[3]);
              return tmp(tmp2[4]).handleCallbackErrors(
                () => closure_1_1(sentryNonRecordingSpan),
                () => {
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
                },
                () => sentryNonRecordingSpan.end(),
              );
            }
            obj = { parentSpan: tmp5, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
            sentryNonRecordingSpan = closure_1_4(obj);
          });
    });
  }
  const obj2 = getAsyncContextStrategy;
};
export const startSpanManual = function startSpanManual(experimental) {
  const _require = experimental;
  dependencyMap = arg1;
  let obj = getMainCarrier;
  let mainCarrier = obj.getMainCarrier();
  let asyncContextStrategy = require("12354_getAsyncContextStrategy.js").getAsyncContextStrategy(mainCarrier);
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
      let tmp3Result = tmp3(12340);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    tmp3Result = tmp3(12362);
    return tmp3Result.withScope(experimental.scope, () => {
      closure_0 = closure_4;
      return undefined !== closure_4
        ? (arg0) => {
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
                _null(12357)._setSpanForScope(arg0, _null);
                return dependencyMap(arg0);
              });
              const tmp2Result = tmp2(tmp3[1]);
            }
            return withActiveSpanResult;
          }
        : ((arg0) => arg0())(() => {
            function finishAndSetSpan(sentryNonRecordingSpan, finishAndSetSpan) {
              sentryNonRecordingSpan.end();
            }
            obj = callback(closure_1_1[1]);
            const currentScope = obj.getCurrentScope();
            const _getSpanForScopeResult = callback(closure_1_1[3])._getSpanForScope(currentScope);
            let tmp5;
            if (_getSpanForScopeResult) {
              let tmpResult = tmp(tmp2[1]);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                tmpResult = tmp(tmp2[5]);
                rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
              }
              tmp5 = rootSpan;
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
              }
              tmp(tmp2[3])._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult1 = tmp(tmp2[3]);
              return tmp(tmp2[4]).handleCallbackErrors(
                () => finishAndSetSpan(sentryNonRecordingSpan, finishAndSetSpan),
                () => {
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
                },
              );
            }
            obj = { parentSpan: tmp5, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
            sentryNonRecordingSpan = closure_1_4(obj);
          });
    });
  }
  const obj2 = getAsyncContextStrategy;
};
export const suppressTracing = function suppressTracing(arg0) {
  const _require = arg0;
  const mainCarrier = require("12353_getMainCarrier.js").getMainCarrier();
  const obj = getMainCarrier;
  const tmp = _require;
  const asyncContextStrategy = require("12354_getAsyncContextStrategy.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(12362).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_1_3]: true });
      return callback();
    });
    const tmpResult = tmp(12362);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("12353_getMainCarrier.js").getMainCarrier();
  const obj = getMainCarrier;
  const tmp = _require;
  const asyncContextStrategy = require("12354_getAsyncContextStrategy.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(12362).withScope((arg0) => {
      _null(12357)._setSpanForScope(arg0, _null);
      return dependencyMap(arg0);
    });
    const tmpResult = tmp(12362);
  }
  return withActiveSpanResult;
};
