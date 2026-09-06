// === Module 9179: usePlayingGameActivities ===

// Module 9179 (usePlayingGameActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9180 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;

const require = fn;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default function usePlayingGameActivities(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (flag) {
      if (AuthenticationStore.getId() === closure_0) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp2, closure_1);
      }
    } else {
      return closure_7;
    }
  });
  const items1 = [stateFromStores];
  return stateFromStores.useMemo(() => stateFromStores.filter(isPlayingGameActivityDefault), items1);
};