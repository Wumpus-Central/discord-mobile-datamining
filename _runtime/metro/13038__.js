// _runtime/metro/13038__.js
import _mod13004 from "13004__.js";
import spanTimeInputToSeconds from "../13009_spanTimeInputToSeconds.js";
import generatePropagationContext from "../13014_generatePropagationContext.js";
import _mod13016 from "13016__.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "../13019_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod13022 from "13022__.js";
import _mod13023 from "13023__.js";
import _mod13026 from "13026__.js";
import _mod13031 from "13031__.js";
import _mod13032 from "13032__.js";
import _mod13033 from "13033__.js";
import _mod13036 from "13036__.js";
import _mod13037 from "13037__.js";
import _mod13040 from "13040__.js";
import _mod13042 from "13042__.js";
import _mod13043 from "13043__.js";
import _mod13045 from "13045__.js";
import _slicedToArray from "00032__.js";

const require = globalThis.__r;

function createChildOrRootSpan(forceTransaction) {
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  if (obj.hasTracingEnabled()) {
    const isolationScope = _mod13031.getIsolationScope();
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
          let sentrySpan = new _mod13045.SentrySpan(obj2);
        } else {
          const obj3 = { traceId };
          sentrySpan = new _mod13037.SentryNonRecordingSpan(obj3);
        }
        const spanContextResult = parentSpan.spanContext();
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult12 = spanTimeInputToSeconds;
        const client = _mod13031.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult13 = _mod13031;
        spanTimeInputToSeconds.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult14 = spanTimeInputToSeconds;
      }
      _mod13042.logSpanStart(sentrySpan);
      const tmpResult15 = _mod13042;
      const result = _mod13033.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod13040.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult17 = _mod13040;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult18 = spanTimeInputToSeconds;
      const merged1 = Object.assign(spanArguments);
      const tmp42 = _startRootSpan(obj4, scope, spanTimeInputToSeconds.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanTimeInputToSeconds.spanIsSampled(parentSpan);
      _mod13040.freezeDscOnSpan(tmp42, dynamicSamplingContextFromSpan);
      sentrySpan = tmp42;
      const tmpResult19 = _mod13040;
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
        _mod13040.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const tmpResult20 = _mod13040;
      }
    }
    const tmpResult = _mod13031;
  } else {
    const sentryNonRecordingSpan = new _mod13037.SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
  obj = _mod13036;
}
function _startRootSpan(name, arg1, parentSampled) {
  const client = _mod13031.getClient();
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
    sampleSpanResult = _mod13043.sampleSpan(options, obj2);
    const tmpResult = _mod13043;
  }
  [tmp6, tmp7] = sampleSpanResult;
  const obj4 = {};
  const merged = Object.assign(name);
  const tmp5 = _slicedToArray(sampleSpanResult, 2);
  const merged1 = Object.assign(name.attributes);
  obj4.attributes = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  obj4.sampled = tmp6;
  const sentrySpan = new _mod13045.SentrySpan(obj4);
  if (undefined !== tmp7) {
    const attr = sentrySpan.setAttribute(SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp7);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export (arg0, arg1) => {
  _require = arg1;
  const mainCarrier = require("13022__.js").getMainCarrier();
  const obj = require("13022__.js");
  const tmp = _require;
  const asyncContextStrategy = require("13023__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return tmp(13031).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(_mod13016.propagationContextFromHeaders(dependencyMap, _slicedToArray));
      return closure_0();
    });
  }
  const obj2 = require("13023__.js");
}
export function startInactiveSpan(experimental) {
  _require = experimental;
  let mainCarrier = require("13022__.js").getMainCarrier();
  let obj = require("13022__.js");
  const tmp3 = _require;
  const tmp4 = obj4;
  let asyncContextStrategy = require("13023__.js").getAsyncContextStrategy(mainCarrier);
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
      let fn = (arg0) => _mod13031.withScope(experimental.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        closure_0 = parentSpan;
        closure_1 = arg0;
        const mainCarrier = _mod13022.getMainCarrier();
        const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
        } else {
          withActiveSpanResult = _mod13031.withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = _mod13031;
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(() => {
      const currentScope = _mod13031.getCurrentScope();
      const _getSpanForScopeResult = _mod13026._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        const client = _mod13031.getClient();
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
        const tmpResult = _mod13031;
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new _mod13037.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      sentryNonRecordingSpan = createChildOrRootSpan({ parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope });
      const obj3 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope };
    });
  }
  let obj2 = require("13023__.js");
}
export function startNewTrace(arg0) {
  _require = arg0;
  return require("13031__.js").withScope((setPropagationContext) => {
    const obj = { traceId: generatePropagationContext.generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod13032.DEBUG_BUILD) {
      const logger = _mod13004.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = _null;
    const mainCarrier = _mod13022.getMainCarrier();
    const tmpResult = _mod13022;
    const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, _null);
    } else {
      withActiveSpanResult = _mod13031.withScope((arg0) => {
        _null(dependencyMap[3])._setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
      const tmpResult4 = _mod13031;
    }
    return withActiveSpanResult;
  });
}
export function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  const mainCarrier = require("13022__.js").getMainCarrier();
  let obj = require("13022__.js");
  const asyncContextStrategy = require("13023__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(13009).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(13009);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(13031).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(13022).getMainCarrier();
        const obj = closure_0(13022);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(13023).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(13031).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(13031);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        const currentScope = sentryNonRecordingSpan(13031).getCurrentScope();
        let obj = sentryNonRecordingSpan(13031);
        const _getSpanForScopeResult = sentryNonRecordingSpan(13026)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          const client = tmp(13031).getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            rootSpan = tmp(13009).getRootSpan(_getSpanForScopeResult);
            const tmpResult4 = tmp(13009);
          }
          tmp5 = rootSpan;
          const tmpResult = tmp(13031);
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(13037).SentryNonRecordingSpan();
          }
          tmp(13026)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult5 = tmp(13026);
          return tmp(13039).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan), () => {
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
        const obj2 = sentryNonRecordingSpan(13026);
        let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      });
    });
  }
  let obj2 = require("13023__.js");
}
export function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let mainCarrier = require("13022__.js").getMainCarrier();
  let obj = require("13022__.js");
  let asyncContextStrategy = require("13023__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(13009).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(13009);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    return tmp3(13031).withScope(experimental.scope, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(13022).getMainCarrier();
        const obj = closure_0(13022);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(13023).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(13031).withScope((arg0) => {
            _null(dependencyMap[3])._setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(13031);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        function finishAndSetSpan() {
          sentryNonRecordingSpan.end();
        }
        const currentScope = sentryNonRecordingSpan(13031).getCurrentScope();
        let obj = sentryNonRecordingSpan(13031);
        const _getSpanForScopeResult = sentryNonRecordingSpan(13026)._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          const client = tmp(13031).getClient();
          if (client) {
            let options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            rootSpan = tmp(13009).getRootSpan(_getSpanForScopeResult);
            const tmpResult4 = tmp(13009);
          }
          tmp5 = rootSpan;
          const tmpResult = tmp(13031);
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(13037).SentryNonRecordingSpan();
          }
          tmp(13026)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult5 = tmp(13026);
          return tmp(13039).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan, finishAndSetSpan), () => {
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
        const obj2 = sentryNonRecordingSpan(13026);
        let obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
      });
    });
  }
  let obj2 = require("13023__.js");
}
export function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("13022__.js").getMainCarrier();
  const obj = require("13022__.js");
  const tmp = _require;
  const asyncContextStrategy = require("13023__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(13031).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
    const tmpResult = tmp(13031);
  }
  return suppressTracingResult;
}
export function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("13022__.js").getMainCarrier();
  const obj = require("13022__.js");
  const tmp = _require;
  const asyncContextStrategy = require("13023__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(13031).withScope((arg0) => {
      _null(dependencyMap[3])._setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(13031);
  }
  return withActiveSpanResult;
}