// _runtime/00742_continueTrace.js
import TRACE_FLAG_NONE from "00695_TRACE_FLAG_NONE.js";
import _mod696 from "metro/00696__.js";
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod701 from "metro/00701__.js";
import regExp from "00710_regExp.js";
import _mod712 from "metro/00712__.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod717 from "metro/00717__.js";
import _getSpanForScope from "00720__getSpanForScope.js";
import _mod724 from "metro/00724__.js";
import _mod731 from "metro/00731__.js";
import SentryNonRecordingSpan from "00732_SentryNonRecordingSpan.js";
import freezeDscOnSpan from "00733_freezeDscOnSpan.js";
import SentrySpan2 from "00736_SentrySpan.js";
import logSpanEnd from "00737_logSpanEnd.js";
import sampleSpan2 from "00744_sampleSpan.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

const require = globalThis.__r;
let _require, dependencyMap;

const f81964 = (setPropagationContext) => {
  let obj2;
  let obj3;
  let withActiveSpanResult;
  setPropagationContext = setPropagationContext.setPropagationContext;
  const obj = { traceId: obj2.generateTraceId(), sampleRand: obj3.safeMathRandom() };
  obj2 = closure_0(dependencyMap[11]);
  obj3 = closure_0(dependencyMap[12]);
  const result = setPropagationContext(obj);
  if (closure_0(dependencyMap[13]).DEBUG_BUILD) {
    const debug = closure_0(tmp2[14]).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
  }
  let c0 = null;
  dependencyMap = closure_0;
  const tmpResult = closure_0(dependencyMap[7]);
  const mainCarrier = tmpResult.getMainCarrier();
  const tmpResult3 = closure_0(dependencyMap[8]);
  const asyncContextStrategy = tmpResult3.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, closure_0);
  } else {
    const tmpResult4 = closure_0(dependencyMap[1]);
    withActiveSpanResult = tmpResult4.withScope((arg0) => {
      const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
      parentSpan(obj4[3]);
      _setSpanForScope(arg0, closure_0);
      return closure_1(arg0);
    });
  }
  return withActiveSpanResult;
};
const f81966 = (fn) => fn();
function createChildOrRootSpan(arg0) {
  let forceTransaction;
  let parentSpan;
  let scope;
  let spanArguments;
  let spanId;
  let spanId2;
  let traceId;
  let traceId2;
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  const obj = _mod731;
  if (obj.hasSpansEnabled()) {
    let sentrySpan;
    const tmpResult = _mod724;
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        parentSpan.spanContext();
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        if (spanIsSampledResult) {
          const tmpResult13 = TRACE_FLAG_NONE;
          spanIsSampledResult = tmpResult13.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          const obj2 = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const SentrySpan = SentrySpan2.SentrySpan;
          const merged = Object.assign(spanArguments);
          const self5 = this;
          const self6 = this;
          sentrySpan = new SentrySpan(obj2);
        } else {
          const self3 = this;
          const self4 = this;
          const obj3 = { traceId };
          sentrySpan = new SentryNonRecordingSpan.SentryNonRecordingSpan(obj3);
        }
        const tmpResult14 = TRACE_FLAG_NONE;
        tmpResult14.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult15 = _mod724;
        const client = tmpResult15.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult16 = TRACE_FLAG_NONE;
        tmpResult16.addChildSpanToSpan(parentSpan, sentrySpan);
      }
      const tmpResult17 = logSpanEnd;
      tmpResult17.logSpanStart(sentrySpan);
      const tmpResult18 = _mod696;
      const result = tmpResult18.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const tmpResult19 = freezeDscOnSpan;
      const dynamicSamplingContextFromSpan = tmpResult19.getDynamicSamplingContextFromSpan(parentSpan);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult20 = TRACE_FLAG_NONE;
      const spanIsSampledResult1 = tmpResult20.spanIsSampled(parentSpan);
      const merged1 = Object.assign(spanArguments);
      const tmp38 = _startRootSpan(obj4, scope, spanIsSampledResult1);
      const tmpResult21 = freezeDscOnSpan;
      tmpResult21.freezeDscOnSpan(tmp38, dynamicSamplingContextFromSpan);
      sentrySpan = tmp38;
    } else {
      const obj5 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj5.dsc;
      const obj6 = { traceId: null, parentSpanId: null };
      ({ traceId: obj15.traceId, parentSpanId: obj15.parentSpanId } = obj5);
      const sampled = obj5.sampled;
      const merged4 = Object.assign(spanArguments);
      const tmp29 = _startRootSpan(obj6, scope, sampled);
      sentrySpan = tmp29;
      if (dsc) {
        const tmpResult22 = freezeDscOnSpan;
        tmpResult22.freezeDscOnSpan(tmp29, dsc);
        sentrySpan = tmp29;
      }
    }
  } else {
    const self = this;
    const self2 = this;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
    if (forceTransaction) {
      const obj7 = { sampled: "false", sample_rate: "0", transaction: spanArguments.name };
      const tmpResult23 = freezeDscOnSpan;
      const merged5 = Object.assign(tmpResult23.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      const tmpResult24 = freezeDscOnSpan;
      tmpResult24.freezeDscOnSpan(sentryNonRecordingSpan, obj7);
    }
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, getPropagationContext, parentSampled) {
  let obj3;
  let obj6;
  let parseSampleRate;
  let sampleSpanResult;
  let sample_rate;
  let tmp11;
  let tmp12;
  let tmp13;
  const obj = _mod724;
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
  const obj2 = { spanAttributes: obj3, spanName: str, parentSampled };
  obj3 = {};
  const merged = Object.assign(name.attributes);
  if (client != null) {
    client.emit("beforeSampling", obj2, { decision: false });
  }
  parentSampled = obj2.parentSampled;
  const spanAttributes = obj2.spanAttributes;
  const propagationContext = getPropagationContext.getPropagationContext();
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    sampleSpanResult = items;
  } else {
    const obj4 = {
      name: str,
      parentSampled,
      attributes: spanAttributes,
      parentSampleRate: parseSampleRate(sample_rate),
    };
    const sampleSpan = sampleSpan2.sampleSpan;
    sampleSpan2;
    const dsc = propagationContext.dsc;
    sample_rate = undefined;
    parseSampleRate = _mod712.parseSampleRate;
    _mod712;
    if (dsc != null) {
      sample_rate = dsc.sample_rate;
    }
    sampleSpanResult = sampleSpan(options, obj4, propagationContext.sampleRand);
  }
  [tmp11, tmp12, tmp13] = sampleSpanResult;
  const obj5 = { attributes: obj6, sampled: tmp11 };
  _slicedToArray(sampleSpanResult, 3);
  const SentrySpan = SentrySpan2.SentrySpan;
  const merged1 = Object.assign(name);
  obj6 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  let tmp15;
  const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
  if (undefined !== tmp12) {
    if (tmp13) {
      tmp15 = tmp12;
    }
  }
  obj6[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] = tmp15;
  const merged2 = Object.assign(spanAttributes);
  const sentrySpan = new SentrySpan(obj5);
  const tmp18 = !tmp11 && client;
  if (tmp18) {
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
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
  let baggage;
  let closure_0;
  _require = arg1;
  let obj = require("metro/00701__.js");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("metro/00717__.js");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage } = arg0);
    let tmpResult = tmp(724);
    const client = tmpResult.getClient();
    const tmpResult5 = require("MAX_BAGGAGE_STRING_LENGTH");
    let result = tmpResult5.baggageHeaderToDynamicSamplingContext(baggage);
    if (client) {
      let withScopeResult;
      let org_id;
      const shouldContinueTrace = require("regExp").shouldContinueTrace;
      require("regExp");
      if (result != null) {
        org_id = result.org_id;
      }
      if (!shouldContinueTrace(client, org_id)) {
        _require = arg1;
        const tmpResult7 = require("metro/00724__.js");
        withScopeResult = tmpResult7.withScope(f81964);
      }
      return withScopeResult;
    }
    const tmpResult8 = require("metro/00724__.js");
    withScopeResult = tmpResult8.withScope((setPropagationContext) => {
      const obj = regExp;
      const result = setPropagationContext.setPropagationContext(
        obj.propagationContextFromHeaders(dependencyMap, baggage),
      );
      const obj2 = _getSpanForScope;
      obj2._setSpanForScope(setPropagationContext, undefined);
      return closure_0();
    });
  }
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  let forceTransaction;
  let obj4;
  let parentSpan;
  let tmpResult;
  _require = experimental;
  const tmp = _require;
  let obj = require("metro/00701__.js");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("metro/00717__.js");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp2 = obj4;
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    let fn;
    const tmp4 = experimental.experimental || {};
    const obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(tmp2[5]);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: _slicedToArray, parentSpan } = experimental);
    if (experimental.scope) {
      fn = (arg0) => {
        const obj = _mod724;
        return obj.withScope(experimental.scope, arg0);
      };
    } else {
      fn =
        undefined !== parentSpan
          ? (arg0) => {
              let withActiveSpanResult;
              let closure_1 = arg0;
              const obj = _mod701;
              const mainCarrier = obj.getMainCarrier();
              const obj2 = _mod717;
              const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
              if (asyncContextStrategy.withActiveSpan) {
                withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
              } else {
                const tmp2Result = _mod724;
                withActiveSpanResult = tmp2Result.withScope((arg0) => {
                  const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
                  parentSpan(obj4[3]);
                  _setSpanForScope(arg0, closure_0);
                  return closure_1(arg0);
                });
              }
              return withActiveSpanResult;
            }
          : (fn) => fn();
    }
    return fn(function () {
      const obj = _mod724;
      const currentScope = obj.getCurrentScope();
      let tmp5 = parentSpan;
      if (!tmp5) {
        if (null !== tmp4) {
          const tmpResult = _getSpanForScope;
          const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
          if (_getSpanForScopeResult) {
            let options;
            const tmpResult3 = _mod724;
            const client = tmpResult3.getClient();
            if (client) {
              options = client.getOptions();
            } else {
              options = {};
            }
            let rootSpan = _getSpanForScopeResult;
            if (options.parentSpanIsAlwaysRootSpan) {
              const tmpResult4 = TRACE_FLAG_NONE;
              rootSpan = tmpResult4.getRootSpan(_getSpanForScopeResult);
            }
            tmp5 = rootSpan;
          }
        }
      }
      if (experimental.onlyIfParent) {
        let sentryNonRecordingSpan;
        if (!tmp5) {
          const self = this;
          const self2 = this;
          sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      const obj2 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction: _slicedToArray, scope: currentScope };
      sentryNonRecordingSpan = createChildOrRootSpan(obj2);
    });
  }
};
export const startNewTrace = function startNewTrace(runCallback) {
  _require = runCallback;
  const obj = require("metro/00724__.js");
  return obj.withScope(f81964);
};
export const startSpan = function startSpan(experimental, callback) {
  let scope;
  let tmpResult;
  _require = experimental;
  dependencyMap = callback;
  let obj = require("metro/00701__.js");
  const mainCarrier = obj.getMainCarrier();
  let obj2 = require("metro/00717__.js");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, callback);
  } else {
    const tmp4 = experimental.experimental || {};
    const obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    let tmp6 = experimental;
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      let obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(695);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    const tmpResult2 = require("metro/00724__.js");
    return tmpResult2.withScope(cloneResult, () => {
      let forceTransaction;
      let spanArguments;
      let closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            let withActiveSpanResult;
            closure_1 = arg0;
            const obj = experimental(closure_2_1[7]);
            const mainCarrier = obj.getMainCarrier();
            const obj2 = experimental(closure_2_1[8]);
            const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              withActiveSpanResult = asyncContextStrategy.withActiveSpan(closure_0, arg0);
            } else {
              const tmp2Result = experimental(closure_2_1[1]);
              withActiveSpanResult = tmp2Result.withScope((arg0) => {
                const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
                parentSpan(obj4[3]);
                _setSpanForScope(arg0, closure_0);
                return closure_1(arg0);
              });
            }
            return withActiveSpanResult;
          }
        : f81966(function () {
            let sentryNonRecordingSpan;
            let obj = experimental(callback[1]);
            const currentScope = obj.getCurrentScope();
            let tmp5 = closure_4;
            if (!tmp5) {
              let tmp6 = null;
              if (null !== tmp4) {
                const tmpResult = experimental(callback[3]);
                const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
                if (_getSpanForScopeResult) {
                  let options;
                  const tmpResult5 = experimental(callback[1]);
                  const client = tmpResult5.getClient();
                  if (client) {
                    options = client.getOptions();
                  } else {
                    options = {};
                  }
                  let rootSpan = _getSpanForScopeResult;
                  if (options.parentSpanIsAlwaysRootSpan) {
                    const tmpResult6 = experimental(callback[5]);
                    rootSpan = tmpResult6.getRootSpan(_getSpanForScopeResult);
                  }
                  tmp5 = rootSpan;
                }
              }
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                const self = this;
                const self2 = this;
                sentryNonRecordingSpan = new experimental(callback[2]).SentryNonRecordingSpan();
              }
              const tmpResult7 = experimental(callback[3]);
              tmpResult7._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult8 = experimental(callback[4]);
              return tmpResult8.handleCallbackErrors(
                () => callback(sentryNonRecordingSpan),
                () => {
                  const obj = sentryNonRecordingSpan(callback[5]);
                  const status = obj.spanToJSON(sentryNonRecordingSpan).status;
                  const isRecordingResult = sentryNonRecordingSpan.isRecording();
                  let tmp5 = !isRecordingResult;
                  if (isRecordingResult) {
                    tmp5 = status && "ok" !== status;
                    const tmp6 = status && "ok" !== status;
                  }
                  if (!tmp5) {
                    const setStatus = sentryNonRecordingSpan.setStatus;
                    const obj2 = {
                      code: sentryNonRecordingSpan(callback[6]).SPAN_STATUS_ERROR,
                      message: "internal_error",
                    };
                    setStatus(obj2);
                  }
                },
                () => {
                  sentryNonRecordingSpan.end();
                },
              );
            }
            let obj2 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
            sentryNonRecordingSpan = closure_1_4(obj2);
          });
    });
  }
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  let scope;
  let tmpResult;
  _require = experimental;
  dependencyMap = arg1;
  let obj = require("metro/00701__.js");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("metro/00717__.js");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    const tmp4 = experimental.experimental || {};
    const obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    let tmp6 = experimental;
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      let obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(695);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    const tmpResult2 = require("metro/00724__.js");
    return tmpResult2.withScope(cloneResult, () => {
      let forceTransaction;
      let spanArguments;
      let closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            let withActiveSpanResult;
            closure_1 = arg0;
            const obj = experimental(closure_2_1[7]);
            const mainCarrier = obj.getMainCarrier();
            const obj2 = experimental(closure_2_1[8]);
            const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              withActiveSpanResult = asyncContextStrategy.withActiveSpan(closure_0, arg0);
            } else {
              const tmp2Result = experimental(closure_2_1[1]);
              withActiveSpanResult = tmp2Result.withScope((arg0) => {
                const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
                parentSpan(obj4[3]);
                _setSpanForScope(arg0, closure_0);
                return closure_1(arg0);
              });
            }
            return withActiveSpanResult;
          }
        : f81966(function () {
            let sentryNonRecordingSpan;
            let obj = experimental(closure_1_1[1]);
            const currentScope = obj.getCurrentScope();
            let tmp5 = closure_4;
            if (!tmp5) {
              let tmp6 = null;
              if (null !== tmp4) {
                const tmpResult = experimental(closure_1_1[3]);
                const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
                if (_getSpanForScopeResult) {
                  let options;
                  const tmpResult5 = experimental(closure_1_1[1]);
                  const client = tmpResult5.getClient();
                  if (client) {
                    options = client.getOptions();
                  } else {
                    options = {};
                  }
                  let rootSpan = _getSpanForScopeResult;
                  if (options.parentSpanIsAlwaysRootSpan) {
                    const tmpResult6 = experimental(closure_1_1[5]);
                    rootSpan = tmpResult6.getRootSpan(_getSpanForScopeResult);
                  }
                  tmp5 = rootSpan;
                }
              }
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                const self = this;
                const self2 = this;
                sentryNonRecordingSpan = new experimental(closure_1_1[2]).SentryNonRecordingSpan();
              }
              const tmpResult7 = experimental(closure_1_1[3]);
              tmpResult7._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult8 = experimental(closure_1_1[4]);
              return tmpResult8.handleCallbackErrors(
                () => closure_2_1(sentryNonRecordingSpan, () => sentryNonRecordingSpan.end()),
                () => {
                  const obj = sentryNonRecordingSpan(closure_1[5]);
                  const status = obj.spanToJSON(sentryNonRecordingSpan).status;
                  const isRecordingResult = sentryNonRecordingSpan.isRecording();
                  let tmp5 = !isRecordingResult;
                  if (isRecordingResult) {
                    tmp5 = status && "ok" !== status;
                    const tmp6 = status && "ok" !== status;
                  }
                  if (!tmp5) {
                    const setStatus = sentryNonRecordingSpan.setStatus;
                    const obj2 = {
                      code: sentryNonRecordingSpan(closure_1[6]).SPAN_STATUS_ERROR,
                      message: "internal_error",
                    };
                    setStatus(obj2);
                  }
                },
              );
            }
            let obj2 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
            sentryNonRecordingSpan = closure_1_4(obj2);
          });
    });
  }
};
export const suppressTracing = function suppressTracing(arg0) {
  let closure_0;
  let suppressTracingResult;
  _require = arg0;
  const obj = require("metro/00701__.js");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("metro/00717__.js");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.suppressTracing) {
    suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    const tmpResult = tmp(724);
    suppressTracingResult = tmpResult.withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      const tmp2 = closure_0();
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: undefined });
      return tmp2;
    });
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(startInactiveSpanResult, arg1) {
  let closure_1;
  let withActiveSpanResult;
  _require = startInactiveSpanResult;
  dependencyMap = arg1;
  const obj = require("metro/00701__.js");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("metro/00717__.js");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.withActiveSpan) {
    withActiveSpanResult = asyncContextStrategy.withActiveSpan(startInactiveSpanResult, arg1);
  } else {
    const tmpResult = tmp(724);
    withActiveSpanResult = tmpResult.withScope((arg0) => {
      const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
      parentSpan(obj4[3]);
      _setSpanForScope(arg0, closure_0);
      return closure_1(arg0);
    });
  }
  return withActiveSpanResult;
};
