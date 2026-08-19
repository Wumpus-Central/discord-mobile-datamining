// === Module 4775: getUnitId ===

// Module 4775 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null, 2: { enabled: true }, 3: { enabled: true, disableUI: true }, 4: { enabled: true, disableUI: true, swallowVolumeOnlySpeakingEvents: true } };
obj[4] = { enabled: true, disableUI: true, dontEmitVolumeOnlySpeakingEvents: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2025-12-proportional-vad-indicator", defaultConfig: { enabled: false }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/calls/ProportionalVadIndicatorExperiment.tsx");

export default tmp2;