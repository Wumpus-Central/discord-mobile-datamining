// === Module 12687: ? ===

// Module 12687
import _mod12589 from "module_12589" /* 12589 */;
import _mod12616 from "module_12616" /* 12616 */;
import _mod12617 from "module_12617" /* 12617 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12616.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12617.DEBUG_BUILD) {
          const logger3 = _mod12589.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12617.DEBUG_BUILD) {
        const logger2 = _mod12589.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12617.DEBUG_BUILD) {
      const logger = _mod12589.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12616.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12617.DEBUG_BUILD) {
          const logger3 = _mod12589.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12617.DEBUG_BUILD) {
        const logger2 = _mod12589.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12617.DEBUG_BUILD) {
      const logger = _mod12589.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};