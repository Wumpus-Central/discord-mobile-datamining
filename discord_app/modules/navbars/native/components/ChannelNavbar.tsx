// === Module 13016: ChannelNavbar ===

// Module 13016 (ChannelNavbar)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4542 */;
import UserUtilsDefault from "UserUtils" /* 4566 */;
import Text_Text from "Text/Text" /* 4718 */;
import useChannelName from "useChannelName" /* 4875 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5197 */;
import Pressables from "Pressables" /* 5292 */;
import isStreamingDefault from "isStreaming" /* 8489 */;
import ActivityStatusDefault from "ActivityStatus" /* 11124 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5447 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import PresenceStore from "PresenceStore" /* 4762 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;
import UserStore from "UserStore" /* 1372 */;
import TextStyles from "TextStyles" /* 5694 */;

require = fn;
function ChannelTitleContent(arg0) {
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = closure_18();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!noop.isValidElement(icon)) {
      const obj = { size: native.Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      tmp4 = value2(native.Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!noop.isValidElement(title)) {
    const obj2 = { style: tmp.channelNameContainer, children: null };
    const obj3 = { style: tmp.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    obj2.children = value2(Text_Text.Text, obj3);
    tmp8 = value2(View, obj2);
  }
  const obj4 = { style: tmp.flexRow, children: null };
  const items = [tmp2, ];
  const obj5 = { style: tmp.channelTextContainer, children: null };
  const obj6 = { style: tmp.flexRow, children: null };
  const items1 = [tmp8, titleSuffix];
  obj6.children = items1;
  const items2 = [closure_1_17(View, obj6), subTitle];
  obj5.children = items2;
  items[1] = closure_1_17(View, obj5);
  obj4.children = items;
  return closure_1_17(View, obj4);
}
function ParentChannelSubTitle(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const obj = { lineClamp: 1, style: closure_18().navbarTitleSecondaryText, accessibilityLabel: null, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  const obj2 = { channelName: null };
  const tmp = closure_18();
  obj2.channelName = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore);
  obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj2);
  obj.children = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore, true);
  return value2(Text_Text.Text, obj);
}
function DMChannelName(style) {
  const userId = style.userId;
  const items = [UserStore, RelationshipStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => {
    let str = RelationshipStore.getNickname(userId);
    if (str == null) {
      str = UserUtilsDefault.getName(tmp);
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  const obj2 = { numberOfLines: 1, style: style.style, accessibilityLabel: null, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: null };
  const intl = userId(1115).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(userId(1115).t.fYqXVY, { channelName: stateFromStores });
  obj2.children = stateFromStores;
  return closure_16(userId(1177).LegacyText, obj2);
}
function ConnectedStatus(style) {
  const userId = style.userId;
  const items = [PresenceStore];
  const stateFromStoresObject = userId(504).useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: isStreamingDefault(PresenceStore.getActivities(userId)) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  let obj = userId(504);
  return closure_16(userId(1177).Status, { isMobileOnline, isVROnline, status, streaming, size: userId(1177).StatusSizes.SMALL, style: style.style });
}
const View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(1962).THREAD_CHANNEL_TYPES;
const Constants = fn(1074);
({ ChannelTypes: closure_12, Fonts } = Constants);
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const DismissibleContentConstants = fn(1955);
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = DismissibleContentConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4722);
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" }, navbarTitlePrimaryText: null, navbarTitleSecondaryText: null, channelIcon: null, channelIconColor: null, homeIcon: null, premiumIcon: null, status: null, channelTextContainer: null, channelNameContainer: null, channelName: null, flexRow: null };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.flexShrink = 1;
obj.navbarTitlePrimaryText = obj3;
obj.navbarTitleSecondaryText = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj.channelIcon = { height: 18, width: 18, marginRight: 8 };
let obj4 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj.channelIconColor = { color: nativeDefault.colors.CHANNEL_ICON };
let size = { height: 20, width: 20, tintColor: nativeDefault.colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
obj.homeIcon = size;
obj.premiumIcon = { marginRight: 4 };
obj.status = { marginLeft: 1, marginTop: 4 };
obj.channelTextContainer = { flex: 1, flexGrow: 1 };
obj.channelNameContainer = { flexGrow: 1 };
obj.channelName = { textAlign: "left" };
obj.flexRow = { flexDirection: "row", alignItems: "center" };
let closure_18 = createStyles.createStyles(obj);
function ChannelTitleWrapper(arg0) {
  ({ children, onPressTitle, style } = arg0);
  const tmp = closure_18();
  if (null == onPressTitle) {
    const obj2 = { style: null, children: null };
    const items = [tmp.navbarTitleContainer, style];
    obj2.style = items;
    obj2.children = children;
    let tmp5 = value2(View, obj2);
  } else {
    const obj = { style: null, accessibilityRole: "header", onPress: null, onAccessibilityTap: null, children: null };
    const items1 = [tmp.navbarTitleContainer, style];
    obj.style = items1;
    obj.onPress = onPressTitle;
    obj.onAccessibilityTap = function onAccessibilityTap() {
      return null;
    };
    obj.children = children;
    tmp5 = value2(Pressables.PressableOpacity, obj);
  }
  return tmp5;
}
let obj5 = { color: nativeDefault.colors.CHANNEL_ICON };
size = fn(2);
let result = size.fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = function ChannelTitleWithoutRoute(arg0) {
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = closure_18();
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => connected.isConnected());
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (stateFromStores1) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    channelIcon = utils_ChannelUtils.getChannelIcon(stateFromStores);
    const tmp2Result = utils_ChannelUtils;
  }
  let channelName = null;
  if (null != stateFromStores) {
    channelName = useChannelName.computeChannelName(stateFromStores, UserStore, RelationshipStore);
    const tmp2Result2 = useChannelName;
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    const recipientId = stateFromStores.getRecipientId();
    const obj2 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
    let tmp16Result = null;
    const isSystemDMResult = stateFromStores.isSystemDM();
    if (!isSystemDMResult) {
      const obj4 = { userId: recipientId, style: tmp.status };
      tmp16Result = closure_16(ConnectedStatus, obj4);
    }
    const obj5 = { userId: recipientId, guildId: stateFromStores.guild_id };
    const obj6 = { onPressTitle, children: null };
    const obj7 = { title: closure_16(DMChannelName, obj2), icon: channelIcon, titleSuffix: tmp16Result, subTitle: closure_16(ActivityStatusDefault, obj5) };
    obj6.children = closure_16(ChannelTitleContent, obj7);
    return closure_16(ChannelTitleWrapper, obj6);
  } else {
    const obj8 = { onPressTitle, children: null };
    if (channelName == null) {
      channelName = stringResult;
    }
    const obj9 = { title: channelName, icon: channelIcon };
    obj8.children = closure_16(ChannelTitleContent, obj9);
    return closure_16(ChannelTitleWrapper, obj8);
  }
};
export const ChannelTitle = noop.memo((threadDraft) => {
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let stateFromStores1;
  const tmp = closure_18();
  const items = [GatewayConnectionStore];
  const stateFromStores = channelId(stateFromStores1[16]).useStateFromStores(items, () => connected.isConnected());
  const obj = channelId(stateFromStores1[16]);
  const items1 = [ChannelStore];
  stateFromStores1 = channelId(stateFromStores1[16]).useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== StaticChannelRoute.GUILD_HOME) {
      channel = null;
      if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
        channel = ChannelStore.getChannel(channelId);
      }
    }
    return channel;
  });
  const obj2 = channelId(stateFromStores1[16]);
  const items2 = [GuildStore];
  const stateFromStores2 = channelId(stateFromStores1[16]).useStateFromStores(items2, () => {
    let guildId;
    if (stateFromStores1 != null) {
      guildId = stateFromStores1.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  });
  const obj4 = channelId(stateFromStores1[16]);
  const items3 = [ChannelStore];
  const items4 = [stateFromStores1, threadDraft];
  const stateFromStores3 = channelId(stateFromStores1[16]).useStateFromStores(items3, () => {
    if (null != threadDraft) {
      if (null != threadDraft.parentChannelId) {
        let channel = ChannelStore.getChannel(threadDraft.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != stateFromStores1.parent_id) {
        channel = null;
        if (THREAD_CHANNEL_TYPES.has(stateFromStores1.type)) {
          channel = ChannelStore.getChannel(stateFromStores1.parent_id);
        }
      }
    }
  }, items4);
  const obj5 = channelId(stateFromStores1[16]);
  const selectedSpecialNavigationPath = channelId(stateFromStores1[21]).useSelectedSpecialNavigationPath();
  const obj6 = channelId(stateFromStores1[21]);
  const intl = channelId(stateFromStores1[17]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores1[17]).t;
  if (stateFromStores) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === channelId(stateFromStores1[21]).SpecialNavigationPath.FRIENDS) {
    const obj3 = { style, children: null };
    const obj7 = { title: null };
    const intl9 = channelId(tmp3[17]).intl;
    obj7.title = intl9.string(channelId(tmp3[17]).t.TdEu5X);
    obj3.children = closure_16(ChannelTitleContent, obj7);
    return closure_16(ChannelTitleWrapper, obj3);
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    const obj8 = { size: channelId(tmp3[23]).Icon.Sizes.CUSTOM, source: tmp8(tmp3[24]), style: tmp.homeIcon };
    const obj9 = { onPressTitle, style, children: null };
    const obj10 = { title: null, icon: null };
    const intl8 = channelId(tmp3[17]).intl;
    obj10.title = intl8.string(channelId(tmp3[17]).t.Ym2Ri6);
    obj10.icon = closure_16(channelId(tmp3[23]).Icon, obj8);
    obj9.children = closure_16(ChannelTitleContent, obj10);
    return closure_16(ChannelTitleWrapper, obj9);
  } else if (channelId === tmp62.MEMBER_SAFETY) {
    const obj11 = { size: channelId(tmp3[23]).Icon.Sizes.CUSTOM, source: tmp8(tmp3[25]), style: tmp.homeIcon };
    const obj12 = { onPressTitle, style, children: null };
    const obj13 = { title: null, icon: null };
    const intl7 = channelId(tmp3[17]).intl;
    obj13.title = intl7.string(channelId(tmp3[17]).t["9Oq93m"]);
    obj13.icon = closure_16(channelId(tmp3[23]).Icon, obj11);
    obj12.children = closure_16(ChannelTitleContent, obj13);
    return closure_16(ChannelTitleWrapper, obj12);
  } else if (tmp9) {
    const obj14 = { source: tmp8(tmp3[27]), style: tmp.premiumIcon };
    const obj15 = { style, children: null };
    const obj16 = { title: null, icon: null };
    const tmp8Result = tmp8(tmp3[26]);
    const intl6 = channelId(tmp3[17]).intl;
    obj16.title = intl6.string(channelId(tmp3[17]).t["KzCF/6"]);
    obj16.icon = closure_16(tmp8(tmp3[26]), obj14);
    obj15.children = closure_16(ChannelTitleContent, obj16);
    return closure_16(ChannelTitleWrapper, obj15);
  } else {
    if (null != threadDraft) {
      let isForumLikeChannelResult;
      if (stateFromStores1 != null) {
        isForumLikeChannelResult = stateFromStores1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        if (null != threadDraft.name) {
          if (threadDraft.name.length > 0) {
            let name = threadDraft.name;
          }
          const threadChannelIcon = channelId(tmp3[18]).getThreadChannelIcon(threadDraft.isPrivate ? constants.PRIVATE_THREAD : constants.PUBLIC_THREAD);
          const intl3 = channelId(tmp3[17]).intl;
          const obj17 = { channelName: name };
          const obj18 = { style, children: null };
          const obj19 = { title: name, accessibleTitle: intl3.formatToPlainString(channelId(tmp3[17]).t["OkzL+Q"], obj17), icon: threadChannelIcon, subTitle: null };
          let tmp15Result = null != stateFromStores3;
          if (tmp15Result) {
            const obj20 = { parentChannel: stateFromStores3 };
            tmp15Result = closure_16(ParentChannelSubTitle, obj20);
          }
          obj19.subTitle = tmp15Result;
          obj18.children = closure_16(ChannelTitleContent, obj19);
          return closure_16(ChannelTitleWrapper, obj18);
        }
        const intl2 = channelId(tmp3[17]).intl;
        name = intl2.string(channelId(tmp3[17]).t["4WNcpu"]);
      }
    }
    if (tmp2Result4.shouldNSFWGateGuild(threadDraft.guildId)) {
      const obj21 = { style, children: null };
      const obj22 = { title: null };
      const intl5 = channelId(tmp3[17]).intl;
      obj22.title = intl5.string(channelId(tmp3[17]).t.HbPHt1);
      obj21.children = closure_16(ChannelTitleContent, obj22);
      return closure_16(ChannelTitleWrapper, obj21);
    } else if (null == stateFromStores1) {
      const obj23 = { style, children: null };
      const obj24 = { title: stringResult };
      obj23.children = closure_16(ChannelTitleContent, obj24);
      return closure_16(ChannelTitleWrapper, obj23);
    } else {
      const channelName = channelId(tmp3[19]).computeChannelName(stateFromStores1, UserStore, RelationshipStore);
      const tmp2Result5 = channelId(tmp3[19]);
      const channelIconWithGuild = channelId(tmp3[18]).getChannelIconWithGuild(stateFromStores1, stateFromStores2);
      if (stateFromStores1.isDM()) {
        const recipientId = stateFromStores1.getRecipientId();
        const obj25 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
        let tmp31Result = null;
        const isSystemDMResult = stateFromStores1.isSystemDM();
        if (!isSystemDMResult) {
          const obj26 = { userId: recipientId, style: tmp.status };
          tmp31Result = closure_16(ConnectedStatus, obj26);
        }
        const obj27 = { userId: recipientId, guildId: null };
        let guild_id;
        const tmp33 = closure_16(DMChannelName, obj25);
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        obj27.guildId = guild_id;
        const obj28 = { onPressTitle, style, children: null };
        const obj29 = { title: tmp33, icon: channelIconWithGuild, titleSuffix: tmp31Result, subTitle: closure_16(tmp8(tmp3[20]), obj27) };
        obj28.children = closure_16(ChannelTitleContent, obj29);
        return closure_16(ChannelTitleWrapper, obj28);
      } else {
        const intl4 = channelId(tmp3[17]).intl;
        const formatToPlainString = intl4.formatToPlainString;
        const t2 = channelId(tmp3[17]).t;
        if (isThreadResult) {
          const obj30 = { channelName };
          const obj31 = { onPressTitle, style, children: null };
          const obj32 = { title: channelName, accessibleTitle: formatToPlainString(t2["OkzL+Q"], obj30), icon: channelIconWithGuild, subTitle: null };
          let tmp24Result = null != stateFromStores3;
          if (tmp24Result) {
            const obj33 = { parentChannel: stateFromStores3 };
            tmp24Result = closure_16(ParentChannelSubTitle, obj33);
          }
          obj32.subTitle = tmp24Result;
          obj31.children = closure_16(ChannelTitleContent, obj32);
          return closure_16(ChannelTitleWrapper, obj31);
        } else {
          const obj34 = { channelName };
          const obj35 = { onPressTitle, style, children: null };
          const obj36 = { title: channelName, accessibleTitle: formatToPlainString(t2.UbNmGc, obj34), icon: channelIconWithGuild };
          obj35.children = closure_16(ChannelTitleContent, obj36);
          return closure_16(ChannelTitleWrapper, obj35);
        }
        isThreadResult = stateFromStores1.isThread();
      }
      const tmp2Result6 = channelId(tmp3[18]);
    }
    tmp2Result4 = channelId(tmp3[28]);
  }
  tmp9 = threadDraft(stateFromStores1[22])();
});
export const ChannelButtons = function ChannelButtons(buttons) {
  buttons = buttons.buttons;
  let obj = { style: buttons.style, children: null };
  let mapped;
  if (buttons != null) {
    mapped = buttons.map((onPress, index) => {
      onPress = onPress.onPress;
      const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
      ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
      let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
      if (hasActivitiesPrivateChannelTooltip) {
        onPress = (arg0) => {
          if (null != fn) {
            tmp(arg0);
          }
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: constants.AUTO });
        };
      }
      obj.onPress = onPress;
      obj.onLongPress = onLongPress;
      obj.disabled = disabled;
      obj.style = style;
      obj.children = children;
      const children1 = [closure_16(closure_1(9288), obj), ];
      let tmp3Result = null;
      if (hasActivitiesPrivateChannelTooltip) {
        const obj2 = { contentTypes: null, groupName: null, children: null };
        const items1 = [onPress(1944).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
        obj2.contentTypes = items1;
        obj2.groupName = constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
        obj2.children = function children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp2 = null;
          if (markAsDismissed.visibleContent === markAsDismissed(dependencyMap[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
            const obj = {
              onClosePress() {
                  return markAsDismissed(constants.UNKNOWN);
                }
            };
            tmp2 = closure_16(closure_1(dependencyMap[37]), obj);
          }
          return tmp2;
        };
        tmp3Result = closure_16(closure_1(10868), obj2);
        const tmp4Result = closure_1(10868);
      }
      children1[1] = tmp3Result;
      return closure_17(closure_4, { children: children1 }, index);
    });
  }
  obj.children = mapped;
  return value2(View, obj);
};