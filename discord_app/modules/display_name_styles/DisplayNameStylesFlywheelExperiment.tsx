// discord_app/modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { kind: "user", name: "2026-06-gummy-bears", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = { kind: "user", name: "2026-06-gummy-viewers", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj1.variations = obj2;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj1);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx");

export const DisplayNameStylesFlywheelSettersExperiment = apexExperiment;
export const DisplayNameStylesFlywheelViewersExperiment = apexExperiment1;
export const useIsDisplayNameStylesFlywheelViewersEnabled = function useIsDisplayNameStylesFlywheelViewersEnabled(
  UsernameWithEffects,
) {
  return apexExperiment1.useConfig({ location: UsernameWithEffects }).enabled;
};
export const useIsDisplayNameStylesFlywheelSettersEnabled = function useIsDisplayNameStylesFlywheelSettersEnabled(
  DisplayNameStylesEditScreen,
) {
  return apexExperiment.useConfig({ location: DisplayNameStylesEditScreen }).enabled;
};
