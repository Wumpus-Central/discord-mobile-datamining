// _runtime/metro/12966__.js
import _mod12932 from "12932__.js";
import spanTimeInputToSeconds from "../12937_spanTimeInputToSeconds.js";
import generatePropagationContext from "../12942_generatePropagationContext.js";
import _mod12944 from "12944__.js";
import _mod12947 from "12947__.js";
import _mod12950 from "12950__.js";
import _mod12951 from "12951__.js";
import _mod12954 from "12954__.js";
import _mod12959 from "12959__.js";
import _mod12960 from "12960__.js";
import _mod12961 from "12961__.js";
import _mod12964 from "12964__.js";
import _mod12965 from "12965__.js";
import _mod12968 from "12968__.js";
import _mod12970 from "12970__.js";
import _mod12971 from "12971__.js";
import _mod12973 from "12973__.js";
import _slicedToArray from "00032__.js";

const require = globalThis.__r;

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  if (obj.hasTracingEnabled()) {
    const isolationScope = _mod12959.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction.forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp9 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp9;
        if (!tmp9) {
          spanIsSampledResult = spanTimeInputToSeconds.spanIsSampled(parentSpan);
          const tmpResult11 = spanTimeInputToSeconds;
        }
        if (spanIsSampledResult) {
          const obj2 = {};
          const merged = Object.assign(spanArguments);
          obj2.parentSpanId = spanId;
          obj2.traceId = traceId;
          obj2.sampled = spanIsSampledResult;
          let sentrySpan = new _mod12973.SentrySpan(obj2);
        } else {
          const obj3 = { traceId };
          sentrySpan = new _mod12965.SentryNonRecordingSpan(obj3);
        }
        const spanContextResult = parentSpan.spanContext();
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult12 = spanTimeInputToSeconds;
        const client = _mod12959.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult13 = _mod12959;
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult14 = spanTimeInputToSeconds;
      }
      _mod12970.logSpanStart(sentrySpan);
      const tmpResult15 = _mod12970;
      const result = _mod12961.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod12968.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult17 = _mod12968;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult18 = spanTimeInputToSeconds;
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj4, scope, spanTimeInputToSeconds.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanTimeInputToSeconds.spanIsSampled(parentSpan);
      _mod12968.freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult19 = _mod12968;
    } else {
      const obj5 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj5.dsc;
      const obj6 = { traceId: null, parentSpanId: null };
      ({ traceId: obj12.traceId, parentSpanId: obj12.parentSpanId } = obj5);
      const merged4 = Object.assign(spanArguments);
      const tmp33 = _startRootSpan(obj6, scope, obj5.sampled);
      sentrySpan = tmp33;
      if (dsc) {
        _mod12968.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult20 = _mod12968;
      }
    }
    const tmpResult = _mod12959;
  } else {
    const sentryNonRecordingSpan = new _mod12965.SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
  obj = _mod12964;
}
function _startRootSpan(name, arg1, parentSampled) {
  const client = _mod12959.getClient();
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
    const obj2 = { name: str, parentSampled, attributes: name.attributes, transactionContext: null };
    const obj3 = { name: str, parentSampled };
    obj2.transactionContext = obj3;
    sampleSpanResult = _mod12971.sampleSpan(options, obj2);
    const tmpResult = _mod12971;
  }
  [tmp6, tmp7] = sampleSpanResult;
  const obj4 = {};
  const merged = Object.assign(name);
  const tmp5 = _slicedToArray(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj4.attributes = { [_mod12947.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj4.sampled = tmp6;
  const sentrySpan = new _mod12973.SentrySpan(obj4);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(_mod12947.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  _require = arg1;
  const mainCarrier = require("12950__.js").getMainCarrier();
  const obj = require("12950__.js");
  const tmp = _require;
  const asyncContextStrategy = require("12951__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return tmp(12959).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(
        _mod12944.propagationContextFromHeaders(dependencyMap, _slicedToArray),
      );
      return closure_0();
    });
  }
  const obj2 = require("12951__.js");
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  let mainCarrier = require("12950__.js").getMainCarrier();
  let obj = require("12950__.js");
  const tmp3 = _require;
  const tmp4 = obj4;
  let asyncContextStrategy = require("12951__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(tmp4[5]).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(tmp4[5]);
    }
    obj4 = tmp10;
    ({ forceTransaction: _slicedToArray, parentSpan } = experimental);
    if (experimental.scope) {
      let fn = (arg0) => _mod12959.withScope(experimental.scope, arg0);
    } else {
      fn =
        undefined !== parentSpan
          ? (arg0) => {
              closure_0 = parentSpan;
              closure_1 = arg0;
              const mainCarrier = _mod12950.getMainCarrier();
              const asyncContextStrategy = _mod12951.getAsyncContextStrategy(mainCarrier);
              if (asyncContextStrategy.withActiveSpan) {
                let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
              } else {
                withActiveSpanResult = _mod12959.withScope((arg0) => {
                  _null(dependencyMap[3])._setSpanForScope(arg0, c0);
                  return closure_1(arg0);
                });
                const tmp2Result = _mod12959;
              }
              return withActiveSpanResult;
            }
          : (fn) => fn();
    }
    return fn(() => {
      const currentScope = _mod12959.getCurrentScope();
      const _getSpanForScopeResult = _mod12954._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        const client = _mod12959.getClient();
        if (client) {
          let options = client.getOptions();
        } else {
          options = {};
        }
        let rootSpan = _getSpanForScopeResult;
        if (options.parentSpanIsAlwaysRootSpan) {
          rootSpan = spanTimeInputToSeconds.getRootSpan(_getSpanForScopeResult);
          const tmpResult2 = spanTimeInputToSeconds;
        }
        tmp5 = rootSpan;
        const tmpResult = _mod12959;
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new _mod12965.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      sentryNonRecordingSpan = createChildOrRootSpan({
        parentSpan: tmp5,
        spanArguments: obj4,
        forceTransaction,
        scope: currentScope,
      });
      const obj3 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope };
    });
  }
  let obj2 = require("12951__.js");
};
export const startNewTrace = function startNewTrace(arg0) {
  _require = arg0;
  return require("12959__.js").withScope((setPropagationContext) => {
    const obj = { traceId: generatePropagationContext.generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod12960.DEBUG_BUILD) {
      const logger = _mod12932.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = _null;
    const mainCarrier = _mod12950.getMainCarrier();
    const tmpResult = _mod12950;
    const asyncContextStrategy = _mod12951.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, _null);
    } else {
      withActiveSpanResult = _mod12959.withScope((arg0) => {
        _null(dependencyMap[3])._setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
      const tmpResult4 = _mod12959;
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  const mainCarrier = require("12950__.js").getMainCarrier();
  let obj = require("12950__.js");
  const asyncContextStrategy = require("12951__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(12937).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(12937);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(12959).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            dependencyMap = arg0;
            const mainCarrier = closure_0(12950).getMainCarrier();
            const obj = closure_0(12950);
            const tmp = closure_0;
            const tmp2 = closure_0;
            const asyncContextStrategy = closure_0(12951).getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
            } else {
              withActiveSpanResult = tmp2(12959).withScope((arg0) => {
                _null(dependencyMap[3])._setSpanForScope(arg0, c0);
                return closure_1(arg0);
              });
              const tmp2Result = tmp2(12959);
            }
            return withActiveSpanResult;
          }
        : ((fn) => fn())(() => {
            const currentScope = sentryNonRecordingSpan(12959).getCurrentScope();
            let obj = sentryNonRecordingSpan(12959);
            const _getSpanForScopeResult = sentryNonRecordingSpan(12954)._getSpanForScope(currentScope);
            let tmp5;
            if (_getSpanForScopeResult) {
              const client = tmp(12959).getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = tmp(12937).getRootSpan(_getSpanForScopeResult);
                const tmpResult4 = tmp(12937);
              }
              tmp5 = rootSpan;
              const tmpResult = tmp(12959);
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(12965).SentryNonRecordingSpan();
              }
              tmp(12954)._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult5 = tmp(12954);
              return tmp(12967).handleCallbackErrors(
                () => dependencyMap(sentryNonRecordingSpan),
                () => {
                  const status = sentryNonRecordingSpan(dependencyMap[5]).spanToJSON(sentryNonRecordingSpan).status;
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
                    const obj3 = {
                      code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR,
                      message: "internal_error",
                    };
                    sentryNonRecordingSpan.setStatus(obj3);
                  }
                  const obj = sentryNonRecordingSpan(dependencyMap[5]);
                },
                () => sentryNonRecordingSpan.end(),
              );
            }
            sentryNonRecordingSpan = closure_1_4({
              parentSpan: tmp5,
              spanArguments,
              forceTransaction,
              scope: currentScope,
            });
            const obj2 = sentryNonRecordingSpan(12954);
            let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
          });
    });
  }
  let obj2 = require("12951__.js");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let mainCarrier = require("12950__.js").getMainCarrier();
  let obj = require("12950__.js");
  let asyncContextStrategy = require("12951__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(12937).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(12937);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(12959).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            dependencyMap = arg0;
            const mainCarrier = closure_0(12950).getMainCarrier();
            const obj = closure_0(12950);
            const tmp = closure_0;
            const tmp2 = closure_0;
            const asyncContextStrategy = closure_0(12951).getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
            } else {
              withActiveSpanResult = tmp2(12959).withScope((arg0) => {
                _null(dependencyMap[3])._setSpanForScope(arg0, c0);
                return closure_1(arg0);
              });
              const tmp2Result = tmp2(12959);
            }
            return withActiveSpanResult;
          }
        : ((fn) => fn())(() => {
            function finishAndSetSpan() {
              sentryNonRecordingSpan.end();
            }
            const currentScope = sentryNonRecordingSpan(12959).getCurrentScope();
            let obj = sentryNonRecordingSpan(12959);
            const _getSpanForScopeResult = sentryNonRecordingSpan(12954)._getSpanForScope(currentScope);
            let tmp5;
            if (_getSpanForScopeResult) {
              const client = tmp(12959).getClient();
              if (client) {
                let options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = tmp(12937).getRootSpan(_getSpanForScopeResult);
                const tmpResult4 = tmp(12937);
              }
              tmp5 = rootSpan;
              const tmpResult = tmp(12959);
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(12965).SentryNonRecordingSpan();
              }
              tmp(12954)._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult5 = tmp(12954);
              return tmp(12967).handleCallbackErrors(
                () => dependencyMap(sentryNonRecordingSpan, finishAndSetSpan),
                () => {
                  const status = sentryNonRecordingSpan(dependencyMap[5]).spanToJSON(sentryNonRecordingSpan).status;
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
                    const obj3 = {
                      code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR,
                      message: "internal_error",
                    };
                    sentryNonRecordingSpan.setStatus(obj3);
                  }
                  const obj = sentryNonRecordingSpan(dependencyMap[5]);
                },
              );
            }
            sentryNonRecordingSpan = closure_1_4({
              parentSpan: tmp5,
              spanArguments,
              forceTransaction,
              scope: currentScope,
            });
            const obj2 = sentryNonRecordingSpan(12954);
            let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
          });
    });
  }
  let obj2 = require("12951__.js");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("12950__.js").getMainCarrier();
  const obj = require("12950__.js");
  const tmp = _require;
  const asyncContextStrategy = require("12951__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(12959).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
    const tmpResult = tmp(12959);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("12950__.js").getMainCarrier();
  const obj = require("12950__.js");
  const tmp = _require;
  const asyncContextStrategy = require("12951__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(12959).withScope((arg0) => {
      _null(dependencyMap[3])._setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(12959);
  }
  return withActiveSpanResult;
};
