// === Module 17636: OrbchievementsExperiment ===

// Module 17636 (OrbchievementsExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-orbchievements", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/experiments/OrbchievementsExperiment.tsx");

export const Orbchievements = apexExperiment;
export function useIsOrbchievementsEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
}