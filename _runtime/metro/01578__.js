// === Module 1578: ? ===

// Module 1578
import NavigationBuilderContext from "NavigationBuilderContext" /* 1531 */;
import _mod1579 from "module_1579" /* 1579 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1579.useClientLayoutEffect(flushUpdates);
}