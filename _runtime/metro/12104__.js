// === Module 12104: ? ===

// Module 12104
import _mod12006 from "module_12006" /* 12006 */;
import _mod12033 from "module_12033" /* 12033 */;
import _mod12034 from "module_12034" /* 12034 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12033.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12034.DEBUG_BUILD) {
          const logger3 = _mod12006.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12034.DEBUG_BUILD) {
        const logger2 = _mod12006.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12034.DEBUG_BUILD) {
      const logger = _mod12006.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12033.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12034.DEBUG_BUILD) {
          const logger3 = _mod12006.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12034.DEBUG_BUILD) {
        const logger2 = _mod12006.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12034.DEBUG_BUILD) {
      const logger = _mod12006.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};