// _runtime/00797_profiler.js
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import _mod713 from "metro/00713__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const client = _mod713.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod688.DEBUG_BUILD) {
          const debug3 = consoleSandbox.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod688.DEBUG_BUILD) {
        const debug2 = consoleSandbox.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod688.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod713.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod688.DEBUG_BUILD) {
          const debug3 = consoleSandbox.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 =
          integrationByName &&
          undefined !== integrationByName._profiler &&
          typeof integrationByName._profiler.start === "function" &&
          typeof integrationByName._profiler.stop === "function";
      } else if (_mod688.DEBUG_BUILD) {
        const debug2 = consoleSandbox.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod688.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
};
