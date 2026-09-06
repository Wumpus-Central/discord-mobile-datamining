// === Module 17295: useFormattedEndTime ===

// Module 17295 (useFormattedEndTime)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default function useFormattedEndTime() {
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
};