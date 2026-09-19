// === Module 17776: HalloweenHolidayExperiment ===

// Module 17776 (HalloweenHolidayExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-halloween-holiday", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/holidays/HalloweenHolidayExperiment.tsx");

export default apexExperiment;