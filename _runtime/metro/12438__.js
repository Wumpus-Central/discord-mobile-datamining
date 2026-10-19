// _runtime/metro/12438__.js
import _mod12433 from "12433__.js";

require = arg1;
const dependencyMap = arg6;

export const hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const client = _mod12433.getClient();
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
};
