// === Module 932: ? ===

// Module 932
import getClient from "getClient" /* 848 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.profiler = {
  startProfiler() {
    const client = getClient.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(823).DEBUG_BUILD) {
          const debug3 = tmp(824).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(823).DEBUG_BUILD) {
        const debug2 = tmp(824).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(823).DEBUG_BUILD) {
      const debug = tmp(824).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = getClient.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(823).DEBUG_BUILD) {
          const debug3 = tmp(824).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(823).DEBUG_BUILD) {
        const debug2 = tmp(824).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(823).DEBUG_BUILD) {
      const debug = tmp(824).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};