// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Button from "../../../../../design/void/native.tsx";
import map from "../../../../../design/tokens/native/useToken.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import computeChannelName from "../../../../channel/useChannelName.tsx";
import getChannelIcon from "../../../../../utils/native/ChannelUtils.tsx";
import AVERAGE_FONT_WIDTH_RATIODefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import FacepileGroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import registerAssetDefault from "../../../../../../_runtime/12934_registerAsset.js";
import _modDef12935 from "../../../../guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../../stores/RelationshipStore.tsx";
import closure_7 from "../../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function TitleWrapper(headerAccessibilityLabel) {
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  c1 = undefined;
  const tmp = callback3();
  [tmp3, c1] = callback(React.useState(undefined), 2);
  [][0] = titleContentHeight;
  callback = React.useCallback((nativeEvent) => {
    _undefined({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
  }, []);
  if (null == onPress) {
    let obj = { style: null, accessibilityRole: "header", children: null };
    obj[0] = tmp.wrapper;
    obj[2] = children;
    let tmp6Result = callback2(View, obj);
  } else {
    obj = titleContentHeight(500);
    let tmp9;
    if (obj.isAndroid()) {
      tmp9 = callback;
    }
    obj = {
      onLayout: null,
      onPress: null,
      androidRippleConfig: null,
      accessibilityRole: "header",
      accessibilityLabel: null,
      hitSlop: null,
      style: null,
      children: null,
    };
    obj[0] = tmp9;
    obj[1] = onPress;
    obj[2] = tmp3;
    obj[4] = headerAccessibilityLabel.headerAccessibilityLabel;
    obj[5] = tmp5;
    obj[6] = tmp.wrapper;
    obj[7] = children;
    tmp6Result = callback2(titleContentHeight(5068).PressableOpacity, obj);
    const tmp6 = callback2;
  }
  return tmp6Result;
}
function ChannelTitle(guildId) {
  ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
  if (disableArrow === undefined) {
    disableArrow = false;
  }
  ({ userId, icon } = guildId);
  const tmp = callback3();
  let obj = { style: tmp.channelContent, children: null };
  obj = { style: tmp.nameWithArrow, children: null };
  let tmp4 = null;
  if (null != icon) {
    tmp4 = icon;
  }
  const items = [tmp4, ,];
  if (null != userId) {
    obj = {
      userId: null,
      guildId: null,
      userName: null,
      variant: "redesign/heading-18/semibold",
      defaultColor: "mobile-text-heading-primary",
      lineClamp: 1,
      style: null,
      containerStyle: null,
      accessibilityLabel: null,
      accessibilityRole: "header",
      maxFontSizeMultiplier: 2,
    };
    obj[0] = userId;
    obj[1] = guildId.guildId;
    obj[2] = title;
    ({ channelName: obj4[6], channelNameContainer: obj4[7] } = tmp);
    obj[8] = accessibleTitle;
    let tmp8 = callback2(AVERAGE_FONT_WIDTH_RATIODefault, obj);
    let tmp5 = callback2;
  } else {
    tmp5 = callback2;
    obj1 = {
      variant: "redesign/heading-18/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: null,
      accessibilityLabel: null,
      accessibilityRole: "header",
      maxFontSizeMultiplier: 2,
      children: null,
    };
    obj1[3] = tmp.channelName;
    obj1[4] = accessibleTitle;
    obj1[7] = title;
    tmp8 = callback2(Text.Text, obj1);
  }
  items[1] = tmp8;
  let tmp5Result = !disableArrow;
  if (!disableArrow) {
    const obj2 = { source: null, size: null, style: null };
    obj2[0] = registerAssetDefault;
    obj2[1] = Button.Icon.Sizes.REFRESH_SMALL_16;
    obj2[2] = tmp.arrowIcon;
    tmp5Result = tmp5(Button.Icon, obj2);
  }
  items[2] = tmp5Result;
  obj[1] = items;
  const items1 = [closure_9(View, obj)];
  tmp5Result = null != subtitle;
  if (tmp5Result) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.subTitleContainer;
    obj3[1] = subtitle;
    tmp5Result = tmp5(tmp3, obj3);
  }
  items1[1] = tmp5Result;
  obj[1] = items1;
  return closure_9(View, obj);
}
function GroupDMIcon(channel) {
  const obj = { size: null, channel: null, style: null };
  const tmp = callback3();
  obj[0] = Button.AvatarSizes.REFRESH_MEDIUM_32;
  obj[1] = channel.channel;
  obj[2] = tmp.channelIcon;
  return callback2(FacepileGroupDMAvatarDefault, obj);
}
function UserAvatar(user) {
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = {
    user,
    avatarDecoration: user.avatarDecoration,
    guildId: "Boolean",
    size: true,
    status: false,
    isMobileOnline: "done",
    isVROnline: "flowing",
    style: "hourglass",
    autoStatusCutout: "hours",
  };
  obj[3] = Button.AvatarSizes.REFRESH_MEDIUM_32;
  let tmp3 = null;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  obj[4] = tmp3;
  obj[5] = isMobileOnline;
  obj[6] = isVROnline;
  obj[7] = callback3().channelIcon;
  return closure_8(Button.Avatar, obj);
}
function ChannelIconRaw(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    obj = { size: null, color: "icon-strong", style: null };
    obj[0] = token;
    obj[2] = { marginEnd: 4 };
    let tmp6 = callback2(IconComponent, obj);
  } else {
    obj = { size: null, source: null, color: null };
    obj[0] = tmp(1297).Icon.Sizes.SMALL_20;
    obj[1] = IconComponent.icon;
    obj[2] = tmp4.guildChannelIcon.tintColor;
    tmp6 = callback2(tmp(1297).Icon, obj);
  }
  return tmp6;
}
function MemberCountText(arg0) {
  ({ presenceCount, memberCount } = arg0);
  let str = "online";
  ({ withSeparator, leadingAccessoryWidth } = arg0);
  if (0 === presenceCount) {
    str = "online";
    if (null !== memberCount) {
      str = "total";
    }
  }
  const obj = { type: str, count: null, color: "text-subtle", dotContainerWidth: null };
  if ("online" === str) {
    memberCount = presenceCount;
  }
  obj[1] = memberCount;
  obj[3] = leadingAccessoryWidth;
  const children = [closure_8(_modDef12935, obj)];
  let tmp4Result = null;
  if (withSeparator) {
    tmp4Result = tmp4(Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "\u2022" });
  }
  children[1] = tmp4Result;
  return closure_9(closure_10, { children });
}
function ParentChannelSubTitle(channel) {
  channel = channel.channel;
  let obj = {
    lineClamp: 1,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2,
    variant: "text-sm/medium",
    color: "text-subtle",
    style: null,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj = { channelName: null };
  const tmp = callback3();
  obj[0] = computeChannelName.computeChannelName(channel, closure_7, closure_6);
  obj[1] = intl.formatToPlainString(getSystemLocale.t.BjYvHO, obj);
  obj[5] = tmp.parentChannelName;
  const obj3 = computeChannelName;
  obj[6] = computeChannelName.computeChannelName(channel, closure_7, closure_6);
  return callback2(Text.Text, obj);
}
function EmptyIcon() {
  return callback2(View, { style: callback3().channelIconWrapper });
}
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = {
    wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 },
    channelContent: { flex: 1, flexShrink: 1, justifyContent: "center", marginTop: 4 },
    nameWithArrow: { flexDirection: "row", alignItems: "center", flexShrink: 1 },
    channelNameContainer: { flexShrink: 1 },
    channelName: { flexShrink: 1 },
    arrowIcon: null,
    channelIcon: null,
    channelIconWrapper: null,
    guildChannelIcon: null,
    subTitleContainer: null,
    parentChannelName: null,
  };
  obj = {
    tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 2,
    marginLeft: 2,
  };
  obj[5] = obj;
  obj[6] = { marginRight: 12, flexShrink: 0 };
  obj[7] = { width: 32, height: 32, justifyContent: "center", alignItems: "center" };
  obj = { tintColor: ThemesDefault.colors.TEXT_STRONG };
  obj[8] = obj;
  obj[9] = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
  obj[10] = { lineHeight: 20, flexShrink: 1 };
  return obj;
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx",
);

export const renderTitleWrapper = function renderTitleWrapper(tmp28Result, callback, combined, titleContentHeight) {
  return callback2(TitleWrapper, {
    onPress: callback,
    headerAccessibilityLabel: combined,
    titleContentHeight,
    children: tmp28Result,
  });
};
export const renderChannelTitle = function renderChannelTitle(channelName, arg1) {
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
  obj = {
    title: channelName,
    accessibleTitle,
    subtitle,
    disableArrow: tmp,
    userId: obj.userId,
    guildId: obj.guildId,
    icon: obj.icon,
  };
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
