// === Module 9923: apexExperiment ===

// Module 9923 (apexExperiment)
import mergeGuildAvatar from "mergeGuildAvatar";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: ApexExperiment });
const result = require("initialize").fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default apexExperiment;
export const usePlaygroundAccessExperiment = function usePlaygroundAccessExperiment(design_systems_settings) {
  return apexExperiment.useConfig({ location: design_systems_settings }).enabled;
};
export const getPlaygroundAccessExperiment = function getPlaygroundAccessExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useHasPlaygroundAccess = function useHasPlaygroundAccess(location) {
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let enabled = true === isStaffResult;
  if (!enabled) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    enabled = true === isStaffPersonalResult;
  }
  obj = { location };
  if (!enabled) {
    enabled = apexExperiment.useConfig(obj).enabled;
  }
  return enabled;
};
export const getHasPlaygroundAccess = function getHasPlaygroundAccess(quickswitcher_action) {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let enabled = true === isStaffResult;
  if (!enabled) {
    let isStaffPersonalResult;
    if (currentUser != null) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    enabled = true === isStaffPersonalResult;
  }
  if (!enabled) {
    const obj = { location: null };
    obj[0] = quickswitcher_action;
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};