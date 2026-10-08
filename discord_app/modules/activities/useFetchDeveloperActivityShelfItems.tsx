// discord_app/modules/activities/useFetchDeveloperActivityShelfItems.tsx
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";

require = fn;
const DevShelfFetchState = fn(9031).DevShelfFetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchDeveloperActivityShelfItems() {
      const cResult = isActivitiesEnabledForCurrentPlatform(first[3]).c(8);
      let obj = isActivitiesEnabledForCurrentPlatform(first[3]);
      isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(
        first[4],
      ).useIsActivitiesEnabledForCurrentPlatform();
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
        const fn = function v() {
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
      class S {
        constructor() {
          tmp = closure_0;
          if (closure_0) {
            tmp = closure_1;
          }
          if (tmp) {
            tmp2 = closure_2;
            tmp3 = DevShelfFetchState;
            tmp = closure_2 === DevShelfFetchState.INITIALIZED;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[7]);
            developerApplications = obj.fetchDeveloperApplications();
          }
          return;
        }
      }
      const items2 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, first];
      cResult[4] = isActivitiesEnabledForCurrentPlatform;
      cResult[5] = stateFromStores;
      cResult[6] = S;
      cResult[7] = items2;
      tmp13 = items2;
      tmp12 = S;
      const tmpResult = isActivitiesEnabledForCurrentPlatform(first[6]);
    }
  : function useFetchDeveloperActivityShelfItems() {
      isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(
        setting[4],
      ).useIsActivitiesEnabledForCurrentPlatform();
      const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[5]).DeveloperMode;
      setting = DeveloperMode.getSetting();
      let obj = isActivitiesEnabledForCurrentPlatform(setting[4]);
      const items = [DeveloperActivityShelfStore];
      const stateFromStores = isActivitiesEnabledForCurrentPlatform(setting[6]).useStateFromStores(
        items,
        () => fetchState.getFetchState(),
        [],
      );
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
    };
