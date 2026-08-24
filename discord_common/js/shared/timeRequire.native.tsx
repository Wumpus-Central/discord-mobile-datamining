// discord_common/js/shared/timeRequire.native.tsx
import set from "../../../_runtime/00002_set.js";
import isTracingDefault from "../packages/app-start-performance/AppStartPerformance.tsx";

const result = set.fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, arg1) {
  const timestamp = Date.now();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if (typeof modules.getModules === "function") {
      modules = obj2.getModules();
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal = HermesInternal;
      isTracingDefault.mark("\u{1F3C3}", "Require " + arg0 + " (" + keys.filter((arg0) => modules[arg0].isInitialized).length + " modules)", diff);
      const obj = isTracingDefault;
    } else {
      const _HermesInternal2 = HermesInternal;
      isTracingDefault.mark("\u{1F3C3}", "Require " + arg0, diff);
      const obj3 = isTracingDefault;
    }
    obj2 = modules;
  }
  return arg1();
};