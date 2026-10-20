// _runtime/metro/12521__.js
import _mod12423 from "12423__.js";
import _mod12450 from "12450__.js";
import _mod12451 from "12451__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12450.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12451.DEBUG_BUILD) {
          const logger3 = _mod12423.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12451.DEBUG_BUILD) {
        const logger2 = _mod12423.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12451.DEBUG_BUILD) {
      const logger = _mod12423.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12450.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12451.DEBUG_BUILD) {
          const logger3 = _mod12423.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12451.DEBUG_BUILD) {
        const logger2 = _mod12423.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12451.DEBUG_BUILD) {
      const logger = _mod12423.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
