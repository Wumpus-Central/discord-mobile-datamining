// === Module 808: profiler ===

// Module 808 (profiler)
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import _mod724 from "module_724" /* 724 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const obj = _mod724;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod699.DEBUG_BUILD) {
          const debug3 = CONSOLE_LEVELS.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod699.DEBUG_BUILD) {
        const debug2 = CONSOLE_LEVELS.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod724;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod699.DEBUG_BUILD) {
          const debug3 = CONSOLE_LEVELS.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod699.DEBUG_BUILD) {
        const debug2 = CONSOLE_LEVELS.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};