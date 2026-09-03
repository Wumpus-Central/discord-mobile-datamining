// === Module 14779: useTimeValue ===

// Module 14779 (useTimeValue)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default function useTimeValue(arg0) {
  ({ initial: closure_0, defaultValue: closure_1 } = arg0);
  return React.useState(() => {
    if (null != closure_0) {
      const obj = { hours: null, minutes: null };
      ({ hours: obj[0], minutes: obj[1] } = closure_0);
      let tmp2 = obj;
    } else {
      tmp2 = closure_1;
    }
    return tmp2;
  });
};
export const timeToMinutes = require("setsEqual").timeToMinutes;