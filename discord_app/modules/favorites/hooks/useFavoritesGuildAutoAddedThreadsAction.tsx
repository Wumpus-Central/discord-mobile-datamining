// === Module 16140: useFavoritesGuildAutoAddedThreadsAction ===

// Module 16140 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10223 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  let obj = hasAccess(10224);
  hasAccess = obj.useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
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
  obj = { isAvailable: hasAccess, isEnabled: stateFromStores, label: null, subLabel: null, toggle: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores);
    }
  }, items2);
  const intl = tmp(1114).intl;
  obj.label = intl.string(stateFromStores(3225).DIyQIF);
  const intl2 = tmp(1114).intl;
  obj.subLabel = intl2.string(stateFromStores(3225).g2vHYJ);
  obj.toggle = callback;
  return obj;
};