// discord_common/js/shared/timeRequire.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import isTracingDefault from "../packages/app-start-performance/AppStartPerformance.tsx";

const result = obj132.fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, fn) {
  const timestamp = Date.now();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if (typeof modules.getModules === "function") {
      modules = obj2.getModules();
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal = HermesInternal;
      isTracingDefault.mark("\u{1F3C3}", "Require " + arg0 + " (" + keys.filter((item, index) => modules[item].isInitialized).length + " modules)", diff);
    } else {
      const _HermesInternal2 = HermesInternal;
      isTracingDefault.mark("\u{1F3C3}", "Require " + arg0, diff);
    }
    obj2 = modules;
  }
  return fn();
};