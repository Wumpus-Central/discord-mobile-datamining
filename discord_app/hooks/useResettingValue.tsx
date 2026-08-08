// discord_app/hooks/useResettingValue.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useInitialValue } from "useInitialValue.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
({ useState: c4, useCallback: c5, useEffect: closure_6 } = noop);
const result = require("useInitialValue").fileFinishedImporting("hooks/useResettingValue.tsx");

export default function useResettingValue(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const tmp = callback(callback2(arg0), 2);
  const dependencyMap = tmp[1];
  const tmp2 = useInitialValue(() => {
    const timeout = new callback(4188).Timeout();
    return timeout;
  });
  callback = tmp2;
  const items = [tmp2];
  callback4(() => () => _slicedToArray.stop(), items);
  const items1 = [tmp[0], ];
  const items2 = [arg1, arg0, tmp2];
  items1[1] = callback3((arg0) => {
    dependencyMap(arg0);
    if (arg0 !== closure_0) {
      tmp2.start(closure_1, () => callback(closure_0));
    }
  }, items2);
  return items1;
};