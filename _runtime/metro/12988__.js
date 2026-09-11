// === Module 12988: ? ===

// Module 12988
import _mod12890 from "module_12890" /* 12890 */;
import _mod12917 from "module_12917" /* 12917 */;
import _mod12918 from "module_12918" /* 12918 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12917.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12918.DEBUG_BUILD) {
          const logger3 = _mod12890.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12918.DEBUG_BUILD) {
        const logger2 = _mod12890.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12918.DEBUG_BUILD) {
      const logger = _mod12890.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12917.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12918.DEBUG_BUILD) {
          const logger3 = _mod12890.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12918.DEBUG_BUILD) {
        const logger2 = _mod12890.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12918.DEBUG_BUILD) {
      const logger = _mod12890.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};