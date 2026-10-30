// discord_app/modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

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
  const stateFromStores1 = stateFromStores(504).useStateFromStores(
    items1,
    () => autoAddJoinedThreads.autoAddJoinedThreads,
  );
  const items2 = [stateFromStores, stateFromStores1];
  const obj3 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: null, subLabel: null, toggle: null };
  const callback = noop.useCallback(() => {
    if (stateFromStores) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
    }
  }, items2);
  const intl = stateFromStores(1114).intl;
  obj3.label = intl.string(stateFromStores1(3447).DIyQIF);
  const intl2 = stateFromStores(1114).intl;
  obj3.subLabel = intl2.string(stateFromStores1(3447).g2vHYJ);
  obj3.toggle = callback;
  return obj3;
}
