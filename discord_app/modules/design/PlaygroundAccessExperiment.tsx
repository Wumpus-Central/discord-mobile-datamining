// === Module 10988: PlaygroundAccessExperiment ===

// Module 10988 (PlaygroundAccessExperiment)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
fn(1433);
let ApexExperiment = { name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: null };
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
ApexExperiment.variations = ApexExperiment;
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default ApexExperiment;
export const usePlaygroundAccessExperiment = function usePlaygroundAccessExperiment(design_systems_settings) {
  return ApexExperiment.useConfig({ location: design_systems_settings }).enabled;
};
export const getPlaygroundAccessExperiment = function getPlaygroundAccessExperiment(location) {
  return ApexExperiment.getConfig({ location }).enabled;
};
export const useHasPlaygroundAccess = function useHasPlaygroundAccess(location) {
  let obj = initialize;
  const items = [UserStore];
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
    enabled = ApexExperiment.useConfig(obj).enabled;
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
    enabled = ApexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};