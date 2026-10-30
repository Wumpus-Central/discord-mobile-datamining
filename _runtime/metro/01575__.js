// === Module 1575: ? ===

// Module 1575
import NavigationBuilderContext from "NavigationBuilderContext" /* 1528 */;
import _mod1576 from "module_1576" /* 1576 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1576.useClientLayoutEffect(flushUpdates);
}