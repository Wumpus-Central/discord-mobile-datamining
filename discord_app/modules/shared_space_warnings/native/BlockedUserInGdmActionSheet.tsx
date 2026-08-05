// discord_app/modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx
import expandEventProperties from "expandEventProperties";
import get_ActivityIndicator from "CircleCheckIcon";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import GdmWarningMedium from "GdmWarningMedium";
import { AnalyticEvents } from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c4;
let c5;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function getUserCalloutRowText(arg0) {
  let calledOutUserIds;
  let importDefault;
  let require;
  let totalUsers;
  ({ calledOutUserIds, totalUsers, guildId: require, channelId: importDefault } = arg0);
  let dependencyMap;
  const items = [...calledOutUserIds];
  dependencyMap = items.map((arg0) => user.getUser(arg0));
  if (totalUsers >= 4) {
    const intl4 = getSystemLocale.intl;
    let obj = { usernameHook1: null, usernameHook2: null, numberOfOtherUsers: null };
    obj[0] = function usernameHook1() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 19);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    obj[1] = function usernameHook2() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 17);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    obj[2] = totalUsers - calledOutUserIds.length;
    let formatResult = intl4.format(getSystemLocale.t.qfo6KR, obj);
  } else if (3 === totalUsers) {
    const intl3 = getSystemLocale.intl;
    obj = { usernameHook1: null, usernameHook2: null };
    obj[0] = function usernameHook1() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 19);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    obj[1] = function usernameHook2() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 17);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    formatResult = intl3.format(getSystemLocale.t["67ZE+9"], obj);
  } else if (2 === totalUsers) {
    const intl2 = getSystemLocale.intl;
    const obj1 = { usernameHook1: null, usernameHook2: null };
    obj1[0] = function usernameHook1() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 19);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    obj1[1] = function usernameHook2() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 17);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    formatResult = intl2.format(getSystemLocale.t.veV4IN, obj1);
  } else {
    const intl = getSystemLocale.intl;
    obj = { usernameHook: null };
    obj[0] = function usernameHook() {
      const obj = { variant: "text-md/semibold", children: null };
      obj[1] = outer1_1(4444).getName(closure_0, closure_1, 19);
      return outer1_11(outer1_0(4251).Text, obj);
    };
    formatResult = intl.format(getSystemLocale.t["4WHCtq"], obj);
  }
  return formatResult;
}
function UserCalloutAvatars(userIds) {
  userIds = userIds.userIds;
  let REFRESH_MEDIUM_32 = dependencyMap;
  let obj = userIds(589);
  const items = [mergeGuildAvatar];
  const items1 = [userIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => userIds.map((arg0) => user.getUser(arg0)), items1);
  let found = stateFromStoresArray.filter(userIds(1351).isNotNullish);
  if (1 === userIds.length) {
    if (null != mergeGuildAvatar.getUser(userIds[0])) {
      obj = { user: null, guildId: null, size: null, "aria-hidden": true };
      found = found[0];
      obj[0] = found;
      obj[1] = userIds.guildId;
      REFRESH_MEDIUM_32 = tmp(1297).AvatarSizes.REFRESH_MEDIUM_32;
      obj[2] = REFRESH_MEDIUM_32;
      let tmp6 = callback(tmp(1297).Avatar, obj);
    } else {
      tmp6 = callback(tmp(11108).UserIcon, {});
    }
  } else {
    obj = { users: null, size: null };
    obj[0] = found;
    obj[1] = tmp(1297).AvatarSizes.REFRESH_MEDIUM_32;
    return callback(tmp(9553).FacepileGroupDMAvatar, obj);
  }
}
function BlockedUserInGDMDescription(arg0) {
  let numOfBlockedUsers;
  let numOfIgnoredUsers;
  ({ numOfBlockedUsers, numOfIgnoredUsers } = arg0);
  if (numOfBlockedUsers > 0) {
    if (tmp2) {
      let obj = { children: null };
      const intl5 = getSystemLocale.intl;
      const items = [intl5.string(getSystemLocale.t.xbRNI3), "\n", ];
      const intl6 = getSystemLocale.intl;
      items[2] = intl6.string(getSystemLocale.t["Bp2/ni"]);
      obj[0] = items;
      let tmp3 = callback2(closure_12, obj);
    }
    return tmp3;
  }
  if (numOfBlockedUsers > 0) {
    obj = { children: null };
    const intl3 = getSystemLocale.intl;
    const obj1 = { n: null };
    obj1[0] = numOfBlockedUsers;
    const items1 = [intl3.format(getSystemLocale.t.iKtixW, obj1), "\n", ];
    const intl4 = getSystemLocale.intl;
    items1[2] = intl4.string(getSystemLocale.t.SN1hrl);
    obj[0] = items1;
    tmp3 = callback2(closure_12, obj);
  } else {
    tmp3 = null;
    if (tmp2) {
      obj = { children: null };
      const intl = getSystemLocale.intl;
      const obj2 = { n: null };
      obj2[0] = numOfIgnoredUsers;
      const items2 = [intl.format(getSystemLocale.t["6IRwua"], obj2), "\n", ];
      const intl2 = getSystemLocale.intl;
      items2[2] = intl2.string(getSystemLocale.t["6AKLRt"]);
      obj[0] = items2;
      tmp3 = callback2(closure_12, obj);
    }
  }
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ BlockWarningEngagements: metroImportAll, GdmWarningMedium: c9 } = GdmWarningMedium);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null, headerImage: null, title: null, description: null, tableGroup: null, buttons: null, icon: null };
createCacheKey = { paddingTop: require("Themes").space.PX_12, gap: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 73, height: 86 };
createCacheKey[2] = { textAlign: "center", alignSelf: "center" };
createCacheKey[3] = { textAlign: "center", alignSelf: "center" };
createCacheKey[4] = { paddingVertical: require("Themes").space.PX_24 };
createCacheKey[5] = { gap: 8 };
createCacheKey[6] = { display: "flex", justifyContent: "center", alignItems: "center", minWidth: 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: require("Themes").space.PX_24 };
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx");

