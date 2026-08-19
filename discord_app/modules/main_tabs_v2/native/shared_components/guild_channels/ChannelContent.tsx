// === Module 15884: ChannelContentComponent ===

// Module 15884 (ChannelContentComponent)
import Text from "Text" /* 4734 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5287 */;
import LockIcon from "LockIcon" /* 6890 */;
import WarningIcon from "WarningIcon" /* 8078 */;
import getLayoutStyles from "getLayoutStyles" /* 10056 */;
import SubscriptionGatedChannelIconDefault from "SubscriptionGatedChannelIcon" /* 15380 */;
import _modDef15885 from "module_15885" /* 15885 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

require = fn;
function ChannelContentComponent(arg0) {
  ({ subtitle, resolvedUnreadSetting, locked, lastMessageTimestampString, channel, layout, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
  const tmp = callback2();
  let obj = getLayoutStyles;
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
  const isValidElementResult = validElement.isValidElement(subtitle);
  let obj14 = null != lastMessageTimestampString;
  let tmp10Result2 = obj14;
  if (obj14) {
    tmp10Result2 = null == mentionBadge;
  }
  obj = { style: tmp.channelContainer, children: null };
  const items = [tmp.leftBox, ];
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  obj1 = { style: items, children: null };
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
  const items1 = [callback(_modDef15885, obj3), ];
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
      tmp10Result = callback(LockIcon.LockIcon, obj6);
    }
    const items3 = [tmp10Result, , ];
    if (isNSFWResult) {
      const obj7 = { size: "xxs", color: "icon-muted", style: null };
      obj7[2] = tmp.channelTraitIcon;
      isNSFWResult = callback(WarningIcon.WarningIcon, obj7);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj8 = { locked: null, isInMainTabsExperiment: true };
      obj8[0] = needSubscriptionToAccess;
      isSubscriptionGated = callback(SubscriptionGatedChannelIconDefault, obj8);
    }
    items3[2] = isSubscriptionGated;
    obj4[1] = items3;
    tmp12Result = callback2(View, obj4);
  }
  items1[1] = tmp12Result;
  obj2[1] = items1;
  const items4 = [callback2(View, obj2), ];
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
    tmp10Result = callback(View, obj9);
  }
  items4[1] = tmp10Result;
  obj1[1] = items4;
  const items6 = [callback2(View, obj1), ];
  const obj12 = { style: tmp10Result2 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp10Result1 = obj14;
  if (obj14) {
    const obj13 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
    obj13[2] = { marginLeft: "auto" };
    obj13[4] = lastMessageTimestampString;
    tmp10Result1 = callback(Text.Text, obj13);
  }
  const items7 = [tmp10Result1, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj14) {
    obj14 = { marginTop: 5 };
  }
  items8[1] = obj14;
  items7[1] = callback(View, { style: items8, children: mentionBadge });
  if (tmp10Result2) {
    const obj15 = { style: null };
    obj15[0] = { flex: 1 };
    tmp10Result2 = callback(View, obj15);
  }
  items7[2] = tmp10Result2;
  obj12[1] = items7;
  items6[1] = callback2(View, obj12);
  obj[1] = items6;
  obj[1] = callback2(View, obj);
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { opacity: require("hairlineWidth").SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
let num2 = 0;
if (obj132.isAndroid()) {
  num2 = 2;
}
createCacheKey[2] = num2;
createCacheKey[6] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx");

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContentComponent, {});
};