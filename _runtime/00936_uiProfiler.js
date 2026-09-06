// === Module 936: uiProfiler ===

// Module 936 (uiProfiler)
import _mod682 from "module_682" /* 682 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const client = _mod682.getClient();
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
    const client = _mod682.getClient();
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