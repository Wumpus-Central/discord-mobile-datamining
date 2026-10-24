// === Module 12671: ? ===

// Module 12671
import _mod12573 from "module_12573" /* 12573 */;
import _mod12600 from "module_12600" /* 12600 */;
import _mod12601 from "module_12601" /* 12601 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12600.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12601.DEBUG_BUILD) {
          const logger3 = _mod12573.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12601.DEBUG_BUILD) {
        const logger2 = _mod12573.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12601.DEBUG_BUILD) {
      const logger = _mod12573.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12600.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12601.DEBUG_BUILD) {
          const logger3 = _mod12573.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12601.DEBUG_BUILD) {
        const logger2 = _mod12573.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12601.DEBUG_BUILD) {
      const logger = _mod12573.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};