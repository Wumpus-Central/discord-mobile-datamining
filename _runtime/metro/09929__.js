// === Module 9929: ? ===

// Module 9929
import nitroFetch from "nitroFetch" /* 9930 */;
import NitroRequest from "NitroRequest" /* 9933 */;
import normalizeName from "normalizeName" /* 9934 */;
import decodeFormComponent from "decodeFormComponent" /* 9938 */;
import NetworkInspectorImpl from "NetworkInspectorImpl" /* 9944 */;
import shellEscape from "shellEscape" /* 9945 */;
import hybridObject from "hybridObject" /* 9946 */;
import _mod9953 from "module_9953" /* 9953 */;
import _mod9955 from "module_9955" /* 9955 */;
import _profileFetch from "_profileFetch" /* 9956 */;


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
export const XMLHttpRequest = _mod9953.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9955.registerTokenRefresh;
export const clearTokenRefresh = _mod9955.clearTokenRefresh;
export const callRefreshEndpoint = _mod9955.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9955.getStoredTokenRefreshConfig;
export const getNestedField = _mod9955.getNestedField;
export const applyTemplate = _mod9955.applyTemplate;
export const NetworkInspector = NetworkInspectorImpl.NetworkInspector;
export const generateCurl = shellEscape.generateCurl;
export const profileFetch = _profileFetch.profileFetch;