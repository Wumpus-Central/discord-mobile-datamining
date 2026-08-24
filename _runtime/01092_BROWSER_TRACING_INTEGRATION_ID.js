// === Module 1092: BROWSER_TRACING_INTEGRATION_ID ===

// Module 1092 (BROWSER_TRACING_INTEGRATION_ID)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import ignoreNextOnError from "ignoreNextOnError" /* 1028 */;
import shouldAttachHeaders from "shouldAttachHeaders" /* 1090 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const BrowserTracing = "BrowserTracing";
let obj = {};
let merged = Object.assign(registerSpanErrorInstrumentation.TRACING_DEFAULTS);
obj.instrumentNavigation = true;
obj.instrumentPageLoad = true;
obj.markBackgroundSpan = true;
obj.enableLongTask = true;
obj.enableLongAnimationFrame = true;
obj.enableInp = true;
obj.enableElementTiming = true;
obj.ignoreResourceSpans = [];
obj.ignorePerformanceApiSpans = [];
obj.detectRedirects = true;
obj.linkPreviousTrace = "in-memory";
obj.consistentTraceSampling = false;
obj.enableReportPageLoaded = false;
obj._experiments = {};
let merged1 = Object.assign(shouldAttachHeaders.defaultRequestInstrumentationOptions);
const _sentry_idleSpan = "_sentry_idleSpan";
let c5 = 1.5;

export const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
export const browserTracingIntegration = () => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _require;
  dependencyMap = undefined;
  c2 = undefined;
  let document;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  c24 = undefined;
  c25 = undefined;
  c26 = undefined;
  c27 = undefined;
  c28 = undefined;
  c29 = undefined;
  c30 = undefined;
  c31 = undefined;
  function _createRouteSpan(emit, op) {
    closure_0 = emit;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    closure_1 = undefined;
    c2 = undefined;
    let tmp = "pageload" === op.op;
    closure_1 = tmp;
    let tmp2 = op;
    if (_undefined3) {
      tmp2 = _undefined3(op);
    }
    const tmp3 = tmp2.attributes || {};
    if (op.name !== tmp2.name) {
      tmp3[_undefined(_undefined2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom";
      tmp2.attributes = tmp3;
    }
    if (flag) {
      closure_3.name = tmp2.name;
      closure_3.source = tmp3[_undefined(undefined, _undefined2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      obj = { idleTimeout: null, finalTimeout: null, childSpanTimeout: null, disableAutoFinish: null, beforeSpanEnd: null, trimIdleSpanEndTimestamp: null };
      obj[0] = c13;
      obj[1] = c14;
      obj[2] = c15;
      obj[3] = tmp;
      obj[4] = function beforeSpanEnd(setAttribute) {
        if (closure_0 != null) {
          tmp();
        }
        obj = emit(1033);
        obj = { recordClsOnPageloadSpan: !closure_1_10, recordLcpOnPageloadSpan: !closure_1_11, ignoreResourceSpans: closure_1_22, ignorePerformanceApiSpans: closure_1_23 };
        const result = obj.addPerformanceEntries(setAttribute, obj);
        const result1 = emit(817).addNonEnumerableProperty(closure_0, document, undefined);
        const obj3 = emit(817);
        const currentScope = emit(817).getCurrentScope();
        obj = {};
        const merged = Object.assign(currentScope.getPropagationContext());
        obj.traceId = _undefined.spanContext().traceId;
        const obj4 = emit(817);
        obj.sampled = emit(817).spanIsSampled(_undefined);
        const obj7 = emit(817);
        obj.dsc = emit(817).getDynamicSamplingContextFromSpan(setAttribute);
        const result2 = currentScope.setPropagationContext(obj);
        if (closure_1) {
          _undefined = undefined;
        }
      };
      obj[5] = !c29;
      const startIdleSpanResult = _undefined(_undefined2[0]).startIdleSpan(tmp2, obj);
      c2 = startIdleSpanResult;
      let tmp25 = tmp;
      if (tmp) {
        tmp25 = tmp23;
      }
      if (tmp25) {
        c2 = startIdleSpanResult;
      }
      const obj5 = _undefined(_undefined2[0]);
      let result = _undefined(_undefined2[0]).addNonEnumerableProperty(emit, document, startIdleSpanResult);
      if (tmp) {
        tmp = !tmp23;
      }
      if (tmp) {
        tmp = document;
      }
      if (tmp) {
        const listener = document.addEventListener("readystatechange", () => {
          let hasItem = closure_1_4;
          if (closure_1_4) {
            const items = ["interactive", "complete"];
            hasItem = items.includes(tmp.readyState);
          }
          if (hasItem) {
            emit.emit("idleSpanEnableAutoFinish", c2);
          }
        });
        let hasItem = document;
        if (document) {
          let items = ["interactive", "complete"];
          hasItem = items.includes(tmp30.readyState);
        }
        if (hasItem) {
          emit.emit("idleSpanEnableAutoFinish", startIdleSpanResult);
        }
        tmp30 = document;
      }
      let obj7 = _undefined(_undefined2[0]);
    } else {
      obj = _undefined(_undefined2[0]);
      let result1 = obj.dateTimestampInSeconds();
      obj = {};
      let merged = Object.assign(tmp2);
      obj.startTime = result1;
      const obj2 = _undefined(_undefined2[0]);
      _undefined(_undefined2[0]).startInactiveSpan(obj).end(result1);
      const startInactiveSpanResult = _undefined(_undefined2[0]).startInactiveSpan(obj);
    }
  }
  closure_3 = { name: "Array", source: "ct" };
  document = _require(1028).WINDOW.document;
  obj = {};
  let merged = Object.assign(closure_3);
  let merged1 = Object.assign(obj);
  ({ enableInp: c5, enableElementTiming: c6, enableLongTask: c7, enableLongAnimationFrame: c8, _experiments } = obj);
  ({ enableInteractions: c9, enableStandaloneClsSpans: c10, enableStandaloneLcpSpans: c11 } = _experiments);
  ({ beforeStartSpan: c12, idleTimeout: c13, finalTimeout: c14, childSpanTimeout: c15, markBackgroundSpan: c16, traceFetch: c17, traceXHR: c18, trackFetchStreamPerformance: c19, shouldCreateSpanForRequest: c20, enableHTTPTimings: c21, ignoreResourceSpans: c22, ignorePerformanceApiSpans: c23, instrumentPageLoad: c24, instrumentNavigation: c25, detectRedirects: c26, linkPreviousTrace: c27, consistentTraceSampling: c28, enableReportPageLoaded: c29, onRequestSpanStart: c30, onRequestSpanEnd: c31 } = obj);
  obj = {
    name: c2,
    setup(on) {
      closure_0 = on;
      const _undefined2 = function maybeEndActiveSpan() {
        let tmp = obj;
        if (dependencyMap[document]) {
          tmp = !dependencyMap(_undefined[0]).spanToJSON(obj).timestamp;
          const obj2 = dependencyMap(_undefined[0]);
        }
        if (tmp) {
          if (dependencyMap(_undefined[4]).DEBUG_BUILD) {
            const debug = tmp4(tmp5[0]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("[Tracing] Finishing current active span with op: " + tmp4(tmp5[0]).spanToJSON(obj).op);
            const tmp4Result = tmp4(tmp5[0]);
          }
          const attr = obj.setAttribute(tmp4(tmp5[0]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled");
          obj.end();
        }
      };
      obj = _undefined(_undefined2[0]);
      let result = obj.registerSpanErrorInstrumentation();
      let flag = c10;
      if (!c10) {
        flag = false;
      }
      obj = { recordClsStandaloneSpans: flag, recordLcpStandaloneSpans: null, client: null };
      let flag2 = c11;
      if (!c11) {
        flag2 = false;
      }
      obj[1] = flag2;
      obj[2] = on;
      closure_0 = _undefined(_undefined2[3]).startTrackingWebVitals(obj);
      if (c5) {
        let tmpResult = tmp(tmp2[3]);
        tmpResult.startTrackingINP();
      }
      if (c6) {
        tmpResult = tmp(tmp2[3]);
        let result1 = tmpResult.startTrackingElementTiming();
      }
      if (c8) {
        if (tmp(tmp2[0]).GLOBAL_OBJ.PerformanceObserver) {
          if (globalThis.PerformanceObserver.supportedEntryTypes) {
            const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
            if (supportedEntryTypes.includes("long-animation-frame")) {
              let result2 = tmp(tmp2[3]).startTrackingLongAnimationFrames();
              let tmpResult1 = tmp(tmp2[3]);
            }
            if (c9) {
              const result3 = tmp(tmp2[3]).startTrackingInteractions();
              let tmpResult2 = tmp(tmp2[3]);
            }
            if (c26) {
              if (document) {
                function interactionHandler() {
                  closure_1 = dependencyMap(_undefined[0]).timestampInSeconds();
                }
                const listener = globalThis.addEventListener("click", interactionHandler, { capture: true });
                const listener1 = globalThis.addEventListener("keydown", interactionHandler, { capture: true, passive: true });
              }
            }
            on.on("startNavigationSpan", (arg0, isRedirect) => {
              obj = dependencyMap(_undefined[0]);
              if (obj.getClient() === closure_0) {
                isRedirect = undefined;
                if (isRedirect != null) {
                  isRedirect = isRedirect.isRedirect;
                }
                if (isRedirect) {
                  if (tmp(tmp2[4]).DEBUG_BUILD) {
                    const debug = tmp(tmp2[0]).debug;
                    debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span.");
                  }
                  obj = { op: "navigation.redirect" };
                  const merged = Object.assign(arg0);
                  closure_1_32(tmp3, obj, false);
                } else {
                  _undefined = undefined;
                  _undefined();
                  let tmpResult = tmp(tmp2[0]);
                  const isolationScope = tmpResult.getIsolationScope();
                  obj = { traceId: null, sampleRand: null, propagationSpanId: null };
                  tmpResult = tmp(tmp2[0]);
                  obj[0] = tmpResult.generateTraceId();
                  const _Math = Math;
                  obj[1] = Math.random();
                  let spanId;
                  if (!tmpResult1.hasSpansEnabled()) {
                    spanId = tmp(tmp2[0]).generateSpanId();
                    const tmpResult2 = tmp(tmp2[0]);
                  }
                  obj[2] = spanId;
                  const result = isolationScope.setPropagationContext(obj);
                  tmpResult1 = tmp(tmp2[0]);
                  const currentScope = tmp(tmp2[0]).getCurrentScope();
                  obj1 = { traceId: null, sampleRand: null, propagationSpanId: null };
                  const tmpResult3 = tmp(tmp2[0]);
                  obj1[0] = tmp(tmp2[0]).generateTraceId();
                  const _Math2 = Math;
                  obj1[1] = Math.random();
                  const tmpResult4 = tmp(tmp2[0]);
                  let spanId1;
                  if (!tmpResult5.hasSpansEnabled()) {
                    spanId1 = tmp(tmp2[0]).generateSpanId();
                    const tmpResult6 = tmp(tmp2[0]);
                  }
                  obj1[2] = spanId1;
                  const result1 = currentScope.setPropagationContext(obj1);
                  const result2 = currentScope.setSDKProcessingMetadata({ normalizedRequest: "r" });
                  const obj2 = { op: "navigation" };
                  const merged1 = Object.assign(arg0);
                  obj2.parentSpan = null;
                  obj2.forceTransaction = true;
                  closure_1_32(tmp3, obj2);
                  tmpResult5 = tmp(tmp2[0]);
                }
              }
            });
            on.on("startPageLoadSpan", (arg0) => {
              obj = arg1;
              if (arg1 === undefined) {
                obj = {};
              }
              if (obj2.getClient() === closure_0) {
                _undefined();
                let sentryTrace = obj.sentryTrace;
                if (!sentryTrace) {
                  const _document = tmp(tmp2[2]).WINDOW.document;
                  let element;
                  if (_document != null) {
                    const _HermesInternal = HermesInternal;
                    element = _document.querySelector("meta[name=" + "sentry-trace" + "]");
                  }
                  let attr;
                  if (element != null) {
                    attr = element.getAttribute("content");
                  }
                  sentryTrace = attr;
                }
                let baggage = obj.baggage;
                if (!baggage) {
                  const _document2 = tmp(tmp2[2]).WINDOW.document;
                  let element1;
                  if (_document2 != null) {
                    const _HermesInternal2 = HermesInternal;
                    element1 = _document2.querySelector("meta[name=" + "baggage" + "]");
                  }
                  let attr1;
                  if (element1 != null) {
                    attr1 = element1.getAttribute("content");
                  }
                  baggage = attr1;
                }
                let tmpResult = tmp(tmp2[0]);
                const result = tmpResult.propagationContextFromHeaders(sentryTrace, baggage);
                tmpResult = tmp(tmp2[0]);
                const currentScope = tmpResult.getCurrentScope();
                const result1 = currentScope.setPropagationContext(result);
                if (!tmpResult1.hasSpansEnabled()) {
                  const propagationContext = currentScope.getPropagationContext();
                  propagationContext.propagationSpanId = tmp(tmp2[0]).generateSpanId();
                  const tmpResult2 = tmp(tmp2[0]);
                }
                obj = { normalizedRequest: null };
                tmpResult1 = tmp(tmp2[0]);
                obj[0] = tmp(tmp2[2]).getHttpRequestData();
                const result2 = currentScope.setSDKProcessingMetadata(obj);
                obj = { op: "pageload" };
                const merged = Object.assign(arg0);
                closure_1_32(tmp3, obj);
                const tmpResult3 = tmp(tmp2[2]);
              }
            });
            on.on("endPageloadSpan", () => {
              let tmp = closure_29;
              if (closure_29) {
                tmp = closure_2;
              }
              if (tmp) {
                const attr = closure_2.setAttribute(dependencyMap(_undefined[0]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded");
                closure_2.end();
              }
            });
          }
        }
      }
      if (c7) {
        const result4 = tmp(tmp2[3]).startTrackingLongTasks();
        let tmpResult3 = tmp(tmp2[3]);
      }
    },
    afterAllSetup(emit) {
      closure_0 = emit;
      obj = _undefined(_undefined2[0]);
      let locationHref = obj.getLocationHref();
      if ("off" !== c27) {
        let tmpResult = tmp(tmp2[5]);
        obj = { linkPreviousTrace: null, consistentTraceSampling: null };
        obj[0] = tmp3;
        obj[1] = c28;
        tmpResult.linkTraces(emit, obj);
      }
      if (_undefined(_undefined2[2]).WINDOW.location) {
        if (c24) {
          tmpResult = tmp(tmp2[0]);
          let result = tmpResult.browserPerformanceTimeOrigin();
          obj = { name: null, startTime: null, attributes: null };
          obj[0] = tmp(tmp2[2]).WINDOW.location.pathname;
          let result1;
          if (result) {
            result1 = result / 1000;
          }
          obj[1] = result1;
          obj1 = {};
          obj1[tmp(tmp2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
          obj1[tmp(tmp2[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.browser";
          obj[2] = obj1;
          emit.emit("startPageLoadSpan", obj, undefined);
          let currentScope = tmp(tmp2[0]).getCurrentScope();
          currentScope.setTransactionName(obj.name);
          if (emit[document]) {
            emit.emit("afterStartPageLoadSpan", tmp12);
          }
          const tmpResult1 = tmp(tmp2[0]);
        }
        if (c25) {
          let result2 = tmp(tmp2[3]).addHistoryInstrumentationHandler((to) => {
            to = to.to;
            if (undefined === to.from) {
              let index;
              if (dependencyMap != null) {
                index = dependencyMap.indexOf(to);
              }
              if (-1 !== index) {
                dependencyMap = undefined;
              }
            }
            dependencyMap = undefined;
            obj = emit(817);
            const result = obj.parseStringToURLObject(to);
            obj1 = emit;
            let tmp8 = tmp7;
            if (emit[document]) {
              tmp8 = closure_1_26;
            }
            if (tmp8) {
              let tmp3Result = tmp3(817);
              tmp3Result = tmp3(817);
              const result1 = tmp3Result.dateTimestampInSeconds();
              let flag = false;
              if (result1 - spanToJSONResult.start_timestamp <= c5) {
                flag = true;
                if (tmp9) {
                  flag = true;
                  if (result1 - tmp9 <= tmp12) {
                    flag = false;
                  }
                }
              }
              tmp8 = flag;
              spanToJSONResult = tmp3Result.spanToJSON(tmp7);
            }
            let pathname;
            if (result != null) {
              pathname = result.pathname;
            }
            if (!pathname) {
              pathname = tmp3(1028).WINDOW.location.pathname;
            }
            obj = { name: pathname, attributes: { [tmp3(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url", [tmp3(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser" } };
            ({ url, isRedirect } = { url: to, isRedirect: tmp8 });
            obj1.emit("beforeStartNavigationSpan", obj, { isRedirect });
            obj1.emit("startNavigationSpan", obj, { isRedirect });
            const currentScope = emit(817).getCurrentScope();
            currentScope.setTransactionName(obj.name);
            let tmp17 = url;
            if (url) {
              tmp17 = !isRedirect;
            }
            if (tmp17) {
              obj = { normalizedRequest: null };
              obj1 = {};
              const merged = Object.assign(tmp3(1028).getHttpRequestData());
              obj1.url = url;
              obj[0] = obj1;
              const result2 = currentScope.setSDKProcessingMetadata(obj);
              const tmp3Result2 = tmp3(1028);
            }
          });
          const tmpResult2 = tmp(tmp2[3]);
        }
      }
      if (c16) {
        const result3 = tmp(tmp2[6]).registerBackgroundTabDetection();
        const tmpResult3 = tmp(tmp2[6]);
      }
      if (c9) {
        closure_0 = emit;
        locationHref = c13;
        closure_2 = c14;
        closure_3 = c15;
        closure_4 = closure_3;
        if (tmp(tmp2[2]).WINDOW.document) {
          const listener = globalThis.addEventListener("click", function registerInteractionTransaction() {
            if (emit[name]) {
              obj = emit(817);
              const items = ["navigation", "pageload"];
              if (items.includes(obj.spanToJSON(tmp).op)) {
                if (tmp2(1072).DEBUG_BUILD) {
                  const debug2 = tmp2(817).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("[Tracing] Did not create " + "ui.action.click" + " span because a pageload or navigation span is in progress.");
                }
              }
            }
            obj1 = closure_5;
            if (closure_5) {
              const attr = obj1.setAttribute(emit(817).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted");
              closure_5.end();
              closure_5 = undefined;
            }
            if (name.name) {
              obj = { name: null, op: "ui.action.click", attributes: null };
              obj[0] = tmp9.name;
              let str5 = tmp9.source;
              if (!str5) {
                str5 = "url";
              }
              obj = {};
              obj[tmp10(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str5;
              obj[2] = obj;
              obj1 = { idleTimeout: null, finalTimeout: null, childSpanTimeout: null };
              obj1[0] = dependencyMap;
              obj1[1] = closure_2;
              obj1[2] = closure_3;
              closure_5 = tmp10(817).startIdleSpan(obj, obj1);
              const tmp10Result = tmp10(817);
            } else if (tmp10(1072).DEBUG_BUILD) {
              const debug = tmp10(817).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("[Tracing] Did not create " + "ui.action.click" + " transaction because _latestRouteName is missing.");
            }
          }, { capture: true });
        }
      }
      if (c5) {
        const result4 = tmp(tmp2[3]).registerInpInteractionListener();
        const tmpResult4 = tmp(tmp2[3]);
      }
      const tmpResult5 = _undefined(_undefined2[1]);
      const result5 = tmpResult5.instrumentOutgoingRequests(emit, { traceFetch: c17, traceXHR: c18, trackFetchStreamPerformance: c19, tracePropagationTargets: emit.getOptions().tracePropagationTargets, shouldCreateSpanForRequest: c20, enableHTTPTimings: c21, onRequestSpanStart: c30, onRequestSpanEnd: c31 });
    }
  };
  return obj;
};
export const getMetaContent = function getMetaContent(arg0) {
  const _document = ignoreNextOnError.WINDOW.document;
  let element;
  if (_document != null) {
    const _HermesInternal = HermesInternal;
    element = _document.querySelector("meta[name=" + arg0 + "]");
  }
  let attr;
  if (element != null) {
    attr = element.getAttribute("content");
  }
  return attr;
};
export const startBrowserTracingNavigationSpan = function startBrowserTracingNavigationSpan(client, name) {
  obj = arg2;
  if (!arg2) {
    obj = {};
  }
  ({ url, isRedirect } = obj);
  client.emit("beforeStartNavigationSpan", name, { isRedirect });
  client.emit("startNavigationSpan", name, { isRedirect });
  const currentScope = registerSpanErrorInstrumentation.getCurrentScope();
  currentScope.setTransactionName(name.name);
  let tmp6 = url;
  if (url) {
    tmp6 = !isRedirect;
  }
  if (tmp6) {
    obj = { normalizedRequest: null };
    obj = {};
    const merged = Object.assign(ignoreNextOnError.getHttpRequestData());
    obj.url = url;
    obj[0] = obj;
    const result = currentScope.setSDKProcessingMetadata(obj);
    const tmp3Result = ignoreNextOnError;
  }
  return client[_sentry_idleSpan];
};
export const startBrowserTracingPageLoadSpan = function startBrowserTracingPageLoadSpan(f104458, result) {
  f104458.emit("startPageLoadSpan", result, arg2);
  const currentScope = registerSpanErrorInstrumentation.getCurrentScope();
  currentScope.setTransactionName(result.name);
  if (f104458[_sentry_idleSpan]) {
    f104458.emit("afterStartPageLoadSpan", tmp3);
  }
  return f104458[_sentry_idleSpan];
};