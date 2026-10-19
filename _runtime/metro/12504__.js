// _runtime/metro/12504__.js
import _mod12406 from "12406__.js";
import _mod12433 from "12433__.js";
import _mod12434 from "12434__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12433.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12434.DEBUG_BUILD) {
          const logger3 = _mod12406.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12434.DEBUG_BUILD) {
        const logger2 = _mod12406.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12434.DEBUG_BUILD) {
      const logger = _mod12406.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12433.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12434.DEBUG_BUILD) {
          const logger3 = _mod12406.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12434.DEBUG_BUILD) {
        const logger2 = _mod12406.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12434.DEBUG_BUILD) {
      const logger = _mod12406.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
