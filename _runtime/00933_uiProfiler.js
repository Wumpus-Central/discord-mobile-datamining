// _runtime/00933_uiProfiler.js
import _mod681 from "metro/00681__.js";
import _mod934 from "metro/00934__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const client = _mod681.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod934.DEBUG_BUILD) {
        const debug2 = _mod681.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod934.DEBUG_BUILD) {
      const debug = _mod681.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod681.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod934.DEBUG_BUILD) {
        const debug2 = _mod681.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod934.DEBUG_BUILD) {
      const debug = _mod681.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
};
