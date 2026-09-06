// === Module 936: registerSpanErrorInstrumentation ===

// Module 936 (registerSpanErrorInstrumentation)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 682 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.uiProfiler = {
  startProfiler() {
    const client = registerSpanErrorInstrumentation.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (tmp(937).DEBUG_BUILD) {
        const debug2 = tmp(682).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (tmp(937).DEBUG_BUILD) {
      const debug = tmp(682).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = registerSpanErrorInstrumentation.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (tmp(937).DEBUG_BUILD) {
        const debug2 = tmp(682).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(937).DEBUG_BUILD) {
      const debug = tmp(682).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};