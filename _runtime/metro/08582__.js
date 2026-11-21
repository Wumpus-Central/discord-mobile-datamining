// === Module 8582: ? ===

// Module 8582
import nitroFetch from "nitroFetch" /* 8583 */;
import NitroRequest from "NitroRequest" /* 8586 */;
import normalizeName from "normalizeName" /* 8587 */;
import decodeFormComponent from "decodeFormComponent" /* 8591 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8597 */;
import shellEscape from "shellEscape" /* 8598 */;
import hybridObject from "hybridObject" /* 8599 */;
import _mod8606 from "module_8606" /* 8606 */;
import _mod8608 from "module_8608" /* 8608 */;
import _profileFetch from "_profileFetch" /* 8609 */;


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
export const XMLHttpRequest = _mod8606.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8608.registerTokenRefresh;
export const clearTokenRefresh = _mod8608.clearTokenRefresh;
export const callRefreshEndpoint = _mod8608.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8608.getStoredTokenRefreshConfig;
export const getNestedField = _mod8608.getNestedField;
export const applyTemplate = _mod8608.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;