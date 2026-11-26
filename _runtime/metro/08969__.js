// === Module 8969: ? ===

// Module 8969
import nitroFetch from "nitroFetch" /* 8970 */;
import NitroRequest from "NitroRequest" /* 8973 */;
import normalizeName from "normalizeName" /* 8974 */;
import decodeFormComponent from "decodeFormComponent" /* 8978 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8984 */;
import shellEscape from "shellEscape" /* 8985 */;
import hybridObject from "hybridObject" /* 8986 */;
import _mod8993 from "module_8993" /* 8993 */;
import _mod8995 from "module_8995" /* 8995 */;
import _profileFetch from "_profileFetch" /* 8996 */;


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
export const XMLHttpRequest = _mod8993.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8995.registerTokenRefresh;
export const clearTokenRefresh = _mod8995.clearTokenRefresh;
export const callRefreshEndpoint = _mod8995.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8995.getStoredTokenRefreshConfig;
export const getNestedField = _mod8995.getNestedField;
export const applyTemplate = _mod8995.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;