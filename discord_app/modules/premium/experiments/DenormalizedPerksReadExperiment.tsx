// === Module 13983: DenormalizedPerksReadExperiment ===

// Module 13983 (DenormalizedPerksReadExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { CONTROL: 0, [0]: "CONTROL", DUAL_READ_RETURN_OLD: 1, [1]: "DUAL_READ_RETURN_OLD", DUAL_READ_RETURN_NEW: 2, [2]: "DUAL_READ_RETURN_NEW" };
obj = { name: "2026-03-denormalized-perks-access-read", kind: "user", defaultConfig: obj.CONTROL, variations: { 0: obj.CONTROL, 1: obj.DUAL_READ_RETURN_OLD, 2: obj.DUAL_READ_RETURN_NEW } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/DenormalizedPerksReadExperiment.tsx");

export default apexExperiment;
export const DenormalizedPerksReadConfig = obj;