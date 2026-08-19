// === Module 16121: useAutoSettingsSearchSessionAnalytics ===

// Module 16121 (useAutoSettingsSearchSessionAnalytics)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import usePreviousDefault from "usePrevious" /* 6701 */;
import noop from "noop" /* 19 */;
import getState from "getState" /* 7383 */;
import zustandStore from "zustandStore" /* 13993 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = function useAutoSettingsSearchSessionAnalytics() {
  const items = [closure_4];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(table[4]).AppStates.ACTIVE;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  importDefault = tmp2;
  useMountLayoutEffectDefault(() => () => {
    callback(table[7]).terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = React.useEffect(() => {
    let field = closure_1_5.getField("isFocused");
    if (!field) {
      field = closure_1_5.getField("query").length > 0;
    }
    let tmp3 = stateFromStores;
    if (stateFromStores) {
      tmp3 = !callback;
    }
    if (tmp3) {
      tmp3 = field;
    }
    if (tmp3) {
      callback(dependencyMap[7]).initialize();
      const obj = callback(dependencyMap[7]);
    }
    let tmp8 = !stateFromStores;
    if (!stateFromStores) {
      tmp8 = callback;
    }
    if (tmp8) {
      tmp8 = field;
    }
    if (tmp8) {
      callback(dependencyMap[7]).terminate();
      const obj2 = callback(dependencyMap[7]);
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = React.useEffect(() => closure_5.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (!isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    const obj = callback(table[7]);
    if (arg0) {
      obj.initialize();
    } else {
      obj.terminate();
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items2);
  const items3 = [stateFromStores];
  const effect2 = React.useEffect(() => closure_5.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    if (arg0) {
      const result = callback(table[7]).maybeTrackQueryEntered();
      const obj = callback(table[7]);
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items3);
};