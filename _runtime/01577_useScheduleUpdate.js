// _runtime/01577_useScheduleUpdate.js
import closure_2 from "00019_noop.js";

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(require("01530_NavigationBuilderContext.js").NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = require("01578_useEffect.js").useClientLayoutEffect(flushUpdates);
};