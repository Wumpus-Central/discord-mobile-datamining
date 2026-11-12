// === Module 9828: ? ===

// Module 9828
import _mod9730 from "module_9730" /* 9730 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9758 from "module_9758" /* 9758 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod9757.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod9758.DEBUG_BUILD) {
          const logger3 = _mod9730.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod9758.DEBUG_BUILD) {
        const logger2 = _mod9730.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9758.DEBUG_BUILD) {
      const logger = _mod9730.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod9757.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod9758.DEBUG_BUILD) {
          const logger3 = _mod9730.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod9758.DEBUG_BUILD) {
        const logger2 = _mod9730.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9758.DEBUG_BUILD) {
      const logger = _mod9730.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};