// === Module 10459: getUnitId ===

// Module 10459 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null };
obj[1] = { reactionToProfileEnabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default tmp2;