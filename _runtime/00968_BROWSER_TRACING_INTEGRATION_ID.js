// === Module 968: BROWSER_TRACING_INTEGRATION_ID ===

// Module 968 (BROWSER_TRACING_INTEGRATION_ID)
import _mod693 from "module_693" /* 693 */;
import _mod904 from "module_904" /* 904 */;
import _addMeasureSpans from "_addMeasureSpans" /* 909 */;
import _mod948 from "module_948" /* 948 */;
import defaultRequestInstrumentationOptions from "defaultRequestInstrumentationOptions" /* 966 */;

const require = globalThis.__r;
let _require, _undefined, _undefined2, c2, closure_5, dependencyMap, to;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const BrowserTracing = "BrowserTracing";
let obj = { instrumentNavigation: true, instrumentPageLoad: true, markBackgroundSpan: true, enableLongTask: true, enableLongAnimationFrame: true, enableInp: true, enableElementTiming: true, ignoreResourceSpans: [], ignorePerformanceApiSpans: [], detectRedirects: true, linkPreviousTrace: "in-memory", consistentTraceSampling: false, enableReportPageLoaded: false, _experiments: {} };
let merged = Object.assign(_mod693.TRACING_DEFAULTS);
let merged1 = Object.assign(defaultRequestInstrumentationOptions.defaultRequestInstrumentationOptions);
const _sentry_idleSpan = "_sentry_idleSpan";
let c5 = 1.5;

