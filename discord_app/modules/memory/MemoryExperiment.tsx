// === Module 15346: MemoryExperiment ===

// Module 15346 (MemoryExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2025-12-shadow-node-spike", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
ApexExperiment.createApexExperiment(obj);
let enabled;
const interval = setInterval(() => {
  let tmp = enabled;
  if (undefined === enabled) {
    enabled = enabled.getConfig({ location: "startMemoryExperiment" }).enabled;
    tmp = enabled;
  }
  if (tmp) {
    if (globalThis.gc != null) {
      globalThis.gc();
    }
  } else {
    const _clearInterval = clearInterval;
    clearInterval(closure_1);
  }
}, 60000);
const result = size.fileFinishedImporting("modules/memory/MemoryExperiment.tsx");