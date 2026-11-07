// === Module 13376: ? ===

// Module 13376
import _mod13278 from "module_13278" /* 13278 */;
import _mod13305 from "module_13305" /* 13305 */;
import _mod13306 from "module_13306" /* 13306 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13305.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13306.DEBUG_BUILD) {
          const logger3 = _mod13278.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13306.DEBUG_BUILD) {
        const logger2 = _mod13278.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13306.DEBUG_BUILD) {
      const logger = _mod13278.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13305.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13306.DEBUG_BUILD) {
          const logger3 = _mod13278.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13306.DEBUG_BUILD) {
        const logger2 = _mod13278.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13306.DEBUG_BUILD) {
      const logger = _mod13278.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};