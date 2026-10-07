// === Module 15795: SettingsSecureFramesScreen ===

// Module 15795 (SettingsSecureFramesScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import UserActionCreators from "UserActionCreators" /* 7863 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9378 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function UserListItem(userId) {
  if (closure_11) {
    let TableRow = userId;
    let tmp14 = analyticsLocations;
    const cResult = userId(analyticsLocations[8]).c(27);
    const userId2 = userId.userId;
    closure_129_0 = userId2;
    ({ start: start2, end: end2, onPress: onPress2 } = userId);
    closure_129_1 = onPress2;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== userId2) {
      const fn = function o() {
        return UserStore.getUser(userId);
      };
      cResult[1] = userId2;
      cResult[2] = fn;
      let tmp19 = fn;
    } else {
      tmp19 = cResult[2];
    }
    const obj7 = userId(analyticsLocations[8]);
    const stateFromStores = TableRow(tmp14[9]).useStateFromStores(first, tmp19);
    const TableRowResult = TableRow(tmp14[9]);
    const secureFramesUserVerifiedKeys = TableRow(tmp14[10]).useSecureFramesUserVerifiedKeys(userId2);
    if (cResult[3] !== stateFromStores) {
      const formattedName = onPress(tmp14[11]).getFormattedName(stateFromStores);
      cResult[3] = stateFromStores;
      cResult[4] = formattedName;
      let tmp21 = formattedName;
      const obj10 = onPress(tmp14[11]);
    } else {
      tmp21 = cResult[4];
    }
    if (cResult[5] !== userId2) {
      const fn2 = function p() {
        const user = UserActionCreators.getUser(userId);
      };
      const items1 = [userId2];
      cResult[5] = userId2;
      cResult[6] = fn2;
      cResult[7] = items1;
      let tmp25 = items1;
      let tmp24 = fn2;
    } else {
      tmp24 = cResult[6];
      tmp25 = cResult[7];
    }
    const effect = noop.useEffect(tmp24, tmp25);
    if (cResult[8] === onPress2) {
      if (cResult[9] === userId2) {
        let tmp28 = cResult[10];
      }
      const analyticsLocations2 = onPress(tmp14[13])().analyticsLocations;
      closure_129_2 = analyticsLocations2;
      if (cResult[11] === analyticsLocations2) {
        if (cResult[12] === userId2) {
          let tmp30 = cResult[13];
        }
        if (cResult[14] !== stateFromStores) {
          if (null != stateFromStores) {
            const obj4 = { user: stateFromStores, guildId: "Array", size: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}" };
            const Avatar = TableRow(tmp14[15]).Avatar;
            obj4.size = TableRow(tmp14[15]).AvatarSizes.REFRESH_MEDIUM_32;
            class F {
              constructor() {
                obj = { userId, sourceAnalyticsLocations: analyticsLocations };
                tmp = closure_1(closure_2[14])(obj);
                return;
              }
            }
          }
          cResult[14] = stateFromStores;
          class F {
            constructor() {
              obj = { userId, sourceAnalyticsLocations: analyticsLocations };
              tmp = closure_1(closure_2[14])(obj);
              return;
            }
          }
          cResult[15] = null != stateFromStores;
          let tmp31 = tmp33;
        } else {
          tmp31 = cResult[15];
        }
        if (cResult[16] !== secureFramesUserVerifiedKeys.length) {
          const intl2 = TableRow(tmp14[16]).intl;
          const obj5 = { count: secureFramesUserVerifiedKeys.length };
          const formatToPlainStringResult = intl2.formatToPlainString(TableRow(tmp14[16]).t["/MBjYF"], obj5);
          class F {
            constructor() {
              obj = { userId, sourceAnalyticsLocations: analyticsLocations };
              tmp = closure_1(closure_2[14])(obj);
              return;
            }
          }
          cResult[16] = secureFramesUserVerifiedKeys.length;
          cResult[17] = formatToPlainStringResult;
          let tmp35 = formatToPlainStringResult;
        } else {
          tmp35 = cResult[17];
        }
        const _Symbol2 = Symbol;
        class F {
          constructor() {
            obj = { userId, sourceAnalyticsLocations: analyticsLocations };
            tmp = closure_1(closure_2[14])(obj);
            return;
          }
        }
        if (cResult[19] === end2) {
          if (cResult[20] === tmp30) {
            if (cResult[21] === tmp28) {
              if (cResult[22] === tmp21) {
                if (cResult[23] === start2) {
                  if (cResult[24] === tmp31) {
                  }
                }
              }
            }
          }
        }
        TableRow = TableRow(tmp14[18]).TableRow;
        const obj6 = { icon: tmp31, subLabel: tmp35, label: tmp21, start: start2, end: end2, onPress: tmp28, onLongPress: tmp30, trailing: tmp38 };
        tmp14 = closure_7(TableRow, obj6);
        cResult[19] = end2;
        cResult[20] = tmp30;
        cResult[21] = tmp28;
        cResult[22] = tmp21;
        cResult[23] = start2;
        cResult[24] = tmp31;
        cResult[25] = tmp35;
        cResult[26] = tmp14;
      }
      class F {
        constructor() {
          obj = { userId, sourceAnalyticsLocations: analyticsLocations };
          tmp = closure_1(closure_2[14])(obj);
          return;
        }
      }
      cResult[11] = analyticsLocations2;
      cResult[12] = userId2;
      cResult[13] = F;
      tmp30 = F;
    }
    const fn3 = function b() {
      onPress(userId);
    };
    cResult[8] = onPress2;
    cResult[9] = userId2;
    cResult[10] = fn3;
    tmp28 = fn3;
    const TableRowResult1 = TableRow(tmp14[10]);
  } else {
    userId = userId.userId;
    onPress = userId.onPress;
    class F {
      constructor() {
        obj = { userId, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[14])(obj);
        return;
      }
    }
    ({ start, end } = userId);
    const items2 = [UserStore];
    const stateFromStores1 = userId(analyticsLocations[9]).useStateFromStores(items2, () => UserStore.getUser(userId));
    const obj = userId(analyticsLocations[9]);
    const secureFramesUserVerifiedKeys1 = userId(analyticsLocations[10]).useSecureFramesUserVerifiedKeys(userId);
    const obj2 = userId(analyticsLocations[10]);
    const items3 = [userId];
    const formattedName1 = onPress(analyticsLocations[11]).getFormattedName(stateFromStores1);
    const effect1 = noop.useEffect(() => {
      const user = UserActionCreators.getUser(userId);
    }, items3);
    const items4 = [onPress, userId];
    const callback = noop.useCallback(() => {
      onPress(userId);
    }, items4);
    analyticsLocations = onPress(analyticsLocations[13])().analyticsLocations;
    const items5 = [analyticsLocations, userId];
    const callback1 = noop.useCallback(() => {
      showUserProfileActionSheetDefault({ userId, sourceAnalyticsLocations: analyticsLocations });
    }, items5);
    let tmp11Result = null != stateFromStores1;
    if (tmp11Result) {
      const obj8 = { user: stateFromStores1, guildId: "Array", size: tmp(tmp2[15]).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp11Result = closure_7(tmp(tmp2[15]).Avatar, obj8);
    }
    const obj9 = { icon: tmp11Result, subLabel: null, label: null, start: null, end: null, onPress: null, onLongPress: null, trailing: null };
    const intl = tmp(tmp2[16]).intl;
    const obj11 = { count: secureFramesUserVerifiedKeys1.length };
    obj9.subLabel = intl.formatToPlainString(userId(analyticsLocations[16]).t["/MBjYF"], obj11);
    obj9.label = formattedName1;
    obj9.start = start;
    obj9.end = end;
    obj9.onPress = callback;
    obj9.onLongPress = callback1;
    obj9.trailing = closure_7(userId(analyticsLocations[17]).TableRowArrow, {});
    return closure_7(userId(analyticsLocations[18]).TableRow, obj9);
  }
}
function renderItem(item) {
  item = item.item;
  if (item.type === constants.USER) {
    const obj = {};
    const merged = Object.assign(item);
    return React5(UserListItem, obj);
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  return type.type === constants.USER ? type.userId : undefined;
}
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, header: null, list: null };
let obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.header = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
obj2.list = { flexGrow: 1, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const constants = { USER: "USER" };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(secureFramesVerifiedUserIds[8]).c(21);
  const tmp4 = closure_9();
  const obj = navigation(secureFramesVerifiedUserIds[8]);
  const token = navigation(secureFramesVerifiedUserIds[19]).useToken(require("native").modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = navigation(secureFramesVerifiedUserIds[19]);
  navigation = navigation(secureFramesVerifiedUserIds[20]).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t(userId) {
      navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  importDefault = tmp7;
  const obj3 = navigation(secureFramesVerifiedUserIds[20]);
  secureFramesVerifiedUserIds = navigation(secureFramesVerifiedUserIds[21]).useSecureFramesVerifiedUserIds();
  if (cResult[2] === tmp7) {
    if (cResult[3] === secureFramesVerifiedUserIds) {
      if (0 === secureFramesVerifiedUserIds.length) {
        return null;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-sm/semibold", color: "text-default", children: null };
          const intl = tmp(tmp2[16]).intl;
          obj4.children = intl.string(tmp(tmp2[16]).t["5b3FNI"]);
          const tmp14 = closure_7(tmp(tmp2[22]).Text, obj4);
          cResult[8] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        const result = secureFramesVerifiedUserIds.length * token;
        if (cResult[9] !== result) {
          const obj5 = { minHeight: result };
          cResult[9] = result;
          cResult[10] = obj5;
          let tmp16 = obj5;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] !== tmp8) {
          const obj6 = { keyExtractor, getItemType, renderItem, data: tmp8 };
          const tmp22 = closure_7(tmp(tmp2[23]).FlashList, obj6);
          cResult[11] = tmp8;
          cResult[12] = tmp22;
          let tmp17 = tmp22;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] === tmp16) {
          if (cResult[14] === tmp17) {
            let tmp23 = cResult[15];
          }
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-xs/normal", color: "text-default", children: null };
            const intl2 = tmp(tmp2[16]).intl;
            const obj8 = { helpArticle: tmp(tmp2[24]).getSecureFramesVerifiedDevicesHelpdeskArticle() };
            obj7.children = intl2.format(tmp(tmp2[16]).t["7w9ymD"], obj8);
            const tmp29 = closure_7(tmp(tmp2[22]).Text, obj7);
            cResult[16] = tmp29;
            let tmp27 = tmp29;
            const tmpResult2 = tmp(tmp2[24]);
          } else {
            tmp27 = cResult[16];
          }
          if (cResult[17] === tmp4.list) {
            if (cResult[18] === tmp23) {
              if (cResult[19] === tmp27) {
                let tmp30 = cResult[20];
              }
              return tmp30;
            }
          }
          const obj9 = { style: tmp4.list, children: null };
          const items = [tmp12, tmp23, tmp27];
          obj9.children = items;
          const tmp33 = closure_8(View, obj9);
          cResult[17] = tmp4.list;
          cResult[18] = tmp23;
          cResult[19] = tmp27;
          cResult[20] = tmp33;
          tmp30 = tmp33;
        }
        const obj10 = { style: tmp16, children: tmp17 };
        const tmp26 = closure_7(View, obj10);
        cResult[13] = tmp16;
        cResult[14] = tmp17;
        cResult[15] = tmp26;
        tmp23 = tmp26;
      }
    }
  }
  if (cResult[5] === tmp7) {
    if (cResult[6] === secureFramesVerifiedUserIds.length) {
      let tmp9 = cResult[7];
    }
    const mapped = secureFramesVerifiedUserIds.map(tmp9);
    cResult[2] = tmp7;
    cResult[3] = secureFramesVerifiedUserIds;
    cResult[4] = mapped;
  }
  const fn2 = function _(userId, arg1) {
    return { type: constants.USER, userId, onPress, start: 0 === arg1, end: arg1 === secureFramesVerifiedUserIds.length - 1 };
  };
  cResult[5] = tmp7;
  cResult[6] = secureFramesVerifiedUserIds.length;
  cResult[7] = fn2;
  tmp9 = fn2;
  const tmpResult = navigation(secureFramesVerifiedUserIds[21]);
}) : (() => {
  const tmp = closure_9();
  const token = navigation(secureFramesVerifiedUserIds[19]).useToken(callback(secureFramesVerifiedUserIds[6]).modules.mobile.TABLE_ROW_HEIGHT);
  const obj = navigation(secureFramesVerifiedUserIds[19]);
  navigation = navigation(secureFramesVerifiedUserIds[20]).useNavigation();
  const items = [navigation];
  callback = noop.useCallback((userId) => {
    navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
  }, items);
  const obj2 = navigation(secureFramesVerifiedUserIds[20]);
  secureFramesVerifiedUserIds = navigation(secureFramesVerifiedUserIds[21]).useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp8 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    const obj4 = { style: tmp.list, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-default", children: null };
    const intl = tmp2(tmp3[16]).intl;
    obj5.children = intl.string(tmp2(tmp3[16]).t["5b3FNI"]);
    const items2 = [closure_7(tmp2(tmp3[22]).Text, obj5), , ];
    const obj6 = { style: null, children: null };
    const obj7 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj6.style = obj7;
    const obj8 = { keyExtractor, getItemType, renderItem, data: tmp7 };
    obj6.children = closure_7(tmp2(tmp3[23]).FlashList, obj8);
    items2[1] = closure_7(View, obj6);
    const obj9 = { variant: "text-xs/normal", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[16]).intl;
    const obj10 = { helpArticle: tmp2(tmp3[24]).getSecureFramesVerifiedDevicesHelpdeskArticle() };
    obj9.children = intl2.format(tmp2(tmp3[16]).t["7w9ymD"], obj10);
    items2[2] = closure_7(tmp2(tmp3[22]).Text, obj9);
    obj4.children = items2;
    tmp8 = closure_8(View, obj4);
    const tmp2Result = tmp2(tmp3[24]);
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let obj5 = { flexGrow: 1, gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["9Q/PQv"]);
    const tmp7 = React5(Text_Text.Text, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj4 = { helpArticle: SecureFramesUtils.getSecureFramesHelpdeskArticle() };
    obj3.children = intl2.format(util.t["8IwQfG"], obj4);
    const tmp10 = React5(Text_Text.Text, obj3);
    cResult[1] = tmp10;
    let tmp8 = tmp10;
    const tmpResult = SecureFramesUtils;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj5 = { style: tmp4.header, children: null };
    const items = [first, tmp8];
    obj5.children = items;
    const tmp14 = closure_1_8(View, obj5);
    cResult[2] = tmp4.header;
    cResult[3] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = React5(closure_16, {});
    cResult[4] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    if (cResult[6] === tmp11) {
      let tmp19 = cResult[7];
    }
    return tmp19;
  }
  const obj6 = { style: tmp4.container, children: null };
  const items1 = [tmp11, tmp15];
  obj6.children = items1;
  const tmp20 = closure_1_8(View, obj6);
  cResult[5] = tmp4.container;
  cResult[6] = tmp11;
  cResult[7] = tmp20;
  tmp19 = tmp20;
}) : (() => {
  const tmp = closure_9();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["9Q/PQv"]);
  const items = [React5(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  const obj5 = { helpArticle: SecureFramesUtils.getSecureFramesHelpdeskArticle() };
  obj4.children = intl2.format(util.t["8IwQfG"], obj5);
  items[1] = React5(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [closure_1_8(View, obj2), React5(closure_16, {})];
  obj.children = items1;
  return closure_1_8(View, obj);
});