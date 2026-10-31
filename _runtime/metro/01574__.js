// === Module 1574: ? ===

// Module 1574
import NavigationBuilderContext from "NavigationBuilderContext" /* 1527 */;
import _mod1575 from "module_1575" /* 1575 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1575.useClientLayoutEffect(flushUpdates);
}