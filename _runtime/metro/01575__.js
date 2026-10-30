// _runtime/metro/01575__.js
import NavigationBuilderContext from "../01528_NavigationBuilderContext.js";
import _mod1576 from "01576__.js";
import noop from "00019__.js";

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
