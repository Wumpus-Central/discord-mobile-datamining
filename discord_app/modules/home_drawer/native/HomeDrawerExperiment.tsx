// discord_app/modules/home_drawer/native/HomeDrawerExperiment.tsx
import getUnitIdDefault from "../../experiments/apex/ApexExperiment.tsx";

const obj = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
const tmp2 = getUnitIdDefault({ name: "2025-10-mobile-home-drawer", kind: "user", defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = tmp2;