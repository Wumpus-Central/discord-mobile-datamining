// === Module 15759: SettingsSecureFramesScreen ===

// Module 15759 (SettingsSecureFramesScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import UserActionCreators from "UserActionCreators" /* 7852 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9364 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation, user;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function UserListItem(userId) {
  let analyticsLocations;
  let end;
  let end2;
  let intl;
  let obj11;
  let onPress;
  let onPress2;
  let start;
  let start2;
  let tmp12Result2;
  if (closure_11) {
    let first;
    let tmp22;
    let tmp24;
    let tmp28;
    let tmp27;
    const obj7 = userId(analyticsLocations[8]);
    const cResult = obj7.c(27);
    const userId2 = userId.userId;
    ({ start: start2, end: end2, onPress: onPress2 } = userId);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== userId2) {
      const fn = function o() {
        return user.getUser(userId2);
      };
      cResult[1] = userId2;
      cResult[2] = fn;
      tmp22 = fn;
    } else {
      tmp22 = cResult[2];
    }
    const tmp16Result = userId(analyticsLocations[9]);
    const stateFromStores = tmp16Result.useStateFromStores(first, tmp22);
    const tmp16Result2 = userId(analyticsLocations[10]);
    const secureFramesUserVerifiedKeys = tmp16Result2.useSecureFramesUserVerifiedKeys(userId2);
    if (cResult[3] !== stateFromStores) {
      const obj10 = onPress(analyticsLocations[11]);
      const formattedName = obj10.getFormattedName(stateFromStores);
      cResult[3] = stateFromStores;
      cResult[4] = formattedName;
      tmp24 = formattedName;
    } else {
      tmp24 = cResult[4];
    }
    if (cResult[5] !== userId2) {
      const fn2 = function p() {
        const obj = userId(analyticsLocations[12]);
        user = obj.getUser(userId2);
      };
      const items1 = [userId2];
      cResult[5] = userId2;
      cResult[6] = fn2;
      cResult[7] = items1;
      tmp28 = items1;
      tmp27 = fn2;
    } else {
      tmp27 = cResult[6];
      tmp28 = cResult[7];
    }
    const effect = react.useEffect(tmp27, tmp28);
    if (cResult[8] === onPress2) {
      let tmp31;
      if (cResult[9] === userId2) {
        tmp31 = cResult[10];
      }
      const analyticsLocations2 = onPress(tmp17[13])().analyticsLocations;
      if (cResult[11] === analyticsLocations2) {
        let tmp33;
        let tmp34;
        let tmp38;
        if (cResult[12] === userId2) {
          tmp33 = cResult[13];
        }
        if (cResult[14] !== stateFromStores) {
          if (null != stateFromStores) {
            ({ user: stateFromStores, guildId: "Array", size: userId(analyticsLocations[15]).AvatarSizes.REFRESH_MEDIUM_32 });
            const Avatar2 = tmp16(tmp17[15]).Avatar;
            class F {
              constructor() {
                const obj = { userId: userId2, sourceAnalyticsLocations: analyticsLocations2 };
                onPress(analyticsLocations[14])(obj);
              }
            }
          }
          cResult[14] = stateFromStores;
          class F {
            constructor() {
              const obj = { userId: userId2, sourceAnalyticsLocations: analyticsLocations2 };
              onPress(analyticsLocations[14])(obj);
            }
          }
          cResult[15] = null != stateFromStores;
          tmp34 = tmp36;
        } else {
          tmp34 = cResult[15];
        }
        if (cResult[16] !== secureFramesUserVerifiedKeys.length) {
          const intl2 = tmp16(tmp17[16]).intl;
          const obj5 = { count: secureFramesUserVerifiedKeys.length };
          const formatToPlainStringResult = intl2.formatToPlainString(userId(analyticsLocations[16]).t["/MBjYF"], obj5);
          class F {
            constructor() {
              const obj = { userId: userId2, sourceAnalyticsLocations: analyticsLocations2 };
              onPress(analyticsLocations[14])(obj);
            }
          }
          cResult[16] = secureFramesUserVerifiedKeys.length;
          cResult[17] = formatToPlainStringResult;
          tmp38 = formatToPlainStringResult;
        } else {
          tmp38 = cResult[17];
        }
        const _Symbol2 = Symbol;
        class F {
          constructor() {
            const obj = { userId: userId2, sourceAnalyticsLocations: analyticsLocations2 };
            onPress(analyticsLocations[14])(obj);
          }
        }
        if (cResult[19] === end2) {
          if (cResult[20] === tmp33) {
            if (cResult[21] === tmp31) {
              if (cResult[22] === tmp24) {
                if (cResult[23] === start2) {
                  if (cResult[24] === tmp34) {
                    let tmp42;
                    if (cResult[25] === tmp38) {
                      tmp42 = cResult[26];
                    }
                    tmp12Result2 = tmp42;
                  }
                }
              }
            }
          }
        }
        const obj6 = { icon: tmp34, subLabel: tmp38, label: tmp24, start: start2, end: end2, onPress: tmp31, onLongPress: tmp33, trailing: tmp41 };
        const tmp44 = closure_7(userId(analyticsLocations[18]).TableRow, obj6);
        cResult[19] = end2;
        cResult[20] = tmp33;
        cResult[21] = tmp31;
        cResult[22] = tmp24;
        cResult[23] = start2;
        cResult[24] = tmp34;
        cResult[25] = tmp38;
        cResult[26] = tmp44;
        tmp42 = tmp44;
      }
      class F {
        constructor() {
          const obj = { userId: userId2, sourceAnalyticsLocations: analyticsLocations2 };
          onPress(analyticsLocations[14])(obj);
        }
      }
      cResult[11] = analyticsLocations2;
      cResult[12] = userId2;
      cResult[13] = F;
      tmp33 = F;
    }
    const fn3 = function b() {
      onPress2(userId2);
    };
    cResult[8] = onPress2;
    cResult[9] = userId2;
    cResult[10] = fn3;
    tmp31 = fn3;
  } else {
    userId = userId.userId;
    onPress = userId.onPress;
    class F {
      constructor() {
        const obj = { userId: userId2, sourceAnalyticsLocations: analyticsLocations2 };
        onPress(analyticsLocations[14])(obj);
      }
    }
    ({ start, end } = userId);
    let obj = userId(analyticsLocations[9]);
    const items2 = [UserStore];
    const stateFromStores1 = obj.useStateFromStores(items2, () => UserStore.getUser(userId));
    const obj2 = userId(analyticsLocations[10]);
    const secureFramesUserVerifiedKeys1 = obj2.useSecureFramesUserVerifiedKeys(userId);
    const items3 = [userId];
    const obj3 = onPress(analyticsLocations[11]);
    const formattedName1 = obj3.getFormattedName(stateFromStores1);
    const effect1 = react.useEffect(() => {
      const obj = UserActionCreators;
      user = obj.getUser(userId);
    }, items3);
    const items4 = [onPress, userId];
    const callback = react.useCallback(() => {
      onPress(userId);
    }, items4);
    analyticsLocations = onPress(analyticsLocations[13])().analyticsLocations;
    const items5 = [analyticsLocations, userId];
    const callback1 = react.useCallback(() => {
      const obj = { userId, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }, items5);
    let tmp12Result = null != stateFromStores1;
    const TableRow = userId(analyticsLocations[18]).TableRow;
    if (tmp12Result) {
      const obj8 = { user: stateFromStores1, guildId: "Array", size: userId(analyticsLocations[15]).AvatarSizes.REFRESH_MEDIUM_32 };
      const Avatar = tmp2(tmp3[15]).Avatar;
      tmp12Result = closure_7(Avatar, obj8);
    }
    const obj9 = { icon: tmp12Result, subLabel: intl.formatToPlainString(userId(analyticsLocations[16]).t["/MBjYF"], obj11), label: formattedName1, start, end, onPress: callback, onLongPress: callback1, trailing: closure_7(userId(analyticsLocations[17]).TableRowArrow, {}) };
    intl = tmp2(tmp3[16]).intl;
    obj11 = { count: secureFramesUserVerifiedKeys1.length };
    tmp12Result2 = closure_7(TableRow, obj9);
  }
  return tmp12Result2;
}
function renderItem(item) {
  item = item.item;
  if (item.type === constants.USER) {
    const obj = {};
    const merged = Object.assign(item);
    return metroImportDefault(UserListItem, obj);
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  return type.type === constants.USER ? type.userId : undefined;
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, list: obj4 };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
obj4 = { flexGrow: 1, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const constants = { USER: "USER" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let format;
  let intl;
  let items;
  let obj8;
  let onPress;
  let secureFramesVerifiedUserIds;
  let tmp7;
  let tmp8;
  let tmpResult2;
  let v7w9ymD;
  let obj = navigation(secureFramesVerifiedUserIds[8]);
  const cResult = obj.c(21);
  const tmp4 = closure_9();
  const obj2 = navigation(secureFramesVerifiedUserIds[19]);
  const token = obj2.useToken(require("native").modules.mobile.TABLE_ROW_HEIGHT);
  const obj3 = navigation(secureFramesVerifiedUserIds[20]);
  navigation = obj3.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t(userId) {
      const obj = { userId };
      navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, obj);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  importDefault = tmp7;
  const tmpResult = navigation(secureFramesVerifiedUserIds[21]);
  secureFramesVerifiedUserIds = tmpResult.useSecureFramesVerifiedUserIds();
  if (cResult[2] === tmp7) {
    if (cResult[3] === secureFramesVerifiedUserIds) {
      tmp8 = cResult[4];
    }
    if (0 === secureFramesVerifiedUserIds.length) {
      return null;
    } else {
      let tmp11;
      let tmp15;
      let tmp16;
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(navigation(secureFramesVerifiedUserIds[16]).t["5b3FNI"]) };
        const Text = tmp(tmp2[22]).Text;
        intl = tmp(tmp2[16]).intl;
        const tmp13 = closure_7(Text, obj4);
        cResult[8] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[8];
      }
      const result = secureFramesVerifiedUserIds.length * token;
      if (cResult[9] !== result) {
        const obj5 = { minHeight: result };
        cResult[9] = result;
        cResult[10] = obj5;
        tmp15 = obj5;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] !== tmp8) {
        const obj6 = { keyExtractor, getItemType, renderItem, data: tmp8 };
        const tmp21 = closure_7(navigation(secureFramesVerifiedUserIds[23]).FlashList, obj6);
        cResult[11] = tmp8;
        cResult[12] = tmp21;
        tmp16 = tmp21;
      } else {
        tmp16 = cResult[12];
      }
      if (cResult[13] === tmp15) {
        let tmp22;
        let tmp26;
        if (cResult[14] === tmp16) {
          tmp22 = cResult[15];
        }
        const _Symbol = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-xs/normal", color: "text-default", children: format(v7w9ymD, obj8) };
          const Text2 = tmp(tmp2[22]).Text;
          const intl2 = tmp(tmp2[16]).intl;
          format = intl2.format;
          obj8 = { helpArticle: tmpResult2.getSecureFramesVerifiedDevicesHelpdeskArticle() };
          v7w9ymD = tmp(tmp2[16]).t["7w9ymD"];
          tmpResult2 = navigation(secureFramesVerifiedUserIds[24]);
          const tmp29 = closure_7(Text2, obj7);
          cResult[16] = tmp29;
          tmp26 = tmp29;
        } else {
          tmp26 = cResult[16];
        }
        if (cResult[17] === tmp4.list) {
          if (cResult[18] === tmp22) {
            let tmp30;
            if (cResult[19] === tmp26) {
              tmp30 = cResult[20];
            }
            return tmp30;
          }
        }
        const obj9 = { style: tmp4.list, children: items };
        items = [tmp11, tmp22, tmp26];
        const tmp33 = closure_8(View, obj9);
        cResult[17] = tmp4.list;
        cResult[18] = tmp22;
        cResult[19] = tmp26;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      }
      const obj10 = { style: tmp15, children: tmp16 };
      const tmp25 = closure_7(View, obj10);
      cResult[13] = tmp15;
      cResult[14] = tmp16;
      cResult[15] = tmp25;
      tmp22 = tmp25;
    }
  }
  if (cResult[5] === tmp7) {
    let tmp9;
    if (cResult[6] === secureFramesVerifiedUserIds.length) {
      tmp9 = cResult[7];
    }
    const mapped = secureFramesVerifiedUserIds.map(tmp9);
    cResult[2] = tmp7;
    cResult[3] = secureFramesVerifiedUserIds;
    cResult[4] = mapped;
    tmp8 = mapped;
  }
  const fn2 = function _(userId, arg1) {
    return { type: constants.USER, userId, onPress, start: 0 === arg1, end: arg1 === secureFramesVerifiedUserIds.length - 1 };
  };
  cResult[5] = tmp7;
  cResult[6] = secureFramesVerifiedUserIds.length;
  cResult[7] = fn2;
  tmp9 = fn2;
}) : (() => {
  let callback;
  let format;
  let intl;
  let items2;
  let obj10;
  let obj7;
  let obj8;
  let secureFramesVerifiedUserIds;
  let tmp2Result;
  let v7w9ymD;
  const tmp = closure_9();
  let obj = navigation(secureFramesVerifiedUserIds[19]);
  const token = obj.useToken(callback(secureFramesVerifiedUserIds[6]).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = navigation(secureFramesVerifiedUserIds[20]);
  navigation = obj2.useNavigation();
  const items = [navigation];
  callback = react.useCallback((userId) => {
    const obj = { userId };
    navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, obj);
  }, items);
  const obj3 = navigation(secureFramesVerifiedUserIds[21]);
  secureFramesVerifiedUserIds = obj3.useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp8 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    const obj4 = { style: tmp.list, children: items2 };
    const obj5 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(navigation(secureFramesVerifiedUserIds[16]).t["5b3FNI"]) };
    const Text = tmp2(tmp3[22]).Text;
    intl = tmp2(tmp3[16]).intl;
    items2 = [closure_7(Text, obj5), , ];
    const obj6 = { style: obj7, children: closure_7(navigation(secureFramesVerifiedUserIds[23]).FlashList, obj8) };
    obj7 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj8 = { keyExtractor, getItemType, renderItem, data: tmp7 };
    items2[1] = closure_7(View, obj6);
    const obj9 = { variant: "text-xs/normal", color: "text-default", children: format(v7w9ymD, obj10) };
    const Text2 = tmp2(tmp3[22]).Text;
    const intl2 = tmp2(tmp3[16]).intl;
    format = intl2.format;
    obj10 = { helpArticle: tmp2Result.getSecureFramesVerifiedDevicesHelpdeskArticle() };
    v7w9ymD = tmp2(tmp3[16]).t["7w9ymD"];
    tmp2Result = navigation(secureFramesVerifiedUserIds[24]);
    items2[2] = closure_7(Text2, obj9);
    tmp8 = closure_8(View, obj4);
  }
  return tmp8;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let format;
  let intl;
  let items;
  let items1;
  let obj4;
  let tmp12;
  let tmp16;
  let tmp8;
  let tmpResult;
  let v8IwQfG;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9Q/PQv"]) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    const tmp7 = metroImportDefault(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: format(v8IwQfG, obj4) };
    const Text2 = Text_Text.Text;
    const intl2 = intl3.intl;
    format = intl2.format;
    obj4 = { helpArticle: tmpResult.getSecureFramesHelpdeskArticle() };
    v8IwQfG = intl3.t["8IwQfG"];
    tmpResult = SecureFramesUtils;
    const tmp11 = metroImportDefault(Text2, obj3);
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj5 = { style: tmp4.header, children: items };
    items = [first, tmp8];
    const tmp15 = metroImportAll(View, obj5);
    cResult[2] = tmp4.header;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = metroImportDefault(closure_16, {});
    cResult[4] = tmp19;
    tmp16 = tmp19;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    let tmp20;
    if (cResult[6] === tmp12) {
      tmp20 = cResult[7];
    }
    return tmp20;
  }
  const obj6 = { style: tmp4.container, children: items1 };
  items1 = [tmp12, tmp16];
  const tmp21 = metroImportAll(View, obj6);
  cResult[5] = tmp4.container;
  cResult[6] = tmp12;
  cResult[7] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  let format;
  let intl;
  let items;
  let items1;
  let obj5;
  let obj6;
  let v8IwQfG;
  const tmp = closure_9();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9Q/PQv"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: format(v8IwQfG, obj5) };
  const Text2 = Text_Text.Text;
  const intl2 = intl3.intl;
  format = intl2.format;
  obj5 = { helpArticle: obj6.getSecureFramesHelpdeskArticle() };
  v8IwQfG = intl3.t["8IwQfG"];
  obj6 = SecureFramesUtils;
  items[1] = metroImportDefault(Text2, obj4);
  items1 = [metroImportAll(View, obj2), metroImportDefault(closure_16, {})];
  return metroImportAll(View, obj);
});
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default tmp4;