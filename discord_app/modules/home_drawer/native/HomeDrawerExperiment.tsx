// === Module 4112: MobileHomeDrawerExperiment ===

// Module 4112 (MobileHomeDrawerExperiment)
const obj = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
const tmp2 = require("getUnitId")({ name: "2025-10-mobile-home-drawer", kind: "user", defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = tmp2;