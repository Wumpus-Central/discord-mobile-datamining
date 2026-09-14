// === Module 13025: ? ===

// Module 13025
import _mod12927 from "module_12927" /* 12927 */;
import _mod12954 from "module_12954" /* 12954 */;
import _mod12955 from "module_12955" /* 12955 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12954.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12955.DEBUG_BUILD) {
          const logger3 = _mod12927.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12955.DEBUG_BUILD) {
        const logger2 = _mod12927.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12955.DEBUG_BUILD) {
      const logger = _mod12927.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12954.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12955.DEBUG_BUILD) {
          const logger3 = _mod12927.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12955.DEBUG_BUILD) {
        const logger2 = _mod12927.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12955.DEBUG_BUILD) {
      const logger = _mod12927.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};