// === Module 1567: ? ===

// Module 1567
import react2 from "react" /* 1520 */;
import react3 from "react" /* 1568 */;
import react from "react" /* 19 */;


export const useScheduleUpdate = function useScheduleUpdate(arg0) {
  let closure_129_1;
  let flushUpdates;
  let closure_0 = arg0;
  const context = react.useContext(react2.NavigationBuilderContext);
  ({ scheduleUpdate: closure_129_1, flushUpdates } = context);
  const insertionEffect = react.useInsertionEffect(() => {
    closure_1_1(closure_0);
  });
  const obj = react3;
  const clientLayoutEffect = obj.useClientLayoutEffect(flushUpdates);
};