// === Module 8463: ? ===

// Module 8463
import nitroFetch from "nitroFetch" /* 8464 */;
import NitroRequest from "NitroRequest" /* 8467 */;
import normalizeName from "normalizeName" /* 8468 */;
import decodeFormComponent from "decodeFormComponent" /* 8472 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8478 */;
import shellEscape from "shellEscape" /* 8479 */;
import hybridObject from "hybridObject" /* 8480 */;
import _mod8487 from "module_8487" /* 8487 */;
import _mod8489 from "module_8489" /* 8489 */;
import _profileFetch from "_profileFetch" /* 8490 */;


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
export const XMLHttpRequest = _mod8487.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8489.registerTokenRefresh;
export const clearTokenRefresh = _mod8489.clearTokenRefresh;
export const callRefreshEndpoint = _mod8489.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8489.getStoredTokenRefreshConfig;
export const getNestedField = _mod8489.getNestedField;
export const applyTemplate = _mod8489.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;