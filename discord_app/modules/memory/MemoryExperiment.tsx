// === Module 13988: ApexExperiment ===

// Module 13988 (ApexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment({ name: "2025-12-shadow-node-spike", kind: "user", defaultConfig: { enabled: false }, variations: obj });
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
const result = set.fileFinishedImporting("modules/memory/MemoryExperiment.tsx");