// === Module 2039: DismissibleContentServerArbitrationExperiment ===

// Module 2039 (DismissibleContentServerArbitrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-dismissible-content-server-arbitration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentServerArbitrationExperiment.tsx");

export const DismissibleContentServerArbitrationExperiment = apexExperiment;