// discord_app/modules/activities/hooks/usePlayingGameActivities.tsx
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import sortActivity from "sortActivity";
import filterPlayingActivities from "filterPlayingActivities";

const require = arg1;
let closure_7 = [];
const result = require("sortActivity").fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default function usePlayingGameActivities(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let stateFromStores;
  const items = [filterPlayingActivities, sortActivity, fetchFingerprint];
  stateFromStores = _require(flag[4]).useStateFromStores(items, () => {
    if (flag) {
      if (outer1_4.getId() === closure_0) {
        let activities = outer1_6.getActivities();
      } else {
        activities = outer1_5.getActivities(tmp2, closure_1);
      }
    } else {
      return outer1_7;
    }
  });
  const items1 = [stateFromStores];
  return stateFromStores.useMemo(() => stateFromStores.filter(callback(flag[5])), items1);
};