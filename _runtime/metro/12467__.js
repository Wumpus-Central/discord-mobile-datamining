// === Module 12467: ? ===

// Module 12467
import _mod12369 from "module_12369" /* 12369 */;
import _mod12396 from "module_12396" /* 12396 */;
import _mod12397 from "module_12397" /* 12397 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12396.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12397.DEBUG_BUILD) {
          const logger3 = _mod12369.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12397.DEBUG_BUILD) {
        const logger2 = _mod12369.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12397.DEBUG_BUILD) {
      const logger = _mod12369.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12396.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12397.DEBUG_BUILD) {
          const logger3 = _mod12369.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12397.DEBUG_BUILD) {
        const logger2 = _mod12369.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12397.DEBUG_BUILD) {
      const logger = _mod12369.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};