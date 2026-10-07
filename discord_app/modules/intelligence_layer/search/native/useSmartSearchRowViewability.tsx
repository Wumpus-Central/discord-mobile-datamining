// discord_app/modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx
import SearchSessionAnalyticsManagerDefault from "../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../SmartSearchAnalyticsManager.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export const useSmartSearchRowViewability = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppStateStore];
        const fn = function o() {
          state = state.getState();
          return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function n() {
          SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp9 = items1;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function u() {
          return () => {
            closure_1_1(12004).setIsRowViewable(false, closure_1_1(12002));
          };
        };
        const items2 = [];
        cResult[5] = fn3;
        cResult[6] = items2;
        let tmp12 = items2;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect1 = noop.useEffect(tmp11, tmp12);
      const tmpResult = stateFromStores(504);
    }
  : () => {
      const items = [AppStateStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
        state = state.getState();
        return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
      });
      const items1 = [stateFromStores];
      const effect = noop.useEffect(() => {
        SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
      }, items1);
      const effect1 = noop.useEffect(
        () => () => {
          closure_1_1(12004).setIsRowViewable(false, closure_1_1(12002));
        },
        [],
      );
    };
