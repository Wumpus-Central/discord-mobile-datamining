// === Module 9939: ? ===

// Module 9939
import nitroFetch from "nitroFetch" /* 9940 */;
import NitroRequest from "NitroRequest" /* 9943 */;
import normalizeName from "normalizeName" /* 9944 */;
import decodeFormComponent from "decodeFormComponent" /* 9948 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9954 */;
import shellEscape from "shellEscape" /* 9955 */;
import hybridObject from "hybridObject" /* 9956 */;
import _mod9963 from "module_9963" /* 9963 */;
import _mod9965 from "module_9965" /* 9965 */;
import _profileFetch from "_profileFetch" /* 9966 */;


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
export const XMLHttpRequest = _mod9963.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9965.registerTokenRefresh;
export const clearTokenRefresh = _mod9965.clearTokenRefresh;
export const callRefreshEndpoint = _mod9965.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9965.getStoredTokenRefreshConfig;
export const getNestedField = _mod9965.getNestedField;
export const applyTemplate = _mod9965.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;