const result = require("set").fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, arg1) {
  const timestamp = Date.now();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if (typeof modules.getModules === "function") {
      modules = obj2.getModules();
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal = HermesInternal;
      importDefault(10).mark("\u{1F3C3}", "Require " + arg0 + " (" + keys.filter((arg0) => modules[arg0].isInitialized).length + " modules)", diff);
      const obj = importDefault(10);
    } else {
      const _HermesInternal2 = HermesInternal;
      importDefault(10).mark("\u{1F3C3}", "Require " + arg0, diff);
      const obj3 = importDefault(10);
    }
    obj2 = modules;
  }
  return arg1();
};