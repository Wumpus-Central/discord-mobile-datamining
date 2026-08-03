const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.baggageHeaderHasSentryValues = function baggageHeaderHasSentryValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((str) => {
    const trimmed = str.trim();
    return trimmed.startsWith("sentry-");
  });
};
arg5.createHeadersSafely = function createHeadersSafely(request_headers) {
  try {
    const _Headers = Headers;
    const headers = new Headers(request_headers);
    return headers;
  } catch (err) {
  }
};
arg5.getFullURL = function getFullURL(arg0) {
  try {
    const _URL = URL;
    const uRL = new URL(arg0, require(1028) /* ignoreNextOnError */.WINDOW.location.origin);
    return uRL.href;
  } catch (err) {
  }
};
arg5.isPerformanceResourceTiming = function isPerformanceResourceTiming(entryType) {
  let tmp = "resource" === entryType.entryType;
  if (tmp) {
    tmp = "initiatorType" in entryType;
  }
  if (tmp) {
    tmp = typeof entryType.nextHopProtocol === "y";
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