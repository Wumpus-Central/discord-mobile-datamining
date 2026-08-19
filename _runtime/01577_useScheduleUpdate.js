// === Module 1577: useScheduleUpdate ===

// Module 1577 (useScheduleUpdate)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(_require(1530).NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = _require(1578).useClientLayoutEffect(flushUpdates);
};