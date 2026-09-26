// === Module 12411: ? ===

// Module 12411
import _mod12313 from "module_12313" /* 12313 */;
import _mod12340 from "module_12340" /* 12340 */;
import _mod12341 from "module_12341" /* 12341 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12340.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12341.DEBUG_BUILD) {
          const logger3 = _mod12313.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12341.DEBUG_BUILD) {
        const logger2 = _mod12313.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12341.DEBUG_BUILD) {
      const logger = _mod12313.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12340.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12341.DEBUG_BUILD) {
          const logger3 = _mod12313.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12341.DEBUG_BUILD) {
        const logger2 = _mod12313.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12341.DEBUG_BUILD) {
      const logger = _mod12313.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};