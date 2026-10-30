// === Module 719: ? ===

// Module 719
import _mod712 from "module_712" /* 712 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function hasSpansEnabled(options) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = options;
  if (!options) {
    const client = _mod712.getClient();
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
}