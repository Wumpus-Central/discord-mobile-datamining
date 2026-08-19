// === Module 16201: ChannelContent ===

// Module 16201 (ChannelContent)
import Text from "Text" /* 4734 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5287 */;
import LockIcon from "LockIcon" /* 6890 */;
import WarningIcon from "WarningIcon" /* 8078 */;
import SubscriptionGatedChannelIconDefault from "SubscriptionGatedChannelIcon" /* 15380 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16196 */;
import _modDef16202 from "module_16202" /* 16202 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { SUBTITLE_OPACITY_NORMAL } from "hairlineWidth" /* 10055 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

require = fn;
function ChannelContent(arg0) {
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = callback2();
  let tmp9Result = null != channel;
  if (tmp9Result) {
    if (!locked) {
      locked = isRoleRequiredDefault(channel);
    }
    tmp9Result = locked;
  }
  if (channel != null) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = validElement.isValidElement(subtitle);
  let obj = null != lastMessageTimestampString;
  let tmp9Result3 = obj;
  if (obj) {
    tmp9Result3 = null == mentionBadge;
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
  if (tmp9Result3) {
    num = 30;
  }
  const obj2 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
  const obj3 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null };
  const tmp4 = getLayoutStyleDefault();
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj3[3] = resolvedUnreadSetting;
  obj3[4] = connected;
  const items1 = [callback(_modDef16202, obj3), , ];
  tmp9Result = null;
  if (null != channelCategoryName) {
    const obj4 = { variant: "text-xs/bold", color: "text-muted", style: null, children: null };
    obj4[2] = { marginRight: 4 };
    obj4[3] = channelCategoryName;
    tmp9Result = callback(Text.Text, obj4);
  }
  items1[1] = tmp9Result;
  let tmp11Result = tmp9Result;
  if (!tmp9Result) {
    tmp11Result = isNSFWResult;
  }
  if (tmp11Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp9Result) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj5 = { style: null, children: null };
    const obj6 = { maxWidth: null };
    obj6[0] = 14 * num3;
    items2[1] = obj6;
    obj5[0] = items2;
    if (tmp9Result) {
      const obj7 = { size: "xxs", color: "icon-muted", style: null };
      obj7[2] = tmp.channelTraitIcon;
      tmp9Result = callback(LockIcon.LockIcon, obj7);
    }
    const items3 = [tmp9Result, , ];
    if (isNSFWResult) {
      const obj8 = { size: "xxs", color: "icon-muted", style: null };
      obj8[2] = tmp.channelTraitIcon;
      isNSFWResult = callback(WarningIcon.WarningIcon, obj8);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj9 = { locked: null, isInMainTabsExperiment: true };
      obj9[0] = needSubscriptionToAccess;
      isSubscriptionGated = callback(SubscriptionGatedChannelIconDefault, obj9);
    }
    items3[2] = isSubscriptionGated;
    obj5[1] = items3;
    tmp11Result = callback2(View, obj5);
  }
  items1[2] = tmp11Result;
  obj2[1] = items1;
  const items4 = [callback2(View, obj2), ];
  let tmp9Result1 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj10 = { style: null, children: null };
    const obj11 = { paddingRight: null };
    obj11[0] = num5;
    const items5 = [obj11, ];
    const obj12 = { marginTop: null };
    obj12[0] = tmp4.messagePreview.margin.marginTop;
    items5[1] = obj12;
    obj10[0] = items5;
    obj10[1] = subtitle;
    tmp9Result1 = callback(View, obj10);
  }
  items4[1] = tmp9Result1;
  obj1[1] = items4;
  const items6 = [callback2(View, obj1), ];
  const obj13 = { style: tmp9Result3 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp9Result2 = obj;
  if (obj) {
    let num6 = 1;
    if (!muted) {
      num6 = SUBTITLE_OPACITY_NORMAL;
    }
    const obj14 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
    const obj15 = { marginLeft: "auto", opacity: null };
    obj15[1] = num6;
    obj14[2] = obj15;
    obj14[4] = lastMessageTimestampString;
    tmp9Result2 = callback(Text.Text, obj14);
  }
  const items7 = [tmp9Result2, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj) {
    obj = { marginTop: 5 };
  }
  items8[1] = obj;
  items7[1] = callback(View, { style: items8, children: mentionBadge });
  if (tmp9Result3) {
    const obj16 = { style: null };
    obj16[0] = { flex: 1 };
    tmp9Result3 = callback(View, obj16);
  }
  items7[2] = tmp9Result3;
  obj13[1] = items7;
  items6[1] = callback2(View, obj13);
  obj[1] = items6;
  obj[1] = callback2(View, obj);
  return callback(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
let num2 = 0;
if (obj132.isAndroid()) {
  num2 = 2;
}
createCacheKey[2] = num2;
createCacheKey[6] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContent, {});
};