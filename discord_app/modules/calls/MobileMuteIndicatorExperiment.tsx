// discord_app/modules/calls/MobileMuteIndicatorExperiment.tsx
import getUnitIdDefault from "../experiments/apex/ApexExperiment.tsx";

const obj = { 1: null };
obj[1] = { enableMuteWarning: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;