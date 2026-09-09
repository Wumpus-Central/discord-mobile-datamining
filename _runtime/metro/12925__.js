// === Module 12925: ? ===

// Module 12925
import _mod12827 from "module_12827" /* 12827 */;
import _mod12854 from "module_12854" /* 12854 */;
import _mod12855 from "module_12855" /* 12855 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12854.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12855.DEBUG_BUILD) {
          const logger3 = _mod12827.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12855.DEBUG_BUILD) {
        const logger2 = _mod12827.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12854.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12855.DEBUG_BUILD) {
          const logger3 = _mod12827.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12855.DEBUG_BUILD) {
        const logger2 = _mod12827.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};