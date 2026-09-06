// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import native from "../../../../../design/void/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import _modDef13270 from "../../../../../../_runtime/metro/13270__.js";
import GuildActionSheetMemberCountDefault from "../../../../guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function TitleWrapper(headerAccessibilityLabel) {
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  c1 = undefined;
  const tmp = closure_11();
  [tmp3, c1] = _slicedToArray(noop.useState(undefined), 2);
  [][0] = titleContentHeight;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
  }, []);
  if (null == onPress) {
    let obj = { style: tmp.wrapper, accessibilityRole: "header", children };
    let tmp6Result = React6(View, obj);
  } else {
    obj = PlatformUtils;
    let tmp9;
    if (obj.isAndroid()) {
      tmp9 = callback;
    }
    obj = {
      onLayout: tmp9,
      onPress,
      androidRippleConfig: tmp3,
      accessibilityRole: "header",
      accessibilityLabel: headerAccessibilityLabel.headerAccessibilityLabel,
      hitSlop: tmp5,
      style: tmp.wrapper,
      children,
    };
    tmp6Result = React6(Pressables.PressableOpacity, obj);
  }
  return tmp6Result;
}
function ChannelTitle(guildId) {
  ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
  if (disableArrow === undefined) {
    disableArrow = false;
  }
  ({ userId, icon } = guildId);
  const tmp = closure_11();
  let obj = { style: tmp.channelContent, children: null };
  obj = { style: tmp.nameWithArrow, children: null };
  let tmp4 = null;
  if (null != icon) {
    tmp4 = icon;
  }
  const items = [tmp4, ,];
  if (null != userId) {
    obj = {
      userId,
      guildId: guildId.guildId,
      userName: title,
      variant: "redesign/heading-18/semibold",
      defaultColor: "mobile-text-heading-primary",
      lineClamp: 1,
      style: null,
      containerStyle: null,
      accessibilityLabel: null,
      accessibilityRole: "header",
      maxFontSizeMultiplier: 2,
    };
    ({ channelName: obj4.style, channelNameContainer: obj4.containerStyle } = tmp);
    obj.accessibilityLabel = accessibleTitle;
    let tmp8 = React6(UsernameWithEffectsDefault, obj);
    let tmp5 = React6;
  } else {
    tmp5 = React6;
    const obj1 = {
      variant: "redesign/heading-18/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: tmp.channelName,
      accessibilityLabel: accessibleTitle,
      accessibilityRole: "header",
      maxFontSizeMultiplier: 2,
      children: title,
    };
    tmp8 = React6(Text_Text.Text, obj1);
  }
  items[1] = tmp8;
  let tmp5Result = !disableArrow;
  if (!disableArrow) {
    const obj2 = { source: _modDef13270, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
    tmp5Result = tmp5(native.Icon, obj2);
  }
  items[2] = tmp5Result;
  obj.children = items;
  const items1 = [React7(View, obj)];
  tmp5Result = null != subtitle;
  if (tmp5Result) {
    const obj3 = { style: tmp.subTitleContainer, children: subtitle };
    tmp5Result = tmp5(tmp3, obj3);
  }
  items1[1] = tmp5Result;
  obj.children = items1;
  return React7(View, obj);
}
function GroupDMIcon(channel) {
  const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel: channel.channel };
  return React6(GroupDMAvatarDefault, obj);
}
function UserAvatar(user) {
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = {
    user,
    avatarDecoration: user.avatarDecoration,
    guildId: "Boolean",
    size: native.AvatarSizes.REFRESH_MEDIUM_32,
    status: false,
    isMobileOnline: "done",
    isVROnline: "flowing",
    style: "hourglass",
    autoStatusCutout: "hours",
  };
  let tmp3 = null;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  obj.status = tmp3;
  obj.isMobileOnline = isMobileOnline;
  obj.isVROnline = isVROnline;
  obj.style = closure_11().channelIcon;
  return React6(native.Avatar, obj);
}
function ChannelIconRaw(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    obj = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
    let tmp6 = React6(IconComponent, obj);
  } else {
    obj = { size: tmp(1178).Icon.Sizes.SMALL_20, source: IconComponent.icon, color: tmp4.guildChannelIcon.tintColor };
    tmp6 = React6(tmp(1178).Icon, obj);
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
  obj.count = memberCount;
  obj.dotContainerWidth = leadingAccessoryWidth;
  const children = [React6(GuildActionSheetMemberCountDefault, obj)];
  let tmp4Result = null;
  if (withSeparator) {
    tmp4Result = tmp4(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "\u2022" });
  }
  children[1] = tmp4Result;
  return React7(closure_1_10, { children });
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
  const intl = util.intl;
  obj = { channelName: null };
  const tmp = closure_11();
  obj.channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj);
  obj.style = tmp.parentChannelName;
  obj.children = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  return React6(Text_Text.Text, obj);
}
function EmptyIcon() {
  return React6(View, { style: closure_11().channelIconWrapper });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles(() => {
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
    tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 2,
    marginLeft: 2,
  };
  obj.arrowIcon = obj;
  obj.channelIcon = { marginRight: 12, flexShrink: 0 };
  obj.channelIconWrapper = { width: 32, height: 32, justifyContent: "center", alignItems: "center" };
  obj = { tintColor: nativeDefault.colors.TEXT_STRONG };
  obj.guildChannelIcon = obj;
  obj.subTitleContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
  obj.parentChannelName = { lineHeight: 20, flexShrink: 1 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp28Result, callback, combined, titleContentHeight) {
  return React6(TitleWrapper, {
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
  return React6(ChannelTitle, obj);
};
export const renderGroupDMIcon = function renderGroupDMIcon(stateFromStores) {
  return React6(GroupDMIcon, { channel: stateFromStores });
};
export const renderUserAvatar = function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  return React6(UserAvatar, { user: stateFromStores1, status, isMobileOnline, isVROnline });
};
export const renderChannelIconRaw = function renderChannelIconRaw(icon, IconComponent) {
  return React6(ChannelIconRaw, { icon, IconComponent });
};
export const renderChannelIcon = function renderChannelIcon(stateFromStores, stateFromStores3) {
  let obj = utils_ChannelUtils;
  const channelIconWithGuild = obj.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  let rulesChannelId;
  if (stateFromStores3 != null) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  obj = { isRulesChannel: rulesChannelId === stateFromStores.id };
  obj = { icon: channelIconWithGuild, IconComponent: utils_ChannelUtils.getChannelIconComponent(stateFromStores, obj) };
  return React6(ChannelIconRaw, obj);
};
export const renderMemberCountText = function renderMemberCountText(online, length, flag, leadingAccessoryWidth) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount: length, withSeparator: flag, leadingAccessoryWidth };
    let tmp = React6(MemberCountText, obj);
  } else {
    tmp = null;
  }
  return tmp;
};
export const renderParentChannelSubTitle = function renderParentChannelSubTitle(stateFromStores2) {
  return React6(ParentChannelSubTitle, { channel: stateFromStores2 });
};
export const renderEmptyIcon = function renderEmptyIcon() {
  return React6(EmptyIcon, {});
};
