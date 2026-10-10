// === Module 11570: PlaygroundAccessExperiment ===

// Module 11570 (PlaygroundAccessExperiment)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const ApexExperiment = fn(1453);
let obj2 = { name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePlaygroundAccessExperiment(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function usePlaygroundAccessExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getPlaygroundAccessExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default apexExperiment;
export const usePlaygroundAccessExperiment = tmp3;
export { getPlaygroundAccessExperiment };
export const useHasPlaygroundAccess = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasPlaygroundAccess(arg0) {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let isStaffResult;
    if (stateFromStores != null) {
      isStaffResult = stateFromStores.isStaff();
    }
    let tmp10 = true === isStaffResult;
    if (!tmp10) {
      let isStaffPersonalResult;
      if (stateFromStores != null) {
        isStaffPersonalResult = stateFromStores.isStaffPersonal();
      }
      tmp10 = true === isStaffPersonalResult;
    }
    cResult[2] = stateFromStores;
    cResult[3] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (!tmp7) {
    tmp7 = closure_4(arg0);
  }
  return tmp7;
}) : (function useHasPlaygroundAccess(arg0) {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let tmp2 = true === isStaffResult;
  if (!tmp2) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    tmp2 = true === isStaffPersonalResult;
  }
  if (!tmp2) {
    tmp2 = closure_4(arg0);
  }
  return tmp2;
});
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