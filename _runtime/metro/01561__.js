// === Module 1561: ? ===

// Module 1561
import NavigationBuilderContext from "NavigationBuilderContext" /* 1514 */;
import _mod1562 from "module_1562" /* 1562 */;
import noop from "module_19" /* 19 */;

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