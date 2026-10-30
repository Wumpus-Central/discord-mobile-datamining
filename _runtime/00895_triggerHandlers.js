// === Module 895: triggerHandlers ===

// Module 895 (triggerHandlers)
import _mod896 from "module_896" /* 896 */;
import _addMeasureSpans from "_addMeasureSpans" /* 920 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 921 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 925 */;
import _onElementTiming from "_onElementTiming" /* 926 */;
import instrumentDOM from "instrumentDOM" /* 927 */;
import instrumentHistory from "instrumentHistory" /* 928 */;
import fetch from "fetch" /* 929 */;
import instrumentXHR from "instrumentXHR" /* 930 */;
import serializeFormData from "serializeFormData" /* 931 */;
import _onInp from "_onInp" /* 932 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = _mod896.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod896.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod896.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod896.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod896.addTtfbInstrumentationHandler;
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