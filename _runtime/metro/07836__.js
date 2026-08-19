// === Module 7836: ? ===

// Module 7836
import consoleSandbox from "consoleSandbox" /* 7738 */;
import getClient from "getClient" /* 7765 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7766 */;

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
        } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const logger3 = consoleSandbox.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const logger2 = consoleSandbox.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = consoleSandbox.logger;
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
        } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const logger3 = consoleSandbox.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const logger2 = consoleSandbox.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = consoleSandbox.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};