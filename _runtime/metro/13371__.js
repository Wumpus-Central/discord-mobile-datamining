// === Module 13371: ? ===

// Module 13371
import _mod13273 from "module_13273" /* 13273 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13301 from "module_13301" /* 13301 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13300.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13301.DEBUG_BUILD) {
          const logger3 = _mod13273.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13301.DEBUG_BUILD) {
        const logger2 = _mod13273.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13301.DEBUG_BUILD) {
      const logger = _mod13273.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13300.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13301.DEBUG_BUILD) {
          const logger3 = _mod13273.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13301.DEBUG_BUILD) {
        const logger2 = _mod13273.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13301.DEBUG_BUILD) {
      const logger = _mod13273.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};