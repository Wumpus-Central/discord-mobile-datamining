// === Module 12895: ? ===

// Module 12895
import getClient from "getClient" /* 12824 */;

require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = getClient.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12825).DEBUG_BUILD) {
          const logger3 = tmp(12797).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12825).DEBUG_BUILD) {
        const logger2 = tmp(12797).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12825).DEBUG_BUILD) {
      const logger = tmp(12797).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = getClient.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12825).DEBUG_BUILD) {
          const logger3 = tmp(12797).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12825).DEBUG_BUILD) {
        const logger2 = tmp(12797).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12825).DEBUG_BUILD) {
      const logger = tmp(12797).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};