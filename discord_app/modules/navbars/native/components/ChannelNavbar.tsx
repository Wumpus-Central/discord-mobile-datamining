// discord_app/modules/navbars/native/components/ChannelNavbar.tsx
import importAllResult from "computeChannelName";
import { View } from "getSystemLocale";
import _handleConnectionOpen from "_handleConnectionOpen";
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import sortActivity from "sortActivity";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { StaticChannelRoute } from "set";
import ContentDismissActionType from "ContentDismissActionType";
import jsxProd from "SpecialNavigationPath";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ActivityStatus } from "../../../activity_status/native/ActivityStatus.tsx";
import { computeChannelName } from "../../../channel/useChannelName.tsx";

let Fonts;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function ChannelTitleContent(arg0) {
  let accessibleTitle;
  let icon;
  let subTitle;
  let title;
  let titleSuffix;
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = callback3();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!importAllResult.isValidElement(icon)) {
      let obj = { size: null, source: null, style: null, color: null };
      obj[0] = Button.Icon.Sizes.CUSTOM;
      obj[1] = icon;
      obj[2] = tmp.channelIcon;
      obj[3] = tmp.channelIconColor.color;
      tmp4 = callback(Button.Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!importAllResult.isValidElement(title)) {
    obj = { style: null, children: null };
    obj[0] = tmp.channelNameContainer;
    obj = { style: null, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: null, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: null };
    obj[0] = tmp.channelName;
    obj[4] = accessibleTitle;
    obj[7] = title;
    obj[1] = callback(Text.Text, obj);
    tmp8 = callback(View, obj);
  }
  const obj1 = { style: tmp.flexRow, children: null };
  const items = [tmp2, ];
  const obj2 = { style: tmp.channelTextContainer, children: null };
  const items1 = [tmp8, titleSuffix];
  const items2 = [callback2(View, { style: tmp.flexRow, children: items1 }), subTitle];
  obj2[1] = items2;
  items[1] = callback2(View, obj2);
  obj1[1] = items;
  return callback2(View, obj1);
}
function ParentChannelSubTitle(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let obj = { lineClamp: 1, style: callback3().navbarTitleSecondaryText, accessibilityLabel: null, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj = { channelName: null };
  const tmp = callback3();
  obj[0] = computeChannelName.computeChannelName(parentChannel, mergeGuildAvatar, markAllUserIdListsStale);
  obj[2] = intl.formatToPlainString(getSystemLocale.t.BjYvHO, obj);
  const obj3 = computeChannelName;
  obj[6] = computeChannelName.computeChannelName(parentChannel, mergeGuildAvatar, markAllUserIdListsStale, true);
  return callback(Text.Text, obj);
}
function DMChannelName(style) {
  const userId = style.userId;
  let obj = userId(589);
  const items = [mergeGuildAvatar, markAllUserIdListsStale];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let str = outer1_10.getNickname(userId);
    if (str == null) {
      str = outer1_1(outer1_2[31]).getName(tmp);
      const obj = outer1_1(outer1_2[31]);
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  obj = { numberOfLines: 1, style: style.style, accessibilityLabel: null, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: null };
  const intl = userId(1236).intl;
  obj[2] = intl.formatToPlainString(userId(1236).t.fYqXVY, { channelName: stateFromStores });
  obj[5] = stateFromStores;
  return callback(userId(1297).LegacyText, obj);
}
function ConnectedStatus(userId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  userId = userId.userId;
  let obj = userId(589);
  const items = [sortActivity];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { status: outer1_9.getStatus(userId), isMobileOnline: outer1_9.isMobileOnline(userId), isVROnline: outer1_9.isVROnline(userId), streaming: null };
    obj[3] = outer1_1(outer1_2[32])(outer1_9.getActivities(userId));
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  obj = { isMobileOnline, isVROnline, status, streaming, size: null, style: null };
  obj[4] = userId(1297).StatusSizes.SMALL;
  obj[5] = userId.style;
  return callback(userId(1297).Status, obj);
}
let c3 = importAllResult;
({ ChannelTypes: closure_12, Fonts } = ME);
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = ContentDismissActionType);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" }, navbarTitlePrimaryText: null, navbarTitleSecondaryText: null, channelIcon: null, channelIconColor: null, homeIcon: null, premiumIcon: null, status: null, channelTextContainer: null, channelNameContainer: null, channelName: null, flexRow: null };
obj = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj.flexShrink = 1;
obj[1] = obj;
createCacheKey = { fontSize: 12, lineHeight: 16, color: require("Themes").colors.TEXT_MUTED, marginTop: -4 };
obj[2] = createCacheKey;
obj[3] = { height: 18, width: 18, marginRight: 8 };
obj[4] = { color: require("Themes").colors.CHANNEL_ICON };
let obj2 = { color: require("Themes").colors.CHANNEL_ICON };
obj[5] = { height: 20, width: 20, tintColor: require("Themes").colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
obj[6] = { marginRight: 4 };
obj[7] = { marginLeft: 1, marginTop: 4 };
obj[8] = { flex: 1, flexGrow: 1 };
obj[9] = { flexGrow: 1 };
obj[10] = { textAlign: "left" };
obj[11] = { flexDirection: "row", alignItems: "center" };
let closure_18 = createCacheKey.createStyles(obj);
function ChannelTitleWrapper(arg0) {
  let children;
  let onPressTitle;
  let style;
  ({ children, onPressTitle, style } = arg0);
  const tmp = callback3();
  if (null == onPressTitle) {
    let obj = { style: null, children: null };
    const items = [tmp.navbarTitleContainer, style];
    obj[0] = items;
    obj[1] = children;
    let tmp5 = callback(View, obj);
  } else {
    obj = { style: null, accessibilityRole: "header", onPress: null, onAccessibilityTap: null, children: null };
    const items1 = [tmp.navbarTitleContainer, style];
    obj[0] = items1;
    obj[2] = onPressTitle;
    obj[3] = function onAccessibilityTap() {
      return null;
    };
    obj[4] = children;
    tmp5 = callback(PressableBase.PressableOpacity, obj);
  }
  return tmp5;
}
let obj3 = { height: 20, width: 20, tintColor: require("Themes").colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
const memoResult = importAllResult.memo((threadDraft) => {
  let channelId;
  let onPressTitle;
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let stateFromStores1;
  const tmp = callback3();
  let obj = channelId(stateFromStores1[16]);
  const items = [_handleConnectionOpen];
  const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  let obj1 = channelId(stateFromStores1[16]);
  const items1 = [ensureGuildLoaded];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== outer1_13.GUILD_HOME) {
      channel = null;
      if (tmp !== outer1_13.MEMBER_SAFETY) {
        channel = outer1_7.getChannel(tmp);
      }
    }
    return channel;
  });
  let obj3 = channelId(stateFromStores1[16]);
  const items2 = [createGuildRecordFromRust];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let guildId;
    if (stateFromStores1 != null) {
      guildId = stateFromStores1.getGuildId();
    }
    return outer1_8.getGuild(guildId);
  });
  let obj4 = channelId(stateFromStores1[16]);
  const items3 = [ensureGuildLoaded];
  const items4 = [stateFromStores1, threadDraft];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => {
    if (null != threadDraft) {
      if (null != tmp.parentChannelId) {
        let channel = outer1_7.getChannel(tmp.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != tmp2.parent_id) {
        channel = null;
        if (outer1_6.has(tmp2.type)) {
          channel = outer1_7.getChannel(tmp2.parent_id);
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
    obj = { style: null, children: null };
    obj[0] = style;
    obj = { title: null };
    const intl9 = tmp2(tmp3[17]).intl;
    obj[0] = intl9.string(tmp2(tmp3[17]).t.TdEu5X);
    obj[1] = callback(ChannelTitleContent, obj);
    return callback(ChannelTitleWrapper, obj);
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    obj1 = { size: null, source: null, style: null };
    obj1[0] = tmp2(tmp3[23]).Icon.Sizes.CUSTOM;
    obj1[1] = tmp8(tmp3[24]);
    obj1[2] = tmp.homeIcon;
    const obj2 = { onPressTitle: null, style: null, children: null };
    obj2[0] = onPressTitle;
    obj2[1] = style;
    obj3 = { title: null, icon: null };
    const intl8 = tmp2(tmp3[17]).intl;
    obj3[0] = intl8.string(tmp2(tmp3[17]).t.Ym2Ri6);
    obj3[1] = callback(tmp2(tmp3[23]).Icon, obj1);
    obj2[2] = callback(ChannelTitleContent, obj3);
    return callback(ChannelTitleWrapper, obj2);
  } else if (channelId === tmp62.MEMBER_SAFETY) {
    obj4 = { size: null, source: null, style: null };
    obj4[0] = tmp2(tmp3[23]).Icon.Sizes.CUSTOM;
    obj4[1] = tmp8(tmp3[25]);
    obj4[2] = tmp.homeIcon;
    obj5 = { onPressTitle: null, style: null, children: null };
    obj5[0] = onPressTitle;
    obj5[1] = style;
    const obj6 = { title: null, icon: null };
    const intl7 = tmp2(tmp3[17]).intl;
    obj6[0] = intl7.string(tmp2(tmp3[17]).t["9Oq93m"]);
    obj6[1] = callback(tmp2(tmp3[23]).Icon, obj4);
    obj5[2] = callback(ChannelTitleContent, obj6);
    return callback(ChannelTitleWrapper, obj5);
  } else if (tmp9) {
    const obj7 = { source: null, style: null };
    let tmp8Result = tmp8(tmp3[26]);
    obj7[0] = tmp8(tmp3[27]);
    obj7[1] = tmp.premiumIcon;
    const obj8 = { style: null, children: null };
    obj8[0] = style;
    const obj9 = { title: null, icon: null };
    const intl6 = tmp2(tmp3[17]).intl;
    obj9[0] = intl6.string(tmp2(tmp3[17]).t["KzCF/6"]);
    obj9[1] = callback(tmp8Result, obj7);
    obj8[1] = callback(ChannelTitleContent, obj9);
    return callback(ChannelTitleWrapper, obj8);
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
          let tmp2Result = tmp2(tmp3[18]);
          const threadChannelIcon = tmp2Result.getThreadChannelIcon(threadDraft.isPrivate ? tmp13.PRIVATE_THREAD : tmp13.PUBLIC_THREAD);
          const intl3 = tmp2(tmp3[17]).intl;
          const obj10 = { channelName: null };
          obj10[0] = name;
          const obj11 = { style: null, children: null };
          obj11[0] = style;
          const obj12 = { title: null, accessibleTitle: null, icon: null, subTitle: null };
          obj12[0] = name;
          obj12[1] = intl3.formatToPlainString(tmp2(tmp3[17]).t["OkzL+Q"], obj10);
          obj12[2] = threadChannelIcon;
          let tmp15Result = null != stateFromStores3;
          if (tmp15Result) {
            const obj13 = { parentChannel: null };
            obj13[0] = stateFromStores3;
            tmp15Result = tmp15(ParentChannelSubTitle, obj13);
          }
          obj12[3] = tmp15Result;
          obj11[1] = callback(ChannelTitleContent, obj12);
          return callback(ChannelTitleWrapper, obj11);
        }
        const intl2 = tmp2(tmp3[17]).intl;
        name = intl2.string(tmp2(tmp3[17]).t["4WNcpu"]);
      }
    }
    tmp2Result = tmp2(tmp3[28]);
    if (tmp2Result.shouldNSFWGateGuild(threadDraft.guildId)) {
      const obj14 = { style: null, children: null };
      obj14[0] = style;
      const obj15 = { title: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj15[0] = intl5.string(tmp2(tmp3[17]).t.HbPHt1);
      obj14[1] = callback(ChannelTitleContent, obj15);
      return callback(ChannelTitleWrapper, obj14);
    } else if (null == stateFromStores1) {
      const obj16 = { style: null, children: null };
      obj16[0] = style;
      const obj17 = { title: null };
      obj17[0] = stringResult;
      obj16[1] = callback(ChannelTitleContent, obj17);
      return callback(ChannelTitleWrapper, obj16);
    } else {
      const channelName = tmp2(tmp3[19]).computeChannelName(stateFromStores1, mergeGuildAvatar, markAllUserIdListsStale);
      const tmp2Result1 = tmp2(tmp3[19]);
      const channelIconWithGuild = tmp2(tmp3[18]).getChannelIconWithGuild(stateFromStores1, stateFromStores2);
      if (stateFromStores1.isDM()) {
        const recipientId = stateFromStores1.getRecipientId();
        const obj18 = { userId: null, style: null };
        obj18[0] = recipientId;
        obj18[1] = tmp.navbarTitlePrimaryText;
        let tmp31Result = null;
        const isSystemDMResult = stateFromStores1.isSystemDM();
        if (!isSystemDMResult) {
          const obj19 = { userId: null, style: null };
          obj19[0] = recipientId;
          obj19[1] = tmp.status;
          tmp31Result = tmp31(ConnectedStatus, obj19);
        }
        const obj20 = { userId: null, guildId: null };
        obj20[0] = recipientId;
        let guild_id;
        tmp8Result = tmp8(tmp3[20]);
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        obj20[1] = guild_id;
        const obj21 = { onPressTitle: null, style: null, children: null };
        obj21[0] = onPressTitle;
        obj21[1] = style;
        const obj22 = { title: null, icon: null, titleSuffix: null, subTitle: null };
        obj22[0] = callback(DMChannelName, obj18);
        obj22[1] = channelIconWithGuild;
        obj22[2] = tmp31Result;
        obj22[3] = callback(tmp8Result, obj20);
        obj21[2] = callback(ChannelTitleContent, obj22);
        return callback(ChannelTitleWrapper, obj21);
      } else {
        const intl4 = tmp2(tmp3[17]).intl;
        const formatToPlainString = intl4.formatToPlainString;
        const t2 = tmp2(tmp3[17]).t;
        if (isThreadResult) {
          const obj23 = { channelName: null };
          obj23[0] = channelName;
          const obj24 = { onPressTitle: null, style: null, children: null };
          obj24[0] = onPressTitle;
          obj24[1] = style;
          const obj25 = { title: null, accessibleTitle: null, icon: null, subTitle: null };
          obj25[0] = channelName;
          obj25[1] = formatToPlainString(t2["OkzL+Q"], obj23);
          obj25[2] = channelIconWithGuild;
          let tmp24Result = null != stateFromStores3;
          if (tmp24Result) {
            const obj26 = { parentChannel: null };
            obj26[0] = stateFromStores3;
            tmp24Result = tmp24(ParentChannelSubTitle, obj26);
          }
          obj25[3] = tmp24Result;
          obj24[2] = callback(ChannelTitleContent, obj25);
          return callback(ChannelTitleWrapper, obj24);
        } else {
          const obj27 = { channelName: null };
          obj27[0] = channelName;
          const obj28 = { onPressTitle: null, style: null, children: null };
          obj28[0] = onPressTitle;
          obj28[1] = style;
          const obj29 = { title: null, accessibleTitle: null, icon: null };
          obj29[0] = channelName;
          obj29[1] = formatToPlainString(t2.UbNmGc, obj27);
          obj29[2] = channelIconWithGuild;
          obj28[2] = callback(ChannelTitleContent, obj29);
          return callback(ChannelTitleWrapper, obj28);
        }
        isThreadResult = stateFromStores1.isThread();
      }
      const tmp2Result2 = tmp2(tmp3[18]);
    }
  }
  tmp9 = threadDraft(stateFromStores1[22])();
});
let result = require("_handleConnectionOpen").fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = function ChannelTitleWithoutRoute(arg0) {
  let onPressTitle;
  let require;
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = callback3();
  let obj = initialize;
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(closure_0));
  let obj2 = initialize;
  const items1 = [_handleConnectionOpen];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => connected.isConnected());
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (stateFromStores1) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    let tmp2Result = tmp2(4804);
    channelIcon = tmp2Result.getChannelIcon(stateFromStores);
  }
  let channelName = null;
  if (null != stateFromStores) {
    tmp2Result = tmp2(4534);
    channelName = tmp2Result.computeChannelName(stateFromStores, mergeGuildAvatar, markAllUserIdListsStale);
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    const recipientId = stateFromStores.getRecipientId();
    obj = { userId: null, style: null };
    obj[0] = recipientId;
    obj[1] = tmp.navbarTitlePrimaryText;
    let tmp16Result = null;
    const isSystemDMResult = stateFromStores.isSystemDM();
    if (!isSystemDMResult) {
      obj = { userId: null, style: null };
      obj[0] = recipientId;
      obj[1] = tmp.status;
      tmp16Result = tmp16(ConnectedStatus, obj);
    }
    const obj1 = { userId: null, guildId: null };
    obj1[0] = recipientId;
    obj1[1] = stateFromStores.guild_id;
    obj2 = { onPressTitle: null, children: null };
    obj2[0] = onPressTitle;
    const obj3 = { title: null, icon: null, titleSuffix: null, subTitle: null };
    obj3[0] = callback(DMChannelName, obj);
    obj3[1] = channelIcon;
    obj3[2] = tmp16Result;
    obj3[3] = callback(ActivityStatus, obj1);
    obj2[1] = callback(ChannelTitleContent, obj3);
    return callback(ChannelTitleWrapper, obj2);
  } else {
    const obj4 = { onPressTitle: null, children: null };
    obj4[0] = onPressTitle;
    if (channelName == null) {
      channelName = stringResult;
    }
    const obj5 = { title: null, icon: null };
    obj5[0] = channelName;
    obj5[1] = channelIcon;
    obj4[1] = callback(ChannelTitleContent, obj5);
    return callback(ChannelTitleWrapper, obj4);
  }
};
export const ChannelTitle = memoResult;
export const ChannelButtons = function ChannelButtons(buttons) {
  buttons = buttons.buttons;
  let obj = { style: buttons.style, children: null };
  let mapped;
  if (buttons != null) {
    mapped = buttons.map((onPress) => {
      let accessibilityLabel;
      let children;
      let color;
      let disabled;
      let onLongPress;
      let source;
      let style;
      let fn = onPress.onPress;
      const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
      ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
      let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
      if (hasActivitiesPrivateChannelTooltip) {
        fn = (arg0) => {
          if (null != fn) {
            tmp(arg0);
          }
          let obj = fn(outer1_2[34]);
          obj = { dismissAction: outer1_14.AUTO };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(fn(outer1_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
        };
      }
      obj[4] = fn;
      obj[5] = onLongPress;
      obj[6] = disabled;
      obj[7] = style;
      obj[8] = children;
      children = [closure_16(callback(table[33]), obj), ];
      let tmp3Result = null;
      if (hasActivitiesPrivateChannelTooltip) {
        obj = { contentTypes: null, groupName: null, children: null };
        const items1 = [fn(tmp5[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
        obj[0] = items1;
        obj[1] = constants.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
        obj[2] = function children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp2 = null;
          if (markAsDismissed.visibleContent === markAsDismissed(table[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
            const obj = { onClosePress: null };
            obj[0] = function onClosePress() {
              return markAsDismissed(outer1_14.UNKNOWN);
            };
            tmp2 = callback2(callback(table[37]), obj);
          }
          return tmp2;
        };
        tmp3Result = tmp3(callback(tmp5[36]), obj);
        const tmp4Result = callback(tmp5[36]);
      }
      children[1] = tmp3Result;
      return closure_17(closure_4, { children }, arg1);
    });
  }
  obj[1] = mapped;
  return closure_16(View, obj);
};