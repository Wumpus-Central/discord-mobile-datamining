// === Module 13243: ? ===

// Module 13243
import _mod13145 from "module_13145" /* 13145 */;
import _mod13172 from "module_13172" /* 13172 */;
import _mod13173 from "module_13173" /* 13173 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13172.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13173.DEBUG_BUILD) {
          const logger3 = _mod13145.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13173.DEBUG_BUILD) {
        const logger2 = _mod13145.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13173.DEBUG_BUILD) {
      const logger = _mod13145.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13172.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13173.DEBUG_BUILD) {
          const logger3 = _mod13145.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13173.DEBUG_BUILD) {
        const logger2 = _mod13145.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13173.DEBUG_BUILD) {
      const logger = _mod13145.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};