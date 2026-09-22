// === Module 13152: ? ===

// Module 13152
import _mod13054 from "module_13054" /* 13054 */;
import _mod13081 from "module_13081" /* 13081 */;
import _mod13082 from "module_13082" /* 13082 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13081.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13082.DEBUG_BUILD) {
          const logger3 = _mod13054.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13082.DEBUG_BUILD) {
        const logger2 = _mod13054.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13082.DEBUG_BUILD) {
      const logger = _mod13054.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13081.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13082.DEBUG_BUILD) {
          const logger3 = _mod13054.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13082.DEBUG_BUILD) {
        const logger2 = _mod13054.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13082.DEBUG_BUILD) {
      const logger = _mod13054.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};