// === Module 13024: ? ===

// Module 13024
import _mod12926 from "module_12926" /* 12926 */;
import _mod12953 from "module_12953" /* 12953 */;
import _mod12954 from "module_12954" /* 12954 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12953.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12954.DEBUG_BUILD) {
          const logger3 = _mod12926.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12954.DEBUG_BUILD) {
        const logger2 = _mod12926.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12954.DEBUG_BUILD) {
      const logger = _mod12926.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12953.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12954.DEBUG_BUILD) {
          const logger3 = _mod12926.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12954.DEBUG_BUILD) {
        const logger2 = _mod12926.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12954.DEBUG_BUILD) {
      const logger = _mod12926.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};