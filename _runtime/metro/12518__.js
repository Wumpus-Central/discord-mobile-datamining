// === Module 12518: ? ===

// Module 12518
import _mod12484 from "module_12484" /* 12484 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12489 */;
import generatePropagationContext from "generatePropagationContext" /* 12494 */;
import _mod12496 from "module_12496" /* 12496 */;
import _mod12499 from "module_12499" /* 12499 */;
import _mod12502 from "module_12502" /* 12502 */;
import _mod12503 from "module_12503" /* 12503 */;
import _mod12506 from "module_12506" /* 12506 */;
import _mod12511 from "module_12511" /* 12511 */;
import _mod12512 from "module_12512" /* 12512 */;
import _mod12513 from "module_12513" /* 12513 */;
import _mod12516 from "module_12516" /* 12516 */;
import _mod12517 from "module_12517" /* 12517 */;
import _mod12520 from "module_12520" /* 12520 */;
import _mod12522 from "module_12522" /* 12522 */;
import _mod12523 from "module_12523" /* 12523 */;
import _mod12525 from "module_12525" /* 12525 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  if (obj.hasTracingEnabled()) {
    const isolationScope = _mod12511.getIsolationScope();
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
          let sentrySpan = new _mod12525.SentrySpan(obj2);
        } else {
          const obj3 = { traceId };
          sentrySpan = new _mod12517.SentryNonRecordingSpan(obj3);
        }
        const spanContextResult = parentSpan.spanContext();
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult12 = spanTimeInputToSeconds;
        const client = _mod12511.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult13 = _mod12511;
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult14 = spanTimeInputToSeconds;
      }
      _mod12522.logSpanStart(sentrySpan);
      const tmpResult15 = _mod12522;
      const result = _mod12513.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod12520.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult17 = _mod12520;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult18 = spanTimeInputToSeconds;
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj4, scope, spanTimeInputToSeconds.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanTimeInputToSeconds.spanIsSampled(parentSpan);
      _mod12520.freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult19 = _mod12520;
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
        _mod12520.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult20 = _mod12520;
      }
    }
    const tmpResult = _mod12511;
  } else {
    const sentryNonRecordingSpan = new _mod12517.SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
  obj = _mod12516;
}
function _startRootSpan(name, arg1, parentSampled) {
  const client = _mod12511.getClient();
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
    sampleSpanResult = _mod12523.sampleSpan(options, obj2);
    const tmpResult = _mod12523;
  }
  [tmp6, tmp7] = sampleSpanResult;
  const obj4 = {};
  const merged = Object.assign(name);
  const tmp5 = _slicedToArray(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj4.attributes = { [_mod12499.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj4.sampled = tmp6;
  const sentrySpan = new _mod12525.SentrySpan(obj4);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(_mod12499.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  _require = arg1;
  const mainCarrier = require("module_12502").getMainCarrier();
  const obj = require("module_12502");
  const tmp = _require;
  const asyncContextStrategy = require("module_12503").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return tmp(12511).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(_mod12496.propagationContextFromHeaders(dependencyMap, _slicedToArray));
      return closure_0();
    });
  }
  const obj2 = require("module_12503");
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  let mainCarrier = require("module_12502").getMainCarrier();
  let obj = require("module_12502");
  const tmp3 = _require;
  const tmp4 = obj4;
  let asyncContextStrategy = require("module_12503").getAsyncContextStrategy(mainCarrier);
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
      let fn = (arg0) => _mod12511.withScope(experimental.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        closure_0 = parentSpan;
        closure_1 = arg0;
        const mainCarrier = _mod12502.getMainCarrier();
        const asyncContextStrategy = _mod12503.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
        } else {
          withActiveSpanResult = _mod12511.withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = _mod12511;
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(() => {
      const currentScope = _mod12511.getCurrentScope();
      const _getSpanForScopeResult = _mod12506._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        const client = _mod12511.getClient();
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
        const tmpResult = _mod12511;
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new _mod12517.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      sentryNonRecordingSpan = createChildOrRootSpan({ parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope });
      const obj3 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope };
    });
  }
  let obj2 = require("module_12503");
};
export const startNewTrace = function startNewTrace(arg0) {
  _require = arg0;
  return require("module_12511").withScope((setPropagationContext) => {
    const obj = { traceId: generatePropagationContext.generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod12512.DEBUG_BUILD) {
      const logger = _mod12484.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = _null;
    const mainCarrier = _mod12502.getMainCarrier();
    const tmpResult = _mod12502;
    const asyncContextStrategy = _mod12503.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, _null);
    } else {
      withActiveSpanResult = _mod12511.withScope((arg0) => {
        _null(dependencyMap[3])._setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
      const tmpResult4 = _mod12511;
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  const mainCarrier = require("module_12502").getMainCarrier();
  let obj = require("module_12502");
  const asyncContextStrategy = require("module_12503").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(12489).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(12489);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(12511).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(12502).getMainCarrier();
        const obj = closure_0(12502);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(12503).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(12511).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(12511);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        const currentScope = sentryNonRecordingSpan(12511).getCurrentScope();
        let obj = sentryNonRecordingSpan(12511);
        const _getSpanForScopeResult = sentryNonRecordingSpan(12506)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          const client = tmp(12511).getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            rootSpan = tmp(12489).getRootSpan(_getSpanForScopeResult);
            const tmpResult4 = tmp(12489);
          }
          tmp5 = rootSpan;
          const tmpResult = tmp(12511);
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(12517).SentryNonRecordingSpan();
          }
          tmp(12506)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult5 = tmp(12506);
          return tmp(12519).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan), () => {
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
        const obj2 = sentryNonRecordingSpan(12506);
        let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      });
    });
  }
  let obj2 = require("module_12503");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let mainCarrier = require("module_12502").getMainCarrier();
  let obj = require("module_12502");
  let asyncContextStrategy = require("module_12503").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(12489).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(12489);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(12511).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(12502).getMainCarrier();
        const obj = closure_0(12502);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(12503).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(12511).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(12511);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        function finishAndSetSpan() {
          sentryNonRecordingSpan.end();
        }
        const currentScope = sentryNonRecordingSpan(12511).getCurrentScope();
        let obj = sentryNonRecordingSpan(12511);
        const _getSpanForScopeResult = sentryNonRecordingSpan(12506)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          const client = tmp(12511).getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            rootSpan = tmp(12489).getRootSpan(_getSpanForScopeResult);
            const tmpResult4 = tmp(12489);
          }
          tmp5 = rootSpan;
          const tmpResult = tmp(12511);
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(12517).SentryNonRecordingSpan();
          }
          tmp(12506)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult5 = tmp(12506);
          return tmp(12519).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan, finishAndSetSpan), () => {
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
        const obj2 = sentryNonRecordingSpan(12506);
        let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      });
    });
  }
  let obj2 = require("module_12503");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("module_12502").getMainCarrier();
  const obj = require("module_12502");
  const tmp = _require;
  const asyncContextStrategy = require("module_12503").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(12511).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
    const tmpResult = tmp(12511);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("module_12502").getMainCarrier();
  const obj = require("module_12502");
  const tmp = _require;
  const asyncContextStrategy = require("module_12503").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(12511).withScope((arg0) => {
      _null(dependencyMap[3])._setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(12511);
  }
  return withActiveSpanResult;
};