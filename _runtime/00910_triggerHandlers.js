// === Module 910: triggerHandlers ===

// Module 910 (triggerHandlers)
import _mod911 from "module_911" /* 911 */;
import _addMeasureSpans from "_addMeasureSpans" /* 935 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 936 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 940 */;
import _onElementTiming from "_onElementTiming" /* 941 */;
import instrumentDOM from "instrumentDOM" /* 942 */;
import instrumentHistory from "instrumentHistory" /* 943 */;
import fetch from "fetch" /* 944 */;
import instrumentXHR from "instrumentXHR" /* 945 */;
import serializeFormData from "serializeFormData" /* 946 */;
import _onInp from "_onInp" /* 947 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = _mod911.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod911.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod911.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod911.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod911.addTtfbInstrumentationHandler;
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