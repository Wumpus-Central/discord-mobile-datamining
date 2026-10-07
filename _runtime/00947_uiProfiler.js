// _runtime/00947_uiProfiler.js
import _mod693 from "metro/00693__.js";
import _mod948 from "metro/00948__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const client = _mod693.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod948.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod948.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod693.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod948.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod948.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
};
