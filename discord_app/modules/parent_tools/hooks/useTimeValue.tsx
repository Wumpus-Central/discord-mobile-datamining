// discord_app/modules/parent_tools/hooks/useTimeValue.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default function useTimeValue(arg0) {
  ({ initial: noop, defaultValue: closure_1 } = arg0);
  return noop.useState(() => {
    if (null != noop) {
      const time = { hours: null, minutes: null };
      ({ hours: obj.hours, minutes: obj.minutes } = noop);
      let tmp2 = time;
    } else {
      tmp2 = closure_1_1;
    }
    return tmp2;
  });
}
export const timeToMinutes = fn(10083).timeToMinutes;
