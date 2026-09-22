// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import isRoleRequiredDefault from "../../../../channel/isRoleRequired.tsx";
import LockIcon from "../../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import WarningIcon from "../../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
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
  let tmp10Result = null != channel;
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
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
  let obj17 = null != lastMessageTimestampString;
  let tmp10Result6 = obj17;
  if (obj17) {
    tmp10Result6 = null == mentionBadge;
  }
  const obj2 = { style: tmp.channelContent, children: null };
  const obj3 = { style: tmp.channelContainer, children: null };
  const items = [tmp.leftBox];
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj4 = { style: items, children: null };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp10Result6) {
    num = 30;
  }
  const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
  const obj6 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null, layout: null };
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.connected = connected;
  obj6.layout = layout;
  const items1 = [timestampProducer(guild_channels_ChannelTitleDefault, obj6)];
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
    const obj7 = { style: null, children: null };
    const obj8 = { maxWidth: 14 * num3 };
    items2[1] = obj8;
    obj7.style = items2;
    if (tmp10Result) {
      const obj9 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp10Result = timestampProducer(LockIcon.LockIcon, obj9);
    }
    const items3 = [tmp10Result, ,];
    if (isNSFWResult) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = timestampProducer(WarningIcon.WarningIcon, obj10);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj11 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = timestampProducer(GuildRoleSubscriptionGatedChannelIconDefault, obj11);
    }
    items3[2] = isSubscriptionGated;
    obj7.children = items3;
    tmp12Result = React5(View, obj7);
  }
  items1[1] = tmp12Result;
  obj5.children = items1;
  const items4 = [React5(View, obj5)];
  let tmp10Result4 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj12 = { style: null, children: null };
    const obj13 = { paddingRight: num5 };
    const items5 = [obj13];
    const obj14 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
    items5[1] = obj14;
    obj12.style = items5;
    obj12.children = subtitle;
    tmp10Result4 = timestampProducer(View, obj12);
  }
  items4[1] = tmp10Result4;
  obj4.children = items4;
  const items6 = [React5(View, obj4)];
  const obj15 = { style: tmp10Result6 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp10Result5 = obj17;
  if (obj17) {
    const obj16 = {
      variant: "text-xs/medium",
      color: "text-muted",
      style: { marginLeft: "auto" },
      maxFontSizeMultiplier: 1.75,
      children: lastMessageTimestampString,
    };
    tmp10Result5 = timestampProducer(Text_Text.Text, obj16);
  }
  const items7 = [tmp10Result5, ,];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }];
  if (obj17) {
    obj17 = { marginTop: 5 };
  }
  items8[1] = obj17;
  items7[1] = timestampProducer(View, { style: items8, children: mentionBadge });
  if (tmp10Result6) {
    const obj18 = { style: { flex: 1 } };
    tmp10Result6 = timestampProducer(View, obj18);
  }
  items7[2] = tmp10Result6;
  obj15.children = items7;
  items6[1] = React5(View, obj15);
  obj3.children = items6;
  obj2.children = React5(View, obj3);
  return timestampProducer(View, obj2);
}
const View = fn(17).View;
const UnreadSetting = fn(4939).UnreadSetting;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let PlatformUtils = fn(1364);
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj3 = {
  channelContent: { flex: 1, marginTop: num },
  channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 },
  rightBox: { flexDirection: "column", alignItems: "flex-end" },
  rightContentAbsolute: { position: "absolute", right: 0, top: 0 },
  channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" },
  channelTraitIcon: null,
};
let obj4 = { opacity: fn(10380).SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
PlatformUtils = fn(1364);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj4.marginTop = num2;
obj3.channelTraitIcon = obj4;
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx",
);

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(ChannelContentComponent, {});
};
