// _runtime/metro/12104__.js
import _mod12006 from "12006__.js";
import _mod12033 from "12033__.js";
import _mod12034 from "12034__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12033.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12034.DEBUG_BUILD) {
          const logger3 = _mod12006.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12034.DEBUG_BUILD) {
        const logger2 = _mod12006.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12034.DEBUG_BUILD) {
      const logger = _mod12006.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12033.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12034.DEBUG_BUILD) {
          const logger3 = _mod12006.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12034.DEBUG_BUILD) {
        const logger2 = _mod12006.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12034.DEBUG_BUILD) {
      const logger = _mod12006.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
