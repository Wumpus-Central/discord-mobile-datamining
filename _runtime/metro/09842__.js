// === Module 9842: ? ===

// Module 9842
import _mod9837 from "module_9837" /* 9837 */;

require = arg1;
const dependencyMap = arg6;

export function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const client = _mod9837.getClient();
  if (!tracesSampler) {
    let options = client;
    if (client) {
      options = client.getOptions();
    }
    tmp = options;
  }
  let tmp3 = tmp;
  if (tmp3) {
    let enableTracing = tmp.enableTracing;
    if (!enableTracing) {
      enableTracing = "tracesSampleRate" in tmp;
    }
    if (!enableTracing) {
      enableTracing = "tracesSampler" in tmp;
    }
    tmp3 = enableTracing;
  }
  return tmp3;
}