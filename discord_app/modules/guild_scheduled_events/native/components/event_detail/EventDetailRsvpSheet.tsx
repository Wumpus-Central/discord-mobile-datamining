// === Module 9801: EventDetailRsvpSheet ===

// Module 9801 (EventDetailRsvpSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import StageSparkleDefault from "StageSparkle" /* 8407 */;
import Form from "Form" /* 8593 */;
import _modDef9802 from "module_9802" /* 9802 */;
import EventDetailTypes from "EventDetailTypes" /* 9804 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function EmptyDisplay(arg0) {
  ({ children, style } = arg0);
  let obj = { style: null, children: null };
  const items = [closure_9().emptyDisplayContainer, style];
  obj.style = items;
  obj = { icon: _modDef9802 };
  const items1 = [React5(StageSparkleDefault, obj), children];
  obj.children = items1;
  return React6(View, obj);
}
function FetchErrorDisplay(style) {
  let obj = { style: style.style, children: null };
  obj = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.obChXk);
  obj.children = React5(Text_Text.Text, obj);
  return React5(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  let obj = { style: style.style, children: null };
  obj = { style: closure_9().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.hW0mBR);
  obj.children = React5(Text_Text.Text, obj);
  return React5(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  const tmp = closure_9();
  let obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null };
  obj = { style: tmp.remainingUsersIconContainer, children: null };
  obj = { source: _modDef9802, style: tmp.remainingUsersIcon };
  obj.children = React5(FastImageDefault, obj);
  obj.leading = React5(View, obj);
  const intl = util.intl;
  obj.label = intl.formatToPlainString(util.t.BdQTfR, { userRemainCount: remainingUsersGroup.remainingUsersGroup.count });
  return React5(Form.FormRow, obj, "userRemaining");
}
function keyExtractor(count) {
  if (obj.isRemainingUsersGroup(count)) {
    const _HermesInternal = HermesInternal;
    let user_id = "RemainingUsersGroup-" + count.count;
  } else {
    user_id = count.user_id;
  }
  return user_id;
}
class EventDetailRsvpSheet {
  constructor(arg0) {
    ({ userListItems, guildId } = global);
    ({ contentHeight, safeBottomPadding } = global);
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj = { style: null, children: global.children };
        items = [, ];
        items[0] = tmp.staticMessageContentContainer;
        obj1 = { minHeight: contentHeight };
        items[1] = obj1;
        obj.style = items;
        obj.children = jsx(View, obj);
        return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = global);
    tmp = closure_9();
    items = [];
    items[0] = guildId;
    callback = closure_3.useCallback((item) => {
      item = item.item;
      let obj = EventDetailTypes;
      if (obj.isRemainingUsersGroup(item)) {
        obj = { remainingUsersGroup: item };
        let tmpResult = React5(RemainingUsersRow, obj);
      } else {
        obj = { eventUser: item, guildId };
        tmpResult = React5(memoResult, obj);
      }
      return tmpResult;
    }, items);
    if (loading) {
      num = 0;
      if (0 === userListItems.length) {
        tmp13 = jsx;
        obj = { children: null };
        tmp14 = guildId;
        tmp15 = closure_2;
        obj1 = { style: null };
        items1 = [, ];
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            obj = { style: null, children: global.children };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj1 = { minHeight: contentHeight };
            items[1] = obj1;
            obj.style = items;
            obj.children = jsx(View, obj);
            return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
          }
        }
        items1[1] = { paddingBottom: safeBottomPadding };
        obj1.style = items1;
        obj.children = jsx(guildId(closure_2[23]).ActivityIndicator, obj1);
        tmp8 = jsx(StaticMessageContainer, obj);
      }
      return tmp8;
    }
    if (null != error) {
      tmp11 = jsx;
      obj2 = { children: null };
      tmp12 = FetchErrorDisplay;
      obj3 = { style: null };
      items2 = [, ];
      items2[0] = tmp.staticMessageContent;
      class StaticMessageContainer {
        constructor(arg0) {
          tmp = closure_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
          obj = { style: null, children: global.children };
          items = [, ];
          items[0] = tmp.staticMessageContentContainer;
          obj1 = { minHeight: contentHeight };
          items[1] = obj1;
          obj.style = items;
          obj.children = jsx(View, obj);
          return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
        }
      }
      obj3.style = items2;
      obj2.children = jsx(FetchErrorDisplay, obj3);
      tmp8 = jsx(StaticMessageContainer, obj2);
    } else {
      num2 = 0;
      if (0 === userListItems.length) {
        tmp9 = jsx;
        obj4 = { children: null };
        tmp10 = NoUsersDisplay;
        obj5 = { style: null };
        items3 = [, ];
        items3[0] = tmp.staticMessageContent;
        class StaticMessageContainer {
          constructor(arg0) {
            tmp = closure_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            obj = { style: null, children: global.children };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj1 = { minHeight: contentHeight };
            items[1] = obj1;
            obj.style = items;
            obj.children = jsx(View, obj);
            return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
          }
        }
        obj5.style = items3;
        obj4.children = jsx(NoUsersDisplay, obj5);
        tmp8 = jsx(StaticMessageContainer, obj4);
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
            obj = { style: null, children: global.children };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj1 = { minHeight: contentHeight };
            items[1] = obj1;
            obj.style = items;
            obj.children = jsx(View, obj);
            return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
          }
        }
        tmp6[0] = safeBottomPadding;
        items4[1] = tmp6;
        obj.contentContainerStyle = items4;
        obj.data = userListItems;
        obj.renderItem = callback;
        obj.ItemSeparatorComponent = guildId(closure_2[13]).FormDivider;
        tmp7 = keyExtractor;
        obj.keyExtractor = keyExtractor;
        tmp8 = jsx(guildId(closure_2[22]).BottomSheetFlatList, obj);
      }
    }
    return;
  }
}
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { staticMessageContentContainer: { flex: 1, padding: 16 }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 }, userName: null, emptyDisplayContainer: null, staticMessageContent: null, emptyDisplayTitle: null, remainingUsersIcon: null, remainingUsersIconContainer: null };
obj = { color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
obj.userName = obj;
obj.emptyDisplayContainer = { alignItems: "center", justifyContent: "center", minHeight: 200 };
obj.staticMessageContent = { height: "100%" };
const createStyles = { paddingTop: 24 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
createStyles.textAlign = "center";
obj.emptyDisplayTitle = createStyles;
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj.remainingUsersIcon = size;
const size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
obj.remainingUsersIconContainer = size1;
const React7 = createStyles.createStyles(obj);
const memoResult = noop.memo((eventUser) => {
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const tmp = closure_9();
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  let obj = eventUser(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(eventUser.user_id));
  let obj1 = eventUser(504);
  const items1 = [PresenceStore];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id), isVROnline: PresenceStore.isVROnline(eventUser.user_id), status: PresenceStore.getStatus(eventUser.user_id) }), items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null, onPress: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, guildId: eventUser.guildId, isMobileOnline, isVROnline, status, size: tmp4(1178).AvatarSizes.REFRESH_MEDIUM_32, autoStatusCutout: true };
    tmp7Result = closure_7(tmp4(1178).Avatar, obj);
  }
  obj.leading = tmp7Result;
  obj1 = { user: stateFromStores, nick: null, usernameStyle: null, nicknameStyle: null };
  const member = eventUser.member;
  let nick;
  let tmp2Result = tmp2(9803);
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    tmp2Result = tmp2(4404);
    nick = tmp2Result.getName(eventUser.user);
  }
  obj1.nick = nick;
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  obj.label = closure_7(tmp2Result, obj1);
  obj.onPress = function onPress() {
    showUserProfileActionSheetDefault({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return closure_7(eventUser(8593).FormRow, obj, eventUser.user_id);
});
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;