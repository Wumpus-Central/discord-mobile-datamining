// _runtime/metro/12924__.js
import _mod12890 from "12890__.js";
import spanTimeInputToSeconds from "../12895_spanTimeInputToSeconds.js";
import generatePropagationContext from "../12900_generatePropagationContext.js";
import _mod12902 from "12902__.js";
import _mod12905 from "12905__.js";
import _mod12908 from "12908__.js";
import _mod12909 from "12909__.js";
import _mod12912 from "12912__.js";
import _mod12917 from "12917__.js";
import _mod12918 from "12918__.js";
import _mod12919 from "12919__.js";
import _mod12922 from "12922__.js";
import _mod12923 from "12923__.js";
import _mod12926 from "12926__.js";
import _mod12928 from "12928__.js";
import _mod12929 from "12929__.js";
import _mod12931 from "12931__.js";
import _slicedToArray from "00032__.js";

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  let obj = _mod12922;
  if (obj.hasTracingEnabled()) {
    let tmpResult = _mod12917;
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction.forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp9 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp9;
        if (!tmp9) {
          tmpResult = spanTimeInputToSeconds;
          spanIsSampledResult = tmpResult.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          obj = {};
          const merged = Object.assign(spanArguments);
          obj.parentSpanId = spanId;
          obj.traceId = traceId;
          obj.sampled = spanIsSampledResult;
          let sentrySpan = new _mod12931.SentrySpan(obj);
        } else {
          obj = { traceId };
          sentrySpan = new _mod12923.SentryNonRecordingSpan(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult1 = spanTimeInputToSeconds;
        const client = _mod12917.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult2 = _mod12917;
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult3 = spanTimeInputToSeconds;
      }
      _mod12928.logSpanStart(sentrySpan);
      const tmpResult4 = _mod12928;
      const result = _mod12919.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod12926.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult6 = _mod12926;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj1 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult7 = spanTimeInputToSeconds;
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj1, scope, spanTimeInputToSeconds.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanTimeInputToSeconds.spanIsSampled(parentSpan);
      _mod12926.freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult8 = _mod12926;
    } else {
      const obj2 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj2.dsc;
      const obj3 = { traceId: null, parentSpanId: null };
      ({ traceId: obj12.traceId, parentSpanId: obj12.parentSpanId } = obj2);
      const merged4 = Object.assign(spanArguments);
      const tmp33 = _startRootSpan(obj3, scope, obj2.sampled);
      sentrySpan = tmp33;
      if (dsc) {
        _mod12926.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult9 = _mod12926;
      }
    }
  } else {
    const sentryNonRecordingSpan = new _mod12923.SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, arg1, parentSampled) {
  let obj = _mod12917;
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
    obj = { name: str, parentSampled, attributes: name.attributes, transactionContext: null };
    obj = { name: str, parentSampled };
    obj.transactionContext = obj;
    sampleSpanResult = _mod12929.sampleSpan(options, obj);
    const tmpResult = _mod12929;
  }
  [tmp6, tmp7] = _slicedToArray(sampleSpanResult, 2);
  const obj1 = {};
  const merged = Object.assign(name);
  const tmp5 = _slicedToArray(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj1.attributes = { [_mod12905.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj1.sampled = tmp6;
  const sentrySpan = new _mod12931.SentrySpan(obj1);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(_mod12905.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  _require = arg1;
  const mainCarrier = require("12908__.js").getMainCarrier();
  const obj = require("12908__.js");
  const tmp = _require;
  const asyncContextStrategy = require("12909__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return tmp(12917).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(
        _mod12902.propagationContextFromHeaders(dependencyMap, _slicedToArray),
      );
      return closure_0();
    });
  }
  const obj2 = require("12909__.js");
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  spanArguments = require("12908__.js");
  let mainCarrier = spanArguments.getMainCarrier();
  let asyncContextStrategy = require("12909__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    spanArguments = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = spanArguments;
    if (experimental.startTime) {
      spanArguments = {};
      const merged1 = Object.assign(spanArguments);
      spanArguments.startTimestamp = tmp3(tmp4[5]).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = spanArguments;
      const tmp3Result = tmp3(tmp4[5]);
    }
    spanArguments = tmp10;
    ({ forceTransaction: _slicedToArray, parentSpan } = experimental);
    if (experimental.scope) {
      let fn = (arg0) => _mod12917.withScope(experimental.scope, arg0);
    } else {
      fn =
        undefined !== parentSpan
          ? (arg0) => {
              closure_0 = parentSpan;
              closure_1 = arg0;
              const mainCarrier = _mod12908.getMainCarrier();
              const asyncContextStrategy = _mod12909.getAsyncContextStrategy(mainCarrier);
              if (asyncContextStrategy.withActiveSpan) {
                let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
              } else {
                withActiveSpanResult = _mod12917.withScope((arg0) => {
                  _null(dependencyMap[3])._setSpanForScope(arg0, c0);
                  return closure_1(arg0);
                });
                const tmp2Result = _mod12917;
              }
              return withActiveSpanResult;
            }
          : (fn) => fn();
    }
    return fn(() => {
      spanArguments = _mod12917;
      const currentScope = spanArguments.getCurrentScope();
      const _getSpanForScopeResult = _mod12912._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        let tmpResult = _mod12917;
        const client = tmpResult.getClient();
        if (client) {
          let options = client.getOptions();
        } else {
          options = {};
        }
        let rootSpan = _getSpanForScopeResult;
        if (options.parentSpanIsAlwaysRootSpan) {
          tmpResult = spanTimeInputToSeconds;
          rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
        }
        tmp5 = rootSpan;
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new _mod12923.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      spanArguments = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      sentryNonRecordingSpan = createChildOrRootSpan(spanArguments);
    });
  }
  let obj2 = require("12909__.js");
  tmp3 = _require;
  tmp4 = spanArguments;
};
export const startNewTrace = function startNewTrace(arg0) {
  _require = arg0;
  return require("12917__.js").withScope((setPropagationContext) => {
    const obj = { traceId: generatePropagationContext.generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod12918.DEBUG_BUILD) {
      const logger = _mod12890.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = _null;
    let tmpResult = _mod12908;
    const mainCarrier = tmpResult.getMainCarrier();
    tmpResult = _mod12909;
    const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, _null);
    } else {
      withActiveSpanResult = _mod12917.withScope((arg0) => {
        _null(dependencyMap[3])._setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
      const tmpResult1 = _mod12917;
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let obj = require("12908__.js");
  const mainCarrier = obj.getMainCarrier();
  const asyncContextStrategy = require("12909__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    obj = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      let tmp3Result = tmp3(12895);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    tmp3Result = tmp3(12917);
    return tmp3Result.withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            dependencyMap = arg0;
            const mainCarrier = closure_0(12908).getMainCarrier();
            obj = closure_0(12908);
            const tmp = closure_0;
            const tmp2 = closure_0;
            const asyncContextStrategy = closure_0(12909).getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
            } else {
              withActiveSpanResult = tmp2(12917).withScope((arg0) => {
                _null(dependencyMap[3])._setSpanForScope(arg0, c0);
                return closure_1(arg0);
              });
              const tmp2Result = tmp2(12917);
            }
            return withActiveSpanResult;
          }
        : ((fn) => fn())(() => {
            obj = sentryNonRecordingSpan(12917);
            const currentScope = obj.getCurrentScope();
            const _getSpanForScopeResult = sentryNonRecordingSpan(12912)._getSpanForScope(currentScope);
            let tmp5;
            if (_getSpanForScopeResult) {
              let tmpResult = tmp(12917);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                tmpResult = tmp(12895);
                rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
              }
              tmp5 = rootSpan;
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(12923).SentryNonRecordingSpan();
              }
              tmp(12912)._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult1 = tmp(12912);
              return tmp(12925).handleCallbackErrors(
                () => dependencyMap(sentryNonRecordingSpan),
                () => {
                  obj = sentryNonRecordingSpan(dependencyMap[5]);
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
                    obj = {
                      code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR,
                      message: "internal_error",
                    };
                    sentryNonRecordingSpan.setStatus(obj);
                  }
                },
                () => sentryNonRecordingSpan.end(),
              );
            }
            obj = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
            sentryNonRecordingSpan = closure_1_4(obj);
            const obj2 = sentryNonRecordingSpan(12912);
          });
    });
  }
  let obj2 = require("12909__.js");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let obj = require("12908__.js");
  let mainCarrier = obj.getMainCarrier();
  let asyncContextStrategy = require("12909__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    obj = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      let tmp3Result = tmp3(12895);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    tmp3Result = tmp3(12917);
    return tmp3Result.withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            dependencyMap = arg0;
            const mainCarrier = closure_0(12908).getMainCarrier();
            obj = closure_0(12908);
            const tmp = closure_0;
            const tmp2 = closure_0;
            const asyncContextStrategy = closure_0(12909).getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
            } else {
              withActiveSpanResult = tmp2(12917).withScope((arg0) => {
                _null(dependencyMap[3])._setSpanForScope(arg0, c0);
                return closure_1(arg0);
              });
              const tmp2Result = tmp2(12917);
            }
            return withActiveSpanResult;
          }
        : ((fn) => fn())(() => {
            function finishAndSetSpan() {
              sentryNonRecordingSpan.end();
            }
            obj = sentryNonRecordingSpan(12917);
            const currentScope = obj.getCurrentScope();
            const _getSpanForScopeResult = sentryNonRecordingSpan(12912)._getSpanForScope(currentScope);
            let tmp5;
            if (_getSpanForScopeResult) {
              let tmpResult = tmp(12917);
              const client = tmpResult.getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                tmpResult = tmp(12895);
                rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
              }
              tmp5 = rootSpan;
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(12923).SentryNonRecordingSpan();
              }
              tmp(12912)._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult1 = tmp(12912);
              return tmp(12925).handleCallbackErrors(
                () => dependencyMap(sentryNonRecordingSpan, finishAndSetSpan),
                () => {
                  obj = sentryNonRecordingSpan(dependencyMap[5]);
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
                    obj = {
                      code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR,
                      message: "internal_error",
                    };
                    sentryNonRecordingSpan.setStatus(obj);
                  }
                },
              );
            }
            obj = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
            sentryNonRecordingSpan = closure_1_4(obj);
            const obj2 = sentryNonRecordingSpan(12912);
          });
    });
  }
  let obj2 = require("12909__.js");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("12908__.js").getMainCarrier();
  const obj = require("12908__.js");
  const tmp = _require;
  const asyncContextStrategy = require("12909__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(12917).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
    const tmpResult = tmp(12917);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("12908__.js").getMainCarrier();
  const obj = require("12908__.js");
  const tmp = _require;
  const asyncContextStrategy = require("12909__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(12917).withScope((arg0) => {
      _null(dependencyMap[3])._setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(12917);
  }
  return withActiveSpanResult;
};