export const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
export const browserTracingIntegration = (arg0) => {
  let _experiments;
  let _undefined3;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  let c19;
  let c20;
  let c21;
  let c22;
  let c23;
  let c24;
  let c25;
  let c26;
  let c27;
  let c28;
  let c29;
  let c30;
  let c31;
  let c6;
  let c7;
  let c8;
  let c9;
  let childSpanTimeout;
  let consistentTraceSampling;
  let enableHTTPTimings;
  let finalTimeout;
  let idleTimeout;
  let onRequestSpanEnd;
  let onRequestSpanStart;
  let shouldCreateSpanForRequest;
  let traceFetch;
  let traceXHR;
  let trackFetchStreamPerformance;
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
    let ignorePerformanceApiSpans;
    let ignoreResourceSpans;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    c2 = undefined;
    let tmp = "pageload" === op.op;
    let closure_1 = tmp;
    let tmp2 = op;
    name = op.name;
    if (_undefined3) {
      tmp2 = _undefined3(op);
    }
    const tmp3 = tmp2.attributes || {};
    if (name !== tmp2.name) {
      tmp3[_undefined(_undefined2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom";
      tmp2.attributes = tmp3;
    }
    if (flag) {
      closure_3.name = tmp2.name;
      closure_3.source = tmp3[_undefined(undefined, _undefined2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      let obj4 = _undefined(_undefined2[0]);
      let obj2 = {
        idleTimeout,
        finalTimeout,
        childSpanTimeout,
        disableAutoFinish: tmp,
        beforeSpanEnd(setAttribute) {
            let obj7;
            let obj8;
            if (c0 != null) {
              tmp();
            }
            obj = _addMeasureSpans;
            const obj2 = { recordClsOnPageloadSpan: !c10, recordLcpOnPageloadSpan: !c11, ignoreResourceSpans, ignorePerformanceApiSpans };
            const result = obj.addPerformanceEntries(setAttribute, obj2);
            const obj3 = _mod693;
            const result1 = obj3.addNonEnumerableProperty(emit, _sentry_idleSpan, undefined);
            const obj4 = _mod693;
            const currentScope = obj4.getCurrentScope();
            const setPropagationContext = currentScope.setPropagationContext;
            const obj5 = { traceId: _undefined.spanContext().traceId, sampled: obj7.spanIsSampled(_undefined), dsc: obj8.getDynamicSamplingContextFromSpan(setAttribute) };
            const merged = Object.assign(currentScope.getPropagationContext());
            obj7 = _mod693;
            obj8 = _mod693;
            const result2 = setPropagationContext(obj5);
            if (closure_1) {
              _undefined = undefined;
            }
          },
        trimIdleSpanEndTimestamp: !c29
      };
      const startIdleSpanResult = obj4.startIdleSpan(tmp2, obj2);
      c2 = startIdleSpanResult;
      const tmp26 = tmp && c29;
      if (tmp26) {
        c2 = startIdleSpanResult;
      }
      const obj6 = _undefined(_undefined2[0]);
      let result = obj6.addNonEnumerableProperty(emit, document, startIdleSpanResult);
      if (tmp) {
        tmp = !c29;
      }
      if (tmp) {
        tmp = document;
      }
      if (tmp) {
        const listener = document.addEventListener("readystatechange", () => {
          let hasItem = document;
          if (hasItem) {
            const items = ["interactive", "complete"];
            hasItem = items.includes(tmp.readyState);
          }
          if (hasItem) {
            emit.emit("idleSpanEnableAutoFinish", c2);
          }
        });
        let hasItem = document;
        if (hasItem) {
          let items = ["interactive", "complete"];
          hasItem = items.includes(document.readyState);
        }
        if (hasItem) {
          emit.emit("idleSpanEnableAutoFinish", startIdleSpanResult);
        }
      }
    } else {
      obj = _undefined(_undefined2[0]);
      let result1 = obj.dateTimestampInSeconds();
      let obj3 = { startTime: result1 };
      const startInactiveSpan = _undefined(_undefined2[0]).startInactiveSpan;
      _undefined(_undefined2[0]);
      let merged = Object.assign(tmp2);
      const startInactiveSpanResult = startInactiveSpan(obj3);
      startInactiveSpanResult.end(result1);
    }
  }
  let closure_3 = { name: "start", source: "unicodeVersion" };
  const document = require("module_904").WINDOW.document;
  let obj2 = {};
  let merged = Object.assign(closure_3);
  let merged1 = Object.assign(obj);
  ({ enableInp: c5, enableElementTiming: c6, enableLongTask: c7, enableLongAnimationFrame: c8, _experiments } = obj2);
  ({ enableInteractions: c9, enableStandaloneClsSpans: c10, enableStandaloneLcpSpans: c11 } = _experiments);
  ({ beforeStartSpan: c12, idleTimeout: c13, finalTimeout: c14, childSpanTimeout: c15, markBackgroundSpan: c16, traceFetch: c17, traceXHR: c18, trackFetchStreamPerformance: c19, shouldCreateSpanForRequest: c20, enableHTTPTimings: c21, ignoreResourceSpans: c22, ignorePerformanceApiSpans: c23, instrumentPageLoad: c24, instrumentNavigation: c25, detectRedirects: c26, linkPreviousTrace: c27, consistentTraceSampling: c28, enableReportPageLoaded: c29, onRequestSpanStart: c30, onRequestSpanEnd: c31 } = obj2);
  let obj3 = {
    name,
    setup(client) {
      let closure_0 = client;
      let closure_1 = function maybeEndActiveSpan() {
        let tmp = obj;
        if (tmp) {
          const obj2 = _mod693;
          tmp = !obj2.spanToJSON(obj).timestamp;
        }
        if (tmp) {
          if (_mod948.DEBUG_BUILD) {
            const debug = _mod693.debug;
            const log = debug.log;
            const _HermesInternal = HermesInternal;
            const tmp4Result = _mod693;
            log("[Tracing] Finishing current active span with op: " + tmp4Result.spanToJSON(closure_0[_sentry_idleSpan]).op);
          }
          const attr = obj.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled");
          closure_0[_sentry_idleSpan].end();
        }
      };
      obj = _undefined(_undefined2[0]);
      let result = obj.registerSpanErrorInstrumentation();
      let flag = c10;
      const startTrackingWebVitals = _undefined(_undefined2[3]).startTrackingWebVitals;
      const tmp4 = _undefined(_undefined2[3]);
      if (!c10) {
        flag = false;
      }
      let obj2 = { recordClsStandaloneSpans: flag, recordLcpStandaloneSpans: c11 || false, client };
      closure_0 = startTrackingWebVitals(obj2);
      if (c5) {
        let tmpResult = _undefined(_undefined2[3]);
        tmpResult.startTrackingINP();
      }
      if (c6) {
        let tmpResult5 = _undefined(_undefined2[3]);
        let result1 = tmpResult5.startTrackingElementTiming();
      }
      if (c8) {
        if (_undefined(_undefined2[0]).GLOBAL_OBJ.PerformanceObserver) {
          if (globalThis.PerformanceObserver.supportedEntryTypes) {
            const PerformanceObserver2 = globalThis.PerformanceObserver;
            const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
            if (supportedEntryTypes.includes("long-animation-frame")) {
              let tmpResult6 = _undefined(_undefined2[3]);
              let result2 = tmpResult6.startTrackingLongAnimationFrames();
            }
            if (c9) {
              let tmpResult7 = _undefined(_undefined2[3]);
              const result3 = tmpResult7.startTrackingInteractions();
            }
            if (c26) {
              if (document) {
                function interactionHandler() {
                  obj = c0(c1[0]);
                  closure_1 = obj.timestampInSeconds();
                }
                const listener = globalThis.addEventListener("click", interactionHandler, { capture: true });
                const addEventListener2 = globalThis.addEventListener;
                const listener1 = globalThis.addEventListener("keydown", interactionHandler, { capture: true, passive: true });
              }
            }
            client.on("startNavigationSpan", (arg0, isRedirect) => {
              let spanId;
              let spanId1;
              let tmpResult12;
              let tmpResult8;
              obj = _mod693;
              if (obj.getClient() === closure_0) {
                isRedirect = undefined;
                if (isRedirect != null) {
                  isRedirect = isRedirect.isRedirect;
                }
                if (isRedirect) {
                  if (_mod948.DEBUG_BUILD) {
                    const debug = _mod693.debug;
                    debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span.");
                  }
                  const obj2 = { op: "navigation.redirect" };
                  const merged = Object.assign(arg0);
                  _createRouteSpan(closure_0, obj2, false);
                } else {
                  let c1;
                  closure_1();
                  const tmpResult = _mod693;
                  const isolationScope = tmpResult.getIsolationScope();
                  const setPropagationContext = isolationScope.setPropagationContext;
                  const obj3 = { traceId: tmpResult8.generateTraceId(), sampleRand: Math.random(), propagationSpanId: spanId };
                  const _Math = Math;
                  spanId = undefined;
                  tmpResult8 = _mod693;
                  const tmpResult9 = _mod693;
                  if (!tmpResult9.hasSpansEnabled()) {
                    const tmpResult10 = _mod693;
                    spanId = tmpResult10.generateSpanId();
                  }
                  const result = setPropagationContext(obj3);
                  const tmpResult11 = _mod693;
                  const currentScope = tmpResult11.getCurrentScope();
                  const setPropagationContext2 = currentScope.setPropagationContext;
                  const obj4 = { traceId: tmpResult12.generateTraceId(), sampleRand: Math.random(), propagationSpanId: spanId1 };
                  const _Math2 = Math;
                  spanId1 = undefined;
                  tmpResult12 = _mod693;
                  const tmpResult13 = _mod693;
                  if (!tmpResult13.hasSpansEnabled()) {
                    const tmpResult14 = _mod693;
                    spanId1 = tmpResult14.generateSpanId();
                  }
                  const result1 = setPropagationContext2(obj4);
                  const result2 = currentScope.setSDKProcessingMetadata({ normalizedRequest: "r" });
                  const obj5 = { op: "navigation", parentSpan: null, forceTransaction: true };
                  const merged1 = Object.assign(arg0);
                  _createRouteSpan(closure_0, obj5);
                }
              }
            });
            client.on("startPageLoadSpan", (arg0) => {
              let tmpResult8;
              obj = arg1;
              if (arg1 === undefined) {
                obj = {};
              }
              const obj2 = _mod693;
              if (obj2.getClient() === closure_0) {
                closure_1();
                let sentryTrace = obj.sentryTrace;
                if (!sentryTrace) {
                  const _document = _mod904.WINDOW.document;
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
                  const _document2 = _mod904.WINDOW.document;
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
                const tmpResult = _mod693;
                const result = tmpResult.propagationContextFromHeaders(sentryTrace, baggage);
                const tmpResult5 = _mod693;
                const currentScope = tmpResult5.getCurrentScope();
                const result1 = currentScope.setPropagationContext(result);
                const tmpResult6 = _mod693;
                if (!tmpResult6.hasSpansEnabled()) {
                  const propagationContext = currentScope.getPropagationContext();
                  const tmpResult7 = _mod693;
                  propagationContext.propagationSpanId = tmpResult7.generateSpanId();
                }
                const setSDKProcessingMetadata = currentScope.setSDKProcessingMetadata;
                const obj3 = { normalizedRequest: tmpResult8.getHttpRequestData() };
                tmpResult8 = _mod904;
                const result2 = setSDKProcessingMetadata(obj3);
                const obj4 = { op: "pageload" };
                const merged = Object.assign(arg0);
                _createRouteSpan(tmp3, obj4);
              }
            });
            client.on("endPageloadSpan", () => {
              const tmp = closure_1_29 && closure_1_2;
              if (tmp) {
                const attr = closure_1_2.setAttribute(c0(c1[0]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded");
                closure_1_2.end();
              }
            });
          }
        }
      }
      if (c7) {
        let tmpResult8 = _undefined(_undefined2[3]);
        const result4 = tmpResult8.startTrackingLongTasks();
      }
    },
    afterAllSetup(emit) {
      let obj4;
      let result1;
      obj = _undefined(_undefined2[0]);
      _undefined2 = obj.getLocationHref();
      if ("off" !== c27) {
        const obj2 = { linkPreviousTrace: tmp3, consistentTraceSampling };
        const tmpResult = _undefined(_undefined2[5]);
        tmpResult.linkTraces(emit, obj2);
      }
      if (_undefined(_undefined2[2]).WINDOW.location) {
        if (c24) {
          const tmpResult7 = _undefined(_undefined2[0]);
          let result = tmpResult7.browserPerformanceTimeOrigin();
          let obj3 = { name: _undefined(_undefined2[2]).WINDOW.location.pathname, startTime: result1, attributes: obj4 };
          result1 = undefined;
          if (result) {
            result1 = result / 1000;
          }
          obj4 = {};
          obj4[_undefined(_undefined2[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
          obj4[_undefined(_undefined2[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.browser";
          emit.emit("startPageLoadSpan", obj3, undefined);
          const tmpResult8 = _undefined(_undefined2[0]);
          let currentScope = tmpResult8.getCurrentScope();
          currentScope.setTransactionName(obj3.name);
          const tmp12 = emit[document];
          if (tmp12) {
            emit.emit("afterStartPageLoadSpan", tmp12);
          }
        }
        if (c25) {
          const tmpResult9 = _undefined(_undefined2[3]);
          let result2 = tmpResult9.addHistoryInstrumentationHandler((to) => {
            let isRedirect;
            let obj5;
            let url;
            to = to.to;
            if (undefined === to.from) {
              let index;
              const arr = c1;
              if (c1 != null) {
                index = arr.indexOf(to);
              }
              if (-1 !== index) {
                c1 = undefined;
              }
            }
            c1 = undefined;
            obj = _mod693;
            const result = obj.parseStringToURLObject(to);
            let tmp8 = tmp7;
            if (emit[_sentry_idleSpan]) {
              tmp8 = c26;
            }
            if (tmp8) {
              const tmp3Result = _mod693;
              const spanToJSONResult = tmp3Result.spanToJSON(emit[_sentry_idleSpan]);
              const tmp3Result4 = _mod693;
              const result1 = tmp3Result4.dateTimestampInSeconds();
              let flag = false;
              if (result1 - spanToJSONResult.start_timestamp <= c5) {
                flag = true;
                if (c1) {
                  flag = true;
                  if (result1 - c1 <= tmp12) {
                    flag = false;
                  }
                }
              }
              tmp8 = flag;
            }
            let pathname;
            if (result != null) {
              pathname = result.pathname;
            }
            if (!pathname) {
              pathname = _mod904.WINDOW.location.pathname;
            }
            const obj3 = { name: pathname, attributes: { [_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url", [_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser" } };
            ({ url, isRedirect } = { url: to, isRedirect: tmp8 });
            emit.emit("beforeStartNavigationSpan", obj3, { isRedirect });
            emit.emit("startNavigationSpan", obj3, { isRedirect });
            const tmp3Result5 = _mod693;
            const currentScope = tmp3Result5.getCurrentScope();
            currentScope.setTransactionName(obj3.name);
            const tmp17 = url && !isRedirect;
            if (tmp17) {
              const obj4 = { normalizedRequest: obj5 };
              const setSDKProcessingMetadata = currentScope.setSDKProcessingMetadata;
              obj5 = { url };
              const tmp3Result6 = _mod904;
              const merged = Object.assign(tmp3Result6.getHttpRequestData());
              const result2 = setSDKProcessingMetadata(obj4);
            }
          });
        }
      }
      if (c16) {
        const tmpResult10 = _undefined(_undefined2[6]);
        const result3 = tmpResult10.registerBackgroundTabDetection();
      }
      if (c9) {
        let closure_1 = c13;
        let closure_2 = c14;
        closure_3 = c15;
        let closure_4 = closure_3;
        if (_undefined(_undefined2[2]).WINDOW.document) {
          let str5 = "click";
          const listener = globalThis.addEventListener("click", function registerInteractionTransaction() {
            let obj4;
            if (closure_0[document]) {
              const items = ["navigation", "pageload"];
              obj = closure_0(idleTimeout[0]);
              if (items.includes(obj.spanToJSON(closure_0[document]).op)) {
                if (closure_0(idleTimeout[4]).DEBUG_BUILD) {
                  const debug2 = closure_0(idleTimeout[0]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("[Tracing] Did not create " + "ui.action.click" + " span because a pageload or navigation span is in progress.");
                }
              }
            }
            if (closure_5) {
              const attr = obj2.setAttribute(closure_0(idleTimeout[0]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted");
              closure_5.end();
              closure_5 = undefined;
            }
            if (name.name) {
              const obj3 = { name: name.name, op: "ui.action.click", attributes: obj4 };
              const startIdleSpan = closure_0(idleTimeout[0]).startIdleSpan;
              let str5 = name.source;
              closure_0(idleTimeout[0]);
              const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = closure_0(idleTimeout[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
              if (!str5) {
                str5 = "url";
              }
              obj4 = {};
              obj4[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str5;
              const obj5 = { idleTimeout, finalTimeout, childSpanTimeout };
              closure_5 = startIdleSpan(obj3, obj5);
            } else if (closure_0(idleTimeout[4]).DEBUG_BUILD) {
              const debug = closure_0(idleTimeout[0]).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("[Tracing] Did not create " + "ui.action.click" + " transaction because _latestRouteName is missing.");
            }
          }, { capture: true });
        }
      }
      if (c5) {
        const tmpResult11 = _undefined(_undefined2[3]);
        const result4 = tmpResult11.registerInpInteractionListener();
      }
      const tmpResult12 = _undefined(_undefined2[1]);
      let obj5 = { traceFetch, traceXHR, trackFetchStreamPerformance, tracePropagationTargets: emit.getOptions().tracePropagationTargets, shouldCreateSpanForRequest, enableHTTPTimings, onRequestSpanStart, onRequestSpanEnd };
      const result5 = tmpResult12.instrumentOutgoingRequests(emit, obj5);
    }
  };
  return obj3;
};
export const getMetaContent = function getMetaContent(arg0) {
  const _document = _mod904.WINDOW.document;
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
  let isRedirect;
  let obj3;
  let url;
  const tmp = arg2 || {};
  ({ url, isRedirect } = tmp);
  client.emit("beforeStartNavigationSpan", name, { isRedirect });
  client.emit("startNavigationSpan", name, { isRedirect });
  obj = _mod693;
  const currentScope = obj.getCurrentScope();
  currentScope.setTransactionName(name.name);
  const tmp7 = url && !isRedirect;
  if (tmp7) {
    const obj2 = { normalizedRequest: obj3 };
    const setSDKProcessingMetadata = currentScope.setSDKProcessingMetadata;
    obj3 = { url };
    const tmp4Result = _mod904;
    const merged = Object.assign(tmp4Result.getHttpRequestData());
    const result = setSDKProcessingMetadata(obj2);
  }
  return client[_sentry_idleSpan];
};
export const startBrowserTracingPageLoadSpan = function startBrowserTracingPageLoadSpan(f134854, name, arg2) {
  f134854.emit("startPageLoadSpan", name, arg2);
  obj = _mod693;
  const currentScope = obj.getCurrentScope();
  currentScope.setTransactionName(name.name);
  if (f134854[_sentry_idleSpan]) {
    f134854.emit("afterStartPageLoadSpan", f134854[_sentry_idleSpan]);
  }
  return f134854[_sentry_idleSpan];
};