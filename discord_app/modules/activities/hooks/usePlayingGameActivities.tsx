// === Module 9732: usePlayingGameActivities ===

// Module 9732 (usePlayingGameActivities)
import noop from "noop" /* 19 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import sortActivity from "sortActivity" /* 4559 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;

const require = fn;
let closure_7 = [];
const result = require("obj132").fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default function usePlayingGameActivities(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [closure_6, closure_5, closure_4];
  const stateFromStores = _require(flag[4]).useStateFromStores(items, () => {
    if (flag) {
      if (closure_1_4.getId() === closure_0) {
        let activities = closure_1_6.getActivities();
      } else {
        activities = closure_1_5.getActivities(tmp2, closure_1);
      }
    } else {
      return closure_1_7;
    }
  });
  const items1 = [stateFromStores];
  return stateFromStores.useMemo(() => stateFromStores.filter(callback(flag[5])), items1);
};