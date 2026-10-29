// === Module 17956: GuildsRenderExperiment ===

// Module 17956 (GuildsRenderExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-guilds-render-experiment", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildsRenderExperiment.tsx");

export const GuildsRenderExperiment = apexExperiment;