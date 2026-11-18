// === Module 8494: ? ===

// Module 8494
import nitroFetch from "nitroFetch" /* 8495 */;
import NitroRequest from "NitroRequest" /* 8498 */;
import normalizeName from "normalizeName" /* 8499 */;
import decodeFormComponent from "decodeFormComponent" /* 8503 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8509 */;
import shellEscape from "shellEscape" /* 8510 */;
import hybridObject from "hybridObject" /* 8511 */;
import _mod8518 from "module_8518" /* 8518 */;
import _mod8520 from "module_8520" /* 8520 */;
import _profileFetch from "_profileFetch" /* 8521 */;


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
export const XMLHttpRequest = _mod8518.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8520.registerTokenRefresh;
export const clearTokenRefresh = _mod8520.clearTokenRefresh;
export const callRefreshEndpoint = _mod8520.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8520.getStoredTokenRefreshConfig;
export const getNestedField = _mod8520.getNestedField;
export const applyTemplate = _mod8520.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;