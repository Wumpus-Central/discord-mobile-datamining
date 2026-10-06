// === Module 14151: ? ===

// Module 14151
import _mod14152 from "module_14152" /* 14152 */;
import _mod14156 from "module_14156" /* 14156 */;
import _mod14159 from "module_14159" /* 14159 */;

const obj = {};
const _URL = _mod14152.URL;
_URL.install(obj);
const _URLSearchParams = _mod14152.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14156.parseURL;
export const basicURLParse = _mod14156.basicURLParse;
export const serializeURL = _mod14156.serializeURL;
export const serializeHost = _mod14156.serializeHost;
export const serializeInteger = _mod14156.serializeInteger;
export const serializeURLOrigin = _mod14156.serializeURLOrigin;
export const setTheUsername = _mod14156.setTheUsername;
export const setThePassword = _mod14156.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14156.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14159.percentDecode;