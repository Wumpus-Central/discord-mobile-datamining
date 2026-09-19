// === Module 13146: ? ===

// Module 13146
import _mod13048 from "module_13048" /* 13048 */;
import _mod13075 from "module_13075" /* 13075 */;
import _mod13076 from "module_13076" /* 13076 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13075.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13076.DEBUG_BUILD) {
          const logger3 = _mod13048.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13076.DEBUG_BUILD) {
        const logger2 = _mod13048.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13076.DEBUG_BUILD) {
      const logger = _mod13048.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13075.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13076.DEBUG_BUILD) {
          const logger3 = _mod13048.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13076.DEBUG_BUILD) {
        const logger2 = _mod13048.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13076.DEBUG_BUILD) {
      const logger = _mod13048.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};