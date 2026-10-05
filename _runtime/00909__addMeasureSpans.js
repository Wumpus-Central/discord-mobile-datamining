// === Module 909: _addMeasureSpans ===

// Module 909 (_addMeasureSpans)
import _mod910 from "module_910" /* 910 */;
import _mod934 from "module_934" /* 934 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 935 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 939 */;
import _onElementTiming from "_onElementTiming" /* 940 */;
import _mod941 from "module_941" /* 941 */;
import _mod942 from "module_942" /* 942 */;
import fetch from "fetch" /* 943 */;
import SENTRY_XHR_DATA_KEY from "SENTRY_XHR_DATA_KEY" /* 944 */;
import ORIGINAL_REQ_BODY from "ORIGINAL_REQ_BODY" /* 945 */;
import _onInp from "_onInp" /* 946 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const extractNetworkProtocol_export = extractNetworkProtocol.extractNetworkProtocol;
const fetch_export = fetch.fetch;
const SENTRY_XHR_DATA_KEY_export = SENTRY_XHR_DATA_KEY.SENTRY_XHR_DATA_KEY;
const resourceTimingToSpanAttributes_export = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;

export const addClsInstrumentationHandler = _mod910.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod910.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod910.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod910.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod910.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _mod934.addPerformanceEntries;
export const startTrackingInteractions = _mod934.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _mod934.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _mod934.startTrackingLongTasks;
export const startTrackingWebVitals = _mod934.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export { extractNetworkProtocol_export as extractNetworkProtocol };
export const addClickKeypressInstrumentationHandler = _mod941.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = _mod942.addHistoryInstrumentationHandler;
export const clearCachedImplementation = fetch.clearCachedImplementation;
export { fetch_export as fetch };
export const getNativeImplementation = fetch.getNativeImplementation;
export const setTimeout = fetch.setTimeout;
export { SENTRY_XHR_DATA_KEY_export as SENTRY_XHR_DATA_KEY };
export const addXhrInstrumentationHandler = SENTRY_XHR_DATA_KEY.addXhrInstrumentationHandler;
export const getBodyString = ORIGINAL_REQ_BODY.getBodyString;
export const getFetchRequestArgBody = ORIGINAL_REQ_BODY.getFetchRequestArgBody;
export const parseXhrResponseHeaders = ORIGINAL_REQ_BODY.parseXhrResponseHeaders;
export const serializeFormData = ORIGINAL_REQ_BODY.serializeFormData;
export { resourceTimingToSpanAttributes_export as resourceTimingToSpanAttributes };
export const registerInpInteractionListener = _onInp.registerInpInteractionListener;
export const startTrackingINP = _onInp.startTrackingINP;