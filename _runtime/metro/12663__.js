// === Module 12663: ? ===

// Module 12663
import _mod12565 from "module_12565" /* 12565 */;
import _mod12592 from "module_12592" /* 12592 */;
import _mod12593 from "module_12593" /* 12593 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12592;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12593.DEBUG_BUILD) {
          const logger3 = _mod12565.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12593.DEBUG_BUILD) {
        const logger2 = _mod12565.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12593.DEBUG_BUILD) {
      const logger = _mod12565.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12592;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12593.DEBUG_BUILD) {
          const logger3 = _mod12565.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12593.DEBUG_BUILD) {
        const logger2 = _mod12565.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12593.DEBUG_BUILD) {
      const logger = _mod12565.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};