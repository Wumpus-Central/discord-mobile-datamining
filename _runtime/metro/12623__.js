// === Module 12623: ? ===

// Module 12623
import _mod12525 from "module_12525" /* 12525 */;
import _mod12552 from "module_12552" /* 12552 */;
import _mod12553 from "module_12553" /* 12553 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12552.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12553.DEBUG_BUILD) {
          const logger3 = _mod12525.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12553.DEBUG_BUILD) {
        const logger2 = _mod12525.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12553.DEBUG_BUILD) {
      const logger = _mod12525.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12552.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12553.DEBUG_BUILD) {
          const logger3 = _mod12525.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12553.DEBUG_BUILD) {
        const logger2 = _mod12525.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12553.DEBUG_BUILD) {
      const logger = _mod12525.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};