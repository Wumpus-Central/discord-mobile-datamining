// discord_app/modules/badges/native/BadgeDirectoryScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let c6 = "badge-directory";
const createStyles = fn(5014);
let obj2 = { sheetHeader: { height: fn(5586).NAV_BAR_HEIGHT }, view: null };
let obj3 = { height: fn(5586).NAV_BAR_HEIGHT };
obj2.view = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default function BadgeDirectoryScreen(targetUserId) {
  targetUserId = targetUserId.targetUserId;
  dependencyMap = undefined;
  const tmp = closure_7();
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
    if (null != targetUserId) {
      const user = UserStore.getUser(tmp);
      let globalName;
      if (user != null) {
        globalName = user.globalName;
      }
      if (globalName == null) {
        let username;
        if (user != null) {
          username = user.username;
        }
        globalName = username;
      }
      return globalName;
    }
  });
  if (null != targetUserId) {
    if (targetUserId !== stateFromStores) {
      if (null != stateFromStores1) {
        const intl2 = tmp2(1113).intl;
        const obj3 = { username: stateFromStores1 };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1113).t.EIcwoe, obj3);
      }
      dependencyMap = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId, stateFromStores1];
      const memo = noop.useMemo(() => {
        const obj = {};
        const obj2 = {
          title,
          headerLeft: NavigatorHeader.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(stateFromStores1(c2[10]), { targetUserId, targetUsername });
          },
        };
        obj[c6] = obj2;
        return obj;
      }, items2);
      if (tmp2Result.isBadgeDirectoryIOSPageSheet()) {
        const obj4 = { screens: memo, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null };
        ({ sheetHeader: obj6.headerStyle, view: obj6.viewStyle } = tmp);
        let tmp9Result = jsx(tmp2(7169).Navigator, {
          screens: memo,
          initialRouteName,
          headerStatusBarHeight: 0,
          headerStyle: null,
          viewStyle: null,
        });
      } else {
        const obj5 = { screens: memo, initialRouteName, viewStyle: tmp.view };
        tmp9Result = jsx(tmp2(11481).Modal, { screens: memo, initialRouteName, viewStyle: tmp.view });
      }
      return tmp9Result;
    }
  }
  const intl = tmp2(1113).intl;
  formatToPlainStringResult = intl.string(tmp2(1113).t.UqnlQF);
  let obj2 = targetUserId(504);
}
