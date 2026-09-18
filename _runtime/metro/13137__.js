// === Module 13137: ? ===

// Module 13137
import _mod13039 from "module_13039" /* 13039 */;
import _mod13066 from "module_13066" /* 13066 */;
import _mod13067 from "module_13067" /* 13067 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13066.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13067.DEBUG_BUILD) {
          const logger3 = _mod13039.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13067.DEBUG_BUILD) {
        const logger2 = _mod13039.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13067.DEBUG_BUILD) {
      const logger = _mod13039.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13066.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13067.DEBUG_BUILD) {
          const logger3 = _mod13039.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod13067.DEBUG_BUILD) {
        const logger2 = _mod13039.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13067.DEBUG_BUILD) {
      const logger = _mod13039.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};