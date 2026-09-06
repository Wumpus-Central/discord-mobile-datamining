// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
import isRoleRequiredDefault from "../../../../channel/isRoleRequired.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import GuildRoleSubscriptionGatedChannelIconDefault from "../../../../guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import guild_channels_ChannelTitleDefault from "ChannelTitle.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ChannelContentComponent(arg0) {
  ({
    subtitle,
    resolvedUnreadSetting,
    locked,
    lastMessageTimestampString,
    channel,
    layout,
    mentionCount,
    mentionBadge,
    isSubscriptionGated,
  } = arg0);
  ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_8();
  let obj = ChannelListLayout;
  let tmp10Result = null != channel;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (tmp10Result) {
    if (!locked) {
      locked = isRoleRequiredDefault(channel);
    }
    tmp10Result = locked;
  }
  if (channel != null) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = noop.isValidElement(subtitle);
  let obj14 = null != lastMessageTimestampString;
  let tmp10Result2 = obj14;
  if (obj14) {
    tmp10Result2 = null == mentionBadge;
  }
  obj = { style: tmp.channelContent, children: null };
  obj = { style: tmp.channelContainer, children: null };
  const items = [tmp.leftBox];
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj1 = { style: items, children: null };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp10Result2) {
    num = 30;
  }
  const obj2 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
  const obj3 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null, layout: null };
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj3.resolvedUnreadSetting = resolvedUnreadSetting;
  obj3.connected = connected;
  obj3.layout = layout;
  const items1 = [timestampProducer(guild_channels_ChannelTitleDefault, obj3)];
  let tmp12Result = tmp10Result;
  if (!tmp10Result) {
    tmp12Result = isNSFWResult;
  }
  if (tmp12Result) {
    const items2 = [tmp.channelTraits];
    let num3 = 1;
    if (tmp10Result) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj4 = { style: null, children: null };
    const obj5 = { maxWidth: 14 * num3 };
    items2[1] = obj5;
    obj4.style = items2;
    if (tmp10Result) {
      const obj6 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp10Result = tmp10(tmp2(5095).LockIcon, obj6);
    }
    const items3 = [tmp10Result, ,];
    if (isNSFWResult) {
      const obj7 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = tmp10(tmp2(8588).WarningIcon, obj7);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj8 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = tmp10(GuildRoleSubscriptionGatedChannelIconDefault, obj8);
    }
    items3[2] = isSubscriptionGated;
    obj4.children = items3;
    tmp12Result = tmp12(tmp11, obj4);
  }
  items1[1] = tmp12Result;
  obj2.children = items1;
  const items4 = [React5(View, obj2)];
  tmp10Result = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj9 = { style: null, children: null };
    const obj10 = { paddingRight: num5 };
    const items5 = [obj10];
    const obj11 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
    items5[1] = obj11;
    obj9.style = items5;
    obj9.children = subtitle;
    tmp10Result = tmp10(tmp11, obj9);
  }
  items4[1] = tmp10Result;
  obj1.children = items4;
  const items6 = [React5(View, obj1)];
  const obj12 = { style: tmp10Result2 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp10Result1 = obj14;
  if (obj14) {
    const obj13 = {
      variant: "text-xs/medium",
      color: "text-muted",
      style: { marginLeft: "auto" },
      maxFontSizeMultiplier: 1.75,
      children: lastMessageTimestampString,
    };
    tmp10Result1 = tmp10(tmp2(4556).Text, obj13);
  }
  const items7 = [tmp10Result1, ,];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }];
  if (obj14) {
    obj14 = { marginTop: 5 };
  }
  items8[1] = obj14;
  items7[1] = timestampProducer(View, { style: items8, children: mentionBadge });
  if (tmp10Result2) {
    const obj15 = { style: { flex: 1 } };
    tmp10Result2 = tmp10(tmp11, obj15);
  }
  items7[2] = tmp10Result2;
  obj12.children = items7;
  items6[1] = React5(View, obj12);
  obj.children = items6;
  obj.children = React5(View, obj);
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4560);
let PlatformUtils = fn(1115);
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
createStyles = {
  channelContent: { flex: 1, marginTop: num },
  channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 },
  rightBox: { flexDirection: "column", alignItems: "flex-end" },
  rightContentAbsolute: { position: "absolute", right: 0, top: 0 },
  channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" },
  channelTraitIcon: null,
};
createStyles = { opacity: fn(10118).SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
PlatformUtils = fn(1115);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
createStyles.marginTop = num2;
createStyles.channelTraitIcon = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx",
);

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(ChannelContentComponent, {});
};
