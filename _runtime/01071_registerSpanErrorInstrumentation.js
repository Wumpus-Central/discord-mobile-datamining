// === Module 1071: registerSpanErrorInstrumentation ===

// Module 1071 (registerSpanErrorInstrumentation)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 1072 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.uiProfiler = {
  startProfiler() {
    const client = registerSpanErrorInstrumentation.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug2 = registerSpanErrorInstrumentation.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = registerSpanErrorInstrumentation.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug2 = registerSpanErrorInstrumentation.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};