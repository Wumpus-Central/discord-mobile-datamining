// === Module 20279: ? ===

// Module 20279
import nitroFetch from "nitroFetch" /* 20280 */;
import NitroRequest from "NitroRequest" /* 20283 */;
import normalizeName from "normalizeName" /* 20284 */;
import decodeFormComponent from "decodeFormComponent" /* 20288 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 20294 */;
import shellEscape from "shellEscape" /* 20295 */;
import hybridObject from "hybridObject" /* 20296 */;
import _mod20303 from "module_20303" /* 20303 */;
import _mod20305 from "module_20305" /* 20305 */;
import _profileFetch from "_profileFetch" /* 20306 */;


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
export const XMLHttpRequest = _mod20303.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod20305.registerTokenRefresh;
export const clearTokenRefresh = _mod20305.clearTokenRefresh;
export const callRefreshEndpoint = _mod20305.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod20305.getStoredTokenRefreshConfig;
export const getNestedField = _mod20305.getNestedField;
export const applyTemplate = _mod20305.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;