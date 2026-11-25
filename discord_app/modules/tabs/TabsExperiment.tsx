// === Module 11482: TabsExperiment ===

// Module 11482 (TabsExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false, newTabExperience: "popout" }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, newTabExperience: "popout" }, 3: { enabled: true, newTabExperience: "friends" } };
obj2[3] = { enabled: true, newTabExperience: "quickswitcher" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;