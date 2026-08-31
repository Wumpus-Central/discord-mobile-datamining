// === Module 1576: useScheduleUpdate ===

// Module 1576 (useScheduleUpdate)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(_require(1529).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1577).useClientLayoutEffect(flushUpdates);
};