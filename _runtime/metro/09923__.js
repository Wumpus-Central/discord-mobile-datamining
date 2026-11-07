// === Module 9923: ? ===

// Module 9923
import nitroFetch from "nitroFetch" /* 9924 */;
import NitroRequest from "NitroRequest" /* 9927 */;
import normalizeName from "normalizeName" /* 9928 */;
import decodeFormComponent from "decodeFormComponent" /* 9932 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9938 */;
import shellEscape from "shellEscape" /* 9939 */;
import hybridObject from "hybridObject" /* 9940 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9949 from "module_9949" /* 9949 */;
import _profileFetch from "_profileFetch" /* 9950 */;


export const fetch = nitroFetch.nitroFetch;
export const nitroFetchOnWorklet = nitroFetch.nitroFetchOnWorklet;
export const prefetch = nitroFetch.prefetch;
export const prefetchOnAppStart = nitroFetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = nitroFetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = nitroFetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = nitroFetch.__readAutoPrefetchQueue;
export const Headers = normalizeName.NitroHeaders;
export const Response = decodeFormComponent.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = _mod9947.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9949.registerTokenRefresh;
export const clearTokenRefresh = _mod9949.clearTokenRefresh;
export const callRefreshEndpoint = _mod9949.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9949.getStoredTokenRefreshConfig;
export const getNestedField = _mod9949.getNestedField;
export const applyTemplate = _mod9949.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;