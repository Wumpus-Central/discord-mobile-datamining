// discord_app/modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import StageSparkleInnerDefault from "../../../../stage_channels/native/components/StageSparkle.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import registerAssetDefault from "../../../../../../_runtime/12408_registerAsset.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import sortActivity from "../../../../../stores/PresenceStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { Fonts } from "../../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
function EmptyDisplay(arg0) {
  ({ children, style } = arg0);
  let obj = { style: null, children: null };
  const items = [callback3().emptyDisplayContainer, style];
  obj[0] = items;
  obj = { icon: registerAssetDefault };
  const items1 = [callback(StageSparkleInnerDefault, obj), children];
  obj[1] = items1;
  return callback2(View, obj);
}
function FetchErrorDisplay(style) {
  const obj = { style: callback3().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.obChXk);
  obj[1] = callback(Text.Text, obj);
  return callback(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  const obj = { style: callback3().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.hW0mBR);
  obj[1] = callback(Text.Text, obj);
  return callback(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  const tmp = callback3();
  const obj = { source: registerAssetDefault, style: tmp.remainingUsersIcon };
  obj[1] = callback(preloadDefault, obj);
  obj[1] = callback(View, obj);
  const intl = getSystemLocale.intl;
  obj[2] = intl.formatToPlainString(getSystemLocale.t.BdQTfR, { userRemainCount: remainingUsersGroup.remainingUsersGroup.count });
  return callback(Form.FormRow, obj, "userRemaining");
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
        tmp = closure_1_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        items = [, ];
        items[0] = tmp.staticMessageContentContainer;
        obj = { minHeight: contentHeight };
        items[1] = obj;
        obj[2] = closure_1_7(closure_1_4, { style: items, children: global.children });
        return closure_1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = global);
    tmp = closure_9();
    items = [];
    items[0] = guildId;
    callback = closure_3.useCallback((item) => {
      item = item.item;
      let obj = guildId(dependencyMap[21]);
      if (obj.isRemainingUsersGroup(item)) {
        obj = { remainingUsersGroup: null };
        obj[0] = item;
        let tmpResult = closure_1_7(RemainingUsersRow, obj);
      } else {
        obj = { eventUser: null, guildId: null };
        obj[0] = item;
        obj[1] = guildId;
        tmpResult = closure_1_7(closure_1_14, obj);
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
            tmp = closure_1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj[2] = closure_1_7(closure_1_4, { style: items, children: global.children });
            return closure_1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
          }
        }
        items1[1] = { paddingBottom: safeBottomPadding };
        obj1[0] = items1;
        obj[0] = jsx(require("ActivityIndicator").ActivityIndicator, obj1);
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
          tmp = closure_1_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
          items = [, ];
          items[0] = tmp.staticMessageContentContainer;
          obj = { minHeight: contentHeight };
          items[1] = obj;
          obj[2] = closure_1_7(closure_1_4, { style: items, children: global.children });
          return closure_1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
        }
      }
      obj3[0] = items2;
      obj2[0] = jsx(FetchErrorDisplay, obj3);
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
            tmp = closure_1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj[2] = closure_1_7(closure_1_4, { style: items, children: global.children });
            return closure_1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
          }
        }
        obj5[0] = items3;
        obj4[0] = jsx(NoUsersDisplay, obj5);
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
            tmp = closure_1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj[2] = closure_1_7(closure_1_4, { style: items, children: global.children });
            return closure_1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
          }
        }
        tmp6[0] = safeBottomPadding;
        items4[1] = tmp6;
        obj[0] = items4;
        obj[1] = userListItems;
        obj[2] = callback;
        obj[3] = require("Form").FormDivider;
        tmp7 = keyExtractor;
        obj[4] = keyExtractor;
        tmp8 = jsx(require("BottomSheetModal").BottomSheetFlatList, obj);
      }
    }
    return;
  }
}
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { color: ThemesDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
obj[3] = obj;
obj[4] = { alignItems: "center", justifyContent: "center", minHeight: 200 };
obj[5] = { height: "100%" };
const createCacheKey = { paddingTop: 24 };
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
createCacheKey.textAlign = "center";
obj[6] = createCacheKey;
obj[7] = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj[8] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((eventUser) => {
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const tmp = callback3();
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  let obj = eventUser(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getUser(eventUser.user_id));
  obj1 = eventUser(589);
  const items1 = [closure_5];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: closure_1_5.isMobileOnline(eventUser.user_id), isVROnline: closure_1_5.isVROnline(eventUser.user_id), status: closure_1_5.getStatus(eventUser.user_id) }), items2);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null, onPress: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { user: null, guildId: null, isMobileOnline: null, isVROnline: null, status: null, size: null, autoStatusCutout: true };
    obj[0] = stateFromStores;
    obj[1] = eventUser.guildId;
    obj[2] = isMobileOnline;
    obj[3] = isVROnline;
    obj[4] = status;
    obj[5] = tmp4(1297).AvatarSizes.REFRESH_MEDIUM_32;
    tmp7Result = callback(tmp4(1297).Avatar, obj);
  }
  obj[1] = tmp7Result;
  obj1 = { user: stateFromStores, nick: null, usernameStyle: null, nicknameStyle: null };
  const member = eventUser.member;
  let nick;
  let tmp2Result = tmp2(9966);
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    tmp2Result = tmp2(4219);
    nick = tmp2Result.getName(eventUser.user);
  }
  obj1[1] = nick;
  ({ userName: obj5[2], userName: obj5[3] } = tmp);
  obj[2] = callback(tmp2Result, obj1);
  obj[3] = function onPress() {
    analyticsLocations(dependencyMap[20])({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return callback(eventUser(8083).FormRow, obj, eventUser.user_id);
});
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;