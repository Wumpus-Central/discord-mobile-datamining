// _runtime/metro/00720__.js
import _mod713 from "00713__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const hasSpansEnabled = function hasSpansEnabled(options) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = options;
  if (!options) {
    const client = _mod713.getClient();
    options = undefined;
    if (client != null) {
      options = client.getOptions();
    }
    tmp = options;
  }
  let tmp6 = !tmp;
  if (tmp) {
    tmp6 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
    const tmp8 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
  }
  return !tmp6;
};
