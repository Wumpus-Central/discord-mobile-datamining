// === Module 898: addClsInstrumentationHandler ===

// Module 898 (addClsInstrumentationHandler)
import triggerHandlers from "triggerHandlers" /* 899 */;
import _addMeasureSpans from "_addMeasureSpans" /* 923 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 924 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 928 */;
import _onElementTiming from "_onElementTiming" /* 929 */;
import instrumentDOM from "instrumentDOM" /* 930 */;
import instrumentHistory from "instrumentHistory" /* 931 */;
import getNativeImplementation from "getNativeImplementation" /* 932 */;
import instrumentXHR from "instrumentXHR" /* 933 */;
import serializeFormData from "serializeFormData" /* 934 */;
import map from "map" /* 935 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = triggerHandlers.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = triggerHandlers.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = triggerHandlers.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = triggerHandlers.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = triggerHandlers.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _addMeasureSpans.addPerformanceEntries;
export const startTrackingInteractions = _addMeasureSpans.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _addMeasureSpans.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _addMeasureSpans.startTrackingLongTasks;
export const startTrackingWebVitals = _addMeasureSpans.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export const extractNetworkProtocol = extractNetworkProtocol.extractNetworkProtocol;
export const addClickKeypressInstrumentationHandler = instrumentDOM.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = instrumentHistory.addHistoryInstrumentationHandler;
export const clearCachedImplementation = getNativeImplementation.clearCachedImplementation;
export const fetch = getNativeImplementation.fetch;
export const getNativeImplementation = getNativeImplementation.getNativeImplementation;
export const setTimeout = getNativeImplementation.setTimeout;
export const SENTRY_XHR_DATA_KEY = instrumentXHR.SENTRY_XHR_DATA_KEY;
export const addXhrInstrumentationHandler = instrumentXHR.addXhrInstrumentationHandler;
export const getBodyString = serializeFormData.getBodyString;
export const getFetchRequestArgBody = serializeFormData.getFetchRequestArgBody;
export const parseXhrResponseHeaders = serializeFormData.parseXhrResponseHeaders;
export const serializeFormData = serializeFormData.serializeFormData;
export const resourceTimingToSpanAttributes = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;
export const registerInpInteractionListener = map.registerInpInteractionListener;
export const startTrackingINP = map.startTrackingINP;