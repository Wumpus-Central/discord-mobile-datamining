// === Module 6469: ? ===

// Module 6469
const require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = require(6398) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(6399).DEBUG_BUILD) {
          const logger3 = tmp(6371).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "fileFinishedImporting" && typeof integrationByName._profiler.stop === "fileFinishedImporting";
      } else if (tmp(6399).DEBUG_BUILD) {
        const logger2 = tmp(6371).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(6399).DEBUG_BUILD) {
      const logger = tmp(6371).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(6398) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(6399).DEBUG_BUILD) {
          const logger3 = tmp(6371).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "fileFinishedImporting" && typeof integrationByName._profiler.stop === "fileFinishedImporting";
      } else if (tmp(6399).DEBUG_BUILD) {
        const logger2 = tmp(6371).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(6399).DEBUG_BUILD) {
      const logger = tmp(6371).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};