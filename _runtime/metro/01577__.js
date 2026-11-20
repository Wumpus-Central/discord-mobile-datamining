// _runtime/metro/01577__.js
import NavigationBuilderContext from "../01530_NavigationBuilderContext.js";
import _mod1578 from "01578__.js";
import noop from "00019__.js";

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
