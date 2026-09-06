// === Module 936: uiProfiler ===

// Module 936 (uiProfiler)
import _mod682 from "module_682" /* 682 */;
import _mod937 from "module_937" /* 937 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const client = _mod682.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod937.DEBUG_BUILD) {
        const debug2 = _mod682.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod937.DEBUG_BUILD) {
      const debug = _mod682.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod682.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod937.DEBUG_BUILD) {
        const debug2 = _mod682.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod937.DEBUG_BUILD) {
      const debug = _mod682.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};