// === Module 18185: useFavoritesGuildAutoAddedThreadsAction ===

// Module 18185 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10831 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
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
  let obj = stateFromStores(504);
  const items1 = [FavoriteStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [stateFromStores, stateFromStores1];
  const obj3 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: null, subLabel: null, toggle: null };
  const callback = noop.useCallback(() => {
    if (stateFromStores) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
    }
  }, items2);
  const intl = stateFromStores(1113).intl;
  obj3.label = intl.string(stateFromStores1(3450).DIyQIF);
  const intl2 = stateFromStores(1113).intl;
  obj3.subLabel = intl2.string(stateFromStores1(3450).g2vHYJ);
  obj3.toggle = callback;
  return obj3;
};