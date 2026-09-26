// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import _modDef12849 from "../../../../../../_runtime/metro/12849__.js";
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
  [tmp3, c1] = noop.useState(undefined);
  [][0] = titleContentHeight;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
  }, []);
  if (null == onPress) {
    const obj2 = { style: tmp.wrapper, accessibilityRole: "header", children };
    let tmp6Result = React6(View, obj2);
  } else {
    let tmp9;
    if (obj.isAndroid()) {
      tmp9 = callback;
    }
    const obj3 = {
      onLayout: tmp9,
      onPress,
      androidRippleConfig: tmp3,
      accessibilityRole: "header",
      accessibilityLabel: headerAccessibilityLabel.headerAccessibilityLabel,
      hitSlop: tmp5,
      style: tmp.wrapper,
      children,
    };
    tmp6Result = React6(Pressables.PressableOpacity, obj3);
    obj = PlatformUtils;
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
  const obj = { style: tmp.channelContent, children: null };
  const obj2 = { style: tmp.nameWithArrow, children: null };
  let tmp4 = null;
  if (null != icon) {
    tmp4 = icon;
  }
  const items = [tmp4, ,];
  if (null != userId) {
    const obj3 = {
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
    obj3.accessibilityLabel = accessibleTitle;
    let tmp8 = React6(UsernameWithEffectsDefault, obj3);
    let tmp5 = React6;
  } else {
    tmp5 = React6;
    const obj5 = {
      variant: "redesign/heading-18/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: tmp.channelName,
      accessibilityLabel: accessibleTitle,
      accessibilityRole: "header",
      maxFontSizeMultiplier: 2,
      children: title,
    };
    tmp8 = React6(Text_Text.Text, obj5);
  }
  items[1] = tmp8;
  let tmp5Result = !disableArrow;
  if (!disableArrow) {
    const obj6 = { source: _modDef12849, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
    tmp5Result = tmp5(native.Icon, obj6);
  }
  items[2] = tmp5Result;
  obj2.children = items;
  const items1 = [React7(View, obj2)];
  let tmp5Result2 = null != subtitle;
  if (tmp5Result2) {
    const obj11 = { style: tmp.subTitleContainer, children: subtitle };
    tmp5Result2 = tmp5(View, obj11);
  }
  items1[1] = tmp5Result2;
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
    status: null,
    isMobileOnline: null,
    isVROnline: null,
    style: null,
    autoStatusCutout: null,
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
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    const obj2 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
    let tmp6 = React6(IconComponent, obj2);
  } else {
    const obj3 = {
      size: native.Icon.Sizes.SMALL_20,
      source: IconComponent.icon,
      color: tmp4.guildChannelIcon.tintColor,
    };
    tmp6 = React6(native.Icon, obj3);
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
  let str2 = "text-sm/normal";
  if (obj.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
    str2 = "text-xs/normal";
  }
  const obj2 = { type: str, count: null, color: "text-subtle", dotContainerWidth: null, textVariant: null };
  obj = ManaTypeConsolidationExperiment;
  if ("online" === str) {
    memberCount = presenceCount;
  }
  obj2.count = memberCount;
  obj2.dotContainerWidth = leadingAccessoryWidth;
  obj2.textVariant = str2;
  const children = [React6(GuildActionSheetMemberCountDefault, obj2)];
  let tmp6Result = null;
  if (withSeparator) {
    const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
    tmp6Result = React6(Text_Text.Text, obj3);
  }
  children[1] = tmp6Result;
  return React7(closure_1_10, { children });
}
function ParentChannelSubTitle(channel) {
  channel = channel.channel;
  const obj = {
    lineClamp: 1,
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2,
    variant: "text-sm/medium",
    color: "text-subtle",
    style: null,
    children: null,
  };
  const intl = util.intl;
  const obj2 = { channelName: null };
  const tmp = closure_11();
  obj2.channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj2);
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
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles(() => {
  const obj = {
    wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 },
    channelContent: { flex: 1, flexShrink: 1, justifyContent: "center", marginTop: 4 },
    nameWithArrow: { flexDirection: "row", alignItems: "center", flexShrink: 1 },
    channelNameContainer: { flexShrink: 1 },
    channelName: { flexShrink: 1 },
    arrowIcon: {
      tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
      flexShrink: 0,
      flexGrow: 0,
      marginTop: 2,
      marginLeft: 2,
    },
    channelIcon: { marginRight: 12, flexShrink: 0 },
    channelIconWrapper: { width: 32, height: 32, justifyContent: "center", alignItems: "center" },
    guildChannelIcon: null,
    subTitleContainer: null,
    parentChannelName: null,
  };
  const obj2 = {
    tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 2,
    marginLeft: 2,
  };
  obj.guildChannelIcon = { tintColor: nativeDefault.colors.TEXT_STRONG };
  obj.subTitleContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
  obj.parentChannelName = { lineHeight: 20, flexShrink: 1 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp33Result, callback, combined, titleContentHeight) {
  return React6(TitleWrapper, {
    onPress: callback,
    headerAccessibilityLabel: combined,
    titleContentHeight,
    children: tmp33Result,
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
  return React6(ChannelTitle, {
    title: channelName,
    accessibleTitle,
    subtitle,
    disableArrow: tmp,
    userId: obj.userId,
    guildId: obj.guildId,
    icon: obj.icon,
  });
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
  const channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  let rulesChannelId;
  if (stateFromStores3 != null) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  const obj3 = { isRulesChannel: rulesChannelId === stateFromStores.id };
  return React6(ChannelIconRaw, {
    icon: channelIconWithGuild,
    IconComponent: utils_ChannelUtils.getChannelIconComponent(stateFromStores, {
      isRulesChannel: rulesChannelId === stateFromStores.id,
    }),
  });
};
export const renderMemberCountText = function renderMemberCountText(online, memberCount) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount, withSeparator: flag, leadingAccessoryWidth };
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
