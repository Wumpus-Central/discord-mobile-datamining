// === Module 945: uiProfiler ===

// Module 945 (uiProfiler)
import _mod693 from "module_693" /* 693 */;
import _mod946 from "module_946" /* 946 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const client = _mod693.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod946.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod946.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod693.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod946.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod946.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};