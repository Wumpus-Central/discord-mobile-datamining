// _runtime/00956_baggageHeaderHasSentryValues.js
import ignoreNextOnError from "00893_ignoreNextOnError.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const baggageHeaderHasSentryValues = function baggageHeaderHasSentryValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((item) => {
    const trimmed = item.trim();
    return trimmed.startsWith("sentry-");
  });
};
export const createHeadersSafely = function createHeadersSafely(request_headers) {
  try {
    const _Headers = Headers;
    const headers = new Headers(request_headers);
    return headers;
  } catch (err) {}
};
export const getFullURL = function getFullURL(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url, ignoreNextOnError.WINDOW.location.origin);
    return uRL.href;
  } catch (err) {}
};
export const isPerformanceResourceTiming = function isPerformanceResourceTiming(entryType) {
  let tmp = "resource" === entryType.entryType;
  if (tmp) {
    tmp = "initiatorType" in entryType;
  }
  if (tmp) {
    tmp = typeof entryType.nextHopProtocol === "string";
  }
  if (tmp) {
    let tmp2 = "fetch" === entryType.initiatorType;
    if (!tmp2) {
      tmp2 = "xmlhttprequest" === entryType.initiatorType;
    }
    tmp = tmp2;
  }
  return tmp;
};
