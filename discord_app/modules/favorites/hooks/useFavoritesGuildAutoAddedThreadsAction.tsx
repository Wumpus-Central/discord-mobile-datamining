// === Module 15641: useFavoritesGuildAutoAddedThreadsAction ===

// Module 15641 (useFavoritesGuildAutoAddedThreadsAction)
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "initializeFromUserSettings" /* 1394 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  let obj = hasAccess(10226);
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
  obj2 = hasAccess(589);
  const items1 = [closure_5];
  const stateFromStores = hasAccess(589).useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [hasAccess, stateFromStores];
  obj = { isAvailable: hasAccess, isEnabled: stateFromStores, label: null, subLabel: null, toggle: null };
  const callback = React.useCallback(() => {
    if (hasAccess) {
      const result = hasAccess(closure_1_2[5]).setFavoritesAutoAddJoinedThreads(!stateFromStores);
      const obj = hasAccess(closure_1_2[5]);
    }
  }, items2);
  const intl = tmp(1236).intl;
  obj[2] = intl.string(stateFromStores(3147).DIyQIF);
  const intl2 = tmp(1236).intl;
  obj[3] = intl2.string(stateFromStores(3147).g2vHYJ);
  obj[4] = callback;
  return obj;
};