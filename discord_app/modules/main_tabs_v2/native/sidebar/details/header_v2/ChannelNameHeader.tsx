// discord_app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx
import importAllResult from "allowChannelAccess";
import { View } from "Text";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import sortActivity from "sortActivity";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "getChannelIcon";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
function DirectMessageIcon(channel) {
  channel = channel.channel;
  let stateFromStores;
  let obj = channel(589);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.getUser(channel.getRecipientId()));
  const tmp = callback2();
  const items1 = [sortActivity];
  const items2 = [stateFromStores];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items1, () => {
    let isMobileOnlineResult = null != stateFromStores;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = outer1_8.isMobileOnline(tmp.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != tmp;
    if (isVROnlineResult) {
      isVROnlineResult = outer1_8.isVROnline(tmp.id);
    }
    obj[1] = isVROnlineResult;
    if (null != stateFromStores) {
      let UNKNOWN = outer1_8.getStatus(tmp.id);
    } else {
      UNKNOWN = outer1_11.UNKNOWN;
    }
    obj[2] = UNKNOWN;
    return obj;
  }, items2);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { avatarDecoration: null, user: null, guildId: "Boolean", size: true, status: false, isMobileOnline: "done", isVROnline: "flowing", statusStyle: "hourglass" };
    obj[0] = stateFromStores.avatarDecoration;
    obj[1] = stateFromStores;
    obj[3] = tmp2(1297).AvatarSizes.NORMAL;
    let isSystemUserResult;
    if (stateFromStores != null) {
      isSystemUserResult = stateFromStores.isSystemUser();
    }
    let tmp11 = null;
    if (!isSystemUserResult) {
      tmp11 = tmp7;
    }
    obj[4] = tmp11;
    obj[5] = tmp5;
    obj[6] = tmp6;
    obj[7] = tmp.statusStyle;
    tmp9Result = closure_12(tmp2(1297).Avatar, obj);
    const tmp9 = closure_12;
  }
  return tmp9Result;
}
function ThreadParentChannelLink(channel) {
  channel = channel.channel;
  let importDefault;
  let navigation;
  const tmp = importDefault(navigation[13])(channel, true);
  importDefault = tmp;
  let obj = channel(navigation[14]);
  navigation = obj.useNavigation();
  const items = [channel.id, navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
    channel(navigation[15]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items);
  obj = { onPress: callback, children: null };
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const intl = channel(navigation[18]).intl;
  obj[3] = intl.format(channel(navigation[18]).t.YbkB3U, {
    channelName: tmp,
    channelNameHook() {
      return outer1_12(channel(navigation[17]).Text, { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children: c1 });
    }
  });
  obj[1] = callback(channel(navigation[17]).Text, obj);
  return callback(channel(navigation[16]).PressableOpacity, obj);
}
function ChannelSubtitle(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [mergeGuildAvatar];
  const items1 = [channel];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let privateChannelUserTagsString = null;
    if (channel.isPrivate()) {
      privateChannelUserTagsString = channel(outer1_2[19]).getPrivateChannelUserTagsString(channel.recipients, outer1_9);
      const obj = channel(outer1_2[19]);
    }
    return privateChannelUserTagsString;
  }, items1);
  if (!channel.isPrivate()) {
    stateFromStores = tmp(4527).channelTypeString(channel);
    const tmpResult = tmp(4527);
  }
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if ("" !== stateFromStores) {
      obj = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: null };
      obj[3] = stateFromStores;
      tmp4 = callback(tmp(4338).Text, obj);
    }
  }
  return tmp4;
}
function ChannelNameHeaderContent(channel) {
  channel = channel.channel;
  let importDefault;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  const tmp = callback2();
  importDefault = tmp;
  const tmp4 = importDefault(stateFromStores[13])(channel);
  let obj = channel(stateFromStores[11]);
  let items = [ensureGuildLoaded];
  const items1 = [channel];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (channel.isThread()) {
      channel = outer1_5.getChannel(channel.parent_id);
    }
    return channel;
  }, items1);
  let obj1 = channel(stateFromStores[11]);
  const items2 = [getUncachedChannelPermissions];
  const items3 = [stateFromStores];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_7.can(outer1_10.VIEW_CHANNEL, tmp);
    }
    return canResult;
  }, items3);
  let obj2 = channel(stateFromStores[11]);
  const items4 = [createGuildRecordFromRust];
  const items5 = [, ];
  ({ id: arr6[0], guild_id: arr6[1] } = channel);
  stateFromStores2 = obj2.useStateFromStores(items4, () => {
    const guild = outer1_6.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId === channel.id;
  }, items5);
  const items6 = [channel, stateFromStores, stateFromStores1];
  const items7 = [channel, stateFromStores2, tmp];
  const memo = stateFromStores1.useMemo(() => {
    if (null != stateFromStores) {
      if (stateFromStores1) {
        let obj = { channel: null };
        obj[0] = tmp;
        let tmp3 = outer1_12(outer1_17, obj);
      }
      return tmp3;
    }
    obj = { channel };
    tmp3 = outer1_12(outer1_18, obj);
  }, items6);
  const items8 = [
    stateFromStores1.useMemo(() => {
      let obj = channel;
      if (channel.isDM()) {
        obj = { style: null, children: null };
        obj[0] = _undefined.channelIcon;
        obj = { channel: null };
        obj[0] = obj;
        obj[1] = outer1_12(outer1_16, obj);
        return outer1_12(stateFromStores2, obj);
      } else if (obj.isGroupDM()) {
        let obj1 = { style: null, children: null };
        obj1[0] = _undefined.channelIcon;
        const obj2 = { channel: null, size: null };
        obj2[0] = obj;
        obj2[1] = channel(stateFromStores[12]).AvatarSizes.REFRESH_MEDIUM_32;
        obj1[1] = outer1_12(_undefined(stateFromStores[20]), obj2);
        return outer1_12(stateFromStores2, obj1);
      } else {
        obj1 = channel(stateFromStores[21]);
        const obj3 = { isRulesChannel: null };
        obj3[0] = stateFromStores2;
        const channelIconComponent = obj1.getChannelIconComponent(obj, obj3);
        let tmp5 = null;
        if (null != channelIconComponent) {
          const obj4 = { style: null, children: null };
          const items = [, ];
          ({ channelIcon: arr[0], channelTypeBox: arr[1] } = _undefined);
          obj4[0] = items;
          obj4[1] = outer1_12(channelIconComponent, { size: "md", color: "mobile-text-heading-primary" });
          tmp5 = outer1_12(stateFromStores2, obj4);
        }
        return tmp5;
      }
    }, items7),

  ];
  obj = { style: tmp.channelData, children: null };
  if (channel.isDM()) {
    obj = { userId: null, guildId: null, userName: null, variant: "redesign/heading-18/bold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail" };
    obj[0] = channel.getRecipientId();
    obj[1] = channel.guild_id;
    obj[2] = tmp4;
    let tmp13Result = tmp13(importDefault(tmp3[22]), obj);
    const tmp2Result = importDefault(tmp3[22]);
  } else {
    obj1 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: null };
    obj1[4] = tmp4;
    tmp13Result = tmp13(channel(tmp3[17]).Text, obj1);
  }
  obj2 = { children: null };
  const items9 = [tmp13Result, memo];
  obj[1] = items9;
  items8[1] = closure_13(stateFromStores2, obj);
  obj2[0] = items8;
  return closure_13(closure_14, obj2);
}
function DMChannelNameHeader(channel) {
  channel = channel.channel;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5789)().analyticsLocations;
  const items = [channel, analyticsLocations];
  const callback = importAllResult.useCallback(() => {
    const recipientId = channel.getRecipientId();
    if (null != recipientId) {
      const obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
      obj[0] = recipientId;
      obj[1] = channel.id;
      obj[2] = analyticsLocations;
      analyticsLocations(outer1_2[24])(obj);
    }
  }, items);
  let obj = { style: items1, onPress: callback, children: null };
  items1 = [callback2().container, channel.containerStyle];
  obj[2] = callback(ChannelNameHeaderContent, { channel });
  return callback(channel(4909).PressableOpacity, obj);
}
function DefaultChannelNameHeader(arg0) {
  let channel;
  let containerStyle;
  ({ channel, containerStyle } = arg0);
  const obj = { style: null, children: null };
  const items = [callback2().container, containerStyle];
  obj[0] = items;
  obj[1] = callback(ChannelNameHeaderContent, { channel });
  return callback(View, obj);
}
let c3 = importAllResult;
({ Permissions: c10, StatusTypes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { container: null, channelIcon: null, channelTypeBox: null, channelData: null, statusStyle: null };
obj = { flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "center" };
obj[0] = obj;
obj[1] = { height: 40, width: 40, justifyContent: "center", alignItems: "center" };
createCacheKey = { borderRadius: require("Themes").modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS, borderWidth: require("Themes").modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
obj[2] = createCacheKey;
obj[3] = { flex: 1 };
obj[4] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
let closure_15 = createCacheKey.createStyles(obj);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
const memoResult = importAllResult.memo(function ChannelNameHeader(arg0) {
  let channel;
  let containerStyle;
  ({ channel, containerStyle } = arg0);
  if (channel.isDM()) {
    let obj = { channel: null, containerStyle: null };
    obj[0] = channel;
    obj[1] = containerStyle;
    let tmpResult = tmp(DMChannelNameHeader, obj);
  } else {
    obj = { channel: null, containerStyle: null };
    obj[0] = channel;
    obj[1] = containerStyle;
    tmpResult = tmp(DefaultChannelNameHeader, obj);
  }
  return tmpResult;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx");

export default memoResult;