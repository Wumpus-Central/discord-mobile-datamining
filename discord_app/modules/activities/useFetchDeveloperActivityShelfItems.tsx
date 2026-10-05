// === Module 11742: useFetchDeveloperActivityShelfItems ===

// Module 11742 (useFetchDeveloperActivityShelfItems)
import DeveloperActivityShelfStore2 from "DeveloperActivityShelfStore" /* 8513 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8993 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const DeveloperActivityShelfStore = DeveloperActivityShelfStore2;

const DevShelfFetchState = DeveloperActivityShelfStore2.DevShelfFetchState;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let fetchState;
  let first;
  let isActivitiesEnabledForCurrentPlatform;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = isActivitiesEnabledForCurrentPlatform;
  let obj = isActivitiesEnabledForCurrentPlatform(first[3]);
  const cResult = obj.c(8);
  const obj2 = isActivitiesEnabledForCurrentPlatform(first[4]);
  isActivitiesEnabledForCurrentPlatform = obj2.useIsActivitiesEnabledForCurrentPlatform();
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
    tmp9 = items1;
    tmp8 = fn;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(first[6]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8, tmp9);
  if (cResult[4] === isActivitiesEnabledForCurrentPlatform) {
    let tmp12;
    let tmp13;
    if (cResult[5] === stateFromStores) {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    const effect = stateFromStores.useEffect(tmp12, tmp13);
    return null;
  }
  const fn2 = function h() {
    const tmp = isActivitiesEnabledForCurrentPlatform && first && stateFromStores === DevShelfFetchState.INITIALIZED;
    if (tmp) {
      const obj = EmbeddedActivitiesActionCreators;
      const developerApplications = obj.fetchDeveloperApplications();
    }
  };
  const items2 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, first];
  cResult[4] = isActivitiesEnabledForCurrentPlatform;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp13 = items2;
  tmp12 = fn2;
}) : (() => {
  let fetchState;
  let isActivitiesEnabledForCurrentPlatform;
  let setting;
  let obj = isActivitiesEnabledForCurrentPlatform(setting[4]);
  isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[5]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  const items = [DeveloperActivityShelfStore];
  const obj2 = isActivitiesEnabledForCurrentPlatform(setting[6]);
  const stateFromStores = obj2.useStateFromStores(items, () => fetchState.getFetchState(), []);
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = stateFromStores.useEffect(() => {
    const tmp = isActivitiesEnabledForCurrentPlatform && setting && stateFromStores === DevShelfFetchState.INITIALIZED;
    if (tmp) {
      const obj = EmbeddedActivitiesActionCreators;
      const developerApplications = obj.fetchDeveloperApplications();
    }
  }, items1);
  return null;
});
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = tmp2;