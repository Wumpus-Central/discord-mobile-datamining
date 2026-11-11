// === Module 9006: ? ===

// Module 9006
import nitroFetch from "nitroFetch" /* 9007 */;
import NitroRequest from "NitroRequest" /* 9010 */;
import normalizeName from "normalizeName" /* 9011 */;
import decodeFormComponent from "decodeFormComponent" /* 9015 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9021 */;
import shellEscape from "shellEscape" /* 9022 */;
import hybridObject from "hybridObject" /* 9023 */;
import _mod9030 from "module_9030" /* 9030 */;
import _mod9032 from "module_9032" /* 9032 */;
import _profileFetch from "_profileFetch" /* 9033 */;


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
export const XMLHttpRequest = _mod9030.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9032.registerTokenRefresh;
export const clearTokenRefresh = _mod9032.clearTokenRefresh;
export const callRefreshEndpoint = _mod9032.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9032.getStoredTokenRefreshConfig;
export const getNestedField = _mod9032.getNestedField;
export const applyTemplate = _mod9032.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;