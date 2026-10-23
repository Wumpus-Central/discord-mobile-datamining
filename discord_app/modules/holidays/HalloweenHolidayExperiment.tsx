// === Module 18744: HalloweenHolidayExperiment ===

// Module 18744 (HalloweenHolidayExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-halloween-holiday", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/holidays/HalloweenHolidayExperiment.tsx");

export default apexExperiment;