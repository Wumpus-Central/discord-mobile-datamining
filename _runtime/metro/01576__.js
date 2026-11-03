// === Module 1576: ? ===

// Module 1576
import NavigationBuilderContext from "NavigationBuilderContext" /* 1529 */;
import _mod1577 from "module_1577" /* 1577 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1577.useClientLayoutEffect(flushUpdates);
}