// === Module 13808: isFindCodedLinksRegexEnabled ===

// Module 13808 (isFindCodedLinksRegexEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-find-coded-links-regex", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/coded_links/FindCodedLinksExperiment.tsx");

export const isFindCodedLinksRegexEnabled = function isFindCodedLinksRegexEnabled() {
  return config.getConfig({ location: "findCodedLinks" }).enabled;
};