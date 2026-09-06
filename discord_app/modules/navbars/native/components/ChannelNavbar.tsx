// === Module 12774: ChannelNavbar ===

// Module 12774 (ChannelNavbar)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelName from "useChannelName" /* 4713 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import Pressables from "Pressables" /* 5123 */;
import isStreamingDefault from "isStreaming" /* 8259 */;
import ActivityStatusDefault from "ActivityStatus" /* 10876 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function ChannelTitleContent(arg0) {
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = closure_18();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!noop.isValidElement(icon)) {
      let obj = { size: native.Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      tmp4 = value2(native.Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!noop.isValidElement(title)) {
    obj = { style: tmp.channelNameContainer, children: null };
    obj = { style: tmp.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    obj.children = value2(Text_Text.Text, obj);
    tmp8 = value2(View, obj);
  }
  const obj1 = { style: tmp.flexRow, children: null };
  const items = [tmp2, ];
  const obj2 = { style: tmp.channelTextContainer, children: null };
  const obj3 = { style: tmp.flexRow, children: null };
  const items1 = [tmp8, titleSuffix];
  obj3.children = items1;
  const items2 = [closure_1_17(View, obj3), subTitle];
  obj2.children = items2;
  items[1] = closure_1_17(View, obj2);
  obj1.children = items;
  return closure_1_17(View, obj1);
}
function ParentChannelSubTitle(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let obj = { lineClamp: 1, style: closure_18().navbarTitleSecondaryText, accessibilityLabel: null, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { channelName: null };
  const tmp = closure_18();
  obj.channelName = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore);
  obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj);
  obj.children = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore, true);
  return value2(Text_Text.Text, obj);
}
function DMChannelName(style) {
  const userId = style.userId;
  let obj = userId(504);
  const items = [UserStore, RelationshipStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let str = RelationshipStore.getNickname(userId);
    if (str == null) {
      str = UserUtilsDefault.getName(tmp);
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  obj = { numberOfLines: 1, style: style.style, accessibilityLabel: null, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: null };
  const intl = userId(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(userId(1114).t.fYqXVY, { channelName: stateFromStores });
  obj.children = stateFromStores;
  return closure_16(userId(1178).LegacyText, obj);
}
function ConnectedStatus(style) {
  const userId = style.userId;
  let obj = userId(504);
  const items = [PresenceStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: isStreamingDefault(PresenceStore.getActivities(userId)) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  obj = { isMobileOnline, isVROnline, status, streaming, size: userId(1178).StatusSizes.SMALL, style: style.style };
  return closure_16(userId(1178).Status, obj);
}
const View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(1961).THREAD_CHANNEL_TYPES;
const Constants = fn(1074);
({ ChannelTypes: closure_12, Fonts } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const DismissibleContentConstants = fn(1954);
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = DismissibleContentConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" }, navbarTitlePrimaryText: null, navbarTitleSecondaryText: null, channelIcon: null, channelIconColor: null, homeIcon: null, premiumIcon: null, status: null, channelTextContainer: null, channelNameContainer: null, channelName: null, flexRow: null };
obj = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj.flexShrink = 1;
obj.navbarTitlePrimaryText = obj;
const createStyles = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj.navbarTitleSecondaryText = createStyles;
obj.channelIcon = { height: 18, width: 18, marginRight: 8 };
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
    let obj = { style: null, children: null };
    const items = [tmp.navbarTitleContainer, style];
    obj.style = items;
    obj.children = children;
    let tmp5 = value2(View, obj);
  } else {
    obj = { style: null, accessibilityRole: "header", onPress: null, onAccessibilityTap: null, children: null };
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
let obj2 = { color: nativeDefault.colors.CHANNEL_ICON };
size = fn(2);
let result = size.fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = function ChannelTitleWithoutRoute(arg0) {
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = closure_18();
  let obj = initialize;
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj2 = initialize;
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => connected.isConnected());
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
    let tmp2Result = utils_ChannelUtils;
    channelIcon = tmp2Result.getChannelIcon(stateFromStores);
  }
  let channelName = null;
  if (null != stateFromStores) {
    tmp2Result = useChannelName;
    channelName = tmp2Result.computeChannelName(stateFromStores, UserStore, RelationshipStore);
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    const recipientId = stateFromStores.getRecipientId();
    obj = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
    let tmp16Result = null;
    const isSystemDMResult = stateFromStores.isSystemDM();
    if (!isSystemDMResult) {
      obj = { userId: recipientId, style: tmp.status };
      tmp16Result = closure_16(ConnectedStatus, obj);
    }
    const obj1 = { userId: recipientId, guildId: stateFromStores.guild_id };
    obj2 = { onPressTitle, children: null };
    const obj3 = { title: closure_16(DMChannelName, obj), icon: channelIcon, titleSuffix: tmp16Result, subTitle: closure_16(ActivityStatusDefault, obj1) };
    obj2.children = closure_16(ChannelTitleContent, obj3);
    return closure_16(ChannelTitleWrapper, obj2);
  } else {
    const obj4 = { onPressTitle, children: null };
    if (channelName == null) {
      channelName = stringResult;
    }
    const obj5 = { title: channelName, icon: channelIcon };
    obj4.children = closure_16(ChannelTitleContent, obj5);
    return closure_16(ChannelTitleWrapper, obj4);
  }
};
export const ChannelTitle = noop.memo((threadDraft) => {
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let stateFromStores1;
  const tmp = closure_18();
  let obj = channelId(stateFromStores1[16]);
  const items = [GatewayConnectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  let obj1 = channelId(stateFromStores1[16]);
  const items1 = [ChannelStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== StaticChannelRoute.GUILD_HOME) {
      channel = null;
      if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
        channel = ChannelStore.getChannel(channelId);
      }
    }
    return channel;
  });
  let obj3 = channelId(stateFromStores1[16]);
  const items2 = [GuildStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let guildId;
    if (stateFromStores1 != null) {
      guildId = stateFromStores1.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  });
  let obj4 = channelId(stateFromStores1[16]);
  const items3 = [ChannelStore];
  const items4 = [stateFromStores1, threadDraft];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => {
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
  let obj5 = channelId(stateFromStores1[21]);
  const selectedSpecialNavigationPath = obj5.useSelectedSpecialNavigationPath();
  const intl = channelId(stateFromStores1[17]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores1[17]).t;
  if (stateFromStores) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === channelId(stateFromStores1[21]).SpecialNavigationPath.FRIENDS) {
    obj = { style, children: null };
    obj = { title: null };
    const intl9 = channelId(tmp3[17]).intl;
    obj.title = intl9.string(channelId(tmp3[17]).t.TdEu5X);
    obj.children = closure_16(ChannelTitleContent, obj);
    return closure_16(ChannelTitleWrapper, obj);
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    obj1 = { size: channelId(tmp3[23]).Icon.Sizes.CUSTOM, source: tmp8(tmp3[24]), style: tmp.homeIcon };
    const obj2 = { onPressTitle, style, children: null };
    obj3 = { title: null, icon: null };
    const intl8 = channelId(tmp3[17]).intl;
    obj3.title = intl8.string(channelId(tmp3[17]).t.Ym2Ri6);
    obj3.icon = closure_16(channelId(tmp3[23]).Icon, obj1);
    obj2.children = closure_16(ChannelTitleContent, obj3);
    return closure_16(ChannelTitleWrapper, obj2);
  } else if (channelId === tmp62.MEMBER_SAFETY) {
    obj4 = { size: channelId(tmp3[23]).Icon.Sizes.CUSTOM, source: tmp8(tmp3[25]), style: tmp.homeIcon };
    obj5 = { onPressTitle, style, children: null };
    const obj6 = { title: null, icon: null };
    const intl7 = channelId(tmp3[17]).intl;
    obj6.title = intl7.string(channelId(tmp3[17]).t["9Oq93m"]);
    obj6.icon = closure_16(channelId(tmp3[23]).Icon, obj4);
    obj5.children = closure_16(ChannelTitleContent, obj6);
    return closure_16(ChannelTitleWrapper, obj5);
  } else if (tmp9) {
    const obj7 = { source: null, style: null };
    let tmp8Result = tmp8(tmp3[26]);
    obj7.source = tmp8(tmp3[27]);
    obj7.style = tmp.premiumIcon;
    const obj8 = { style, children: null };
    const obj9 = { title: null, icon: null };
    const intl6 = channelId(tmp3[17]).intl;
    obj9.title = intl6.string(channelId(tmp3[17]).t["KzCF/6"]);
    obj9.icon = closure_16(tmp8Result, obj7);
    obj8.children = closure_16(ChannelTitleContent, obj9);
    return closure_16(ChannelTitleWrapper, obj8);
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
          let tmp2Result = channelId(tmp3[18]);
          const threadChannelIcon = tmp2Result.getThreadChannelIcon(threadDraft.isPrivate ? constants.PRIVATE_THREAD : constants.PUBLIC_THREAD);
          const intl3 = channelId(tmp3[17]).intl;
          const obj10 = { channelName: name };
          const obj11 = { style, children: null };
          const obj12 = { title: name, accessibleTitle: intl3.formatToPlainString(channelId(tmp3[17]).t["OkzL+Q"], obj10), icon: threadChannelIcon, subTitle: null };
          let tmp15Result = null != stateFromStores3;
          if (tmp15Result) {
            const obj13 = { parentChannel: stateFromStores3 };
            tmp15Result = closure_16(ParentChannelSubTitle, obj13);
          }
          obj12.subTitle = tmp15Result;
          obj11.children = closure_16(ChannelTitleContent, obj12);
          return closure_16(ChannelTitleWrapper, obj11);
        }
        const intl2 = channelId(tmp3[17]).intl;
        name = intl2.string(channelId(tmp3[17]).t["4WNcpu"]);
      }
    }
    tmp2Result = channelId(tmp3[28]);
    if (tmp2Result.shouldNSFWGateGuild(threadDraft.guildId)) {
      const obj14 = { style, children: null };
      const obj15 = { title: null };
      const intl5 = channelId(tmp3[17]).intl;
      obj15.title = intl5.string(channelId(tmp3[17]).t.HbPHt1);
      obj14.children = closure_16(ChannelTitleContent, obj15);
      return closure_16(ChannelTitleWrapper, obj14);
    } else if (null == stateFromStores1) {
      const obj16 = { style, children: null };
      const obj17 = { title: stringResult };
      obj16.children = closure_16(ChannelTitleContent, obj17);
      return closure_16(ChannelTitleWrapper, obj16);
    } else {
      const channelName = channelId(tmp3[19]).computeChannelName(stateFromStores1, UserStore, RelationshipStore);
      const tmp2Result1 = channelId(tmp3[19]);
      const channelIconWithGuild = channelId(tmp3[18]).getChannelIconWithGuild(stateFromStores1, stateFromStores2);
      if (stateFromStores1.isDM()) {
        const recipientId = stateFromStores1.getRecipientId();
        const obj18 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
        let tmp31Result = null;
        const isSystemDMResult = stateFromStores1.isSystemDM();
        if (!isSystemDMResult) {
          const obj19 = { userId: recipientId, style: tmp.status };
          tmp31Result = closure_16(ConnectedStatus, obj19);
        }
        const obj20 = { userId: recipientId, guildId: null };
        let guild_id;
        tmp8Result = tmp8(tmp3[20]);
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        obj20.guildId = guild_id;
        const obj21 = { onPressTitle, style, children: null };
        const obj22 = { title: closure_16(DMChannelName, obj18), icon: channelIconWithGuild, titleSuffix: tmp31Result, subTitle: closure_16(tmp8Result, obj20) };
        obj21.children = closure_16(ChannelTitleContent, obj22);
        return closure_16(ChannelTitleWrapper, obj21);
      } else {
        const intl4 = channelId(tmp3[17]).intl;
        const formatToPlainString = intl4.formatToPlainString;
        const t2 = channelId(tmp3[17]).t;
        if (isThreadResult) {
          const obj23 = { channelName };
          const obj24 = { onPressTitle, style, children: null };
          const obj25 = { title: channelName, accessibleTitle: formatToPlainString(t2["OkzL+Q"], obj23), icon: channelIconWithGuild, subTitle: null };
          let tmp24Result = null != stateFromStores3;
          if (tmp24Result) {
            const obj26 = { parentChannel: stateFromStores3 };
            tmp24Result = closure_16(ParentChannelSubTitle, obj26);
          }
          obj25.subTitle = tmp24Result;
          obj24.children = closure_16(ChannelTitleContent, obj25);
          return closure_16(ChannelTitleWrapper, obj24);
        } else {
          const obj27 = { channelName };
          const obj28 = { onPressTitle, style, children: null };
          const obj29 = { title: channelName, accessibleTitle: formatToPlainString(t2.UbNmGc, obj27), icon: channelIconWithGuild };
          obj28.children = closure_16(ChannelTitleContent, obj29);
          return closure_16(ChannelTitleWrapper, obj28);
        }
        isThreadResult = stateFromStores1.isThread();
      }
      const tmp2Result2 = channelId(tmp3[18]);
    }
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
          const obj = { dismissAction: constants.AUTO };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
        };
      }
      obj.onPress = onPress;
      obj.onLongPress = onLongPress;
      obj.disabled = disabled;
      obj.style = style;
      obj.children = children;
      children = [closure_16(closure_1(9050), obj), ];
      let tmp3Result = null;
      if (hasActivitiesPrivateChannelTooltip) {
        obj = { contentTypes: null, groupName: null, children: null };
        const items1 = [onPress(1943).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
        obj.contentTypes = items1;
        obj.groupName = constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
        obj.children = function children(markAsDismissed) {
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
        tmp3Result = closure_16(closure_1(10625), obj);
        const tmp4Result = closure_1(10625);
      }
      children[1] = tmp3Result;
      return closure_17(closure_4, { children }, index);
    });
  }
  obj.children = mapped;
  return value2(View, obj);
};