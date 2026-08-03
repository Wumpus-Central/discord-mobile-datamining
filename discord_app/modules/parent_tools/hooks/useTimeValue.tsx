import noop from "noop";

const result = require("setsEqual").fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default function useTimeValue(arg0) {
  let noop;
  let closure_1;
  ({ initial: noop, defaultValue: closure_1 } = arg0);
  return React.useState(() => {
    if (null != noop) {
      const obj = { hours: null, minutes: null };
      ({ hours: obj[0], minutes: obj[1] } = noop);
      let tmp2 = obj;
    } else {
      tmp2 = closure_1;
    }
    return tmp2;
  });
};
export const timeToMinutes = require("setsEqual").timeToMinutes;