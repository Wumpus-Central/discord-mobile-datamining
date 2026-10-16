// === Module 1582: ? ===

// Module 1582
import NavigationBuilderContext from "NavigationBuilderContext" /* 1535 */;
import _mod1583 from "module_1583" /* 1583 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1583.useClientLayoutEffect(flushUpdates);
};