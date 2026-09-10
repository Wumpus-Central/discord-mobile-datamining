// === Module 12965: ? ===

// Module 12965
import _mod12867 from "module_12867" /* 12867 */;
import _mod12894 from "module_12894" /* 12894 */;
import _mod12895 from "module_12895" /* 12895 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12894.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12895.DEBUG_BUILD) {
          const logger3 = _mod12867.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12895.DEBUG_BUILD) {
        const logger2 = _mod12867.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12895.DEBUG_BUILD) {
      const logger = _mod12867.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12894.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12895.DEBUG_BUILD) {
          const logger3 = _mod12867.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12895.DEBUG_BUILD) {
        const logger2 = _mod12867.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12895.DEBUG_BUILD) {
      const logger = _mod12867.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};