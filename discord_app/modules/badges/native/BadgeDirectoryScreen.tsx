// === Module 10887: BadgeDirectoryScreen ===

// Module 10887 (BadgeDirectoryScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10886 */;
import BadgeDirectoryViewDefault from "BadgeDirectoryView" /* 10888 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser, dependencyMap, targetUserId;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let c6 = "badge-directory";
let createStyles = createStyles_mod;
let obj = { sheetHeader: obj2, view: obj3 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_7 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  let tmp11;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = targetUserId;
  const obj = targetUserId(576);
  const cResult = obj.c(20);
  targetUserId = targetUserId.targetUserId;
  const tmp4 = closure_7();
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
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
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
    tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
  if (cResult[5] === (null != targetUserId && targetUserId !== stateFromStores)) {
    let tmp16;
    if (cResult[6] === stateFromStores1) {
      tmp14 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult5 = tmp(6010);
      const headerCloseButton = tmpResult5.getHeaderCloseButton(tmp(10886).closeBadgeDirectoryScreen);
      cResult[8] = headerCloseButton;
      tmp16 = headerCloseButton;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === targetUserId) {
      if (cResult[10] === stateFromStores1) {
        let tmp18;
        let tmp20;
        if (cResult[11] === tmp14) {
          tmp18 = cResult[12];
        }
        const tmpResult6 = tmp(10886);
        if (tmpResult6.isBadgeDirectoryIOSPageSheet()) {
          if (cResult[13] === tmp18) {
            if (cResult[14] === tmp4.sheetHeader) {
              let tmp24;
              if (cResult[15] === tmp4.view) {
                tmp24 = cResult[16];
              }
              tmp20 = tmp24;
            }
          }
          ({ sheetHeader: obj10.headerStyle, view: obj10.viewStyle } = tmp4);
          const tmp27 = jsx(tmp(6496).Navigator, { screens: tmp18, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null });
          cResult[13] = tmp18;
          cResult[14] = tmp4.sheetHeader;
          cResult[15] = tmp4.view;
          cResult[16] = tmp27;
          tmp24 = tmp27;
        } else {
          if (cResult[17] === tmp18) {
            if (cResult[18] === tmp4.view) {
              tmp20 = cResult[19];
            }
          }
          const tmp23 = jsx(tmp(10976).Modal, { screens: tmp18, initialRouteName, viewStyle: tmp4.view });
          cResult[17] = tmp18;
          cResult[18] = tmp4.view;
          cResult[19] = tmp23;
          tmp20 = tmp23;
        }
        return tmp20;
      }
    }
    const obj4 = {};
    const obj5 = {
      title: tmp14,
      headerLeft: tmp16,
      render() {
          return jsx(BadgeDirectoryViewDefault, { targetUserId, targetUsername: stateFromStores1 });
        }
    };
    obj4[initialRouteName] = obj5;
    cResult[9] = targetUserId;
    cResult[10] = stateFromStores1;
    cResult[11] = tmp14;
    cResult[12] = obj4;
    tmp18 = obj4;
  }
  if (null != targetUserId && targetUserId !== stateFromStores) {
    let formatToPlainStringResult;
    if (null != stateFromStores1) {
      const intl2 = tmp(1126).intl;
      const obj6 = { username: stateFromStores1 };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.EIcwoe, obj6);
    }
    cResult[5] = null != targetUserId && targetUserId !== stateFromStores;
    cResult[6] = stateFromStores1;
    cResult[7] = formatToPlainStringResult;
    tmp14 = formatToPlainStringResult;
  }
  const intl = tmp(1126).intl;
  formatToPlainStringResult = intl.string(tmp(1126).t.UqnlQF);
}) : ((targetUserId) => {
  let title;
  targetUserId = targetUserId.targetUserId;
  dependencyMap = undefined;
  const tmp = closure_7();
  let obj = targetUserId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = targetUserId(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
      let formatToPlainStringResult;
      let tmp9Result;
      if (null != stateFromStores1) {
        const intl2 = tmp2(1126).intl;
        let obj3 = { username: stateFromStores1 };
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.EIcwoe, obj3);
      }
      dependencyMap = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId, stateFromStores1];
      const memo = react.useMemo(() => {
        let obj3;
        let targetUsername;
        const obj = {};
        const obj2 = {
          title,
          headerLeft: obj3.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(stateFromStores1(c2[12]), { targetUserId, targetUsername });
          }
        };
        obj[c6] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      }, items2);
      const tmp2Result = targetUserId(10886);
      if (tmp2Result.isBadgeDirectoryIOSPageSheet()) {
        ({ sheetHeader: obj6.headerStyle, view: obj6.viewStyle } = tmp);
        tmp9Result = jsx(tmp2(6496).Navigator, { screens: memo, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null });
      } else {
        tmp9Result = jsx(tmp2(10976).Modal, { screens: memo, initialRouteName, viewStyle: tmp.view });
      }
      return tmp9Result;
    }
  }
  const intl = tmp2(1126).intl;
  formatToPlainStringResult = intl.string(tmp2(1126).t.UqnlQF);
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default tmp3;