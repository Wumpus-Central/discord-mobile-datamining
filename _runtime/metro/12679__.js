// === Module 12679: ? ===

// Module 12679
import _mod12581 from "module_12581" /* 12581 */;
import _mod12608 from "module_12608" /* 12608 */;
import _mod12609 from "module_12609" /* 12609 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12608.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12609.DEBUG_BUILD) {
          const logger3 = _mod12581.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12609.DEBUG_BUILD) {
        const logger2 = _mod12581.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12609.DEBUG_BUILD) {
      const logger = _mod12581.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12608.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12609.DEBUG_BUILD) {
          const logger3 = _mod12581.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12609.DEBUG_BUILD) {
        const logger2 = _mod12581.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12609.DEBUG_BUILD) {
      const logger = _mod12581.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};