// === Module 9072: ? ===

// Module 9072
import nitroFetch from "nitroFetch" /* 9073 */;
import NitroRequest from "NitroRequest" /* 9076 */;
import normalizeName from "normalizeName" /* 9077 */;
import decodeFormComponent from "decodeFormComponent" /* 9081 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9087 */;
import shellEscape from "shellEscape" /* 9088 */;
import hybridObject from "hybridObject" /* 9089 */;
import _mod9096 from "module_9096" /* 9096 */;
import _mod9098 from "module_9098" /* 9098 */;
import _profileFetch from "_profileFetch" /* 9099 */;


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
export const XMLHttpRequest = _mod9096.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9098.registerTokenRefresh;
export const clearTokenRefresh = _mod9098.clearTokenRefresh;
export const callRefreshEndpoint = _mod9098.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9098.getStoredTokenRefreshConfig;
export const getNestedField = _mod9098.getNestedField;
export const applyTemplate = _mod9098.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;