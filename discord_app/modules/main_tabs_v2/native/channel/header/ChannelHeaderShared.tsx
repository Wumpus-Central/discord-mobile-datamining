// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import BotTagDefault from "../../../../applications/native/BotTag.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import _modDef11306 from "../../../../../../_runtime/metro/11306__.js";
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
    let tmp6Result = React6(hasOwnProperty, obj2);
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
    const obj6 = { source: _modDef11306, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
    tmp5Result = tmp5(native.Icon, obj6);
  }
  items[2] = tmp5Result;
  obj2.children = items;
  const items1 = [React7(hasOwnProperty, obj2)];
  let tmp5Result2 = null != subtitle;
  if (tmp5Result2) {
    const obj11 = { style: tmp.subTitleContainer, children: subtitle };
    tmp5Result2 = tmp5(hasOwnProperty, obj11);
  }
  items1[1] = tmp5Result2;
  obj.children = items1;
  return React7(hasOwnProperty, obj);
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
    status: "done",
    isMobileOnline: true,
    isVROnline: null,
    style: "sku",
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
class SubtitleText {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj.variant = "text-sm/medium";
    obj.color = "text-subtle";
    obj.maxFontSizeMultiplier = 2;
    return jsx(closure_0(closure_2[11]).Text, obj);
  }
}
function ParentChannelSubTitle(channel) {
  channel = channel.channel;
  const obj = { lineClamp: 1, accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  const obj2 = { channelName: null };
  const tmp = closure_11();
  obj2.channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj2);
  obj.style = tmp.parentChannelName;
  obj.children = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  return React6(SubtitleText, obj);
}
function AppSubTitle(application) {
  application = application.application;
  const tmp = closure_11();
  const obj2 = { style: tmp.appSubTitle, children: null };
  let tmp7 = null;
  const manaTypeConsolidationExperiment =
    ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle");
  if (null != application.icon) {
    const obj3 = { source: null, style: null };
    const tmp10 = FastImageDefault;
    ({ id: obj5.id, icon: obj5.icon } = application);
    obj3.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 16 });
    obj3.style = tmp.appIcon;
    tmp7 = React6(tmp10, obj3);
    const obj6 = { id: null, icon: null, size: 16 };
  }
  const items = [tmp7, ,];
  let str = "text-sm/normal";
  if (manaTypeConsolidationExperiment) {
    str = "text-xs/normal";
  }
  items[1] = React6(Text_Text.Text, {
    lineClamp: 1,
    maxFontSizeMultiplier: 2,
    variant: str,
    color: "text-subtle",
    style: tmp.appName,
    children: application.name,
  });
  items[2] = React6(BotTagDefault, { verified: application.isVerified, size: "sm" });
  obj2.children = items;
  return React7(hasOwnProperty, obj2);
}
function AppSubTitleSkeleton() {
  const tmp = closure_11();
  const obj = { style: tmp.appSubTitle, "aria-hidden": true, children: null };
  const items = [
    React6(hasOwnProperty, { style: tmp.skeletonIcon }),
    React6(hasOwnProperty, { style: tmp.skeletonName }),
  ];
  obj.children = items;
  return React7(hasOwnProperty, obj);
}
function NoAppSubTitle() {
  const tmp = closure_11();
  const manaTypeConsolidationExperiment =
    ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle");
  let str = "text-sm/normal";
  if (manaTypeConsolidationExperiment) {
    str = "text-xs/normal";
  }
  const obj2 = {
    lineClamp: 1,
    maxFontSizeMultiplier: 2,
    variant: str,
    color: "text-subtle",
    style: tmp.noApp,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.tU5fiM);
  return React6(Text_Text.Text, obj2);
}
function EmptyIcon() {
  return React6(hasOwnProperty, { style: closure_11().channelIconWrapper });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5009);
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
    appSubTitle: null,
    appIcon: null,
    appName: null,
    noApp: null,
    skeletonIcon: null,
    skeletonName: null,
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
  const obj3 = { tintColor: nativeDefault.colors.TEXT_STRONG };
  obj.appSubTitle = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 };
  const size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs };
  obj.appIcon = size;
  obj.appName = { flexShrink: 1 };
  obj.noApp = { fontStyle: "italic" };
  const size1 = {
    width: 16,
    height: 16,
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  };
  obj.skeletonIcon = size1;
  const size2 = {
    width: 96,
    height: 10,
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  };
  obj.skeletonName = size2;
  obj.parentChannelName = { lineHeight: 20, flexShrink: 1 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export function renderTitleWrapper(tmp33Result, callback, joined, titleContentHeight) {
  return React6(TitleWrapper, {
    onPress: callback,
    headerAccessibilityLabel: joined,
    titleContentHeight,
    children: tmp33Result,
  });
}
export function renderChannelTitle(channelName, arg1) {
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
}
export function renderGroupDMIcon(stateFromStores) {
  return React6(GroupDMIcon, { channel: stateFromStores });
}
export function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  return React6(UserAvatar, { user: stateFromStores1, status, isMobileOnline, isVROnline });
}
export function renderChannelIconRaw(icon, IconComponent) {
  return React6(ChannelIconRaw, { icon, IconComponent });
}
export function renderChannelIcon(id, rulesChannelId) {
  const channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(id, rulesChannelId);
  rulesChannelId = undefined;
  if (rulesChannelId != null) {
    rulesChannelId = rulesChannelId.rulesChannelId;
  }
  const obj3 = { isRulesChannel: rulesChannelId === id.id };
  return React6(ChannelIconRaw, {
    icon: channelIconWithGuild,
    IconComponent: utils_ChannelUtils.getChannelIconComponent(id, { isRulesChannel: rulesChannelId === id.id }),
  });
}
export function renderMemberCountText(online, memberCount) {
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
}
export { SubtitleText };
export function renderParentChannelSubTitle(stateFromStores2) {
  return React6(ParentChannelSubTitle, { channel: stateFromStores2 });
}
export function renderAppSubTitle(appChannelApplication, arg1) {
  if (null != appChannelApplication) {
    const obj = { application: appChannelApplication };
    let tmp2 = React6(AppSubTitle, obj);
  } else {
    tmp2 = React6(arg1 ? AppSubTitleSkeleton : NoAppSubTitle, {});
  }
  return tmp2;
}
export function renderEmptyIcon() {
  return React6(EmptyIcon, {});
}
