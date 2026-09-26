// === Module 1562: ? ===

// Module 1562
import NavigationBuilderContext from "NavigationBuilderContext" /* 1515 */;
import _mod1563 from "module_1563" /* 1563 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1563.useClientLayoutEffect(flushUpdates);
};