// === Module 12559: ? ===

// Module 12559
import _mod12525 from "module_12525" /* 12525 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12530 */;
import generatePropagationContext from "generatePropagationContext" /* 12535 */;
import _mod12537 from "module_12537" /* 12537 */;
import _mod12540 from "module_12540" /* 12540 */;
import _mod12543 from "module_12543" /* 12543 */;
import _mod12544 from "module_12544" /* 12544 */;
import _mod12547 from "module_12547" /* 12547 */;
import _mod12552 from "module_12552" /* 12552 */;
import _mod12553 from "module_12553" /* 12553 */;
import _mod12554 from "module_12554" /* 12554 */;
import _mod12557 from "module_12557" /* 12557 */;
import _mod12558 from "module_12558" /* 12558 */;
import _mod12561 from "module_12561" /* 12561 */;
import _mod12563 from "module_12563" /* 12563 */;
import _mod12564 from "module_12564" /* 12564 */;
import _mod12566 from "module_12566" /* 12566 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  if (obj.hasTracingEnabled()) {
    const isolationScope = _mod12552.getIsolationScope();
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
          let sentrySpan = new _mod12566.SentrySpan(obj2);
        } else {
          const obj3 = { traceId };
          sentrySpan = new _mod12558.SentryNonRecordingSpan(obj3);
        }
        const spanContextResult = parentSpan.spanContext();
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult12 = spanTimeInputToSeconds;
        const client = _mod12552.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult13 = _mod12552;
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult14 = spanTimeInputToSeconds;
      }
      _mod12563.logSpanStart(sentrySpan);
      const tmpResult15 = _mod12563;
      const result = _mod12554.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod12561.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult17 = _mod12561;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult18 = spanTimeInputToSeconds;
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj4, scope, spanTimeInputToSeconds.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanTimeInputToSeconds.spanIsSampled(parentSpan);
      _mod12561.freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult19 = _mod12561;
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
        _mod12561.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult20 = _mod12561;
      }
    }
    const tmpResult = _mod12552;
  } else {
    const sentryNonRecordingSpan = new _mod12558.SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
  obj = _mod12557;
}
function _startRootSpan(name, arg1, parentSampled) {
  const client = _mod12552.getClient();
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
    sampleSpanResult = _mod12564.sampleSpan(options, obj2);
    const tmpResult = _mod12564;
  }
  [tmp6, tmp7] = sampleSpanResult;
  const obj4 = {};
  const merged = Object.assign(name);
  const tmp5 = _slicedToArray(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj4.attributes = { [_mod12540.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj4.sampled = tmp6;
  const sentrySpan = new _mod12566.SentrySpan(obj4);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(_mod12540.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  _require = arg1;
  const mainCarrier = require("module_12543").getMainCarrier();
  const obj = require("module_12543");
  const tmp = _require;
  const asyncContextStrategy = require("module_12544").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return tmp(12552).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(_mod12537.propagationContextFromHeaders(dependencyMap, _slicedToArray));
      return closure_0();
    });
  }
  const obj2 = require("module_12544");
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  let mainCarrier = require("module_12543").getMainCarrier();
  let obj = require("module_12543");
  const tmp3 = _require;
  const tmp4 = obj4;
  let asyncContextStrategy = require("module_12544").getAsyncContextStrategy(mainCarrier);
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
      let fn = (arg0) => _mod12552.withScope(experimental.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        closure_0 = parentSpan;
        closure_1 = arg0;
        const mainCarrier = _mod12543.getMainCarrier();
        const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
        } else {
          withActiveSpanResult = _mod12552.withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = _mod12552;
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(() => {
      const currentScope = _mod12552.getCurrentScope();
      const _getSpanForScopeResult = _mod12547._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        const client = _mod12552.getClient();
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
        const tmpResult = _mod12552;
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new _mod12558.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      sentryNonRecordingSpan = createChildOrRootSpan({ parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope });
      const obj3 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope };
    });
  }
  let obj2 = require("module_12544");
};
export const startNewTrace = function startNewTrace(arg0) {
  _require = arg0;
  return require("module_12552").withScope((setPropagationContext) => {
    const obj = { traceId: generatePropagationContext.generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod12553.DEBUG_BUILD) {
      const logger = _mod12525.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = _null;
    const mainCarrier = _mod12543.getMainCarrier();
    const tmpResult = _mod12543;
    const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, _null);
    } else {
      withActiveSpanResult = _mod12552.withScope((arg0) => {
        _null(dependencyMap[3])._setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
      const tmpResult4 = _mod12552;
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  const mainCarrier = require("module_12543").getMainCarrier();
  let obj = require("module_12543");
  const asyncContextStrategy = require("module_12544").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(12530).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(12530);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(12552).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(12543).getMainCarrier();
        const obj = closure_0(12543);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(12544).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(12552).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(12552);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        const currentScope = sentryNonRecordingSpan(12552).getCurrentScope();
        let obj = sentryNonRecordingSpan(12552);
        const _getSpanForScopeResult = sentryNonRecordingSpan(12547)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          const client = tmp(12552).getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            rootSpan = tmp(12530).getRootSpan(_getSpanForScopeResult);
            const tmpResult4 = tmp(12530);
          }
          tmp5 = rootSpan;
          const tmpResult = tmp(12552);
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(12558).SentryNonRecordingSpan();
          }
          tmp(12547)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult5 = tmp(12547);
          return tmp(12560).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan), () => {
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
              const obj3 = { code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              sentryNonRecordingSpan.setStatus(obj3);
            }
            const obj = sentryNonRecordingSpan(dependencyMap[5]);
          }, () => sentryNonRecordingSpan.end());
        }
        sentryNonRecordingSpan = closure_1_4({ parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope });
        const obj2 = sentryNonRecordingSpan(12547);
        let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      });
    });
  }
  let obj2 = require("module_12544");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let mainCarrier = require("module_12543").getMainCarrier();
  let obj = require("module_12543");
  let asyncContextStrategy = require("module_12544").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(12530).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(12530);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(12552).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(12543).getMainCarrier();
        const obj = closure_0(12543);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(12544).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(12552).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(12552);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        function finishAndSetSpan() {
          sentryNonRecordingSpan.end();
        }
        const currentScope = sentryNonRecordingSpan(12552).getCurrentScope();
        let obj = sentryNonRecordingSpan(12552);
        const _getSpanForScopeResult = sentryNonRecordingSpan(12547)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          const client = tmp(12552).getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            rootSpan = tmp(12530).getRootSpan(_getSpanForScopeResult);
            const tmpResult4 = tmp(12530);
          }
          tmp5 = rootSpan;
          const tmpResult = tmp(12552);
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(12558).SentryNonRecordingSpan();
          }
          tmp(12547)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult5 = tmp(12547);
          return tmp(12560).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan, finishAndSetSpan), () => {
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
              const obj3 = { code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              sentryNonRecordingSpan.setStatus(obj3);
            }
            const obj = sentryNonRecordingSpan(dependencyMap[5]);
          });
        }
        sentryNonRecordingSpan = closure_1_4({ parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope });
        const obj2 = sentryNonRecordingSpan(12547);
        let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      });
    });
  }
  let obj2 = require("module_12544");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("module_12543").getMainCarrier();
  const obj = require("module_12543");
  const tmp = _require;
  const asyncContextStrategy = require("module_12544").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(12552).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
    const tmpResult = tmp(12552);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("module_12543").getMainCarrier();
  const obj = require("module_12543");
  const tmp = _require;
  const asyncContextStrategy = require("module_12544").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(12552).withScope((arg0) => {
      _null(dependencyMap[3])._setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(12552);
  }
  return withActiveSpanResult;
};