// === Module 8927: ? ===

// Module 8927
import nitroFetch from "nitroFetch" /* 8928 */;
import NitroRequest from "NitroRequest" /* 8931 */;
import normalizeName from "normalizeName" /* 8932 */;
import decodeFormComponent from "decodeFormComponent" /* 8936 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8942 */;
import shellEscape from "shellEscape" /* 8943 */;
import hybridObject from "hybridObject" /* 8944 */;
import _mod8951 from "module_8951" /* 8951 */;
import _mod8953 from "module_8953" /* 8953 */;
import _profileFetch from "_profileFetch" /* 8954 */;


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
export const XMLHttpRequest = _mod8951.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8953.registerTokenRefresh;
export const clearTokenRefresh = _mod8953.clearTokenRefresh;
export const callRefreshEndpoint = _mod8953.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8953.getStoredTokenRefreshConfig;
export const getNestedField = _mod8953.getNestedField;
export const applyTemplate = _mod8953.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;