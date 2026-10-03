// === Module 731: ? ===

// Module 731
import _mod724 from "module_724" /* 724 */;

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
    const client = _mod724.getClient();
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