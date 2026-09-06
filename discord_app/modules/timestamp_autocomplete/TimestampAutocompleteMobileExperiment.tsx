// === Module 7334: TimestampAutocompleteMobileExperiment ===

// Module 7334 (TimestampAutocompleteMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-timestamp-autocomplete-mobile", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/timestamp_autocomplete/TimestampAutocompleteMobileExperiment.tsx");

export const TimestampAutocompleteMobileExperiment = apexExperiment;