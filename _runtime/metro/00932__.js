// _runtime/metro/00932__.js
import __SENTRY_DEBUG__ from "00823___SENTRY_DEBUG__.js";
import consoleSandbox from "../00824_consoleSandbox.js";
import getClient from "../00848_getClient.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
          const debug3 = consoleSandbox.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug2 = consoleSandbox.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("No Sentry client available, profiling is not started");
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
          const debug3 = consoleSandbox.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug2 = consoleSandbox.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};