// === Module 1560: ? ===

// Module 1560
import NavigationBuilderContext from "NavigationBuilderContext" /* 1513 */;
import _mod1561 from "module_1561" /* 1561 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1561.useClientLayoutEffect(flushUpdates);
};