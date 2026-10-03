// === Module 909: triggerHandlers ===

// Module 909 (triggerHandlers)
import _mod910 from "module_910" /* 910 */;
import _addMeasureSpans from "_addMeasureSpans" /* 934 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 935 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 939 */;
import _onElementTiming from "_onElementTiming" /* 940 */;
import instrumentDOM from "instrumentDOM" /* 941 */;
import instrumentHistory from "instrumentHistory" /* 942 */;
import fetch from "fetch" /* 943 */;
import instrumentXHR from "instrumentXHR" /* 944 */;
import serializeFormData from "serializeFormData" /* 945 */;
import _onInp from "_onInp" /* 946 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = _mod910.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod910.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod910.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod910.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod910.addTtfbInstrumentationHandler;
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