// _runtime/metro/00742__.js
import spanToJSON from "../00695_spanToJSON.js";
import unwrapScopeFromWeakRef from "../00696_unwrapScopeFromWeakRef.js";
import _mod699 from "00699__.js";
import consoleSandbox from "../00700_consoleSandbox.js";
import _mod701 from "00701__.js";
import generateSpanId from "../00705_generateSpanId.js";
import safeDateNow from "../00707_safeDateNow.js";
import _mod710 from "00710__.js";
import _mod712 from "00712__.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "../00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod717 from "00717__.js";
import _getSpanForScope from "../00720__getSpanForScope.js";
import _mod724 from "00724__.js";
import _mod731 from "00731__.js";
import SentryNonRecordingSpan from "../00732_SentryNonRecordingSpan.js";
import _mod733 from "00733__.js";
import _mod736 from "00736__.js";
import logSpanEnd from "../00737_logSpanEnd.js";
import sampleSpan from "../00744_sampleSpan.js";
import _slicedToArray from "00032__.js";

const require = globalThis.__r;

function createChildOrRootSpan(arg0) {
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  if (obj.hasSpansEnabled()) {
    const isolationScope = _mod724.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp12 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp12;
        if (!tmp12) {
          spanIsSampledResult = spanToJSON.spanIsSampled(parentSpan);
          const tmpResult13 = spanToJSON;
        }
        if (spanIsSampledResult) {
          const obj2 = {};
          const merged = Object.assign(spanArguments);
          obj2.parentSpanId = spanId;
          obj2.traceId = traceId;
          obj2.sampled = spanIsSampledResult;
          let sentrySpan = new _mod736.SentrySpan(obj2);
        } else {
          const obj3 = { traceId };
          sentrySpan = new SentryNonRecordingSpan.SentryNonRecordingSpan(obj3);
        }
        const spanContextResult = parentSpan.spanContext();
        spanToJSON.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult14 = spanToJSON;
        const client = _mod724.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult15 = _mod724;
        spanToJSON.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult16 = spanToJSON;
      }
      logSpanEnd.logSpanStart(sentrySpan);
      const tmpResult17 = logSpanEnd;
      const result = unwrapScopeFromWeakRef.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = _mod733.getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult19 = _mod733;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult20 = spanToJSON;
      const merged1 = Object.assign(spanArguments);
      const tmp45 = _startRootSpan(obj4, scope, spanToJSON.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = spanToJSON.spanIsSampled(parentSpan);
      _mod733.freezeDscOnSpan(tmp45, dynamicSamplingContextFromSpan);
      sentrySpan = tmp45;
      const tmpResult21 = _mod733;
    } else {
      const obj5 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj5.dsc;
      const obj6 = { traceId: null, parentSpanId: null };
      ({ traceId: obj15.traceId, parentSpanId: obj15.parentSpanId } = obj5);
      const merged4 = Object.assign(spanArguments);
      const tmp36 = _startRootSpan(obj6, scope, obj5.sampled);
      sentrySpan = tmp36;
      if (dsc) {
        _mod733.freezeDscOnSpan(tmp36, dsc);
        sentrySpan = tmp36;
        const tmpResult22 = _mod733;
      }
    }
    const tmpResult = _mod724;
  } else {
    const sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
    if (forceTransaction) {
      const obj7 = { sampled: "false", sample_rate: "0", transaction: spanArguments.name };
      const merged5 = Object.assign(_mod733.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      const tmpResult23 = _mod733;
      _mod733.freezeDscOnSpan(sentryNonRecordingSpan, obj7);
      const tmpResult24 = _mod733;
    }
    return sentryNonRecordingSpan;
  }
  obj = _mod731;
}
function _startRootSpan(name, getPropagationContext, parentSampled) {
  const client = _mod724.getClient();
  options = undefined;
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
  const obj2 = { spanAttributes: null, spanName: null, parentSampled: null };
  const merged = Object.assign(name.attributes);
  obj2.spanAttributes = {};
  obj2.spanName = str;
  obj2.parentSampled = parentSampled;
  if (client != null) {
    client.emit("beforeSampling", obj2, { decision: false });
  }
  parentSampled = obj2.parentSampled;
  const spanAttributes = obj2.spanAttributes;
  const propagationContext = getPropagationContext.getPropagationContext();
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    const obj4 = { name: str, parentSampled, attributes: spanAttributes, parentSampleRate: null };
    const tmpResult = sampleSpan;
    const dsc = propagationContext.dsc;
    let sample_rate;
    if (dsc != null) {
      sample_rate = dsc.sample_rate;
    }
    obj4.parentSampleRate = _mod712.parseSampleRate(sample_rate);
    sampleSpanResult = tmpResult.sampleSpan(options, obj4, propagationContext.sampleRand);
    const tmpResult2 = _mod712;
  }
  const obj3 = {};
  [tmp9, tmp10, tmp11] = sampleSpanResult;
  const obj5 = {};
  const merged1 = Object.assign(name);
  const obj6 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  let tmp13;
  if (undefined !== tmp10) {
    if (tmp11) {
      tmp13 = tmp10;
    }
  }
  obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] = tmp13;
  const merged2 = Object.assign(spanAttributes);
  obj5.attributes = obj6;
  obj5.sampled = tmp9;
  const sentrySpan = new _mod736.SentrySpan(obj5);
  let tmp16 = !tmp9;
  if (!tmp9) {
    tmp16 = client;
  }
  if (tmp16) {
    if (_mod699.DEBUG_BUILD) {
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
  _require = arg1;
  let mainCarrier = require("00701__.js").getMainCarrier();
  let obj = require("00701__.js");
  let asyncContextStrategy = require("00717__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage } = arg0);
    const client = tmp(724).getClient();
    let tmpResult = tmp(724);
    let result = tmp(711).baggageHeaderToDynamicSamplingContext(baggage);
    if (client) {
      let org_id;
      if (result != null) {
        org_id = result.org_id;
      }
      if (!tmpResult6.shouldContinueTrace(client, org_id)) {
        closure_129_0 = arg1;
        let withScopeResult = tmp(724).withScope((setPropagationContext) => {
          const obj = { traceId: generateSpanId.generateTraceId(), sampleRand: null };
          obj.sampleRand = safeDateNow.safeMathRandom();
          const result = setPropagationContext.setPropagationContext(obj);
          if (_mod699.DEBUG_BUILD) {
            const debug = consoleSandbox.debug;
            const _HermesInternal = HermesInternal;
            debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
          }
          c0 = null;
          closure_1 = closure_0;
          const mainCarrier = _mod701.getMainCarrier();
          const tmpResult = _mod701;
          const asyncContextStrategy = _mod717.getAsyncContextStrategy(mainCarrier);
          if (asyncContextStrategy.withActiveSpan) {
            let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, closure_0);
          } else {
            withActiveSpanResult = _mod724.withScope((arg0) => {
              closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
              return closure_1(arg0);
            });
            const tmpResult4 = _mod724;
          }
          return withActiveSpanResult;
        });
        const tmpResult7 = tmp(724);
      }
      return withScopeResult;
    }
    const tmpResult5 = tmp(711);
    withScopeResult = tmp(724).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(
        _mod710.propagationContextFromHeaders(dependencyMap, baggage),
      );
      _getSpanForScope._setSpanForScope(setPropagationContext, undefined);
      return closure_0();
    });
    const tmpResult8 = tmp(724);
  }
  let obj2 = require("00717__.js");
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  let mainCarrier = require("00701__.js").getMainCarrier();
  let obj = require("00701__.js");
  const tmp3 = _require;
  const tmp4 = obj4;
  let asyncContextStrategy = require("00717__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    const obj3 = { isStandalone: experimental.experimental || {}.standalone };
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
      let fn = (arg0) => _mod724.withScope(experimental.scope, arg0);
    } else {
      fn =
        undefined !== parentSpan
          ? (arg0) => {
              closure_0 = parentSpan;
              closure_1 = arg0;
              const mainCarrier = _mod701.getMainCarrier();
              const asyncContextStrategy = _mod717.getAsyncContextStrategy(mainCarrier);
              if (asyncContextStrategy.withActiveSpan) {
                let withActiveSpanResult = asyncContextStrategy.withActiveSpan(parentSpan, arg0);
              } else {
                withActiveSpanResult = _mod724.withScope((arg0) => {
                  closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
                  return closure_1(arg0);
                });
                const tmp2Result = _mod724;
              }
              return withActiveSpanResult;
            }
          : (fn) => fn();
    }
    return fn(() => {
      const currentScope = _mod724.getCurrentScope();
      let tmp5 = parentSpan;
      if (!parentSpan) {
        if (null !== tmp4) {
          const _getSpanForScopeResult = _getSpanForScope._getSpanForScope(currentScope);
          if (_getSpanForScopeResult) {
            const client = _mod724.getClient();
            if (client) {
              options = client.getOptions();
            } else {
              options = {};
            }
            let rootSpan = _getSpanForScopeResult;
            if (options.parentSpanIsAlwaysRootSpan) {
              rootSpan = spanToJSON.getRootSpan(_getSpanForScopeResult);
              const tmpResult4 = spanToJSON;
            }
            tmp5 = rootSpan;
            const tmpResult3 = _mod724;
          }
          const tmpResult = _getSpanForScope;
        }
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      sentryNonRecordingSpan = createChildOrRootSpan({
        parentSpan: tmp5,
        spanArguments: obj4,
        forceTransaction,
        scope: currentScope,
      });
      const obj2 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope };
    });
  }
  let obj2 = require("00717__.js");
};
export const startNewTrace = function startNewTrace(runCallback) {
  _require = runCallback;
  return require("00724__.js").withScope((setPropagationContext) => {
    const obj = { traceId: generateSpanId.generateTraceId(), sampleRand: null };
    obj.sampleRand = safeDateNow.safeMathRandom();
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod699.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = closure_0;
    const mainCarrier = _mod701.getMainCarrier();
    const tmpResult = _mod701;
    const asyncContextStrategy = _mod717.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, closure_0);
    } else {
      withActiveSpanResult = _mod724.withScope((arg0) => {
        closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
        return closure_1(arg0);
      });
      const tmpResult4 = _mod724;
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, callback) {
  _require = experimental;
  dependencyMap = callback;
  const mainCarrier = require("00701__.js").getMainCarrier();
  let obj = require("00701__.js");
  const asyncContextStrategy = require("00717__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, callback);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(695).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(695);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    return tmp3(724).withScope(cloneResult, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            dependencyMap = arg0;
            const mainCarrier = closure_0(701).getMainCarrier();
            const obj = closure_0(701);
            const tmp = closure_0;
            const tmp2 = closure_0;
            const asyncContextStrategy = closure_0(717).getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
            } else {
              withActiveSpanResult = tmp2(724).withScope((arg0) => {
                closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
                return closure_1(arg0);
              });
              const tmp2Result = tmp2(724);
            }
            return withActiveSpanResult;
          }
        : ((fn) => fn())(() => {
            const currentScope = sentryNonRecordingSpan(724).getCurrentScope();
            let tmp5 = closure_4;
            if (!closure_4) {
              if (null !== tmp4) {
                const _getSpanForScopeResult = tmp(720)._getSpanForScope(currentScope);
                if (_getSpanForScopeResult) {
                  const client = tmp(724).getClient();
                  if (client) {
                    options = client.getOptions();
                  } else {
                    options = {};
                  }
                  let rootSpan = _getSpanForScopeResult;
                  if (options.parentSpanIsAlwaysRootSpan) {
                    rootSpan = tmp(695).getRootSpan(_getSpanForScopeResult);
                    const tmpResult6 = tmp(695);
                  }
                  tmp5 = rootSpan;
                  const tmpResult5 = tmp(724);
                }
                const tmpResult = tmp(720);
              }
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(732).SentryNonRecordingSpan();
              }
              tmp(720)._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult7 = tmp(720);
              return tmp(743).handleCallbackErrors(
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
                () => {
                  sentryNonRecordingSpan.end();
                },
              );
            }
            sentryNonRecordingSpan = closure_1_4({
              parentSpan: tmp5,
              spanArguments,
              forceTransaction,
              scope: currentScope,
            });
            let obj = sentryNonRecordingSpan(724);
            const obj2 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
          });
    });
  }
  let obj2 = require("00717__.js");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let mainCarrier = require("00701__.js").getMainCarrier();
  let obj = require("00701__.js");
  let asyncContextStrategy = require("00717__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(695).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(695);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    return tmp3(724).withScope(cloneResult, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan
        ? (arg0) => {
            dependencyMap = arg0;
            const mainCarrier = closure_0(701).getMainCarrier();
            const obj = closure_0(701);
            const tmp = closure_0;
            const tmp2 = closure_0;
            const asyncContextStrategy = closure_0(717).getAsyncContextStrategy(mainCarrier);
            if (asyncContextStrategy.withActiveSpan) {
              let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
            } else {
              withActiveSpanResult = tmp2(724).withScope((arg0) => {
                closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
                return closure_1(arg0);
              });
              const tmp2Result = tmp2(724);
            }
            return withActiveSpanResult;
          }
        : ((fn) => fn())(() => {
            const currentScope = sentryNonRecordingSpan(724).getCurrentScope();
            let tmp5 = closure_4;
            if (!closure_4) {
              if (null !== tmp4) {
                const _getSpanForScopeResult = tmp(720)._getSpanForScope(currentScope);
                if (_getSpanForScopeResult) {
                  const client = tmp(724).getClient();
                  if (client) {
                    options = client.getOptions();
                  } else {
                    options = {};
                  }
                  let rootSpan = _getSpanForScopeResult;
                  if (options.parentSpanIsAlwaysRootSpan) {
                    rootSpan = tmp(695).getRootSpan(_getSpanForScopeResult);
                    const tmpResult6 = tmp(695);
                  }
                  tmp5 = rootSpan;
                  const tmpResult5 = tmp(724);
                }
                const tmpResult = tmp(720);
              }
            }
            if (sentryNonRecordingSpan.onlyIfParent) {
              if (!tmp5) {
                sentryNonRecordingSpan = new tmp(732).SentryNonRecordingSpan();
              }
              tmp(720)._setSpanForScope(currentScope, sentryNonRecordingSpan);
              const tmpResult7 = tmp(720);
              return tmp(743).handleCallbackErrors(
                () => dependencyMap(sentryNonRecordingSpan, () => sentryNonRecordingSpan.end()),
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
            let obj = sentryNonRecordingSpan(724);
            const obj2 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
          });
    });
  }
  let obj2 = require("00717__.js");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("00701__.js").getMainCarrier();
  const obj = require("00701__.js");
  const tmp = _require;
  const asyncContextStrategy = require("00717__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(724).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: undefined });
      return closure_0();
    });
    const tmpResult = tmp(724);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(startInactiveSpanResult, arg1) {
  _require = startInactiveSpanResult;
  dependencyMap = arg1;
  const mainCarrier = require("00701__.js").getMainCarrier();
  const obj = require("00701__.js");
  const tmp = _require;
  const asyncContextStrategy = require("00717__.js").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(startInactiveSpanResult, arg1);
  } else {
    withActiveSpanResult = tmp(724).withScope((arg0) => {
      closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(724);
  }
  return withActiveSpanResult;
};
