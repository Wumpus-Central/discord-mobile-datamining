// === Module 14697: useSelectedTeenUser ===

// Module 14697 (useSelectedTeenUser)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8296 */;
import UserStore from "UserStore" /* 1377 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7051 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;

const require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(3);
  const tmp4 = useIsInAdultAgeGroupDefault();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function o() {
      if (true !== closure_0) {
        return UserStore.getCurrentUser();
      } else {
        const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
        let user;
        if (null !== selectedTeenId) {
          user = UserStore.getUser(selectedTeenId);
        }
        return user;
      }
    };
    cResult[1] = tmp4;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp8);
}) : (() => {
  _require = useIsInAdultAgeGroupDefault();
  const items = [FamilyCenterStore, UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    if (true !== closure_0) {
      return UserStore.getCurrentUser();
    } else {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = UserStore.getUser(selectedTeenId);
      }
      return user;
    }
  });
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const user = UserStore.getUser(closure_0);
      return null != user ? user : undefined;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const user = UserStore.getUser(closure_0);
    return null != user ? user : undefined;
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = tmp2;
export const useTeenUserForId = tmp3;
export const useShouldLoadSettingsForSelectedTeenUser = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(576).c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    cResult[0] = selectedTeenId;
    first = selectedTeenId;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterControlledSettingsStore];
    const fn = function l() {
      let hasSettingsForUserResult = null != first;
      if (hasSettingsForUserResult) {
        hasSettingsForUserResult = FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
      }
      return { hasLoadedSettings: hasSettingsForUserResult, isLoading: FamilyCenterControlledSettingsStore.isLoading };
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const obj = first(576);
  const stateFromStoresObject = first(573).useStateFromStoresObject(tmp7, tmp8);
  const hasLoadedSettings = stateFromStoresObject.hasLoadedSettings;
  let tmp12 = null !== first;
  if (tmp12) {
    let tmp13 = !hasLoadedSettings;
    if (!hasLoadedSettings) {
      tmp13 = !tmp11;
    }
    tmp12 = tmp13;
  }
  return tmp12;
}) : (() => {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  const items = [FamilyCenterControlledSettingsStore];
  const stateFromStoresObject = selectedTeenId(573).useStateFromStoresObject(items, () => {
    let hasSettingsForUserResult = null != selectedTeenId;
    if (hasSettingsForUserResult) {
      hasSettingsForUserResult = FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
    }
    return { hasLoadedSettings: hasSettingsForUserResult, isLoading: FamilyCenterControlledSettingsStore.isLoading };
  });
  const hasLoadedSettings = stateFromStoresObject.hasLoadedSettings;
  let tmp4 = null !== selectedTeenId;
  if (tmp4) {
    let tmp5 = !hasLoadedSettings;
    if (!hasLoadedSettings) {
      tmp5 = !tmp3;
    }
    tmp4 = tmp5;
  }
  return tmp4;
});