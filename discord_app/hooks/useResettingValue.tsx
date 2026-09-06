// === Module 13559: useResettingValue ===

// Module 13559 (useResettingValue)
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
const noop = fn(19);
({ useState: closure_4, useCallback: hasOwnProperty, useEffect: metroRequire } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useResettingValue.tsx");

export default function useResettingValue(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = _slicedToArray(closure_4(arg0), 2);
  dependencyMap = tmp[1];
  const tmp2 = useInitialValueDefault(() => {
    const timeout = new closure_0(4447).Timeout();
    return timeout;
  });
  _slicedToArray = tmp2;
  const items = [tmp2];
  closure_6(() => () => closure_1_3.stop(), items);
  const items1 = [tmp[0], ];
  const items2 = [arg1, arg0, tmp2];
  items1[1] = closure_5((arg0) => {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      closure_3.start(closure_1, () => dependencyMap(closure_1_0));
    }
  }, items2);
  return items1;
};