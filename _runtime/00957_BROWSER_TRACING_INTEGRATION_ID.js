// === Module 957: BROWSER_TRACING_INTEGRATION_ID ===

// Module 957 (BROWSER_TRACING_INTEGRATION_ID)
import _mod682 from "module_682" /* 682 */;
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import triggerHandlers from "triggerHandlers" /* 898 */;
import _mod937 from "module_937" /* 937 */;
import instrumentOutgoingRequests from "instrumentOutgoingRequests" /* 955 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const BrowserTracing = "BrowserTracing";
let obj = {};
let merged = Object.assign(_mod682.TRACING_DEFAULTS);
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
let merged1 = Object.assign(instrumentOutgoingRequests.defaultRequestInstrumentationOptions);
const _sentry_idleSpan = "_sentry_idleSpan";
let c5 = 1.5;

export const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
export const browserTracingIntegration = (arg0) => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  _require = undefined;
  dependencyMap = undefined;
  name = undefined;
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
  function _createRouteSpan(emit, op, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
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
      obj = {
        idleTimeout,
        finalTimeout,
        childSpanTimeout,
        disableAutoFinish: tmp,
        beforeSpanEnd(setAttribute) {
            if (c0 != null) {
              tmp();
            }
            obj = { recordClsOnPageloadSpan: !c10, recordLcpOnPageloadSpan: !c11, ignoreResourceSpans, ignorePerformanceApiSpans };
            const result = obj.addPerformanceEntries(setAttribute, obj);
            const result1 = _mod682.addNonEnumerableProperty(closure_0, _sentry_idleSpan, undefined);
            const currentScope = _mod682.getCurrentScope();
            obj = {};
            const merged = Object.assign(currentScope.getPropagationContext());
            obj.traceId = _undefined.spanContext().traceId;
            obj.sampled = _mod682.spanIsSampled(_undefined);
            obj.dsc = _mod682.getDynamicSamplingContextFromSpan(setAttribute);
            const result2 = currentScope.setPropagationContext(obj);
            if (closure_1) {
              _undefined = undefined;
            }
          },
        trimIdleSpanEndTimestamp: !c29
      };
      const startIdleSpanResult = _undefined(_undefined2[0]).startIdleSpan(tmp2, obj);
      c2 = startIdleSpanResult;
      let tmp25 = tmp;
      if (tmp) {
        tmp25 = c29;
      }
      if (tmp25) {
        c2 = startIdleSpanResult;
      }
      const obj5 = _undefined(_undefined2[0]);
      let result = _undefined(_undefined2[0]).addNonEnumerableProperty(emit, document, startIdleSpanResult);
      if (tmp) {
        tmp = !c29;
      }
      if (tmp) {
        tmp = document;
      }
      if (tmp) {
        const listener = document.addEventListener("readystatechange", () => {
          let hasItem = document;
          if (document) {
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
          hasItem = items.includes(document.readyState);
        }
        if (hasItem) {
          emit.emit("idleSpanEnableAutoFinish", startIdleSpanResult);
        }
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
  closure_3 = { name: "hash", source: "call" };
  const document = require("ignoreNextOnError").WINDOW.document;
  obj = {};
  let merged = Object.assign(closure_3);
  let merged1 = Object.assign(obj);
  ({ enableInp: c5, enableElementTiming: c6, enableLongTask: c7, enableLongAnimationFrame: c8, _experiments } = obj);
  ({ enableInteractions: c9, enableStandaloneClsSpans: c10, enableStandaloneLcpSpans: c11 } = _experiments);
  ({ beforeStartSpan: c12, idleTimeout: c13, finalTimeout: c14, childSpanTimeout: c15, markBackgroundSpan: c16, traceFetch: c17, traceXHR: c18, trackFetchStreamPerformance: c19, shouldCreateSpanForRequest: c20, enableHTTPTimings: c21, ignoreResourceSpans: c22, ignorePerformanceApiSpans: c23, instrumentPageLoad: c24, instrumentNavigation: c25, detectRedirects: c26, linkPreviousTrace: c27, consistentTraceSampling: c28, enableReportPageLoaded: c29, onRequestSpanStart: c30, onRequestSpanEnd: c31 } = obj);
  obj = {
    name,
    setup(client) {
      dependencyMap = client;
      const dependencyMap2 = function maybeEndActiveSpan() {
        let tmp = obj;
        if (dependencyMap[_sentry_idleSpan]) {
          tmp = !_mod682.spanToJSON(obj).timestamp;
        }
        if (tmp) {
          if (_mod937.DEBUG_BUILD) {
            const debug = _mod682.debug;
            const _HermesInternal = HermesInternal;
            debug.log("[Tracing] Finishing current active span with op: " + _mod682.spanToJSON(obj).op);
            const tmp4Result = _mod682;
          }
          const attr = obj.setAttribute(_mod682.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled");
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
      obj.recordLcpStandaloneSpans = flag2;
      obj.client = client;
      dependencyMap = _undefined(_undefined2[3]).startTrackingWebVitals(obj);
      if (c5) {
        let tmpResult = _undefined(_undefined2[3]);
        tmpResult.startTrackingINP();
      }
      if (c6) {
        tmpResult = _undefined(_undefined2[3]);
        let result1 = tmpResult.startTrackingElementTiming();
      }
      if (c8) {
        if (_undefined(_undefined2[0]).GLOBAL_OBJ.PerformanceObserver) {
          if (globalThis.PerformanceObserver.supportedEntryTypes) {
            const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
            if (supportedEntryTypes.includes("long-animation-frame")) {
              let result2 = _undefined(_undefined2[3]).startTrackingLongAnimationFrames();
              let tmpResult1 = _undefined(_undefined2[3]);
            }
            if (c9) {
              const result3 = _undefined(_undefined2[3]).startTrackingInteractions();
              let tmpResult2 = _undefined(_undefined2[3]);
            }
            if (c26) {
              if (document) {
                function interactionHandler() {
                  closure_1 = dependencyMap(682).timestampInSeconds();
                }
                const listener = globalThis.addEventListener("click", interactionHandler, { capture: true });
                const listener1 = globalThis.addEventListener("keydown", interactionHandler, { capture: true, passive: true });
              }
            }
            client.on("startNavigationSpan", (arg0, isRedirect) => {
              obj = _mod682;
              if (obj.getClient() === closure_0) {
                isRedirect = undefined;
                if (isRedirect != null) {
                  isRedirect = isRedirect.isRedirect;
                }
                if (isRedirect) {
                  if (_mod937.DEBUG_BUILD) {
                    const debug = _mod682.debug;
                    debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span.");
                  }
                  obj = { op: "navigation.redirect" };
                  const merged = Object.assign(arg0);
                  _createRouteSpan(closure_0, obj, false);
                } else {
                  c1 = undefined;
                  dependencyMap2();
                  let tmpResult = _mod682;
                  const isolationScope = tmpResult.getIsolationScope();
                  obj = { traceId: null, sampleRand: null, propagationSpanId: null };
                  tmpResult = _mod682;
                  obj.traceId = tmpResult.generateTraceId();
                  const _Math = Math;
                  obj.sampleRand = Math.random();
                  let spanId;
                  if (!tmpResult1.hasSpansEnabled()) {
                    spanId = _mod682.generateSpanId();
                    const tmpResult2 = _mod682;
                  }
                  obj.propagationSpanId = spanId;
                  const result = isolationScope.setPropagationContext(obj);
                  tmpResult1 = _mod682;
                  const currentScope = _mod682.getCurrentScope();
                  const obj1 = { traceId: null, sampleRand: null, propagationSpanId: null };
                  const tmpResult3 = _mod682;
                  obj1.traceId = _mod682.generateTraceId();
                  const _Math2 = Math;
                  obj1.sampleRand = Math.random();
                  const tmpResult4 = _mod682;
                  let spanId1;
                  if (!tmpResult5.hasSpansEnabled()) {
                    spanId1 = _mod682.generateSpanId();
                    const tmpResult6 = _mod682;
                  }
                  obj1.propagationSpanId = spanId1;
                  const result1 = currentScope.setPropagationContext(obj1);
                  const result2 = currentScope.setSDKProcessingMetadata({ normalizedRequest: "Array" });
                  const obj2 = { op: "navigation" };
                  const merged1 = Object.assign(arg0);
                  obj2.parentSpan = null;
                  obj2.forceTransaction = true;
                  _createRouteSpan(closure_0, obj2);
                  tmpResult5 = _mod682;
                }
              }
            });
            client.on("startPageLoadSpan", (arg0) => {
              obj = op;
              if (op === undefined) {
                obj = {};
              }
              if (obj2.getClient() === closure_0) {
                dependencyMap2();
                let sentryTrace = obj.sentryTrace;
                if (!sentryTrace) {
                  const _document = ignoreNextOnError.WINDOW.document;
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
                  const _document2 = ignoreNextOnError.WINDOW.document;
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
                let tmpResult = _mod682;
                const result = tmpResult.propagationContextFromHeaders(sentryTrace, baggage);
                tmpResult = _mod682;
                const currentScope = tmpResult.getCurrentScope();
                const result1 = currentScope.setPropagationContext(result);
                if (!tmpResult1.hasSpansEnabled()) {
                  const propagationContext = currentScope.getPropagationContext();
                  propagationContext.propagationSpanId = _mod682.generateSpanId();
                  const tmpResult2 = _mod682;
                }
                obj = { normalizedRequest: null };
                tmpResult1 = _mod682;
                obj.normalizedRequest = ignoreNextOnError.getHttpRequestData();
                const result2 = currentScope.setSDKProcessingMetadata(obj);
                obj = { op: "pageload" };
                const merged = Object.assign(arg0);
                _createRouteSpan(tmp3, obj);
                const tmpResult3 = ignoreNextOnError;
              }
              obj2 = _mod682;
            });
            client.on("endPageloadSpan", () => {
              let tmp = closure_1_29;
              if (closure_1_29) {
                tmp = closure_1_2;
              }
              if (tmp) {
                const attr = closure_1_2.setAttribute(dependencyMap(682).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded");
                closure_1_2.end();
              }
            });
          }
        }
      }
      if (c7) {
        const result4 = _undefined(_undefined2[3]).startTrackingLongTasks();
        let tmpResult3 = _undefined(_undefined2[3]);
      }
      let obj2 = _undefined(_undefined2[3]);
    },
    afterAllSetup(emit) {
      obj = _undefined(_undefined2[0]);
      _undefined2 = obj.getLocationHref();
      if ("off" !== c27) {
        let tmpResult = _undefined(tmp2[5]);
        obj = { linkPreviousTrace: tmp3, consistentTraceSampling };
        tmpResult.linkTraces(emit, obj);
      }
      if (_undefined(_undefined2[2]).WINDOW.location) {
        if (c24) {
          tmpResult = _undefined(tmp2[0]);
          let result = tmpResult.browserPerformanceTimeOrigin();
          obj = { name: _undefined(tmp2[2]).WINDOW.location.pathname, startTime: null, attributes: null };
          let result1;
          if (result) {
            result1 = result / 1000;
          }
          obj.startTime = result1;
          let obj1 = {};
          obj1[_undefined(tmp2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
          obj1[_undefined(tmp2[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.browser";
          obj.attributes = obj1;
          emit.emit("startPageLoadSpan", obj, undefined);
          let currentScope = _undefined(tmp2[0]).getCurrentScope();
          currentScope.setTransactionName(obj.name);
          if (emit[document]) {
            emit.emit("afterStartPageLoadSpan", tmp12);
          }
          const tmpResult1 = _undefined(tmp2[0]);
        }
        if (c25) {
          let result2 = _undefined(tmp2[3]).addHistoryInstrumentationHandler((to) => {
            to = to.to;
            if (undefined === to.from) {
              let index;
              if (c1 != null) {
                index = arr.indexOf(to);
              }
              if (-1 !== index) {
                c1 = undefined;
              }
              arr = c1;
            }
            c1 = undefined;
            obj = _mod682;
            const result = obj.parseStringToURLObject(to);
            let obj1 = emit;
            let tmp8 = tmp7;
            if (emit[_sentry_idleSpan]) {
              tmp8 = c26;
            }
            if (tmp8) {
              const tmp3Result = _mod682;
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
              pathname = ignoreNextOnError.WINDOW.location.pathname;
            }
            obj = { name: pathname, attributes: { [_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url", [_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser" } };
            ({ url, isRedirect } = { url: to, isRedirect: tmp8 });
            obj1.emit("beforeStartNavigationSpan", obj, { isRedirect });
            obj1.emit("startNavigationSpan", obj, { isRedirect });
            const currentScope = _mod682.getCurrentScope();
            currentScope.setTransactionName(obj.name);
            let tmp17 = url;
            if (url) {
              tmp17 = !isRedirect;
            }
            if (tmp17) {
              obj = { normalizedRequest: null };
              obj1 = {};
              const merged = Object.assign(ignoreNextOnError.getHttpRequestData());
              obj1.url = url;
              obj.normalizedRequest = obj1;
              const result2 = currentScope.setSDKProcessingMetadata(obj);
              const tmp3Result2 = ignoreNextOnError;
            }
            const tmp3Result1 = _mod682;
          });
          const tmpResult2 = _undefined(tmp2[3]);
        }
      }
      if (c16) {
        const result3 = _undefined(tmp2[6]).registerBackgroundTabDetection();
        const tmpResult3 = _undefined(tmp2[6]);
      }
      if (c9) {
        _undefined2 = c13;
        finalTimeout = c14;
        childSpanTimeout = c15;
        name = childSpanTimeout;
        if (_undefined(tmp2[2]).WINDOW.document) {
          const listener = globalThis.addEventListener("click", function registerInteractionTransaction() {
            if (emit[document]) {
              let attributes = emit(idleTimeout[0]);
              const items = ["navigation", "pageload"];
              if (items.includes(attributes.spanToJSON(tmp).op)) {
                if (emit(idleTimeout[4]).DEBUG_BUILD) {
                  const debug2 = emit(idleTimeout[0]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("[Tracing] Did not create " + "ui.action.click" + " span because a pageload or navigation span is in progress.");
                }
              }
            }
            let obj1 = closure_5;
            if (closure_5) {
              const attr = obj1.setAttribute(emit(idleTimeout[0]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted");
              closure_5.end();
              closure_5 = undefined;
            }
            if (name.name) {
              attributes = { name: name.name, op: "ui.action.click", attributes: null };
              let str5 = name.source;
              if (!str5) {
                str5 = "url";
              }
              attributes = {};
              attributes[emit(idleTimeout[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str5;
              attributes.attributes = attributes;
              obj1 = { idleTimeout, finalTimeout, childSpanTimeout };
              closure_5 = emit(idleTimeout[0]).startIdleSpan(attributes, obj1);
              const tmp10Result = emit(idleTimeout[0]);
            } else if (emit(idleTimeout[4]).DEBUG_BUILD) {
              const debug = emit(idleTimeout[0]).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("[Tracing] Did not create " + "ui.action.click" + " transaction because _latestRouteName is missing.");
            }
          }, { capture: true });
        }
      }
      if (closure_5) {
        const result4 = _undefined(tmp2[3]).registerInpInteractionListener();
        const tmpResult4 = _undefined(tmp2[3]);
      }
      const tmpResult5 = _undefined(_undefined2[1]);
      const result5 = tmpResult5.instrumentOutgoingRequests(emit, { traceFetch, traceXHR, trackFetchStreamPerformance, tracePropagationTargets: emit.getOptions().tracePropagationTargets, shouldCreateSpanForRequest, enableHTTPTimings, onRequestSpanStart, onRequestSpanEnd });
      const obj2 = { traceFetch, traceXHR, trackFetchStreamPerformance, tracePropagationTargets: emit.getOptions().tracePropagationTargets, shouldCreateSpanForRequest, enableHTTPTimings, onRequestSpanStart, onRequestSpanEnd };
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
export const startBrowserTracingNavigationSpan = function startBrowserTracingNavigationSpan(client, name, arg2) {
  let normalizedRequest = arg2;
  if (!arg2) {
    normalizedRequest = {};
  }
  ({ url, isRedirect } = normalizedRequest);
  client.emit("beforeStartNavigationSpan", name, { isRedirect });
  client.emit("startNavigationSpan", name, { isRedirect });
  const currentScope = _mod682.getCurrentScope();
  currentScope.setTransactionName(name.name);
  let tmp6 = url;
  if (url) {
    tmp6 = !isRedirect;
  }
  if (tmp6) {
    normalizedRequest = { normalizedRequest: null };
    normalizedRequest = {};
    const merged = Object.assign(ignoreNextOnError.getHttpRequestData());
    normalizedRequest.url = url;
    normalizedRequest.normalizedRequest = normalizedRequest;
    const result = currentScope.setSDKProcessingMetadata(normalizedRequest);
    const tmp3Result = ignoreNextOnError;
  }
  return client[_sentry_idleSpan];
};
export const startBrowserTracingPageLoadSpan = function startBrowserTracingPageLoadSpan(f108154, name, arg2) {
  f108154.emit("startPageLoadSpan", name, arg2);
  const currentScope = _mod682.getCurrentScope();
  currentScope.setTransactionName(name.name);
  if (f108154[_sentry_idleSpan]) {
    f108154.emit("afterStartPageLoadSpan", tmp3);
  }
  return f108154[_sentry_idleSpan];
};