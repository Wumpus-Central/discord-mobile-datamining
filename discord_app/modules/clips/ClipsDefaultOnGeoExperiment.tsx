// === Module 20015: ClipsDefaultOnGeoExperiment ===

// Module 20015 (ClipsDefaultOnGeoExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-clips-default-on-geo", defaultConfig: { allowDefaultOn: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { allowDefaultOn: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/ClipsDefaultOnGeoExperiment.tsx");

export default apexExperiment;