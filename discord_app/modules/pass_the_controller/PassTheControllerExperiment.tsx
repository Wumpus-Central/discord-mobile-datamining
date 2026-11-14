// === Module 16115: PassTheControllerExperiment ===

// Module 16115 (PassTheControllerExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-pass-the-controller", kind: "guild", defaultConfig: { enabled: false, allowWrestling: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, allowWrestling: false } };
obj2[2] = { enabled: true, allowWrestling: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerExperiment.tsx");

export default apexExperiment;