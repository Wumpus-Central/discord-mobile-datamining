// _runtime/metro/01567__.js
import NavigationBuilderContext from "../01520_NavigationBuilderContext.js";
import _mod1568 from "01568__.js";
import noop from "00019__.js";

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1568.useClientLayoutEffect(flushUpdates);
};
