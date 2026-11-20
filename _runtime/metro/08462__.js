// === Module 8462: ? ===

// Module 8462
import nitroFetch from "nitroFetch" /* 8463 */;
import NitroRequest from "NitroRequest" /* 8466 */;
import normalizeName from "normalizeName" /* 8467 */;
import decodeFormComponent from "decodeFormComponent" /* 8471 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8477 */;
import shellEscape from "shellEscape" /* 8478 */;
import hybridObject from "hybridObject" /* 8479 */;
import _mod8486 from "module_8486" /* 8486 */;
import _mod8488 from "module_8488" /* 8488 */;
import _profileFetch from "_profileFetch" /* 8489 */;


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
export const XMLHttpRequest = _mod8486.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8488.registerTokenRefresh;
export const clearTokenRefresh = _mod8488.clearTokenRefresh;
export const callRefreshEndpoint = _mod8488.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8488.getStoredTokenRefreshConfig;
export const getNestedField = _mod8488.getNestedField;
export const applyTemplate = _mod8488.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;