// === Module 9908: ? ===

// Module 9908
import _mod9810 from "module_9810" /* 9810 */;
import _mod9837 from "module_9837" /* 9837 */;
import _mod9838 from "module_9838" /* 9838 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod9837.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod9838.DEBUG_BUILD) {
          const logger3 = _mod9810.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod9838.DEBUG_BUILD) {
        const logger2 = _mod9810.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9838.DEBUG_BUILD) {
      const logger = _mod9810.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod9837.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod9838.DEBUG_BUILD) {
          const logger3 = _mod9810.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod9838.DEBUG_BUILD) {
        const logger2 = _mod9810.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9838.DEBUG_BUILD) {
      const logger = _mod9810.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};