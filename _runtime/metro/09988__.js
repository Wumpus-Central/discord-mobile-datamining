// === Module 9988: ? ===

// Module 9988
import nitroFetch from "nitroFetch" /* 9989 */;
import NitroRequest from "NitroRequest" /* 9992 */;
import normalizeName from "normalizeName" /* 9993 */;
import decodeFormComponent from "decodeFormComponent" /* 9997 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 10003 */;
import shellEscape from "shellEscape" /* 10004 */;
import hybridObject from "hybridObject" /* 10005 */;
import _mod10012 from "module_10012" /* 10012 */;
import _mod10014 from "module_10014" /* 10014 */;
import _profileFetch from "_profileFetch" /* 10015 */;


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
export const XMLHttpRequest = _mod10012.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod10014.registerTokenRefresh;
export const clearTokenRefresh = _mod10014.clearTokenRefresh;
export const callRefreshEndpoint = _mod10014.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod10014.getStoredTokenRefreshConfig;
export const getNestedField = _mod10014.getNestedField;
export const applyTemplate = _mod10014.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;