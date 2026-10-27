// === Module 907: triggerHandlers ===

// Module 907 (triggerHandlers)
import _mod908 from "module_908" /* 908 */;
import _addMeasureSpans from "_addMeasureSpans" /* 932 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 933 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 937 */;
import _onElementTiming from "_onElementTiming" /* 938 */;
import instrumentDOM from "instrumentDOM" /* 939 */;
import instrumentHistory from "instrumentHistory" /* 940 */;
import fetch from "fetch" /* 941 */;
import instrumentXHR from "instrumentXHR" /* 942 */;
import serializeFormData from "serializeFormData" /* 943 */;
import _onInp from "_onInp" /* 944 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = _mod908.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod908.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod908.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod908.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod908.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _addMeasureSpans.addPerformanceEntries;
export const startTrackingInteractions = _addMeasureSpans.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _addMeasureSpans.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _addMeasureSpans.startTrackingLongTasks;
export const startTrackingWebVitals = _addMeasureSpans.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export const extractNetworkProtocol = extractNetworkProtocol.extractNetworkProtocol;
export const addClickKeypressInstrumentationHandler = instrumentDOM.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = instrumentHistory.addHistoryInstrumentationHandler;
export const clearCachedImplementation = fetch.clearCachedImplementation;
export const fetch = fetch.fetch;
export const getNativeImplementation = fetch.getNativeImplementation;
export const setTimeout = fetch.setTimeout;
export const SENTRY_XHR_DATA_KEY = instrumentXHR.SENTRY_XHR_DATA_KEY;
export const addXhrInstrumentationHandler = instrumentXHR.addXhrInstrumentationHandler;
export const getBodyString = serializeFormData.getBodyString;
export const getFetchRequestArgBody = serializeFormData.getFetchRequestArgBody;
export const parseXhrResponseHeaders = serializeFormData.parseXhrResponseHeaders;
export const serializeFormData = serializeFormData.serializeFormData;
export const resourceTimingToSpanAttributes = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;
export const registerInpInteractionListener = _onInp.registerInpInteractionListener;
export const startTrackingINP = _onInp.startTrackingINP;