// === Module 17244: MobileGoLiveEntrypointExperiment ===

// Module 17244 (MobileGoLiveEntrypointExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj3;
let obj4;
const obj = { CONTROL: 0, [0]: "CONTROL", SCREENSHARE_REPLACES_CHAT: 1, [1]: "SCREENSHARE_REPLACES_CHAT", SCREENSHARE_REPLACES_SOUNDBOARD: 2, [2]: "SCREENSHARE_REPLACES_SOUNDBOARD" };
const obj2 = { name: "2026-01-mobile-go-live-entrypoint", kind: "user", defaultConfig: { treatment: obj.CONTROL }, variations: { [obj.SCREENSHARE_REPLACES_CHAT]: obj3, [obj.SCREENSHARE_REPLACES_SOUNDBOARD]: obj4 } };
obj3 = { treatment: obj.SCREENSHARE_REPLACES_CHAT };
obj4 = { treatment: obj.SCREENSHARE_REPLACES_SOUNDBOARD };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/go_live/MobileGoLiveEntrypointExperiment.tsx");

export default apexExperiment;
export const MobileGoLiveEntrypointTreatment = obj;