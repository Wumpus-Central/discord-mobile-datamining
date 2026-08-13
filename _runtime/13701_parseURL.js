// _runtime/13701_parseURL.js
import { URL as _URL } from "URL";
import { URLSearchParams as _URLSearchParams } from "URL";

const obj = {};
_URL.install(obj);
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = require("parseIPv4Number").parseURL;
export const basicURLParse = require("parseIPv4Number").basicURLParse;
export const serializeURL = require("parseIPv4Number").serializeURL;
export const serializeHost = require("parseIPv4Number").serializeHost;
export const serializeInteger = require("parseIPv4Number").serializeInteger;
export const serializeURLOrigin = require("parseIPv4Number").serializeURLOrigin;
export const setTheUsername = require("parseIPv4Number").setTheUsername;
export const setThePassword = require("parseIPv4Number").setThePassword;
export const cannotHaveAUsernamePasswordPort = require("parseIPv4Number").cannotHaveAUsernamePasswordPort;
export const percentDecode = require("replaceByteInByteSequence").percentDecode;