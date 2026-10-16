// _runtime/metro/01582__.js
import NavigationBuilderContext from "../01535_NavigationBuilderContext.js";
import _mod1583 from "01583__.js";
import noop from "00019__.js";

require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  closure_0 = arg0;
  const context = noop.useContext(NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = noop.useInsertionEffect(() => {
    dependencyMap(closure_0);
  });
  const clientLayoutEffect = _mod1583.useClientLayoutEffect(flushUpdates);
};
