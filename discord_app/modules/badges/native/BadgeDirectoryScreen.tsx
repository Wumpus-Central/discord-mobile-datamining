// === Module 10656: BadgeDirectoryScreen ===

// Module 10656 (BadgeDirectoryScreen)
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10655 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const jsx = fn(21).jsx;
let c6 = "badge-directory";
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default function BadgeDirectoryScreen(targetUserId) {
  targetUserId = targetUserId.targetUserId;
  c1 = undefined;
  const items = [UserStore];
  const stateFromStores = targetUserId(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = targetUserId(504);
  const items1 = [UserStore];
  const stateFromStores1 = targetUserId(504).useStateFromStores(items1, () => {
    let tmp2;
    if (null != targetUserId) {
      const user = UserStore.getUser(tmp);
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  if (null != targetUserId) {
    if (targetUserId !== stateFromStores) {
      if (null != stateFromStores1) {
        const intl2 = tmp(1115).intl;
        const obj3 = { username: stateFromStores1 };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.EIcwoe, obj3);
      }
      c1 = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId];
      const memo = noop.useMemo(() => {
        const obj = {};
        const obj2 = {
          title,
          headerLeft: NavigatorHeader.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(c1(dependencyMap[7]), { targetUserId });
          }
        };
        obj[c6] = obj2;
        return obj;
      }, items2);
      const obj4 = { screens: memo, initialRouteName };
      return jsx(tmp(10769).Modal, { screens: memo, initialRouteName });
    }
  }
  const intl = tmp(1115).intl;
  formatToPlainStringResult = intl.string(tmp(1115).t.UqnlQF);
  let obj2 = targetUserId(504);
};