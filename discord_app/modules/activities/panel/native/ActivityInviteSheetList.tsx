// === Module 17210: ActivityInviteSheetList ===

// Module 17210 (ActivityInviteSheetList)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import ActivityInviteSheetRowDefault from "ActivityInviteSheetRow" /* 17211 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let data;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function keyExtractor(item) {
  return item.item.id;
}
const Fonts = Constants.Fonts;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { emptyTitle: obj2, emptyBody: obj3, goToFriendsLink: { textAlign: "center" } };
obj2 = { textTransform: "none", lineHeight: 24 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { lineHeight: 20, fontWeight: "600" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let obj3;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(16);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t.dz4UlO);
    const intl2 = intl5.intl;
    const stringResult1 = intl2.string(intl5.t.MBQBI7);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === tmp4.emptyBody) {
    let tmp9;
    let tmp11;
    let tmp13;
    let tmp12;
    let tmp15;
    let tmp16;
    let tmp18;
    if (cResult[3] === tmp4.emptyTitle) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function b() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = RootNavigationRef;
        const rootNavigationRef = obj2.getRootNavigationRef();
        if (null != rootNavigationRef) {
          const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
          rootNavigationRef.navigate("friends", obj3);
        }
      };
      cResult[5] = fn;
      tmp11 = fn;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl5.intl;
      const stringResult2 = intl3.string(intl5.t.a7FVbE);
      const rect = { top: 8, left: 8, bottom: 8, right: 8 };
      cResult[6] = stringResult2;
      cResult[7] = rect;
      tmp13 = rect;
      tmp12 = stringResult2;
    } else {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp4.goToFriendsLink) {
      const items = [tmp4.goToFriendsLink];
      cResult[8] = tmp4.goToFriendsLink;
      cResult[9] = items;
      tmp15 = items;
    } else {
      tmp15 = cResult[9];
    }
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl5.intl;
      const stringResult3 = intl4.string(intl5.t.a7FVbE);
      cResult[10] = stringResult3;
      tmp16 = stringResult3;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] !== tmp15) {
      let obj2 = { onPress: tmp11, accessibilityRole: "link", accessibilityLabel: tmp12, hitSlop: tmp13, children: React3(Text_Text.Text, obj3) };
      const PressableOpacity = Pressables.PressableOpacity;
      obj3 = { style: tmp15, variant: "text-sm/semibold", color: "text-link", children: tmp16 };
      const tmp20 = React3(PressableOpacity, obj2);
      cResult[11] = tmp15;
      cResult[12] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[12];
    }
    if (cResult[13] === tmp9) {
      let tmp21;
      if (cResult[14] === tmp18) {
        tmp21 = cResult[15];
      }
      return tmp21;
    }
    const obj4 = { children: items1 };
    items1 = [tmp9, tmp18];
    const tmp24 = metroRequire(hasOwnProperty, obj4);
    cResult[13] = tmp9;
    cResult[14] = tmp18;
    cResult[15] = tmp24;
    tmp21 = tmp24;
  }
  const obj5 = { title: tmp5, body: tmp6, titleStyle: tmp4.emptyTitle, bodyStyle: tmp4.emptyBody };
  const tmp10 = React3(native.RefreshEmptyState, obj5);
  cResult[2] = tmp4.emptyBody;
  cResult[3] = tmp4.emptyTitle;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj7;
  const tmp = closure_7();
  let obj = { children: items };
  let obj3 = { title: intl.string(intl5.t.dz4UlO), body: intl2.string(intl5.t.MBQBI7), titleStyle: null, bodyStyle: null };
  const RefreshEmptyState = native.RefreshEmptyState;
  intl = intl5.intl;
  intl2 = intl5.intl;
  ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
  items = [React3(RefreshEmptyState, obj3), ];
  const obj4 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = RootNavigationRef;
      const rootNavigationRef = obj2.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
        rootNavigationRef.navigate("friends", obj3);
      }
    },
    accessibilityRole: "link",
    accessibilityLabel: intl3.string(intl5.t.a7FVbE),
    hitSlop: { top: 8, left: 8, bottom: 8, right: 8 },
    children: React3(Text, obj7)
  };
  const PressableOpacity = Pressables.PressableOpacity;
  intl3 = intl5.intl;
  obj7 = { style: items1, variant: "text-sm/semibold", color: "text-link", children: intl4.string(intl5.t.a7FVbE) };
  items1 = [tmp.goToFriendsLink];
  Text = Text_Text.Text;
  intl4 = intl5.intl;
  items[1] = React3(PressableOpacity, obj4);
  return metroRequire(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((data) => {
  let getSendState;
  let tmp = data;
  let obj = data(getSendState[7]);
  const cResult = obj.c(14);
  data = data.data;
  const error = data.error;
  getSendState = data.getSendState;
  const isSubmitting = data.isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  if (cResult[0] === data.length) {
    if (cResult[1] === error) {
      if (cResult[2] === getSendState) {
        if (cResult[3] === isSubmitting) {
          if (cResult[4] === onInviteSent) {
            let tmp4;
            let tmp6;
            let tmp9;
            if (cResult[5] === onPressAvatar) {
              tmp4 = cResult[6];
            }
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { isKeyboardAwareOnAndroid: false };
              cResult[7] = obj2;
              tmp6 = obj2;
            } else {
              tmp6 = cResult[7];
            }
            const sum = error(tmp2[15])(tmp6).insets.bottom + error(tmp2[5]).space.PX_16;
            const tmp7 = error;
            if (cResult[8] !== sum) {
              const obj3 = { paddingBottom: sum, paddingHorizontal: tmp7(getSendState[5]).space.PX_12 };
              cResult[8] = sum;
              cResult[9] = obj3;
              tmp9 = obj3;
            } else {
              tmp9 = cResult[9];
            }
            if (cResult[10] === data) {
              if (cResult[11] === tmp4) {
                let tmp10;
                if (cResult[12] === tmp9) {
                  tmp10 = cResult[13];
                }
                return tmp10;
              }
            }
            const obj4 = { contentContainerStyle: tmp9, bounces: false, renderItem: tmp4, data, keyExtractor, keyboardShouldPersistTaps: "always", ListEmptyComponent };
            const tmp14 = onInviteSent(tmp(getSendState[16]).BottomSheetFlatList, obj4);
            cResult[10] = data;
            cResult[11] = tmp4;
            cResult[12] = tmp9;
            cResult[13] = tmp14;
            tmp10 = tmp14;
          }
        }
      }
    }
  }
  const fn = function n(arg0) {
    let index;
    let item;
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: getSendState(item) };
    const tmp = ActivityInviteSheetRowDefault;
    return React3(tmp, obj);
  };
  cResult[0] = data.length;
  cResult[1] = error;
  cResult[2] = getSendState;
  cResult[3] = isSubmitting;
  cResult[4] = onInviteSent;
  cResult[5] = onPressAvatar;
  cResult[6] = fn;
  tmp4 = fn;
}) : ((data) => {
  let obj2;
  data = data.data;
  const error = data.error;
  const getSendState = data.getSendState;
  const isSubmitting = data.isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  const items = [error, isSubmitting, getSendState, onPressAvatar, onInviteSent, data.length];
  const callback = isSubmitting.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: getSendState(item) };
    const tmp = ActivityInviteSheetRowDefault;
    return React3(tmp, obj);
  }, items);
  const insets = error(getSendState[15])({ isKeyboardAwareOnAndroid: false }).insets;
  let obj = { contentContainerStyle: obj2, bounces: false, renderItem: callback, data, keyExtractor, keyboardShouldPersistTaps: "always", ListEmptyComponent };
  obj2 = { paddingBottom: insets.bottom + error(getSendState[5]).space.PX_16, paddingHorizontal: error(getSendState[5]).space.PX_12 };
  const BottomSheetFlatList = data(getSendState[16]).BottomSheetFlatList;
  return onInviteSent(BottomSheetFlatList, obj);
});
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

export default tmp8;