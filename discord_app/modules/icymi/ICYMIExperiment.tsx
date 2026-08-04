// discord_app/modules/icymi/ICYMIExperiment.tsx
import getUserAgnosticState from "getUserAgnosticState";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

const hide_icymi_tab = "hide_icymi_tab";
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: ApexExperiment });
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: ApexExperiment });
const obj1 = { 1: null };
obj1[1] = { icymiDesktopEnabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: obj1 });
const result = require("useLabFeature").fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  const tmp = importDefault(8193)(hide_icymi_tab);
  let obj = { location: TabsNavigator };
  obj = { location: TabsNavigator };
  const config = apexExperiment2.useConfig(obj);
  let enabled = !tmp;
  if (!tmp) {
    enabled = apexExperiment.useConfig(obj).enabled;
  }
  return enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  const value = getUserAgnosticState.get(hide_icymi_tab);
  let enabled = !value;
  if (!value) {
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;