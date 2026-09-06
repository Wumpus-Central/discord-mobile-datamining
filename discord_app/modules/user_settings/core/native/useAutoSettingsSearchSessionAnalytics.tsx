// === Module 16905: useAutoSettingsSearchSessionAnalytics ===

// Module 16905 (useAutoSettingsSearchSessionAnalytics)
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6996 */;
import usePreviousDefault from "usePrevious" /* 8272 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14691 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = function useAutoSettingsSearchSessionAnalytics() {
  const items = [AppStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  importDefault = tmp2;
  useMountEffectDefault(() => () => {
    closure_1_1(closure_1_2[7]).terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = noop.useEffect(() => {
    let field = UserSettingSearchStore.getField("isFocused");
    if (!field) {
      field = UserSettingSearchStore.getField("query").length > 0;
    }
    let tmp3 = stateFromStores;
    if (stateFromStores) {
      tmp3 = !closure_1;
    }
    if (tmp3) {
      tmp3 = field;
    }
    if (tmp3) {
      SettingSearchSessionAnalyticsManagerDefault.initialize();
    }
    let tmp8 = !stateFromStores;
    if (!stateFromStores) {
      tmp8 = closure_1;
    }
    if (tmp8) {
      tmp8 = field;
    }
    if (tmp8) {
      SettingSearchSessionAnalyticsManagerDefault.terminate();
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = noop.useEffect(() => UserSettingSearchStore.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (!isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    const obj = closure_1_1(closure_1_2[7]);
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
  const effect2 = noop.useEffect(() => UserSettingSearchStore.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    if (arg0) {
      const result = closure_1_1(dependencyMap[7]).maybeTrackQueryEntered();
      const obj = closure_1_1(dependencyMap[7]);
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items3);
};