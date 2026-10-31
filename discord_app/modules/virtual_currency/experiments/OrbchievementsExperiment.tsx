// discord_app/modules/virtual_currency/experiments/OrbchievementsExperiment.tsx
import ApexExperiment_mod from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ApexExperiment = ApexExperiment_mod;
const obj = { name: "2026-07-orbchievements", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = {
  name: "2026-10-orbchievements-mobile",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/virtual_currency/experiments/OrbchievementsExperiment.tsx");

export const Orbchievements = apexExperiment;
export const OrbchievementsMobile = apexExperiment1;
export function useIsOrbchievementsEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
}
export function useIsOrbchievementsMobileEnabled(location) {
  return apexExperiment1.useConfig({ location: location.location }).enabled;
}
