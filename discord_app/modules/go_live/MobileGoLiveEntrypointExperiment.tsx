// === Module 17101: MobileGoLiveEntrypointExperiment ===

// Module 17101 (MobileGoLiveEntrypointExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { CONTROL: 0, [0]: "CONTROL", SCREENSHARE_REPLACES_CHAT: 1, [1]: "SCREENSHARE_REPLACES_CHAT", SCREENSHARE_REPLACES_SOUNDBOARD: 2, [2]: "SCREENSHARE_REPLACES_SOUNDBOARD" };
obj = { name: "2026-01-mobile-go-live-entrypoint", kind: "user", defaultConfig: { treatment: obj.CONTROL }, variations: null };
obj = { treatment: obj.SCREENSHARE_REPLACES_CHAT };
obj.variations = { [obj.SCREENSHARE_REPLACES_CHAT]: obj, [obj.SCREENSHARE_REPLACES_SOUNDBOARD]: { treatment: obj.SCREENSHARE_REPLACES_SOUNDBOARD } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/MobileGoLiveEntrypointExperiment.tsx");

export default apexExperiment;
export const MobileGoLiveEntrypointTreatment = obj;