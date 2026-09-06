// discord_app/modules/activities/hooks/usePlayingGameActivities.tsx
import isPlayingGameActivityDefault from "../utils/isPlayingGameActivity.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";

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
}
