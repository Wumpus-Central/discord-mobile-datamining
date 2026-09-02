// _runtime/01575_useScheduleUpdate.js
import closure_2 from "00019_noop.js";

const require = arg1;

export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  const _require = arg0;
  const context = React.useContext(require("01528_NavigationBuilderContext.js").NavigationBuilderContext);
  ({ scheduleUpdate: dependencyMap, flushUpdates } = context);
  const insertionEffect = React.useInsertionEffect(() => {
    callback(closure_0);
  });
  const clientLayoutEffect = require("01576_useEffect.js").useClientLayoutEffect(flushUpdates);
};
