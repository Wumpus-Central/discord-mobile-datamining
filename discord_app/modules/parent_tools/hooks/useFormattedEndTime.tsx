// === Module 17465: useFormattedEndTime ===

// Module 17465 (useFormattedEndTime)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let nextEndTime;
      if (currentUser != null) {
        const restrictedSchedule = currentUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          nextEndTime = restrictedSchedule.getNextEndTime();
        }
      }
      let formatResult = null;
      if (null != nextEndTime) {
        const _Intl = Intl;
        const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit", weekday: "long" });
        formatResult = dateTimeFormat.format(nextEndTime);
      }
      return formatResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nextEndTime;
    if (currentUser != null) {
      const restrictedSchedule = currentUser.restrictedSchedule;
      if (restrictedSchedule != null) {
        nextEndTime = restrictedSchedule.getNextEndTime();
      }
    }
    let formatResult = null;
    if (null != nextEndTime) {
      const _Intl = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit", weekday: "long" });
      formatResult = dateTimeFormat.format(nextEndTime);
    }
    return formatResult;
  });
});