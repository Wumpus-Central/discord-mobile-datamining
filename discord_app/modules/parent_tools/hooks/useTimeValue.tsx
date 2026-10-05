// === Module 14743: useTimeValue ===

// Module 14743 (useTimeValue)
import react2 from "react" /* 576 */;
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils" /* 12468 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let initial;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((initial) => {
  const obj = react2;
  const cResult = obj.c(3);
  initial = initial.initial;
  const defaultValue = initial.defaultValue;
  if (cResult[0] === defaultValue) {
    let tmp2;
    if (cResult[1] === initial) {
      tmp2 = cResult[2];
    }
    return react.useState(tmp2);
  }
  const fn = function n() {
    let tmp2;
    if (null != initial) {
      const time = { hours: null, minutes: null };
      ({ hours: obj.hours, minutes: obj.minutes } = initial);
      tmp2 = time;
    } else {
      tmp2 = defaultValue;
    }
    return tmp2;
  };
  cResult[0] = defaultValue;
  cResult[1] = initial;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0) => {
  let closure_129_0;
  let closure_129_1;
  ({ initial: closure_129_0, defaultValue: closure_129_1 } = arg0);
  return react.useState(() => {
    let tmp2;
    if (null != closure_1_0) {
      const time = { hours: null, minutes: null };
      ({ hours: obj.hours, minutes: obj.minutes } = closure_1_0);
      tmp2 = time;
    } else {
      tmp2 = closure_1_1;
    }
    return tmp2;
  });
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useTimeValue.tsx");

export default tmp2;
export const timeToMinutes = FamilyCenterRestrictedHoursUtils.timeToMinutes;