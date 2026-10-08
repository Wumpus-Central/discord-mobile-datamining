// === Module 17157: useSmartSearchRowViewability ===

// Module 17157 (useSmartSearchRowViewability)
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12075 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12077 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1998 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export const useSmartSearchRowViewability = ReactCompilerGating.isReactCompilerEnabled() ? (function useSmartSearchRowViewability() {
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
    class S {
      constructor() {
        obj = closure_1(closure_2[6]);
        setIsAppActiveResult = obj.setIsAppActive(closure_0, closure_1(closure_2[7]));
        return;
      }
    }
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = S;
    cResult[4] = items1;
    let tmp9 = items1;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[6]);
        setIsAppActiveResult = obj.setIsAppActive(closure_0, closure_1(closure_2[7]));
        return;
      }
    }
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(S, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1(closure_2[6]);
        setIsAppActiveResult = obj.setIsAppActive(closure_0, closure_1(closure_2[7]));
        return;
      }
    }
    const items2 = [];
    cResult[5] = tmp13;
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[6]);
        setIsAppActiveResult = obj.setIsAppActive(closure_0, closure_1(closure_2[7]));
        return;
      }
    }
    tmp12 = cResult[6];
  }
  const effect1 = noop.useEffect(tmp13, tmp12);
  const tmpResult = stateFromStores(504);
}) : (function useSmartSearchRowViewability() {
  const items = [AppStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
  });
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items1);
  const effect1 = noop.useEffect(() => () => {
    closure_1_1(12077).setIsRowViewable(false, closure_1_1(12075));
  }, []);
});