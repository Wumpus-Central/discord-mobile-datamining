// === Module 797: profiler ===

// Module 797 (profiler)
import _mod687 from "module_687" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import _mod712 from "module_712" /* 712 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const client = _mod712.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod687.DEBUG_BUILD) {
          const debug3 = consoleSandbox.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod687.DEBUG_BUILD) {
        const debug2 = consoleSandbox.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod687.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod712.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod687.DEBUG_BUILD) {
          const debug3 = consoleSandbox.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (_mod687.DEBUG_BUILD) {
        const debug2 = consoleSandbox.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod687.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};