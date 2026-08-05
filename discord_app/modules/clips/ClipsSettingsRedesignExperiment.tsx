import { isClipsEnabled } from "isClipsEnabled.tsx";
// discord_app/modules/clips/ClipsSettingsRedesignExperiment.tsx
import _migrateDefaultStorage from "_migrateDefaultStorage";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { 1: null };
ApexExperiment[1] = { enableRedesign: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-clips-settings-redesign", defaultConfig: { enableRedesign: false }, variations: ApexExperiment });
const result = require("isClipsEnabled").fileFinishedImporting("modules/clips/ClipsSettingsRedesignExperiment.tsx");

export const ClipsSettingsRedesignExperiment = apexExperiment;
export const useIsClipsSettingsRedesignEnabled = function useIsClipsSettingsRedesignEnabled() {
  return apexExperiment.useConfig({ location: "useIsClipsSettingsRedesignEnabled" }).enableRedesign;
};
export const isClipsSettingsRedesignEnabled = function isClipsSettingsRedesignEnabled() {
  return apexExperiment.getConfig({ location: "isClipsSettingsRedesignEnabled" }).enableRedesign;
};
export const useDisabledWhenClippingOff = function useDisabledWhenClippingOff() {
  let enableRedesign = apexExperiment.useConfig({ location: "useIsClipsSettingsRedesignEnabled" }).enableRedesign;
  if (enableRedesign) {
    enableRedesign = !obj.useIsClipsEnabled();
  }
  return enableRedesign;
};
export const useDisabledWhenAutoclippingOff = function useDisabledWhenAutoclippingOff() {
  let enableRedesign = apexExperiment.useConfig({ location: "useIsClipsSettingsRedesignEnabled" }).enableRedesign;
  let enableRedesign2 = apexExperiment.useConfig({ location: "useIsClipsSettingsRedesignEnabled" }).enableRedesign;
  if (enableRedesign2) {
    enableRedesign2 = !obj.useIsClipsEnabled();
  }
  obj = isClipsEnabled /* isClipsEnabled */;
  const tmp = require;
  const items = [_migrateDefaultStorage];
  if (!enableRedesign2) {
    if (enableRedesign) {
      enableRedesign = !tmpResult.useStateFromStores(items, () => enableAutoclipping.getEnableAutoclipping());
    }
    enableRedesign2 = enableRedesign;
  }
  return enableRedesign2;
};