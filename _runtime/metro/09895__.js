// === Module 9895: ? ===

// Module 9895
import _mod9797 from "module_9797" /* 9797 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9825 from "module_9825" /* 9825 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod9824.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod9825.DEBUG_BUILD) {
          const logger3 = _mod9797.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod9825.DEBUG_BUILD) {
        const logger2 = _mod9797.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9825.DEBUG_BUILD) {
      const logger = _mod9797.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod9824.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod9825.DEBUG_BUILD) {
          const logger3 = _mod9797.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod9825.DEBUG_BUILD) {
        const logger2 = _mod9797.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9825.DEBUG_BUILD) {
      const logger = _mod9797.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};