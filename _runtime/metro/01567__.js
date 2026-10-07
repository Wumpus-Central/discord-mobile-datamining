// === Module 1567: ? ===

// Module 1567
import NavigationBuilderContext from "NavigationBuilderContext" /* 1520 */;
import _mod1568 from "module_1568" /* 1568 */;
import noop from "module_19" /* 19 */;

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