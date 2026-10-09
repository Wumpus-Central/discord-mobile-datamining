// === Module 11265: ? ===

// Module 11265
import _mod11167 from "module_11167" /* 11167 */;
import _mod11194 from "module_11194" /* 11194 */;
import _mod11195 from "module_11195" /* 11195 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod11194.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod11195.DEBUG_BUILD) {
          const logger3 = _mod11167.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod11195.DEBUG_BUILD) {
        const logger2 = _mod11167.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11195.DEBUG_BUILD) {
      const logger = _mod11167.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod11194.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod11195.DEBUG_BUILD) {
          const logger3 = _mod11167.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod11195.DEBUG_BUILD) {
        const logger2 = _mod11167.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11195.DEBUG_BUILD) {
      const logger = _mod11167.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};