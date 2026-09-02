// === Module 852: hasSpansEnabled ===

// Module 852 (hasSpansEnabled)
import getClient from "getClient" /* 845 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.hasSpansEnabled = function hasSpansEnabled(options) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = options;
  if (!options) {
    const client = getClient.getClient();
    options = undefined;
    if (client != null) {
      options = client.getOptions();
    }
    tmp = options;
    const obj = getClient;
  }
  let tmp6 = !tmp;
  if (tmp) {
    tmp6 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
    const tmp8 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
  }
  return !tmp6;
};