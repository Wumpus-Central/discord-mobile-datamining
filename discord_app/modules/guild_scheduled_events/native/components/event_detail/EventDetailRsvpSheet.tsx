// === Module 9326: EventDetailRsvpSheet ===

// Module 9326 (EventDetailRsvpSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import Form from "Form" /* 8924 */;
import StageSparkleDefault from "StageSparkle" /* 9327 */;
import AssetRegistryDefault from "AssetRegistry" /* 9330 */;
import EventDetailTypes from "EventDetailTypes" /* 9332 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let eventUser, item, remainingUsersGroup;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
function keyExtractor(count) {
  let user_id;
  const obj = EventDetailTypes;
  if (obj.isRemainingUsersGroup(count)) {
    const _HermesInternal = HermesInternal;
    user_id = "RemainingUsersGroup-" + count.count;
  } else {
    user_id = count.user_id;
  }
  return user_id;
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { staticMessageContentContainer: { flex: 1, padding: 16 }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 }, userName: obj2, emptyDisplayContainer: { alignItems: "center", justifyContent: "center", minHeight: 200 }, staticMessageContent: { height: "100%" }, emptyDisplayTitle: obj3, remainingUsersIcon: size, remainingUsersIconContainer: size1 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: 24, textAlign: "center" };
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
const React4 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let style;
  const obj = react2;
  const cResult = obj.c(7);
  ({ children, style } = arg0);
  const tmp3 = closure_9();
  if (cResult[0] === style) {
    let tmp4;
    let tmp6;
    if (cResult[1] === tmp3.emptyDisplayContainer) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { icon: AssetRegistryDefault };
      const tmp9 = StageSparkleDefault;
      const tmp10 = metroImportDefault(tmp9, obj2);
      cResult[3] = tmp10;
      tmp6 = tmp10;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === children) {
      let tmp11;
      if (cResult[5] === tmp4) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj3 = { style: tmp4, children: items };
    items = [tmp6, children];
    const tmp14 = metroImportAll(View, obj3);
    cResult[4] = children;
    cResult[5] = tmp4;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const items1 = [tmp3.emptyDisplayContainer, style];
  cResult[0] = style;
  cResult[1] = tmp3.emptyDisplayContainer;
  cResult[2] = items1;
  tmp4 = items1;
}) : ((arg0) => {
  let children;
  let items;
  let items1;
  let style;
  ({ children, style } = arg0);
  const obj = { style: items, children: items1 };
  items = [closure_9().emptyDisplayContainer, style];
  const obj2 = { icon: AssetRegistryDefault };
  const tmp = StageSparkleDefault;
  items1 = [metroImportDefault(tmp, obj2), children];
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  style = style.style;
  const tmp4 = closure_9();
  const emptyDisplayTitle = tmp4.emptyDisplayTitle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.obChXk);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyDisplayTitle) {
    const obj2 = { style: emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = metroImportDefault(Text_Text.Text, obj2);
    cResult[1] = tmp4.emptyDisplayTitle;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === style) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = metroImportDefault(closure_10, { style, children: tmp7 });
  cResult[3] = style;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((style) => {
  let Text;
  let intl;
  let obj2;
  const obj = { style: style.style, children: metroImportDefault(Text, obj2) };
  obj2 = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl2.t.obChXk) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportDefault(closure_10, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  style = style.style;
  const tmp4 = closure_9();
  const emptyDisplayTitle = tmp4.emptyDisplayTitle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.hW0mBR);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyDisplayTitle) {
    const obj2 = { style: emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = metroImportDefault(Text_Text.Text, obj2);
    cResult[1] = tmp4.emptyDisplayTitle;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === style) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = metroImportDefault(closure_10, { style, children: tmp7 });
  cResult[3] = style;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((style) => {
  let Text;
  let intl;
  let obj2;
  const obj = { style: style.style, children: metroImportDefault(Text, obj2) };
  obj2 = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl2.t.hW0mBR) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportDefault(closure_10, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((remainingUsersGroup) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  remainingUsersGroup = remainingUsersGroup.remainingUsersGroup;
  const tmp4 = closure_9();
  const userListRow = tmp4.userListRow;
  if (cResult[0] !== tmp4.remainingUsersIcon) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.remainingUsersIcon };
    const tmp8 = FastImageDefault;
    const tmp9 = metroImportDefault(tmp8, obj2);
    cResult[0] = tmp4.remainingUsersIcon;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.remainingUsersIconContainer) {
    let tmp10;
    let tmp12;
    if (cResult[3] === tmp5) {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== remainingUsersGroup.count) {
      const intl = intl2.intl;
      const obj3 = { userRemainCount: remainingUsersGroup.count };
      const formatToPlainStringResult = intl.formatToPlainString(intl2.t.BdQTfR, obj3);
      cResult[5] = remainingUsersGroup.count;
      cResult[6] = formatToPlainStringResult;
      tmp12 = formatToPlainStringResult;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.userListRow) {
      if (cResult[8] === tmp10) {
        let tmp14;
        if (cResult[9] === tmp12) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const obj4 = { DEPRECATED_style: userListRow, leading: tmp10, label: tmp12 };
    const tmp16 = metroImportDefault(Form.FormRow, obj4, "userRemaining");
    cResult[7] = tmp4.userListRow;
    cResult[8] = tmp10;
    cResult[9] = tmp12;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const obj5 = { style: tmp4.remainingUsersIconContainer, children: tmp5 };
  const tmp11 = metroImportDefault(View, obj5);
  cResult[2] = tmp4.remainingUsersIconContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((remainingUsersGroup) => {
  let intl;
  let obj2;
  let obj3;
  let obj4;
  let tmp2;
  remainingUsersGroup = remainingUsersGroup.remainingUsersGroup;
  const tmp = closure_9();
  const obj = { DEPRECATED_style: tmp.userListRow, leading: metroImportDefault(View, obj2), label: intl.formatToPlainString(intl2.t.BdQTfR, obj4) };
  obj2 = { style: tmp.remainingUsersIconContainer, children: metroImportDefault(tmp2, obj3) };
  const FormRow = Form.FormRow;
  obj3 = { source: AssetRegistryDefault, style: tmp.remainingUsersIcon };
  tmp2 = FastImageDefault;
  intl = intl2.intl;
  obj4 = { userRemainCount: remainingUsersGroup.count };
  return metroImportDefault(FormRow, obj, "userRemaining");
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
class EventDetailRsvpSheet {
  constructor(arg0) {
    let error;
    let guildId;
    let items1;
    let items2;
    let items3;
    let items4;
    let loading;
    let minHeight;
    let obj3;
    let obj5;
    let obj7;
    let safeBottomPadding;
    let tmp8;
    let userListItems;
    ({ userListItems, guildId } = arg0);
    ({ contentHeight: importDefault, safeBottomPadding } = arg0);
    class StaticMessageContainer {
      constructor(children) {
        let items;
        let obj2;
        children = children.children;
        const tmp = closure_9();
        const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
        obj2 = { style: items, children };
        items = [tmp.staticMessageContentContainer, ];
        const obj3 = { minHeight: importDefault };
        items[1] = obj3;
        const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
        return metroImportDefault(BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = arg0);
    let tmp = closure_9();
    let items = [guildId];
    const callback = react.useCallback((item) => {
      let tmpResult;
      item = item.item;
      const obj = EventDetailTypes;
      if (obj.isRemainingUsersGroup(item)) {
        const obj2 = { remainingUsersGroup: item };
        tmpResult = metroImportDefault(closure_13, obj2);
      } else {
        const obj3 = { eventUser: item, guildId };
        tmpResult = metroImportDefault(memoResult, obj3);
      }
      return tmpResult;
    }, items);
    if (loading) {
      if (0 === userListItems.length) {
        let obj2 = { children: closure_7(guildId(5975).ActivityIndicator, obj3) };
        obj3 = { style: items1 };
        items1 = [, ];
        class StaticMessageContainer {
          constructor(children) {
            let items;
            let obj2;
            children = children.children;
            const tmp = closure_9();
            const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
            obj2 = { style: items, children };
            items = [tmp.staticMessageContentContainer, ];
            const obj3 = { minHeight: importDefault };
            items[1] = obj3;
            const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
            return metroImportDefault(BottomSheetScrollView, obj);
          }
        }
        items1[1] = { paddingBottom: safeBottomPadding };
        tmp8 = closure_7(StaticMessageContainer, obj2);
      }
      return tmp8;
    }
    if (null != error) {
      const obj4 = { children: closure_7(closure_11, obj5) };
      obj5 = { style: items2 };
      items2 = [tmp.staticMessageContent, ];
      class StaticMessageContainer {
        constructor(children) {
          let items;
          let obj2;
          children = children.children;
          const tmp = closure_9();
          const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
          obj2 = { style: items, children };
          items = [tmp.staticMessageContentContainer, ];
          const obj3 = { minHeight: importDefault };
          items[1] = obj3;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          return metroImportDefault(BottomSheetScrollView, obj);
        }
      }
      tmp8 = closure_7(StaticMessageContainer, obj4);
    } else if (0 === userListItems.length) {
      const obj6 = { children: closure_7(closure_12, obj7) };
      obj7 = { style: items3 };
      items3 = [tmp.staticMessageContent, ];
      class StaticMessageContainer {
        constructor(children) {
          let items;
          let obj2;
          children = children.children;
          const tmp = closure_9();
          const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
          obj2 = { style: items, children };
          items = [tmp.staticMessageContentContainer, ];
          const obj3 = { minHeight: importDefault };
          items[1] = obj3;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          return metroImportDefault(BottomSheetScrollView, obj);
        }
      }
      tmp8 = closure_7(StaticMessageContainer, obj6);
    } else {
      let obj = { contentContainerStyle: items4, data: userListItems, renderItem: callback, ItemSeparatorComponent: guildId(8924).FormDivider, keyExtractor };
      items4 = [tmp.userList, ];
      class StaticMessageContainer {
        constructor(children) {
          let items;
          let obj2;
          children = children.children;
          const tmp = closure_9();
          const obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: metroImportDefault(View, obj2) };
          obj2 = { style: items, children };
          items = [tmp.staticMessageContentContainer, ];
          const obj3 = { minHeight: importDefault };
          items[1] = obj3;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          return metroImportDefault(BottomSheetScrollView, obj);
        }
      }
      tmp6[0] = safeBottomPadding;
      items4[1] = tmp6;
      const BottomSheetFlatList = guildId(6119).BottomSheetFlatList;
      tmp8 = closure_7(BottomSheetFlatList, obj);
    }
  }
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((eventUser) => {
  let analyticsLocations;
  let first;
  let isMobileOnline;
  let isVROnline;
  let status;
  let tmp12;
  let tmp7;
  let tmp9;
  let obj = eventUser(576);
  const cResult = obj.c(29);
  eventUser = eventUser.eventUser;
  const guildId = eventUser.guildId;
  closure_9();
  analyticsLocations = analyticsLocations(6664)().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== eventUser.user_id) {
    const fn = function o() {
      return UserStore.getUser(eventUser.user_id);
    };
    cResult[1] = eventUser.user_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = eventUser(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== eventUser.user_id) {
    class S {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) };
        return obj;
      }
    }
    const items2 = [eventUser.user_id];
    cResult[4] = eventUser.user_id;
    cResult[5] = S;
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    class S {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) };
        return obj;
      }
    }
    tmp12 = cResult[6];
  }
  const tmpResult2 = eventUser(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, S, tmp12);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  if (cResult[7] === guildId) {
    class S {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) };
        return obj;
      }
    }
  }
  let tmp14 = null;
  if (null != stateFromStores) {
    class S {
      constructor() {
        const obj = { isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) };
        return obj;
      }
    }
    const obj2 = { user: stateFromStores, guildId, isMobileOnline, isVROnline, status, size: eventUser(1188).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    const Avatar = tmp(1188).Avatar;
    tmp14 = closure_7(Avatar, obj2);
  }
  cResult[7] = guildId;
  cResult[8] = isMobileOnline;
  cResult[9] = isVROnline;
  cResult[10] = status;
  cResult[11] = stateFromStores;
  cResult[12] = tmp14;
}) : ((eventUser) => {
  let isMobileOnline;
  let isVROnline;
  let nick;
  let obj6;
  let status;
  let tmp2Result;
  let tmp7Result;
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const guildId = eventUser.guildId;
  const tmp = closure_9();
  analyticsLocations = analyticsLocations(6664)().analyticsLocations;
  let obj = eventUser(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(eventUser.user_id));
  const items1 = [PresenceStore];
  const items2 = [eventUser.user_id];
  const obj2 = eventUser(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) };
    return obj;
  }, items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const obj3 = {
    DEPRECATED_style: tmp.userListRow,
    leading: tmp7Result,
    label: closure_7(tmp2Result, obj6),
    onPress() {
      const obj = { userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  };
  tmp7Result = null;
  const FormRow = eventUser(8924).FormRow;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, guildId, isMobileOnline, isVROnline, status, size: eventUser(1188).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    const Avatar = tmp4(1188).Avatar;
    tmp7Result = closure_7(Avatar, obj4);
  }
  const member = eventUser.member;
  obj6 = { user: stateFromStores, nick, usernameStyle: null, nicknameStyle: null };
  nick = undefined;
  tmp2Result = analyticsLocations(9331);
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    const tmp2Result2 = analyticsLocations(4728);
    nick = tmp2Result2.getName(eventUser.user);
  }
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  return closure_7(FormRow, obj3, eventUser.user_id);
}));
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;