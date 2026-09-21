// discord_app/modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  hasAccess = hasAccess(10482).useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
  let obj = hasAccess(10482);
  const items = [UserStore];
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
  obj2 = hasAccess(504);
  const items1 = [FavoriteStore];
  const stateFromStores = hasAccess(504).useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [hasAccess, stateFromStores];
  const obj3 = { isAvailable: hasAccess, isEnabled: stateFromStores, label: null, subLabel: null, toggle: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores);
    }
  }, items2);
  const intl = tmp(1115).intl;
  obj3.label = intl.string(stateFromStores(3324).DIyQIF);
  const intl2 = tmp(1115).intl;
  obj3.subLabel = intl2.string(stateFromStores(3324).g2vHYJ);
  obj3.toggle = callback;
  return obj3;
}
