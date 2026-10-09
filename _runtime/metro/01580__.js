// === Module 1580: ? ===

// Module 1580
import NavigationBuilderContext from "NavigationBuilderContext" /* 1533 */;
import _mod1581 from "module_1581" /* 1581 */;
import noop from "module_19" /* 19 */;

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