// _runtime/metro/11091__.js
import _mod10993 from "10993__.js";
import _mod11020 from "11020__.js";
import _mod11021 from "11021__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod11020.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod11021.DEBUG_BUILD) {
          const logger3 = _mod10993.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod11021.DEBUG_BUILD) {
        const logger2 = _mod10993.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11021.DEBUG_BUILD) {
      const logger = _mod10993.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod11020.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod11021.DEBUG_BUILD) {
          const logger3 = _mod10993.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod11021.DEBUG_BUILD) {
        const logger2 = _mod10993.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11021.DEBUG_BUILD) {
      const logger = _mod10993.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
