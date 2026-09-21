// _runtime/metro/13148__.js
import _mod13050 from "13050__.js";
import _mod13077 from "13077__.js";
import _mod13078 from "13078__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13077.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13078.DEBUG_BUILD) {
          const logger3 = _mod13050.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod13078.DEBUG_BUILD) {
        const logger2 = _mod13050.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13078.DEBUG_BUILD) {
      const logger = _mod13050.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13077.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13078.DEBUG_BUILD) {
          const logger3 = _mod13050.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod13078.DEBUG_BUILD) {
        const logger2 = _mod13050.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13078.DEBUG_BUILD) {
      const logger = _mod13050.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
