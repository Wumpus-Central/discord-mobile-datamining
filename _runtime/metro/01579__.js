// === Module 1579: ? ===

// Module 1579
import NavigationBuilderContext from "NavigationBuilderContext" /* 1532 */;
import _mod1580 from "module_1580" /* 1580 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1580.useClientLayoutEffect(flushUpdates);
};