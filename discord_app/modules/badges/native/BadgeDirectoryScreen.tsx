// === Module 10900: BadgeDirectoryScreen ===

// Module 10900 (BadgeDirectoryScreen)
import nativeDefault from "native" /* 587 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10899 */;
import BadgeDirectoryViewDefault from "BadgeDirectoryView" /* 10901 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const jsx = fn(21).jsx;
let c6 = "badge-directory";
const createStyles = fn(4896);
let obj2 = { sheetHeader: { height: fn(6075).NAV_BAR_HEIGHT }, view: null };
let obj3 = { height: fn(6075).NAV_BAR_HEIGHT };
obj2.view = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  let Navigator = targetUserId;
  let tmp = dependencyMap;
  const cResult = targetUserId(576).c(20);
  targetUserId = targetUserId.targetUserId;
  let view = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const obj = targetUserId(576);
  const stateFromStores = Navigator(504).useStateFromStores(tmp3, tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== targetUserId) {
    const fn2 = function f() {
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
    };
    cResult[3] = targetUserId;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  const NavigatorResult = Navigator(504);
  const stateFromStores1 = Navigator(504).useStateFromStores(tmp7, tmp9);
  if (cResult[5] === (null != targetUserId && targetUserId !== stateFromStores)) {
    if (cResult[6] === stateFromStores1) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const headerCloseButton = Navigator(6017).getHeaderCloseButton(Navigator(10899).closeBadgeDirectoryScreen);
        cResult[8] = headerCloseButton;
        let tmp15 = headerCloseButton;
        const NavigatorResult2 = Navigator(6017);
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === targetUserId) {
        if (cResult[10] === stateFromStores1) {
          if (cResult[11] === tmp12) {
            let sheetHeader = cResult[12];
          }
          if (NavigatorResult3.isBadgeDirectoryIOSPageSheet()) {
            if (cResult[13] === sheetHeader) {
              if (cResult[14] === view.sheetHeader) {
              }
            }
            Navigator = Navigator(6503).Navigator;
            const obj2 = { screens: sheetHeader, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null };
            ({ sheetHeader: obj9.headerStyle, view: obj9.viewStyle } = view);
            tmp = <Navigator screens={sheetHeader} initialRouteName={initialRouteName} headerStatusBarHeight={0} headerStyle={null} viewStyle={null} />;
            cResult[13] = sheetHeader;
            sheetHeader = view.sheetHeader;
            cResult[14] = sheetHeader;
            view = view.view;
            cResult[15] = view;
            cResult[16] = tmp;
          } else {
            if (cResult[17] === sheetHeader) {
              if (cResult[18] === view.view) {
                let tmp18 = cResult[19];
              }
              return tmp18;
            }
            const obj3 = { screens: sheetHeader, initialRouteName, viewStyle: view.view };
            const tmp21 = jsx(Navigator(10989).Modal, { screens: sheetHeader, initialRouteName, viewStyle: view.view });
            cResult[17] = sheetHeader;
            cResult[18] = view.view;
            cResult[19] = tmp21;
            tmp18 = tmp21;
          }
          NavigatorResult3 = Navigator(10899);
        }
      }
      const obj4 = {};
      const obj5 = {
        title: cResult[7],
        headerLeft: tmp15,
        render() {
              return jsx(BadgeDirectoryViewDefault, { targetUserId, targetUsername: stateFromStores1 });
            }
      };
      obj4[initialRouteName] = obj5;
      cResult[9] = targetUserId;
      cResult[10] = stateFromStores1;
      cResult[11] = cResult[7];
      cResult[12] = obj4;
      sheetHeader = obj4;
    }
  }
  if (!(null != targetUserId && targetUserId !== stateFromStores)) {
    const intl = Navigator(1126).intl;
    let stringResult = intl.string(Navigator(1126).t.UqnlQF);
    cResult[5] = tmp11;
    cResult[6] = stateFromStores1;
    cResult[7] = stringResult;
  }
  const intl2 = Navigator(1126).intl;
  stringResult = intl2.formatToPlainString(Navigator(1126).t.EIcwoe, { username: stateFromStores1 });
  const NavigatorResult1 = Navigator(504);
}) : ((targetUserId) => {
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
        const intl2 = tmp2(1126).intl;
        const obj3 = { username: stateFromStores1 };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.EIcwoe, obj3);
      }
      dependencyMap = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId, stateFromStores1];
      const memo = noop.useMemo(() => {
        const obj = {};
        const obj2 = {
          title,
          headerLeft: NavigatorHeader.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(stateFromStores1(c2[12]), { targetUserId, targetUsername });
          }
        };
        obj[c6] = obj2;
        return obj;
      }, items2);
      if (tmp2Result.isBadgeDirectoryIOSPageSheet()) {
        const obj4 = { screens: memo, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null };
        ({ sheetHeader: obj6.headerStyle, view: obj6.viewStyle } = tmp);
        let tmp9Result = jsx(tmp2(6503).Navigator, { screens: memo, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null });
      } else {
        const obj5 = { screens: memo, initialRouteName, viewStyle: tmp.view };
        tmp9Result = jsx(tmp2(10989).Modal, { screens: memo, initialRouteName, viewStyle: tmp.view });
      }
      return tmp9Result;
    }
  }
  const intl = tmp2(1126).intl;
  formatToPlainStringResult = intl.string(tmp2(1126).t.UqnlQF);
  let obj2 = targetUserId(504);
});