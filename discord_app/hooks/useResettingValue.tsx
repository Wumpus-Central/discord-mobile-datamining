// === Module 13033: useResettingValue ===

// Module 13033 (useResettingValue)
import useInitialValueDefault from "useInitialValue" /* 5822 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useState: c4, useCallback: c5, useEffect: closure_6 } = noop);
const result = require("set").fileFinishedImporting("hooks/useResettingValue.tsx");

export default function useResettingValue(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = callback(callback2(arg0), 2);
  dependencyMap = tmp[1];
  const tmp2 = useInitialValueDefault(() => {
    const timeout = new callback(4264).Timeout();
    return timeout;
  });
  callback = tmp2;
  const items = [tmp2];
  callback4(() => () => closure_3.stop(), items);
  const items1 = [tmp[0], ];
  const items2 = [arg1, arg0, tmp2];
  items1[1] = callback3((arg0) => {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => callback(closure_0));
    }
  }, items2);
  return items1;
};