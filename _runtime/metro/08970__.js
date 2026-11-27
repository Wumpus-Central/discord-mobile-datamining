// === Module 8970: ? ===

// Module 8970
import nitroFetch from "nitroFetch" /* 8971 */;
import NitroRequest from "NitroRequest" /* 8974 */;
import normalizeName from "normalizeName" /* 8975 */;
import decodeFormComponent from "decodeFormComponent" /* 8979 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 8985 */;
import shellEscape from "shellEscape" /* 8986 */;
import hybridObject from "hybridObject" /* 8987 */;
import _mod8994 from "module_8994" /* 8994 */;
import _mod8996 from "module_8996" /* 8996 */;
import _profileFetch from "_profileFetch" /* 8997 */;


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
export const XMLHttpRequest = _mod8994.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8996.registerTokenRefresh;
export const clearTokenRefresh = _mod8996.clearTokenRefresh;
export const callRefreshEndpoint = _mod8996.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8996.getStoredTokenRefreshConfig;
export const getNestedField = _mod8996.getNestedField;
export const applyTemplate = _mod8996.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;