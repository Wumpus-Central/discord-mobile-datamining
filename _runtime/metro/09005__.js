// === Module 9005: ? ===

// Module 9005
import nitroFetch from "nitroFetch" /* 9006 */;
import NitroRequest from "NitroRequest" /* 9009 */;
import normalizeName from "normalizeName" /* 9010 */;
import decodeFormComponent from "decodeFormComponent" /* 9014 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9020 */;
import shellEscape from "shellEscape" /* 9021 */;
import hybridObject from "hybridObject" /* 9022 */;
import _mod9029 from "module_9029" /* 9029 */;
import _mod9031 from "module_9031" /* 9031 */;
import _profileFetch from "_profileFetch" /* 9032 */;


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
export const XMLHttpRequest = _mod9029.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9031.registerTokenRefresh;
export const clearTokenRefresh = _mod9031.clearTokenRefresh;
export const callRefreshEndpoint = _mod9031.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9031.getStoredTokenRefreshConfig;
export const getNestedField = _mod9031.getNestedField;
export const applyTemplate = _mod9031.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;