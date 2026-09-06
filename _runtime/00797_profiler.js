// === Module 797: profiler ===

// Module 797 (profiler)
import _mod713 from "module_713" /* 713 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const client = _mod713.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(688).DEBUG_BUILD) {
          const debug3 = tmp(689).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(688).DEBUG_BUILD) {
        const debug2 = tmp(689).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(688).DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod713.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(688).DEBUG_BUILD) {
          const debug3 = tmp(689).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(688).DEBUG_BUILD) {
        const debug2 = tmp(689).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(688).DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};