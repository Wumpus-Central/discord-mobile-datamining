// === Module 14166: MemoryExperiment ===

// Module 14166 (MemoryExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let enabled;

let obj2;
const obj = { name: "2025-12-shadow-node-spike", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const interval = setInterval(() => {
  let tmp = enabled;
  if (undefined === enabled) {
    enabled = config.getConfig({ location: "startMemoryExperiment" }).enabled;
    tmp = enabled;
  }
  if (tmp) {
    globalThis.gc();
  } else {
    const _clearInterval = clearInterval;
    clearInterval(closure_1);
  }
}, 60000);
const result = size.fileFinishedImporting("modules/memory/MemoryExperiment.tsx");