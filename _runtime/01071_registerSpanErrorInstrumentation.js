// _runtime/01071_registerSpanErrorInstrumentation.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import __SENTRY_DEBUG__ from "metro/01072___SENTRY_DEBUG__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.uiProfiler = {
  startProfiler() {
    const client = registerSpanErrorInstrumentation.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug2 = registerSpanErrorInstrumentation.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = registerSpanErrorInstrumentation.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug2 = registerSpanErrorInstrumentation.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};