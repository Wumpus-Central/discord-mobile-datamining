// === Module 13659: FindCodedLinksExperiment ===

// Module 13659 (FindCodedLinksExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-find-coded-links-regex", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/coded_links/FindCodedLinksExperiment.tsx");

export const isFindCodedLinksRegexEnabled = function isFindCodedLinksRegexEnabled() {
  return config.getConfig({ location: "findCodedLinks" }).enabled;
};