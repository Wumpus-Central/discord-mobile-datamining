// === Module 1577: ? ===

// Module 1577
import NavigationBuilderContext from "NavigationBuilderContext" /* 1530 */;
import _mod1578 from "module_1578" /* 1578 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1578.useClientLayoutEffect(flushUpdates);
}