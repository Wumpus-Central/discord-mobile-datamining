// === Module 13379: ? ===

// Module 13379
import _mod13281 from "module_13281" /* 13281 */;
import _mod13308 from "module_13308" /* 13308 */;
import _mod13309 from "module_13309" /* 13309 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13308.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13309.DEBUG_BUILD) {
          const logger3 = _mod13281.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13309.DEBUG_BUILD) {
        const logger2 = _mod13281.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13309.DEBUG_BUILD) {
      const logger = _mod13281.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13308.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13309.DEBUG_BUILD) {
          const logger3 = _mod13281.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13309.DEBUG_BUILD) {
        const logger2 = _mod13281.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13309.DEBUG_BUILD) {
      const logger = _mod13281.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};