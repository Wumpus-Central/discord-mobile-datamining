// discord_app/modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import BottomSheetModal from "../../../../../../_runtime/05275_BottomSheetModal.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import StageSparkleDefault from "../../../../stage_channels/native/components/StageSparkle.tsx";
import _modDef9218 from "../../../../../../_runtime/metro/09218__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
function EmptyDisplay(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_9().emptyDisplayContainer, style];
  obj.style = items;
  const obj2 = { icon: _modDef9218 };
  const items1 = [React5(StageSparkleDefault, obj2), children];
  obj.children = items1;
  return React6(View, obj);
}
function FetchErrorDisplay(style) {
  const obj = { style: style.style, children: null };
  const obj2 = {
    style: closure_9().emptyDisplayTitle,
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.obChXk);
  obj.children = React5(Text_Text.Text, obj2);
  return React5(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  const obj = { style: style.style, children: null };
  const obj2 = {
    style: closure_9().emptyDisplayTitle,
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.hW0mBR);
  obj.children = React5(Text_Text.Text, obj2);
  return React5(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  const tmp = closure_9();
  const obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null };
  const obj2 = { style: tmp.remainingUsersIconContainer, children: null };
  const obj3 = { source: _modDef9218, style: tmp.remainingUsersIcon };
  obj2.children = React5(FastImageDefault, obj3);
  obj.leading = React5(View, obj2);
  const intl = util.intl;
  obj.label = intl.formatToPlainString(util.t.BdQTfR, {
    userRemainCount: remainingUsersGroup.remainingUsersGroup.count,
  });
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
const View = fn(17).View;
const Fonts = fn(1083).Fonts;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj = {
  staticMessageContentContainer: { flex: 1, padding: 16 },
  userList: { paddingTop: 16 },
  userListRow: { paddingVertical: 8 },
  userName: { color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 },
  emptyDisplayContainer: { alignItems: "center", justifyContent: "center", minHeight: 200 },
  staticMessageContent: { height: "100%" },
  emptyDisplayTitle: null,
  remainingUsersIcon: null,
  remainingUsersIconContainer: null,
};
let obj4 = { paddingTop: 24 };
const merged = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }),
);
obj4.textAlign = "center";
obj.emptyDisplayTitle = obj4;
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj.remainingUsersIcon = size;
const size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: 16,
  height: 32,
  width: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj.remainingUsersIconContainer = size1;
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo(function UserRow(eventUser) {
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const tmp = closure_9();
  analyticsLocations = analyticsLocations(7326)().analyticsLocations;
  const items = [UserStore];
  const stateFromStores = eventUser(504).useStateFromStores(items, () => UserStore.getUser(eventUser.user_id));
  const obj = eventUser(504);
  const items1 = [PresenceStore];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = eventUser(504).useStateFromStoresObject(
    items1,
    () => ({
      isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id),
      isVROnline: PresenceStore.isVROnline(eventUser.user_id),
      status: PresenceStore.getStatus(eventUser.user_id),
    }),
    items2,
  );
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const obj3 = { DEPRECATED_style: tmp.userListRow, leading: null, label: null, onPress: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj4 = {
      user: stateFromStores,
      guildId: eventUser.guildId,
      isMobileOnline,
      isVROnline,
      status,
      size: tmp4(1187).AvatarSizes.REFRESH_MEDIUM_32,
      autoStatusCutout: true,
    };
    tmp7Result = closure_7(tmp4(1187).Avatar, obj4);
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
    nick = tmp2(5068).getName(eventUser.user);
    const tmp2Result2 = tmp2(5068);
  }
  obj6.nick = nick;
  ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
  obj3.label = closure_7(analyticsLocations(9201), obj6);
  obj3.onPress = function onPress() {
    showUserProfileActionSheetDefault({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return closure_7(eventUser(8177).FormRow, obj3, eventUser.user_id);
});
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx",
);

export default function EventDetailRsvpSheet(arg0) {
  ({ userListItems, guildId } = arg0);
  ({ contentHeight: importDefault, safeBottomPadding } = arg0);
  class StaticMessageContainer {
    constructor(arg0) {
      tmp = closure_9();
      obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
      obj1 = { style: null, children: arg0.children };
      items = [,];
      items[0] = tmp.staticMessageContentContainer;
      obj4 = { minHeight: contentHeight };
      items[1] = obj4;
      obj1.style = items;
      obj.children = jsx(View, obj1);
      return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
    }
  }
  ({ loading, error } = arg0);
  let tmp = closure_9();
  let items = [guildId];
  const callback = noop.useCallback((item) => {
    item = item.item;
    if (obj.isRemainingUsersGroup(item)) {
      const obj2 = { remainingUsersGroup: item };
      let tmpResult = React5(RemainingUsersRow, obj2);
    } else {
      const obj3 = { eventUser: item, guildId };
      tmpResult = React5(memoResult, obj3);
    }
    return tmpResult;
  }, items);
  if (loading) {
    if (0 === userListItems.length) {
      let obj2 = { children: null };
      let obj3 = { style: null };
      const items1 = [,];
      class StaticMessageContainer {
        constructor(arg0) {
          tmp = closure_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
          obj1 = { style: null, children: arg0.children };
          items = [,];
          items[0] = tmp.staticMessageContentContainer;
          obj4 = { minHeight: contentHeight };
          items[1] = obj4;
          obj1.style = items;
          obj.children = jsx(View, obj1);
          return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
        }
      }
      items1[1] = { paddingBottom: safeBottomPadding };
      obj3.style = items1;
      obj2.children = closure_7(guildId(6953).ActivityIndicator, obj3);
      let tmp8 = closure_7(StaticMessageContainer, obj2);
    }
    return tmp8;
  }
  if (null != error) {
    const obj4 = { children: null };
    const obj5 = { style: null };
    const items2 = [tmp.staticMessageContent];
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: arg0.children };
        items = [,];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
      }
    }
    obj5.style = items2;
    obj4.children = closure_7(FetchErrorDisplay, obj5);
    tmp8 = closure_7(StaticMessageContainer, obj4);
  } else if (0 === userListItems.length) {
    const obj6 = { children: null };
    const obj7 = { style: null };
    const items3 = [tmp.staticMessageContent];
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: arg0.children };
        items = [,];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
      }
    }
    obj7.style = items3;
    obj6.children = closure_7(NoUsersDisplay, obj7);
    tmp8 = closure_7(StaticMessageContainer, obj6);
  } else {
    let obj = {
      contentContainerStyle: null,
      data: null,
      renderItem: null,
      ItemSeparatorComponent: null,
      keyExtractor: null,
    };
    const items4 = [tmp.userList];
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: arg0.children };
        items = [,];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[22]).BottomSheetScrollView, obj);
      }
    }
    tmp6[0] = safeBottomPadding;
    items4[1] = tmp6;
    obj.contentContainerStyle = items4;
    obj.data = userListItems;
    obj.renderItem = callback;
    obj.ItemSeparatorComponent = guildId(8177).FormDivider;
    obj.keyExtractor = keyExtractor;
    tmp8 = closure_7(guildId(7294).BottomSheetFlashList, obj);
  }
}
export const UserRow = memoResult;
