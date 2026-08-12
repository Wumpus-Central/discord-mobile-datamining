// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import _slicedToArray from "_slicedToArray";
import GuildActionSheetMemberCount from "../../../../guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx";
import { View } from "map";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import { getMinHeaderHeight } from "MIN_HEADER_HEIGHT";
import jsxProd from "computeChannelName";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { map } from "../../../../../design/tokens/native/useToken.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { getChannelIcon } from "../../../../../utils/native/ChannelUtils.tsx";
import { computeChannelName } from "../../../../channel/useChannelName.tsx";
import { FacepileGroupDMAvatar } from "../../../../group_dm/native/GroupDMAvatar.tsx";
import { GuildActionSheetMemberCount } from "../../../../guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

let c10;
let c9;
let unpackModuleId;
const require = arg1;
function TitleWrapper(headerAccessibilityLabel) {
  let c1;
  let children;
  let onPress;
  let titleContentHeight;
  let tmp4;
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  let importDefault;
  const tmp2 = callback3(useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared"));
  [tmp4, c1] = callback(React.useState(undefined), 2);
  [][0] = titleContentHeight;
  callback = React.useCallback((nativeEvent) => {
    _undefined({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
  }, []);
  if (null == onPress) {
    let obj = { style: null, accessibilityRole: "header", children: null };
    obj[0] = tmp2.wrapper;
    obj[2] = children;
    let tmp7Result = callback2(View, obj);
  } else {
    obj = titleContentHeight(500);
    let tmp9;
    if (obj.isAndroid()) {
      tmp9 = callback;
    }
    obj = { onLayout: null, onPress: null, androidRippleConfig: null, accessibilityRole: "header", accessibilityLabel: null, hitSlop: null, style: null, children: null };
    obj[0] = tmp9;
    obj[1] = onPress;
    obj[2] = tmp4;
    obj[4] = headerAccessibilityLabel.headerAccessibilityLabel;
    obj[5] = tmp6;
    obj[6] = tmp2.wrapper;
    obj[7] = children;
    tmp7Result = callback2(titleContentHeight(4886).PressableOpacity, obj);
    const tmp7 = callback2;
  }
  return tmp7Result;
}
function ChannelTitle(guildId) {
  let accessibleTitle;
  let disableArrow;
  let icon;
  let subtitle;
  let title;
  let userId;
  ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
  if (disableArrow === undefined) {
    disableArrow = false;
  }
  ({ userId, icon } = guildId);
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("ChannelTitle");
  const tmp4 = callback3(tmp3);
  let obj = { style: tmp4.channelContent, children: null };
  obj = { style: tmp4.nameWithArrow, children: null };
  let tmp7 = null;
  if (tmp3) {
    tmp7 = null;
    if (null != icon) {
      tmp7 = icon;
    }
  }
  const items = [tmp7, , ];
  if (null != userId) {
    obj = { userId: null, guildId: null, userName: null, variant: null, defaultColor: "mobile-text-heading-primary", lineClamp: 1, style: null, containerStyle: null, accessibilityLabel: null, accessibilityRole: "header", maxFontSizeMultiplier: 2 };
    obj[0] = userId;
    obj[1] = guildId.guildId;
    obj[2] = title;
    let str2 = "heading-lg/bold";
    if (tmp3) {
      str2 = "redesign/heading-18/semibold";
    }
    obj[3] = str2;
    ({ channelName: obj4[6], channelNameContainer: obj4[7] } = tmp4);
    obj[8] = accessibleTitle;
    let tmp8Result = tmp11(tmp(9516), obj);
    let tmp8 = tmp11;
    const tmpResult = tmp(9516);
  } else {
    tmp8 = closure_9;
    let str = "heading-lg/bold";
    if (tmp3) {
      str = "redesign/heading-18/semibold";
    }
    const obj1 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, accessibilityLabel: null, accessibilityRole: "header", maxFontSizeMultiplier: 2, children: null };
    obj1[0] = str;
    obj1[3] = tmp4.channelName;
    obj1[4] = accessibleTitle;
    obj1[7] = title;
    tmp8Result = tmp8(Text.Text, obj1);
  }
  items[1] = tmp8Result;
  tmp8Result = !disableArrow;
  if (!disableArrow) {
    const obj2 = { source: null, size: null, style: null };
    obj2[0] = tmp(12615);
    obj2[1] = Button.Icon.Sizes.REFRESH_SMALL_16;
    obj2[2] = tmp4.arrowIcon;
    tmp8Result = tmp8(Button.Icon, obj2);
  }
  items[2] = tmp8Result;
  obj[1] = items;
  const items1 = [closure_10(View, obj), ];
  let tmp8Result1 = null != subtitle;
  if (tmp8Result1) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp4.subTitleContainer;
    obj3[1] = subtitle;
    tmp8Result1 = tmp8(tmp6, obj3);
  }
  items1[1] = tmp8Result1;
  obj[1] = items1;
  return closure_10(View, obj);
}
function GroupDMIcon(channel) {
  const obj = { size: null, channel: null, style: null };
  const tmp = callback3(useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared"));
  obj[0] = Button.AvatarSizes.REFRESH_MEDIUM_32;
  obj[1] = channel.channel;
  obj[2] = tmp.channelIcon;
  return callback2(FacepileGroupDMAvatar, obj);
}
function UserAvatar(user) {
  let isMobileOnline;
  let isVROnline;
  let status;
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = { user, avatarDecoration: user.avatarDecoration, guildId: "Boolean", size: true, status: "done", isMobileOnline: true, isVROnline: null, style: null, autoStatusCutout: 102.957 };
  obj[3] = Button.AvatarSizes.REFRESH_MEDIUM_32;
  let tmp3 = null;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  obj[4] = tmp3;
  obj[5] = isMobileOnline;
  obj[6] = isVROnline;
  obj[7] = callback3(useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared")).channelIcon;
  return closure_9(Button.Avatar, obj);
}
function ChannelIconRaw(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const tmp2 = useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared");
  let obj = map;
  const token = obj.useToken(Themes.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    obj = { size: null, color: null, style: null };
    obj[0] = token;
    let str = "text-strong";
    if (tmp2) {
      str = "icon-strong";
    }
    obj[1] = str;
    obj = undefined;
    if (tmp2) {
      obj = { marginEnd: 4 };
    }
    obj[2] = obj;
    let tmp8Result = callback2(IconComponent, obj);
    const tmp8 = callback2;
  } else {
    const obj1 = { size: null, source: null, color: null };
    obj1[0] = tmp3(1297).Icon.Sizes.SMALL_20;
    obj1[1] = IconComponent.icon;
    obj1[2] = tmp5.guildChannelIcon.tintColor;
    tmp8Result = callback2(tmp3(1297).Icon, obj1);
  }
  return tmp8Result;
}
function MemberCountText(arg0) {
  let leadingAccessoryWidth;
  let memberCount;
  let presenceCount;
  let withSeparator;
  ({ presenceCount, memberCount } = arg0);
  ({ withSeparator, leadingAccessoryWidth } = arg0);
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared");
  let str = "online";
  if (0 === presenceCount) {
    str = "online";
    if (null !== memberCount) {
      str = "total";
    }
  }
  let obj = { type: str, count: null, color: null, dotContainerWidth: null };
  if ("online" === str) {
    memberCount = presenceCount;
  }
  obj[1] = memberCount;
  let str2 = "text-muted";
  if (tmp3) {
    str2 = "text-subtle";
  }
  obj[2] = str2;
  let tmp9;
  if (tmp3) {
    tmp9 = leadingAccessoryWidth;
  }
  obj[3] = tmp9;
  const children = [closure_9(GuildActionSheetMemberCount, obj), ];
  let tmp7Result = null;
  if (withSeparator) {
    let str3 = "text-xs/medium";
    if (tmp3) {
      str3 = "text-sm/normal";
    }
    obj = { variant: null, color: "text-subtle", children: "\u2022" };
    obj[0] = str3;
    tmp7Result = tmp7(Text.Text, obj);
  }
  children[1] = tmp7Result;
  return closure_10(closure_11, { children });
}
function ParentChannelSubTitle(channel) {
  channel = channel.channel;
  const tmp2 = useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared");
  let obj = { lineClamp: 1, accessibilityLabel: null, maxFontSizeMultiplier: 2, variant: null, color: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj = { channelName: null };
  const tmp3 = callback3(tmp2);
  const tmp4 = closure_9;
  const tmp5 = require;
  obj[0] = computeChannelName.computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
  obj[1] = intl.formatToPlainString(getSystemLocale.t.BjYvHO, obj);
  let str = "text-xs/medium";
  if (tmp2) {
    str = "text-sm/medium";
  }
  obj[3] = str;
  let str2 = "text-muted";
  if (tmp2) {
    str2 = "text-subtle";
  }
  obj[4] = str2;
  obj[5] = tmp3.parentChannelName;
  const obj3 = computeChannelName;
  const tmp6 = mergeGuildAvatar;
  const tmp7 = markAllUserIdListsStale;
  obj[6] = tmp5(4534).computeChannelName(channel, tmp6, tmp7);
  return tmp4(Text.Text, obj);
}
function EmptyIcon() {
  return callback2(View, { style: callback3(useIsMobileVisualRefreshExperimentEnabled("ChannelHeaderShared")).channelIconWrapper });
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 }, channelContent: null, nameWithArrow: null, channelNameContainer: null, channelName: null, arrowIcon: null, channelIcon: null, channelIconWrapper: null, guildChannelIcon: null, subTitleContainer: null, parentChannelName: null };
  let num;
  if (arg0) {
    num = 4;
  }
  obj[1] = { flex: 1, flexShrink: 1, justifyContent: "center", marginTop: num };
  obj[2] = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
  obj[3] = { flexShrink: 1 };
  obj = { flexShrink: 1 };
  const merged = Object.assign(arg0 ? {} : { fontSize: 18, lineHeight: 24 });
  obj[4] = obj;
  obj = { tintColor: Themes.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0, flexGrow: 0, marginTop: 2, marginLeft: 2 };
  obj[5] = obj;
  obj[6] = { marginRight: 12, flexShrink: 0 };
  obj[7] = { width: 32, height: 32, justifyContent: "center", alignItems: "center" };
  obj[8] = { tintColor: Themes.colors.TEXT_STRONG };
  obj[9] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
  obj[10] = { lineHeight: 16, flexShrink: 1 };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp28Result, callback, combined, titleContentHeight) {
  return callback2(TitleWrapper, { onPress: callback, headerAccessibilityLabel: combined, titleContentHeight, children: tmp28Result });
};
export const renderChannelTitle = function renderChannelTitle(channelName, arg1) {
  let accessibleTitle;
  let subtitle;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const disableArrow = obj.disableArrow;
  let tmp = undefined !== disableArrow;
  ({ accessibleTitle, subtitle } = obj);
  if (tmp) {
    tmp = disableArrow;
  }
  obj = { title: channelName, accessibleTitle, subtitle, disableArrow: tmp, userId: obj.userId, guildId: obj.guildId, icon: obj.icon };
  return callback2(ChannelTitle, obj);
};
export const renderGroupDMIcon = function renderGroupDMIcon(stateFromStores) {
  return callback2(GroupDMIcon, { channel: stateFromStores });
};
export const renderUserAvatar = function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  return callback2(UserAvatar, { user: stateFromStores1, status, isMobileOnline, isVROnline });
};
export const renderChannelIconRaw = function renderChannelIconRaw(icon, IconComponent) {
  return callback2(ChannelIconRaw, { icon, IconComponent });
};
export const renderChannelIcon = function renderChannelIcon(stateFromStores, stateFromStores3) {
  let obj = getChannelIcon;
  const channelIconWithGuild = obj.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  let rulesChannelId;
  if (stateFromStores3 != null) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  obj = { isRulesChannel: rulesChannelId === stateFromStores.id };
  obj = { icon: channelIconWithGuild, IconComponent: getChannelIcon.getChannelIconComponent(stateFromStores, obj) };
  return callback2(ChannelIconRaw, obj);
};
export const renderMemberCountText = function renderMemberCountText(online, length, flag, arg3) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: null, memberCount: null, withSeparator: null, leadingAccessoryWidth: null };
    obj[0] = online;
    obj[1] = length;
    obj[2] = flag;
    obj[3] = arg3;
    let tmp = callback2(MemberCountText, obj);
  } else {
    tmp = null;
  }
  return tmp;
};
export const renderParentChannelSubTitle = function renderParentChannelSubTitle(stateFromStores2) {
  return callback2(ParentChannelSubTitle, { channel: stateFromStores2 });
};
export const renderEmptyIcon = function renderEmptyIcon() {
  return callback2(EmptyIcon, {});
};