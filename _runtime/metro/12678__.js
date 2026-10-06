// === Module 12678: ? ===

// Module 12678
import _mod12580 from "module_12580" /* 12580 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12608 from "module_12608" /* 12608 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12607;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12608.DEBUG_BUILD) {
          const logger3 = _mod12580.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12608.DEBUG_BUILD) {
        const logger2 = _mod12580.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12607;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12608.DEBUG_BUILD) {
          const logger3 = _mod12580.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12608.DEBUG_BUILD) {
        const logger2 = _mod12580.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};