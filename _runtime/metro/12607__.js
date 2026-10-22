// _runtime/metro/12607__.js
import _mod12509 from "12509__.js";
import _mod12536 from "12536__.js";
import _mod12537 from "12537__.js";

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12536.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12537.DEBUG_BUILD) {
          const logger3 = _mod12509.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12537.DEBUG_BUILD) {
        const logger2 = _mod12509.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12537.DEBUG_BUILD) {
      const logger = _mod12509.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12536.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12537.DEBUG_BUILD) {
          const logger3 = _mod12509.logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod12537.DEBUG_BUILD) {
        const logger2 = _mod12509.logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12537.DEBUG_BUILD) {
      const logger = _mod12509.logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
};
