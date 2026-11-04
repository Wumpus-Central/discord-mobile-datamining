// === Module 9982: ? ===

// Module 9982
import nitroFetch from "nitroFetch" /* 9983 */;
import NitroRequest from "NitroRequest" /* 9986 */;
import normalizeName from "normalizeName" /* 9987 */;
import decodeFormComponent from "decodeFormComponent" /* 9991 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9997 */;
import shellEscape from "shellEscape" /* 9998 */;
import hybridObject from "hybridObject" /* 9999 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10008 from "module_10008" /* 10008 */;
import _profileFetch from "_profileFetch" /* 10009 */;


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
export const XMLHttpRequest = _mod10006.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod10008.registerTokenRefresh;
export const clearTokenRefresh = _mod10008.clearTokenRefresh;
export const callRefreshEndpoint = _mod10008.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod10008.getStoredTokenRefreshConfig;
export const getNestedField = _mod10008.getNestedField;
export const applyTemplate = _mod10008.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;