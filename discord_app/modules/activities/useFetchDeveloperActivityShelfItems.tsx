// === Module 11756: useFetchDeveloperActivityShelfItems ===

// Module 11756 (useFetchDeveloperActivityShelfItems)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8546 */;

require = fn;
const DevShelfFetchState = fn(8546).DevShelfFetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = isActivitiesEnabledForCurrentPlatform(first[3]).c(8);
  let obj = isActivitiesEnabledForCurrentPlatform(first[3]);
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(first[4]).useIsActivitiesEnabledForCurrentPlatform();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const DeveloperMode = tmp(tmp2[5]).DeveloperMode;
    const setting = DeveloperMode.getSetting();
    cResult[0] = setting;
    first = setting;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperActivityShelfStore];
    const fn = function f() {
      return fetchState.getFetchState();
    };
    const items1 = [];
    cResult[1] = items;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj2 = isActivitiesEnabledForCurrentPlatform(first[4]);
  const stateFromStores = isActivitiesEnabledForCurrentPlatform(first[6]).useStateFromStores(tmp7, tmp8, tmp9);
  if (cResult[4] === isActivitiesEnabledForCurrentPlatform) {
    if (cResult[5] === stateFromStores) {
      let tmp12 = cResult[6];
      let tmp13 = cResult[7];
    }
    const effect = stateFromStores.useEffect(tmp12, tmp13);
    return null;
  }
  const fn2 = function h() {
    let tmp = isActivitiesEnabledForCurrentPlatform;
    if (isActivitiesEnabledForCurrentPlatform) {
      tmp = first;
    }
    if (tmp) {
      tmp = stateFromStores === DevShelfFetchState.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = EmbeddedActivitiesActionCreators.fetchDeveloperApplications();
    }
  };
  const items2 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, first];
  cResult[4] = isActivitiesEnabledForCurrentPlatform;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp13 = items2;
  tmp12 = fn2;
  const tmpResult = isActivitiesEnabledForCurrentPlatform(first[6]);
}) : (() => {
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(setting[4]).useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[5]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  let obj = isActivitiesEnabledForCurrentPlatform(setting[4]);
  const items = [DeveloperActivityShelfStore];
  const stateFromStores = isActivitiesEnabledForCurrentPlatform(setting[6]).useStateFromStores(items, () => fetchState.getFetchState(), []);
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = stateFromStores.useEffect(() => {
    let tmp = isActivitiesEnabledForCurrentPlatform;
    if (isActivitiesEnabledForCurrentPlatform) {
      tmp = setting;
    }
    if (tmp) {
      tmp = stateFromStores === DevShelfFetchState.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = EmbeddedActivitiesActionCreators.fetchDeveloperApplications();
    }
  }, items1);
  return null;
});