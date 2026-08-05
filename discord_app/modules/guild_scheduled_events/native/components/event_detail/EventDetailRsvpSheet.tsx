import { registerAsset } from "../../../../../../_runtime/09067_registerAsset.js";
import { preload } from "../../../../../components_native/common/FastImage.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Form } from "../../../../../design/void/Form/native/index.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { StageSparkleInner } from "../../../../stage_channels/native/components/StageSparkle.tsx";
// discord_app/modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx
import importAllResult from "nameFromUser";
import { View } from "Button";
import sortActivity from "sortActivity";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Fonts } from "sum";
import jsxProd from "isRemainingUsersGroup";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let error;
let metroImportAll;
const require = arg1;
function EmptyDisplay(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  let obj = { style: null, children: null };
  const items = [callback3().emptyDisplayContainer, style];
  obj[0] = items;
  obj = { icon: null };
  obj[0] = registerAsset;
  const items1 = [callback(StageSparkleInner, obj), children];
  obj[1] = items1;
  return callback2(View, obj);
}
function FetchErrorDisplay(style) {
  let obj = { style: style.style, children: null };
  obj = { style: callback3().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t.obChXk);
  obj[1] = callback(Text /* Text */.Text, obj);
  return callback(EmptyDisplay, obj);
}
function NoUsersDisplay(style) {
  let obj = { style: style.style, children: null };
  obj = { style: callback3().emptyDisplayTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t.hW0mBR);
  obj[1] = callback(Text /* Text */.Text, obj);
  return callback(EmptyDisplay, obj);
}
function RemainingUsersRow(remainingUsersGroup) {
  const tmp = callback3();
  let obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null };
  obj = { style: tmp.remainingUsersIconContainer, children: null };
  obj = { source: null, style: null };
  obj[0] = registerAsset;
  obj[1] = tmp.remainingUsersIcon;
  obj[1] = callback(preload, obj);
  obj[1] = callback(View, obj);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.BdQTfR, { userRemainCount: remainingUsersGroup.remainingUsersGroup.count });
  return callback(Form /* Form */.FormRow, obj, "userRemaining");
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
        tmp = outer1_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        items = [, ];
        items[0] = tmp.staticMessageContentContainer;
        obj = { minHeight: contentHeight };
        items[1] = obj;
        obj[2] = outer1_7(outer1_4, { style: items, children: global.children });
        return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
      }
    }
    ({ loading, error } = global);
    tmp = jsxs();
    items = [];
    items[0] = guildId;
    callback = defineProperty.useCallback((item) => {
      item = item.item;
      let obj = guildId(outer1_2[21]);
      if (obj.isRemainingUsersGroup(item)) {
        obj = { remainingUsersGroup: null };
        obj[0] = item;
        let tmpResult = tmp(outer1_13, obj);
      } else {
        obj = { eventUser: null, guildId: null };
        obj[0] = item;
        obj[1] = guildId;
        tmpResult = tmp(outer1_14, obj);
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
            tmp = outer1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj[2] = outer1_7(outer1_4, { style: items, children: global.children });
            return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
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
          tmp = outer1_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
          items = [, ];
          items[0] = tmp.staticMessageContentContainer;
          obj = { minHeight: contentHeight };
          items[1] = obj;
          obj[2] = outer1_7(outer1_4, { style: items, children: global.children });
          return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
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
            tmp = outer1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj[2] = outer1_7(outer1_4, { style: items, children: global.children });
            return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
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
            tmp = outer1_9();
            obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
            items = [, ];
            items[0] = tmp.staticMessageContentContainer;
            obj = { minHeight: contentHeight };
            items[1] = obj;
            obj[2] = outer1_7(outer1_4, { style: items, children: global.children });
            return outer1_7(require("BottomSheetModal").BottomSheetScrollView, obj);
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
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { staticMessageContentContainer: { flex: 1, padding: 16 }, userList: { paddingTop: 16 }, userListRow: { paddingVertical: 8 }, userName: null, emptyDisplayContainer: null, staticMessageContent: null, emptyDisplayTitle: null, remainingUsersIcon: null, remainingUsersIconContainer: null };
obj = { color: require("Themes").colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 };
obj[3] = obj;
obj[4] = { alignItems: "center", justifyContent: "center", minHeight: 200 };
obj[5] = { height: "100%" };
createCacheKey = { paddingTop: 24 };
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }));
createCacheKey.textAlign = "center";
obj[6] = createCacheKey;
obj[7] = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
let obj2 = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj[8] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((eventUser) => {
  let isMobileOnline;
  let isVROnline;
  let status;
  eventUser = eventUser.eventUser;
  let analyticsLocations;
  const tmp = callback3();
  analyticsLocations = analyticsLocations(5610)().analyticsLocations;
  let obj = eventUser(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(eventUser.user_id));
  let obj1 = eventUser(589);
  const items1 = [sortActivity];
  const items2 = [eventUser.user_id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: outer1_5.isMobileOnline(eventUser.user_id), isVROnline: outer1_5.isVROnline(eventUser.user_id), status: outer1_5.getStatus(eventUser.user_id) }), items2);
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
    tmp7Result = tmp7(tmp4(1297).Avatar, obj);
  }
  obj[1] = tmp7Result;
  obj1 = { user: stateFromStores, nick: null, usernameStyle: null, nicknameStyle: null };
  const member = eventUser.member;
  let nick;
  let tmp2Result = tmp2(9052);
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    tmp2Result = tmp2(4124);
    nick = tmp2Result.getName(eventUser.user);
  }
  obj1[1] = nick;
  ({ userName: obj5[2], userName: obj5[3] } = tmp);
  obj[2] = closure_7(tmp2Result, obj1);
  obj[3] = function onPress() {
    analyticsLocations(outer1_2[20])({ userId: eventUser.user_id, sourceAnalyticsLocations: analyticsLocations });
  };
  return closure_7(eventUser(7777).FormRow, obj, eventUser.user_id);
});
EventDetailRsvpSheet.displayName = "EventDetailRsvpSheet";
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: 16, height: 32, width: 32, alignItems: "center", justifyContent: "center" };
const result = require("sortActivity").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx");

export default EventDetailRsvpSheet;
export const UserRow = memoResult;