// _runtime/metro/01574__.js
import NavigationBuilderContext from "../01527_NavigationBuilderContext.js";
import _mod1575 from "01575__.js";
import noop from "00019__.js";

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
