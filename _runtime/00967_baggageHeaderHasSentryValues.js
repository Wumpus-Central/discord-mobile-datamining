// _runtime/00967_baggageHeaderHasSentryValues.js
import _mod904 from "metro/00904__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const baggageHeaderHasSentryValues = function baggageHeaderHasSentryValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((item) => {
    const trimmed = item.trim();
    return trimmed.startsWith("sentry-");
  });
};
export const createHeadersSafely = function createHeadersSafely(headers) {
  try {
    const _Headers = Headers;
    const self = this;
    const self2 = this;
    headers = new Headers(headers);
    return headers;
  } catch (err) {}
};
export const getFullURL = function getFullURL(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url, _mod904.WINDOW.location.origin);
    return uRL.href;
  } catch (err) {}
};
export const isPerformanceResourceTiming = function isPerformanceResourceTiming(entryType) {
  let tmp =
    "resource" === entryType.entryType && "initiatorType" in entryType && typeof entryType.nextHopProtocol === "string";
  if (tmp) {
    tmp = "fetch" === entryType.initiatorType || "xmlhttprequest" === entryType.initiatorType;
    const tmp2 = "fetch" === entryType.initiatorType || "xmlhttprequest" === entryType.initiatorType;
  }
  return tmp;
};
