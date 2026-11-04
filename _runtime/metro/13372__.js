// _runtime/metro/13372__.js
import _mod13274 from "13274__.js";
import _mod13301 from "13301__.js";
import _mod13302 from "13302__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13301.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13302.DEBUG_BUILD) {
          const logger3 = _mod13274.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod13302.DEBUG_BUILD) {
        const logger2 = _mod13274.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13302.DEBUG_BUILD) {
      const logger = _mod13274.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13301.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13302.DEBUG_BUILD) {
          const logger3 = _mod13274.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod13302.DEBUG_BUILD) {
        const logger2 = _mod13274.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13302.DEBUG_BUILD) {
      const logger = _mod13274.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
