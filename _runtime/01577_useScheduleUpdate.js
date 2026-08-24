// _runtime/01577_useScheduleUpdate.js
import closure_2 from "00019_noop.js";
import { NavigationBuilderContext } from "01530_NavigationBuilderContext.js";
import { useEffect } from "01578_useEffect.js";

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(_NavigationBuilderContext.NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _useEffect.useClientLayoutEffect(flushUpdates);
};