// === Module 19680: HolidayRingtoneExperiment ===

// Module 19680 (HolidayRingtoneExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-holiday-ringtone", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/holidays/HolidayRingtoneExperiment.tsx");

export default apexExperiment;