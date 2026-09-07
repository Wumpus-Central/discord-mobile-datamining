// === Module 12899: ? ===

// Module 12899
import _mod12801 from "module_12801" /* 12801 */;
import _mod12828 from "module_12828" /* 12828 */;
import _mod12829 from "module_12829" /* 12829 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12828.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12829.DEBUG_BUILD) {
          const logger3 = _mod12801.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12829.DEBUG_BUILD) {
        const logger2 = _mod12801.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12829.DEBUG_BUILD) {
      const logger = _mod12801.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12828.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12829.DEBUG_BUILD) {
          const logger3 = _mod12801.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12829.DEBUG_BUILD) {
        const logger2 = _mod12801.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12829.DEBUG_BUILD) {
      const logger = _mod12801.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};