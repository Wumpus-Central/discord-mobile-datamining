// discord_app/modules/coded_links/FindCodedLinksExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-08-find-coded-links-regex", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/coded_links/FindCodedLinksExperiment.tsx");

export const isFindCodedLinksRegexEnabled = function isFindCodedLinksRegexEnabled() {
  return config.getConfig({ location: "findCodedLinks" }).enabled;
};
