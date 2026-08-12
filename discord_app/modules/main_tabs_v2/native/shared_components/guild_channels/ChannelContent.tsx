// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "set";
import set from "hairlineWidth";
import { isRoleRequired } from "../../../../channel/isRoleRequired.tsx";
import { SubscriptionGatedChannelIcon } from "../../../../guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import { ChannelTitle } from "ChannelTitle.tsx";
import { getLayoutStyles } from "layouts/ChannelListLayout.tsx";

let closure_6;
let error;
const require = arg1;
function ChannelContentComponent(arg0) {
  let channel;
  let connected;
  let isSubscriptionGated;
  let lastMessageTimestampString;
  let layout;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, lastMessageTimestampString, channel, layout, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
  const tmp = createCacheKey();
  let obj = getLayoutStyles;
  let tmp10Result = null != channel;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (tmp10Result) {
    if (!locked) {
      locked = isRoleRequired(channel);
    }
    tmp10Result = locked;
  }
  if (channel != null) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = validElement.isValidElement(subtitle);
  let obj14 = null != lastMessageTimestampString;
  let tmp10Result2 = obj14;
  if (obj14) {
    tmp10Result2 = null == mentionBadge;
  }
  obj = { style: tmp.channelContent, children: null };
  obj = { style: tmp.channelContainer, children: null };
  const items = [tmp.leftBox, ];
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
  obj3[3] = resolvedUnreadSetting;
  obj3[4] = connected;
  obj3[5] = layout;
  const items1 = [closure_6(ChannelTitle, obj3), ];
  let tmp12Result = tmp10Result;
  if (!tmp10Result) {
    tmp12Result = isNSFWResult;
  }
  if (tmp12Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp10Result) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj4 = { style: null, children: null };
    const obj5 = { maxWidth: null };
    obj5[0] = 14 * num3;
    items2[1] = obj5;
    obj4[0] = items2;
    if (tmp10Result) {
      const obj6 = { size: "xxs", color: "icon-muted", style: null };
      obj6[2] = tmp.channelTraitIcon;
      tmp10Result = tmp10(tmp2(4863).LockIcon, obj6);
    }
    const items3 = [tmp10Result, , ];
    if (isNSFWResult) {
      const obj7 = { size: "xxs", color: "icon-muted", style: null };
      obj7[2] = tmp.channelTraitIcon;
      isNSFWResult = tmp10(tmp2(8003).WarningIcon, obj7);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj8 = { locked: null, isInMainTabsExperiment: true };
      obj8[0] = needSubscriptionToAccess;
      isSubscriptionGated = tmp10(SubscriptionGatedChannelIcon, obj8);
    }
    items3[2] = isSubscriptionGated;
    obj4[1] = items3;
    tmp12Result = tmp12(tmp11, obj4);
  }
  items1[1] = tmp12Result;
  obj2[1] = items1;
  const items4 = [closure_7(View, obj2), ];
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
    const obj10 = { paddingRight: null };
    obj10[0] = num5;
    const items5 = [obj10, ];
    const obj11 = { marginTop: null };
    obj11[0] = layoutStyles.messagePreview.margin.marginTop;
    items5[1] = obj11;
    obj9[0] = items5;
    obj9[1] = subtitle;
    tmp10Result = tmp10(tmp11, obj9);
  }
  items4[1] = tmp10Result;
  obj1[1] = items4;
  const items6 = [closure_7(View, obj1), ];
  const obj12 = { style: tmp10Result2 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp10Result1 = obj14;
  if (obj14) {
    const obj13 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
    obj13[2] = { marginLeft: "auto" };
    obj13[4] = lastMessageTimestampString;
    tmp10Result1 = tmp10(tmp2(4340).Text, obj13);
  }
  const items7 = [tmp10Result1, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj14) {
    obj14 = { marginTop: 5 };
  }
  items8[1] = obj14;
  items7[1] = closure_6(View, { style: items8, children: mentionBadge });
  if (tmp10Result2) {
    const obj15 = { style: null };
    obj15[0] = { flex: 1 };
    tmp10Result2 = tmp10(tmp11, obj15);
  }
  items7[2] = tmp10Result2;
  obj12[1] = items7;
  items6[1] = closure_7(View, obj12);
  obj[1] = items6;
  obj[1] = closure_7(View, obj);
  return closure_6(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let num = -1;
if (set.isIOS()) {
  num = 2;
}
createCacheKey = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: null };
createCacheKey = { opacity: require("hairlineWidth").SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
let num2 = 0;
if (set.isAndroid()) {
  num2 = 2;
}
createCacheKey[2] = num2;
createCacheKey[6] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx");

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContentComponent, {});
};