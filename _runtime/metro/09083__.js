// === Module 9083: ? ===

// Module 9083
import nitroFetch from "nitroFetch" /* 9084 */;
import NitroRequest from "NitroRequest" /* 9087 */;
import normalizeName from "normalizeName" /* 9088 */;
import decodeFormComponent from "decodeFormComponent" /* 9092 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9098 */;
import shellEscape from "shellEscape" /* 9099 */;
import hybridObject from "hybridObject" /* 9100 */;
import _mod9107 from "module_9107" /* 9107 */;
import _mod9109 from "module_9109" /* 9109 */;
import _profileFetch from "_profileFetch" /* 9110 */;


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
export const XMLHttpRequest = _mod9107.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9109.registerTokenRefresh;
export const clearTokenRefresh = _mod9109.clearTokenRefresh;
export const callRefreshEndpoint = _mod9109.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9109.getStoredTokenRefreshConfig;
export const getNestedField = _mod9109.getNestedField;
export const applyTemplate = _mod9109.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;