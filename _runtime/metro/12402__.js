// === Module 12402: ? ===

// Module 12402
import _mod12304 from "module_12304" /* 12304 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12332 from "module_12332" /* 12332 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12331.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12332.DEBUG_BUILD) {
          const logger3 = _mod12304.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12332.DEBUG_BUILD) {
        const logger2 = _mod12304.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12332.DEBUG_BUILD) {
      const logger = _mod12304.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12331.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12332.DEBUG_BUILD) {
          const logger3 = _mod12304.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod12332.DEBUG_BUILD) {
        const logger2 = _mod12304.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12332.DEBUG_BUILD) {
      const logger = _mod12304.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};