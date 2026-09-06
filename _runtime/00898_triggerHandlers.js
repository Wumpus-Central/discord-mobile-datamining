// === Module 898: triggerHandlers ===

// Module 898 (triggerHandlers)
import _mod899 from "module_899" /* 899 */;
import _addMeasureSpans from "_addMeasureSpans" /* 923 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 924 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 928 */;
import _onElementTiming from "_onElementTiming" /* 929 */;
import instrumentDOM from "instrumentDOM" /* 930 */;
import instrumentHistory from "instrumentHistory" /* 931 */;
import fetch from "fetch" /* 932 */;
import instrumentXHR from "instrumentXHR" /* 933 */;
import serializeFormData from "serializeFormData" /* 934 */;
import _onInp from "_onInp" /* 935 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = _mod899.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod899.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod899.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod899.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod899.addTtfbInstrumentationHandler;
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