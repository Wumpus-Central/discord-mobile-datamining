// _runtime/metro/01580__.js
import NavigationBuilderContext from "../01533_NavigationBuilderContext.js";
import _mod1581 from "01581__.js";
import noop from "00019__.js";

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1581.useClientLayoutEffect(flushUpdates);
};
