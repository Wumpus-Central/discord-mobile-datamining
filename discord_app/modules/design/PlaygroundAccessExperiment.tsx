// === Module 10451: PlaygroundAccessExperiment ===

// Module 10451 (PlaygroundAccessExperiment)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const ApexExperiment = fn(1435);
const obj2 = { name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default apexExperiment;
export const usePlaygroundAccessExperiment = function usePlaygroundAccessExperiment(design_systems_settings) {
  return apexExperiment.useConfig({ location: design_systems_settings }).enabled;
};
export const getPlaygroundAccessExperiment = function getPlaygroundAccessExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useHasPlaygroundAccess = function useHasPlaygroundAccess(location) {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
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
  if (!enabled) {
    enabled = apexExperiment.useConfig(obj2).enabled;
  }
  return enabled;
};
export const getHasPlaygroundAccess = function getHasPlaygroundAccess(quickswitcher_action) {
  const currentUser = UserStore.getCurrentUser();
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
    const obj = { location: quickswitcher_action };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};