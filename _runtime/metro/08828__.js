// === Module 8828: ? ===

// Module 8828
import nitroFetch from "nitroFetch" /* 8829 */;
import NitroRequest from "NitroRequest" /* 8832 */;
import normalizeName from "normalizeName" /* 8833 */;
import decodeFormComponent from "decodeFormComponent" /* 8837 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8843 */;
import shellEscape from "shellEscape" /* 8844 */;
import hybridObject from "hybridObject" /* 8845 */;
import _mod8852 from "module_8852" /* 8852 */;
import _mod8854 from "module_8854" /* 8854 */;
import _profileFetch from "_profileFetch" /* 8855 */;


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
export const XMLHttpRequest = _mod8852.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8854.registerTokenRefresh;
export const clearTokenRefresh = _mod8854.clearTokenRefresh;
export const callRefreshEndpoint = _mod8854.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8854.getStoredTokenRefreshConfig;
export const getNestedField = _mod8854.getNestedField;
export const applyTemplate = _mod8854.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;