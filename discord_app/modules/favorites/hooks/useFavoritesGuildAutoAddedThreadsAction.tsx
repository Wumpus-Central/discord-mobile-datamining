// === Module 16270: useFavoritesGuildAutoAddedThreadsAction ===

// Module 16270 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10362 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import FavoriteStore from "FavoriteStore" /* 1961 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  hasAccess = hasAccess(10363).useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
  let obj = hasAccess(10363);
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
  obj3.label = intl.string(stateFromStores(3237).DIyQIF);
  const intl2 = tmp(1115).intl;
  obj3.subLabel = intl2.string(stateFromStores(3237).g2vHYJ);
  obj3.toggle = callback;
  return obj3;
};