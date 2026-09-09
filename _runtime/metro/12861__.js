// === Module 12861: ? ===

// Module 12861
import _mod12827 from "module_12827" /* 12827 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12832 */;
import generatePropagationContext from "generatePropagationContext" /* 12837 */;
import _mod12839 from "module_12839" /* 12839 */;
import _mod12842 from "module_12842" /* 12842 */;
import _mod12845 from "module_12845" /* 12845 */;
import _mod12846 from "module_12846" /* 12846 */;
import _mod12849 from "module_12849" /* 12849 */;
import _mod12854 from "module_12854" /* 12854 */;
import _mod12855 from "module_12855" /* 12855 */;
import _mod12856 from "module_12856" /* 12856 */;
import _mod12859 from "module_12859" /* 12859 */;
import _mod12860 from "module_12860" /* 12860 */;
import _mod12863 from "module_12863" /* 12863 */;
import _mod12865 from "module_12865" /* 12865 */;
import _mod12866 from "module_12866" /* 12866 */;
import _mod12868 from "module_12868" /* 12868 */;
import _slicedToArray from "module_32" /* 32 */;

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  let obj = _mod12859;
  if (obj.hasTracingEnabled()) {
    let tmpResult = _mod12854;
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
          let sentrySpan = new _mod12868.SentrySpan(obj);
        } else {
          obj = { traceId };
          sentrySpan = new _mod12860.SentryNonRecordingSpan(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult1 = spanTimeInputToSeconds;
        const client = _mod12854.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult2 = _mod12854;
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult3 = spanTimeInputToSeconds;
      }
      _mod12865.logSpanStart(sentrySpan);
      const tmpResult4 = _mod12865;
      const result = _mod12856.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod12863.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult6 = _mod12863;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj1 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult7 = spanTimeInputToSeconds;
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj1, scope, spanTimeInputToSeconds.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanTimeInputToSeconds.spanIsSampled(parentSpan);
      _mod12863.freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult8 = _mod12863;
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
        _mod12863.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult9 = _mod12863;
      }
    }
  } else {
    const sentryNonRecordingSpan = new _mod12860.SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, arg1, parentSampled) {
  let obj = _mod12854;
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
    sampleSpanResult = _mod12866.sampleSpan(options, obj);
    const tmpResult = _mod12866;
  }
  [tmp6, tmp7] = _slicedToArray(sampleSpanResult, 2);
  const obj1 = {};
  const merged = Object.assign(name);
  const tmp5 = _slicedToArray(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj1.attributes = { [_mod12842.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj1.sampled = tmp6;
  const sentrySpan = new _mod12868.SentrySpan(obj1);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(_mod12842.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  _require = arg1;
  const mainCarrier = require("module_12845").getMainCarrier();
  const obj = require("module_12845");
  const tmp = _require;
  const asyncContextStrategy = require("module_12846").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return tmp(12854).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(_mod12839.propagationContextFromHeaders(dependencyMap, _slicedToArray));
      return closure_0();
    });
  }
  const obj2 = require("module_12846");
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  spanArguments = require("module_12845");
  let mainCarrier = spanArguments.getMainCarrier();
  let asyncContextStrategy = require("module_12846").getAsyncContextStrategy(mainCarrier);
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
      let fn = (arg0) => _mod12854.withScope(experimental.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        closure_0 = parentSpan;
        closure_1 = arg0;
        const mainCarrier = _mod12845.getMainCarrier();
        const asyncContextStrategy = _mod12846.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
        } else {
          withActiveSpanResult = _mod12854.withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = _mod12854;
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(() => {
      spanArguments = _mod12854;
      const currentScope = spanArguments.getCurrentScope();
      const _getSpanForScopeResult = _mod12849._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        let tmpResult = _mod12854;
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
          let sentryNonRecordingSpan = new _mod12860.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      spanArguments = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      sentryNonRecordingSpan = createChildOrRootSpan(spanArguments);
    });
  }
  let obj2 = require("module_12846");
  tmp3 = _require;
  tmp4 = spanArguments;
};
export const startNewTrace = function startNewTrace(arg0) {
  _require = arg0;
  return require("module_12854").withScope((setPropagationContext) => {
    const obj = { traceId: generatePropagationContext.generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = _null;
    let tmpResult = _mod12845;
    const mainCarrier = tmpResult.getMainCarrier();
    tmpResult = _mod12846;
    const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, _null);
    } else {
      withActiveSpanResult = _mod12854.withScope((arg0) => {
        _null(dependencyMap[3])._setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
      const tmpResult1 = _mod12854;
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let obj = require("module_12845");
  const mainCarrier = obj.getMainCarrier();
  const asyncContextStrategy = require("module_12846").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    obj = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      let tmp3Result = tmp3(12832);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    tmp3Result = tmp3(12854);
    return tmp3Result.withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(12845).getMainCarrier();
        obj = closure_0(12845);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(12846).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(12854).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(12854);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        obj = sentryNonRecordingSpan(12854);
        const currentScope = obj.getCurrentScope();
        const _getSpanForScopeResult = sentryNonRecordingSpan(12849)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          let tmpResult = tmp(12854);
          const client = tmpResult.getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            tmpResult = tmp(12832);
            rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
          }
          tmp5 = rootSpan;
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(12860).SentryNonRecordingSpan();
          }
          tmp(12849)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult1 = tmp(12849);
          return tmp(12862).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan), () => {
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
              obj = { code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              sentryNonRecordingSpan.setStatus(obj);
            }
          }, () => sentryNonRecordingSpan.end());
        }
        obj = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj);
        const obj2 = sentryNonRecordingSpan(12849);
      });
    });
  }
  let obj2 = require("module_12846");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let obj = require("module_12845");
  let mainCarrier = obj.getMainCarrier();
  let asyncContextStrategy = require("module_12846").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    obj = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj;
    if (experimental.startTime) {
      obj = {};
      const merged1 = Object.assign(obj);
      let tmp3Result = tmp3(12832);
      obj.startTimestamp = tmp3Result.spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj;
    }
    obj = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    tmp3Result = tmp3(12854);
    return tmp3Result.withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(12845).getMainCarrier();
        obj = closure_0(12845);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(12846).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(12854).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(12854);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        function finishAndSetSpan() {
          sentryNonRecordingSpan.end();
        }
        obj = sentryNonRecordingSpan(12854);
        const currentScope = obj.getCurrentScope();
        const _getSpanForScopeResult = sentryNonRecordingSpan(12849)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          let tmpResult = tmp(12854);
          const client = tmpResult.getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            tmpResult = tmp(12832);
            rootSpan = tmpResult.getRootSpan(_getSpanForScopeResult);
          }
          tmp5 = rootSpan;
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(12860).SentryNonRecordingSpan();
          }
          tmp(12849)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult1 = tmp(12849);
          return tmp(12862).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan, finishAndSetSpan), () => {
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
              obj = { code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              sentryNonRecordingSpan.setStatus(obj);
            }
          });
        }
        obj = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj);
        const obj2 = sentryNonRecordingSpan(12849);
      });
    });
  }
  let obj2 = require("module_12846");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("module_12845").getMainCarrier();
  const obj = require("module_12845");
  const tmp = _require;
  const asyncContextStrategy = require("module_12846").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(12854).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
    const tmpResult = tmp(12854);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("module_12845").getMainCarrier();
  const obj = require("module_12845");
  const tmp = _require;
  const asyncContextStrategy = require("module_12846").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(12854).withScope((arg0) => {
      _null(dependencyMap[3])._setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(12854);
  }
  return withActiveSpanResult;
};