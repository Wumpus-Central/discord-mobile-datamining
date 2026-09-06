// === Module 11479: useCodedLinksExperimentEmbeds ===

// Module 11479 (useCodedLinksExperimentEmbeds)
import initialize from "initialize" /* 504 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11480 */;
import useApexExperiments from "useApexExperiments" /* 11481 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;

require = fn;
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export const canSeeExperimentEmbeds = function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  const currentUser = first.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    const currentUser1 = first.getCurrentUser();
    let isStaffPersonalResult;
    if (currentUser1 != null) {
      isStaffPersonalResult = currentUser1.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  return isStaffResult;
};
export const useCanSeeExperimentEmbeds = function useCanSeeExperimentEmbeds() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    const items = [stateFromStores2];
    const first = stateFromStoresObject1(items, 1)[0];
    const currentUser = first.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      const currentUser1 = first.getCurrentUser();
      let isStaffPersonalResult;
      if (currentUser1 != null) {
        isStaffPersonalResult = currentUser1.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
};
export const useCodedLinksExperimentEmbeds = function useCodedLinksExperimentEmbeds() {
  let items = [stateFromStores2];
  stateFromStores = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items, () => {
    const items = [stateFromStores2];
    const first = stateFromStoresObject1(items, 1)[0];
    const currentUser = first.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      const currentUser1 = first.getCurrentUser();
      let isStaffPersonalResult;
      if (currentUser1 != null) {
        isStaffPersonalResult = currentUser1.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
  let obj = stateFromStores(stateFromStoresObject[5]);
  const items1 = [stateFromStores3];
  stateFromStoresObject = stateFromStores(stateFromStoresObject[5]).useStateFromStoresObject(items1, () => {
    if (stateFromStores) {
      let registeredExperiments = ExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_7;
    }
    return registeredExperiments;
  });
  let obj2 = stateFromStores(stateFromStoresObject[5]);
  const items2 = [stateFromStores3];
  const stateFromStoresObject1 = stateFromStores(stateFromStoresObject[5]).useStateFromStoresObject(items2, () => {
    if (stateFromStores) {
      let allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = closure_8;
    }
    return allExperimentOverrideDescriptors;
  });
  let obj3 = stateFromStores(stateFromStoresObject[5]);
  const items3 = [ApexExperimentStore];
  const stateFromStores1 = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items3, () => {
    if (stateFromStores) {
      let experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
    } else {
      experimentsMetadata = closure_9;
    }
    return experimentsMetadata;
  });
  let obj4 = stateFromStores(stateFromStoresObject[5]);
  const items4 = [ApexExperimentStore];
  stateFromStores2 = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items4, () => {
    if (stateFromStores) {
      let registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_10;
    }
    return registeredExperiments;
  });
  let obj5 = stateFromStores(stateFromStoresObject[5]);
  const items5 = [ApexExperimentStore];
  stateFromStores3 = stateFromStores(stateFromStoresObject[5]).useStateFromStores(items5, () => {
    if (stateFromStores) {
      let clientOverrides = ApexExperimentStore.getClientOverrides();
    } else {
      clientOverrides = closure_11;
    }
    return clientOverrides;
  });
  const items6 = [stateFromStores, stateFromStoresObject, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  return stateFromStores1.useMemo(() => {
    if (stateFromStores) {
      const obj = { legacyExperiments: useLegacyExperiments.parseRegisteredExperiments(stateFromStoresObject), legacyOverridesInfo: null, apexExperiments: null, apexOverridesInfo: null };
      obj.legacyOverridesInfo = useLegacyExperiments.getLegacyOverridesInfo(stateFromStoresObject1);
      obj.apexExperiments = useApexExperiments.mergeApexExperiments(stateFromStores1, stateFromStores2);
      obj.apexOverridesInfo = useApexExperiments.getApexExperimentOverridesInfo(stateFromStores3);
      let tmp = obj;
    } else {
      tmp = closure_12;
    }
    return tmp;
  }, items6);
};