export default function BlockedUserInGdmActionSheet(channelId) {
  channelId = channelId.channelId;
  const blockedUserIds = channelId.blockedUserIds;
  const ignoredUserIds = channelId.ignoredUserIds;
  let React;
  const tmp = createCacheKey();
  React = tmp;
  const items = [channelId, blockedUserIds, ignoredUserIds];
  const effect = React.useEffect(() => {
    let obj = blockedUserIds(ignoredUserIds[19]);
    obj = { channel_id: channelId, warning_medium: outer1_9.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
    obj.track(outer1_10.GDM_BLOCKED_USER_WARNING_VIEWED, obj);
  }, items);
  channel = channel.getChannel(channelId);
  let obj = { icon: callback(channelId(ignoredUserIds[17]).CircleCheckIcon, {}), label: null };
  const intl = channelId(ignoredUserIds[11]).intl;
  obj[1] = intl.string(channelId(ignoredUserIds[11]).t.RIMw54);
  const items1 = [obj, ];
  obj = { icon: callback(channelId(ignoredUserIds[18]).CircleInformationIcon, {}), label: null };
  const intl2 = channelId(ignoredUserIds[11]).intl;
  obj[1] = intl2.string(channelId(ignoredUserIds[11]).t.bejNWN);
  items1[1] = obj;
  if (blockedUserIds.length > 0) {
    if (tmp5) {
      const items2 = [];
      HermesBuiltin.arraySpread(ignoredUserIds, HermesBuiltin.arraySpread(blockedUserIds, 0));
      const substr = items2.slice(0, 2);
      obj = { userIds: null, guildId: null };
      obj[0] = substr;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj1 = { icon: null, label: null };
      obj[1] = guild_id;
      obj1[0] = tmp6(UserCalloutAvatars, obj);
      let obj2 = { calledOutUserIds: null, totalUsers: null, channelId: null, guildId: null };
      obj2[0] = substr;
      obj2[1] = items2.length;
      obj2[2] = channelId;
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      obj2[3] = guild_id1;
      obj1[1] = getUserCalloutRowText(obj2);
      items1.unshift(obj1);
      const tmp28 = UserCalloutAvatars;
      const tmp31 = getUserCalloutRowText;
    }
    let obj3 = { startExpanded: true, children: null };
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.container;
    const obj5 = { source: null, style: null };
    obj5[0] = blockedUserIds(tmp8[21]);
    obj5[1] = tmp.headerImage;
    const items3 = [tmp6(closure_4, obj5), , , ];
    const obj6 = { children: null };
    const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj7[2] = tmp.title;
    const intl3 = tmp7(tmp8[11]).intl;
    obj7[3] = intl3.string(tmp7(tmp8[11]).t["mwJJ+f"]);
    const items4 = [tmp6(tmp7(tmp8[9]).Text, obj7), ];
    const obj8 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj8[2] = tmp.description;
    const obj9 = { numOfBlockedUsers: null, numOfIgnoredUsers: null };
    obj9[0] = blockedUserIds.length;
    obj9[1] = ignoredUserIds.length;
    obj8[3] = tmp6(BlockedUserInGDMDescription, obj9);
    items4[1] = tmp6(tmp7(tmp8[9]).Text, obj8);
    obj6[0] = items4;
    items3[1] = callback2(closure_5, obj6);
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.tableGroup;
    const obj11 = { hasIcons: true, children: null };
    obj11[1] = items1.map((arg0, arg1) => {
      let icon;
      let label;
      ({ icon, label } = arg0);
      let obj = { icon: null, label: null };
      obj = { style: _undefined.icon, children: icon };
      obj[0] = outer1_11(outer1_5, obj);
      obj[1] = label;
      return outer1_11(channelId(ignoredUserIds[23]).TableRow, obj, arg1);
    });
    obj10[1] = tmp6(tmp7(tmp8[22]).TableRowGroup, obj11);
    items3[2] = tmp6(closure_5, obj10);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.buttons;
    const obj13 = { size: "lg", onPress: null, text: null };
    obj13[1] = function onPress() {
      let obj = blockedUserIds(ignoredUserIds[25]);
      obj.hideActionSheet();
      const result = channelId(ignoredUserIds[26]).dismissGdmBlockedUserWarning(channelId);
      const obj2 = channelId(ignoredUserIds[26]);
      blockedUserIds(ignoredUserIds[27]).closePrivateChannel(channelId, true, true);
      const obj3 = blockedUserIds(ignoredUserIds[27]);
      obj = { action: outer1_8.CLICK_TO_LEAVE, channel_id: channelId, warning_medium: outer1_9.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
      blockedUserIds(ignoredUserIds[19]).track(outer1_10.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    };
    const intl4 = tmp7(tmp8[11]).intl;
    obj13[2] = intl4.string(tmp7(tmp8[11]).t.I4q1kA);
    const items5 = [tmp6(tmp7(tmp8[24]).Button, obj13), ];
    const obj14 = { size: "lg", variant: "secondary", onPress: null, text: null };
    obj14[2] = function onPress() {
      let obj = blockedUserIds(ignoredUserIds[25]);
      obj.hideActionSheet();
      const result = channelId(ignoredUserIds[26]).dismissGdmBlockedUserWarning(channelId);
      const obj2 = channelId(ignoredUserIds[26]);
      obj = { action: outer1_8.CLICK_TO_STAY, channel_id: channelId, warning_medium: outer1_9.ACTION_SHEET, ignored_user_ids: ignoredUserIds, blocked_user_ids: blockedUserIds };
      blockedUserIds(ignoredUserIds[19]).track(outer1_10.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    };
    const intl5 = tmp7(tmp8[11]).intl;
    obj14[3] = intl5.string(tmp7(tmp8[11]).t.DRJhmT);
    items5[1] = tmp6(tmp7(tmp8[24]).Button, obj14);
    obj12[1] = items5;
    items3[3] = callback2(closure_5, obj12);
    obj4[1] = items3;
    obj3[1] = callback2(closure_5, obj4);
    return tmp6(tmp7(tmp8[20]).ActionSheet, obj3);
  }
  const items6 = [];
  if (blockedUserIds.length > 0) {
    HermesBuiltin.arraySpread(blockedUserIds, 0);
    let substr1 = items6.slice(0, 2);
  } else {
    HermesBuiltin.arraySpread(ignoredUserIds, 0);
    substr1 = items6.slice(0, 2);
  }
  const obj15 = { userIds: substr1, guildId: null };
  let guild_id2;
  if (channel != null) {
    guild_id2 = channel.guild_id;
  }
  const obj16 = { icon: callback(UserCalloutAvatars, obj15), label: null };
  obj15[1] = guild_id2;
  const obj17 = { calledOutUserIds: substr1, totalUsers: blockedUserIds.length > 0 ? blockedUserIds.length : ignoredUserIds.length, channelId, guildId: null };
  let guild_id3;
  if (channel != null) {
    guild_id3 = channel.guild_id;
  }
  obj17[3] = guild_id3;
  obj16[1] = getUserCalloutRowText(obj17);
  items1.unshift(obj16);
};
export { getUserCalloutRowText };