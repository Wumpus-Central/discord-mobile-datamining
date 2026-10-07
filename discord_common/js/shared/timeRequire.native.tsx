// discord_common/js/shared/timeRequire.native.tsx
import AppStartPerformanceDefault from "../packages/app-start-performance/AppStartPerformance.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, fn) {
  const timestamp = Date.now();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if (typeof require.getModules === "function") {
      const modules = require.getModules();
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal = HermesInternal;
      AppStartPerformanceDefault.mark(
        "\u{1F3C3}",
        "Require " + arg0 + " (" + keys.filter((item) => modules[item].isInitialized).length + " modules)",
        diff,
      );
    } else {
      const _HermesInternal2 = HermesInternal;
      AppStartPerformanceDefault.mark("\u{1F3C3}", "Require " + arg0, diff);
    }
  }
  return fn();
}
