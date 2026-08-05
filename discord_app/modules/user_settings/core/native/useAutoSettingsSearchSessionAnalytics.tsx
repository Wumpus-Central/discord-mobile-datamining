import { useMountLayoutEffect } from "../../../../hooks/useMountEffect.tsx";
import { usePrevious } from "../../../../hooks/usePrevious.tsx";
// discord_app/modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx
import noop from "noop";
import getState from "getState";
import zustandStore from "zustandStore";

const require = arg1;
let result = require("zustandStore").fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = function useAutoSettingsSearchSessionAnalytics() {
  const items = [getState];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(table[4]).AppStates.ACTIVE;
  });
  const tmp2 = usePrevious(stateFromStores);
  importDefault = tmp2;
  useMountLayoutEffect(() => () => {
    callback(table[7]).terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = React.useEffect(() => {
    let field = outer1_5.getField("isFocused");
    if (!field) {
      field = outer1_5.getField("query").length > 0;
    }
    let tmp3 = stateFromStores;
    if (stateFromStores) {
      tmp3 = !tmp2;
    }
    if (tmp3) {
      tmp3 = field;
    }
    if (tmp3) {
      tmp2(outer1_2[7]).initialize();
      const obj = tmp2(outer1_2[7]);
    }
    let tmp8 = !tmp2;
    if (!stateFromStores) {
      tmp8 = tmp2;
    }
    if (tmp8) {
      tmp8 = field;
    }
    if (tmp8) {
      tmp2(outer1_2[7]).terminate();
      const obj2 = tmp2(outer1_2[7]);
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = React.useEffect(() => zustandStore.subscribe((isFocused) => {
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
  const effect2 = React.useEffect(() => zustandStore.subscribe((isFocused) => {
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