// === Module 12577: ? ===

// Module 12577
import _mod12479 from "module_12479" /* 12479 */;
import _mod12506 from "module_12506" /* 12506 */;
import _mod12507 from "module_12507" /* 12507 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12506.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12507.DEBUG_BUILD) {
          const logger3 = _mod12479.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12507.DEBUG_BUILD) {
        const logger2 = _mod12479.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12507.DEBUG_BUILD) {
      const logger = _mod12479.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12506.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12507.DEBUG_BUILD) {
          const logger3 = _mod12479.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12507.DEBUG_BUILD) {
        const logger2 = _mod12479.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12507.DEBUG_BUILD) {
      const logger = _mod12479.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};