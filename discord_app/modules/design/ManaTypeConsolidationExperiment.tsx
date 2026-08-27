// === Module 7936: apexExperiment ===

// Module 7936 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(ChangeLogStrong) {
  return apexExperiment.useConfig({ location: ChangeLogStrong }).enabled;
};