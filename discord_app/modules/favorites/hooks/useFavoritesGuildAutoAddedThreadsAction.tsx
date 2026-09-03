// discord_app/modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/UserStore.tsx";
import closure_5 from "../FavoriteStore.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx",
);

export default function useFavoritesGuildAutoAddedThreadsAction() {
  let obj = hasAccess(10333);
  hasAccess = obj.useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
  const items = [closure_4];
  if (hasAccess) {
    hasAccess = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
  }
  obj2 = hasAccess(586);
  const items1 = [closure_5];
  const stateFromStores = hasAccess(586).useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [hasAccess, stateFromStores];
  obj = { isAvailable: hasAccess, isEnabled: stateFromStores, label: null, subLabel: null, toggle: null };
  const callback = React.useCallback(() => {
    if (hasAccess) {
      const result = hasAccess(closure_1_2[5]).setFavoritesAutoAddJoinedThreads(!stateFromStores);
      const obj = hasAccess(closure_1_2[5]);
    }
  }, items2);
  const intl = tmp(1233).intl;
  obj[2] = intl.string(stateFromStores(3178).DIyQIF);
  const intl2 = tmp(1233).intl;
  obj[3] = intl2.string(stateFromStores(3178).g2vHYJ);
  obj[4] = callback;
  return obj;
}
