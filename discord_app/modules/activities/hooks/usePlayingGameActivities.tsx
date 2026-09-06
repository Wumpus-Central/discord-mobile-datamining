// === Module 9179: usePlayingGameActivities ===

// Module 9179 (usePlayingGameActivities)
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import closure_5 from "sortActivity" /* 4600 */;
import closure_6 from "filterPlayingActivities" /* 5279 */;

const require = arg1;
let closure_7 = [];
const result = require("set").fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default function usePlayingGameActivities(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let stateFromStores;
  const items = [closure_6, closure_5, closure_4];
  stateFromStores = _require(flag[4]).useStateFromStores(items, () => {
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