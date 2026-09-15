// _runtime/metro/01561__.js
import NavigationBuilderContext from "../01514_NavigationBuilderContext.js";
import _mod1562 from "01562__.js";
import noop from "00019__.js";

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1562.useClientLayoutEffect(flushUpdates);
};
