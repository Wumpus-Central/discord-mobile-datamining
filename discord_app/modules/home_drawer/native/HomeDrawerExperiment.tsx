// === Module 4698: HomeDrawerExperiment ===

// Module 4698 (HomeDrawerExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;

const obj = { name: "2025-10-mobile-home-drawer", kind: "user", defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false }, variations: null };
const obj2 = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj2[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = apex_ApexExperimentDefault(obj);