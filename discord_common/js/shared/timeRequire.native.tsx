// === Module 7001: timeRequire ===

// Module 7001 (timeRequire)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, fn) {
  const timestamp = Date.now();
  const tmp2 = fn();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if (typeof require.getModules === "function") {
      const modules = require.getModules();
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal = HermesInternal;
      const length = keys.filter((item) => modules[item].isInitialized).length;
      const obj = AppStartPerformanceDefault;
      obj.mark("\u{1F3C3}", "Require " + arg0 + " (" + length + " modules)", diff);
    } else {
      const _HermesInternal2 = HermesInternal;
      const obj3 = AppStartPerformanceDefault;
      obj3.mark("\u{1F3C3}", "Require " + arg0, diff);
    }
  }
  return tmp2;
};