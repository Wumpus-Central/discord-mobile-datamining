// === Module 16418: apexExperiment ===

// Module 16418 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { CONTROL: 0, [0]: "CONTROL", SCREENSHARE_REPLACES_CHAT: 1, [1]: "SCREENSHARE_REPLACES_CHAT", SCREENSHARE_REPLACES_SOUNDBOARD: 2, [2]: "SCREENSHARE_REPLACES_SOUNDBOARD" };
obj = { treatment: obj.CONTROL };
obj = { treatment: obj.SCREENSHARE_REPLACES_CHAT };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-mobile-go-live-entrypoint", kind: "user", defaultConfig: obj, variations: { [obj.SCREENSHARE_REPLACES_CHAT]: obj, [obj.SCREENSHARE_REPLACES_SOUNDBOARD]: { treatment: obj.SCREENSHARE_REPLACES_SOUNDBOARD } } });
const result = obj132.fileFinishedImporting("modules/go_live/MobileGoLiveEntrypointExperiment.tsx");

export default apexExperiment;
export const MobileGoLiveEntrypointTreatment = obj;