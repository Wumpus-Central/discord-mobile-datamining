// === Module 9291: EventDetailRsvpSheet ===

// Module 9291 (EventDetailRsvpSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import Form from "Form" /* 8895 */;
import StageSparkleDefault from "StageSparkle" /* 9292 */;
import _modDef9295 from "module_9295" /* 9295 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import UserStore from "UserStore" /* 1377 */;
import TextStyles from "TextStyles" /* 5915 */;

require = fn;
function keyExtractor(count) {
  if (obj.isRemainingUsersGroup(count)) {
    const _HermesInternal = HermesInternal;
    let user_id = "RemainingUsersGroup-" + count.count;
  } else {
    user_id = count.user_id;
  }
  return user_id;
}
const View = fn(17).View;
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = { staticMessageContentContainer: { flex: 1, padding: 16 }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 }, userName: { color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 }, emptyDisplayContainer: { alignItems: "center", justifyContent: "center", minHeight: 200 }, staticMessageContent: { height: "100%" }, emptyDisplayTitle: null, remainingUsersIcon: null, remainingUsersIconContainer: null };
let obj4 = { paddingTop: 24 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
obj4.textAlign = "center";
obj.emptyDisplayTitle = obj4;
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj.remainingUsersIcon = size;
const size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
obj.remainingUsersIconContainer = size1;
const options = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ children, style } = arg0);
  const tmp3 = closure_9();
  if (cResult[0] === style) {
    if (cResult[1] === tmp3.emptyDisplayContainer) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { icon: _modDef9295 };
      const tmp10 = React5(StageSparkleDefault, obj2);
      cResult[3] = tmp10;
      let tmp6 = tmp10;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === children) {
      if (cResult[5] === tmp4) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj3 = { style: tmp4, children: null };
    const items = [tmp6, children];
    obj3.children = items;
    const tmp14 = closure_1_8(View, obj3);
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
  ({ children, style } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_9().emptyDisplayContainer, style];
  obj.style = items;
  const obj2 = { icon: _modDef9295 };
  const items1 = [React5(StageSparkleDefault, obj2), children];
  obj.children = items1;
  return closure_1_8(View, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(6);
  style = style.style;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.obChXk);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyDisplayTitle) {
    const obj2 = { style: tmp4.emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = React5(Text_Text.Text, obj2);
    cResult[1] = tmp4.emptyDisplayTitle;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === style) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = React5(closure_10, { style, children: tmp7 });
  cResult[3] = style;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((style) => {
  const obj = { style: style.style, children: null };
  const obj2 = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.obChXk);
  obj.children = React5(Text_Text.Text, obj2);
  return React5(closure_10, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(6);
  style = style.style;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.hW0mBR);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emptyDisplayTitle) {
    const obj2 = { style: tmp4.emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = React5(Text_Text.Text, obj2);
    cResult[1] = tmp4.emptyDisplayTitle;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === style) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = React5(closure_10, { style, children: tmp7 });
  cResult[3] = style;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((style) => {
  const obj = { style: style.style, children: null };
  const obj2 = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.hW0mBR);
  obj.children = React5(Text_Text.Text, obj2);
  return React5(closure_10, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((remainingUsersGroup) => {
  const cResult = c.c(11);
  remainingUsersGroup = remainingUsersGroup.remainingUsersGroup;
  const tmp4 = closure_9();
  if (cResult[0] !== tmp4.remainingUsersIcon) {
    const obj2 = { source: _modDef9295, style: tmp4.remainingUsersIcon };
    const tmp9 = React5(FastImageDefault, obj2);
    cResult[0] = tmp4.remainingUsersIcon;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.remainingUsersIconContainer) {
    if (cResult[3] === tmp5) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] !== remainingUsersGroup.count) {
      const intl = util.intl;
      const obj3 = { userRemainCount: remainingUsersGroup.count };
      const formatToPlainStringResult = intl.formatToPlainString(util.t.BdQTfR, obj3);
      cResult[5] = remainingUsersGroup.count;
      cResult[6] = formatToPlainStringResult;
      let tmp12 = formatToPlainStringResult;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.userListRow) {
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp12) {
          let tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const obj4 = { DEPRECATED_style: tmp4.userListRow, leading: tmp10, label: tmp12 };
    const tmp16 = React5(Form.FormRow, obj4, "userRemaining");
    cResult[7] = tmp4.userListRow;
    cResult[8] = tmp10;
    cResult[9] = tmp12;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const tmp11 = React5(View, { style: tmp4.remainingUsersIconContainer, children: tmp5 });
  cResult[2] = tmp4.remainingUsersIconContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  const obj5 = { style: tmp4.remainingUsersIconContainer, children: tmp5 };
}) : ((remainingUsersGroup) => {
  const tmp = closure_9();
  const obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null };
  const obj2 = { style: tmp.remainingUsersIconContainer, children: null };
  const obj3 = { source: _modDef9295, style: tmp.remainingUsersIcon };
  obj2.children = React5(FastImageDefault, obj3);
  obj.leading = React5(View, obj2);
  const intl = util.intl;
  obj.label = intl.formatToPlainString(util.t.BdQTfR, { userRemainCount: remainingUsersGroup.remainingUsersGroup.count });
  return React5(Form.FormRow, obj, "userRemaining");
});
ReactCompilerGating = fn(558);
class EventDetailRsvpSheet {
  constructor(arg0) {
    ({ userListItems, guildId } = global);
    ({ contentHeight, safeBottomPadding } = global);
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: global.children };
        items = [, ];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = global);
    tmp = closure_9();
    items = [];
    items[0] = guildId;
    callback = closure_3.useCallback((item) => {
      item = item.item;
      if (obj.isRemainingUsersGroup(item)) {
        const obj2 = { remainingUsersGroup: item };
        let tmpResult = React5(closure_13, obj2);
      } else {
        const obj3 = { eventUser: item, guildId };
        tmpResult = React5(memoResult, obj3);
      }
      return tmpResult;
    }, items);
    if (loading) {
      num = 0;
      if (0 === userListItems.length) {
        tmp13 = jsx;
        obj1 = { children: null };
        tmp14 = guildId;
        tmp15 = closure_2;
        obj8 = { style: null };
        items1 = [, ];
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            obj1 = { style: null, children: global.children };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj4 = { minHeight: contentHeight };
            items[1] = obj4;
            obj1.style = items;
            obj.children = jsx(View, obj1);
            return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
          }
        }
        items1[1] = { paddingBottom: safeBottomPadding };
        obj8.style = items1;
        obj1.children = jsx(guildId(closure_2[25]).ActivityIndicator, obj8);
        tmp8 = jsx(StaticMessageContainer, obj1);
      }
      return tmp8;
    }
    if (null != error) {
      tmp11 = jsx;
      obj9 = { children: null };
      tmp12 = f51234;
      obj10 = { style: null };
      items2 = [, ];
      items2[0] = tmp.staticMessageContent;
      class StaticMessageContainer {
        constructor(arg0) {
          tmp = closure_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
          obj1 = { style: null, children: global.children };
          items = [, ];
          items[0] = tmp.staticMessageContentContainer;
          obj4 = { minHeight: contentHeight };
          items[1] = obj4;
          obj1.style = items;
          obj.children = jsx(View, obj1);
          return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
        }
      }
      obj10.style = items2;
      obj9.children = jsx(f51234, obj10);
      tmp8 = jsx(StaticMessageContainer, obj9);
    } else {
      num2 = 0;
      if (0 === userListItems.length) {
        tmp9 = jsx;
        obj11 = { children: null };
        tmp10 = f51236;
        obj12 = { style: null };
        items3 = [, ];
        items3[0] = tmp.staticMessageContent;
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            obj1 = { style: null, children: global.children };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj4 = { minHeight: contentHeight };
            items[1] = obj4;
            obj1.style = items;
            obj.children = jsx(View, obj1);
            return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
          }
        }
        obj12.style = items3;
        obj11.children = jsx(f51236, obj12);
        tmp8 = jsx(StaticMessageContainer, obj11);
      } else {
        tmp3 = jsx;
        tmp4 = guildId;
        tmp5 = closure_2;
        obj = { contentContainerStyle: null, data: null, renderItem: null, ItemSeparatorComponent: null, keyExtractor: null };
        items4 = [, ];
        items4[0] = tmp.userList;
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            obj1 = { style: null, children: global.children };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj4 = { minHeight: contentHeight };
            items[1] = obj4;
            obj1.style = items;
            obj.children = jsx(View, obj1);
            return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
          }
        }
        tmp6[0] = safeBottomPadding;
        items4[1] = tmp6;
        obj.contentContainerStyle = items4;
        obj.data = userListItems;
        obj.renderItem = callback;
        obj.ItemSeparatorComponent = guildId(closure_2[16]).FormDivider;
        tmp7 = keyExtractor;
        obj.keyExtractor = keyExtractor;
        tmp8 = jsx(guildId(closure_2[24]).BottomSheetFlatList, obj);
      }
    }
    return;
  }
}
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((eventUser) => {
  const cResult = eventUser(576).c(29);
  eventUser = eventUser.eventUser;
  const guildId = eventUser.guildId;
  closure_9();
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== eventUser.user_id) {
    const fn = function o() {
      return UserStore.getUser(eventUser.user_id);
    };
    cResult[1] = eventUser.user_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = eventUser(576);
  const stateFromStores = eventUser(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== eventUser.user_id) {
    class S {
      constructor() {
        obj = { isMobileOnline: closure_5.isMobileOnline(eventUser.user_id), isVROnline: closure_5.isVROnline(eventUser.user_id), status: closure_5.getStatus(eventUser.user_id) };
        return obj;
      }
    }
    const items2 = [eventUser.user_id];
    cResult[4] = eventUser.user_id;
    cResult[5] = S;
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    class S {
      constructor() {
        obj = { isMobileOnline: closure_5.isMobileOnline(eventUser.user_id), isVROnline: closure_5.isVROnline(eventUser.user_id), status: closure_5.getStatus(eventUser.user_id) };
        return obj;
      }
    }
    tmp12 = cResult[6];
  }
  const tmpResult = eventUser(504);
  const stateFromStoresObject = eventUser(504).useStateFromStoresObject(tmp9, S, tmp12);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  if (cResult[7] === guildId) {
    class S {
      constructor() {
        obj = { isMobileOnline: closure_5.isMobileOnline(eventUser.user_id), isVROnline: closure_5.isVROnline(eventUser.user_id), status: closure_5.getStatus(eventUser.user_id) };
        return obj;
      }
    }
  }
  let tmp14 = null;
  if (null != stateFromStores) {
    class S {
      constructor() {
        obj = { isMobileOnline: closure_5.isMobileOnline(eventUser.user_id), isVROnline: closure_5.isVROnline(eventUser.user_id), status: closure_5.getStatus(eventUser.user_id) };
        return obj;
      }
    }
    const obj2 = { user: stateFromStores, guildId, isMobileOnline, isVROnline, status, size: tmp(1188).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    tmp14 = closure_7(tmp(1188).Avatar, obj2);
  }
  cResult[7] = guildId;
  cResult[8] = isMobileOnline;
  cResult[9] = isVROnline;
  cResult[10] = status;
  cResult[11] = stateFromStores;
  cResult[12] = tmp14;
  const tmpResult2 = eventUser(504);
}) : ((eventUser) => {
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const tmp = closure_9();
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  const items = [UserStore];
  const stateFromStores = eventUser(504).useStateFromStores(items, () => UserStore.getUser(eventUser.user_id));
  const obj = eventUser(504);
  const items1 = [PresenceStore];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = eventUser(504).useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) }), items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const obj3 = { DEPRECATED_style: tmp.userListRow, leading: null, label: null, onPress: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, guildId: eventUser.guildId, isMobileOnline, isVROnline, status, size: tmp4(1188).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    tmp7Result = closure_7(tmp4(1188).Avatar, obj4);
  }
  obj3.leading = tmp7Result;
  const obj6 = { user: stateFromStores, nick: null, usernameStyle: null, nicknameStyle: null };
  const member = eventUser.member;
  let nick;
  const obj2 = eventUser(504);
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = tmp2(4722).getName(eventUser.user);
    const tmp2Result2 = tmp2(4722);
  }
  obj6.nick = nick;
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  obj3.label = closure_7(analyticsLocations(9296), obj6);
  obj3.onPress = function onPress() {
    showUserProfileActionSheetDefault({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return closure_7(eventUser(8895).FormRow, obj3, eventUser.user_id);
}));
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;