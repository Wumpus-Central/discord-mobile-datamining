// === Module 12895: ? ===

// Module 12895
import _mod12797 from "module_12797" /* 12797 */;
import _mod12824 from "module_12824" /* 12824 */;
import _mod12825 from "module_12825" /* 12825 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12824.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12825.DEBUG_BUILD) {
          const logger3 = _mod12797.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12825.DEBUG_BUILD) {
        const logger2 = _mod12797.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12825.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12824.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12825.DEBUG_BUILD) {
          const logger3 = _mod12797.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12825.DEBUG_BUILD) {
        const logger2 = _mod12797.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12825.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};