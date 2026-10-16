// === Module 12396: ? ===

// Module 12396
import _mod12298 from "module_12298" /* 12298 */;
import _mod12325 from "module_12325" /* 12325 */;
import _mod12326 from "module_12326" /* 12326 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12325.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12326.DEBUG_BUILD) {
          const logger3 = _mod12298.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12326.DEBUG_BUILD) {
        const logger2 = _mod12298.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12326.DEBUG_BUILD) {
      const logger = _mod12298.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12325.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12326.DEBUG_BUILD) {
          const logger3 = _mod12298.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12326.DEBUG_BUILD) {
        const logger2 = _mod12298.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12326.DEBUG_BUILD) {
      const logger = _mod12298.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};