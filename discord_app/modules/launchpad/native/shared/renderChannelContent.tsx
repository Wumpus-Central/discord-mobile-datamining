// === Module 16982: renderChannelContent ===

// Module 16982 (renderChannelContent)
import Text_Text from "Text/Text" /* 4556 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5062 */;
import LockIcon from "LockIcon" /* 5095 */;
import WarningIcon from "WarningIcon" /* 8588 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16118 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16977 */;
import ChannelTitleDefault from "ChannelTitle" /* 16983 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelContent(arg0) {
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_9();
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
  const isValidElementResult = noop.isValidElement(subtitle);
  let obj = null != lastMessageTimestampString;
  let tmp9Result3 = obj;
  if (obj) {
    tmp9Result3 = null == mentionBadge;
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
  if (tmp9Result3) {
    num = 30;
  }
  const obj2 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
  const obj3 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null };
  const tmp4 = getLayoutStylesDefault();
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj3.resolvedUnreadSetting = resolvedUnreadSetting;
  obj3.connected = connected;
  const items1 = [React5(ChannelTitleDefault, obj3), , ];
  tmp9Result = null;
  if (null != channelCategoryName) {
    const obj4 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
    tmp9Result = React5(Text_Text.Text, obj4);
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
    const obj6 = { maxWidth: 14 * num3 };
    items2[1] = obj6;
    obj5.style = items2;
    if (tmp9Result) {
      const obj7 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp9Result = React5(LockIcon.LockIcon, obj7);
    }
    const items3 = [tmp9Result, , ];
    if (isNSFWResult) {
      const obj8 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = React5(WarningIcon.WarningIcon, obj8);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj9 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = React5(GuildRoleSubscriptionGatedChannelIconDefault, obj9);
    }
    items3[2] = isSubscriptionGated;
    obj5.children = items3;
    tmp11Result = React6(View, obj5);
  }
  items1[2] = tmp11Result;
  obj2.children = items1;
  const items4 = [React6(View, obj2), ];
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
    const obj11 = { paddingRight: num5 };
    const items5 = [obj11, ];
    const obj12 = { marginTop: tmp4.messagePreview.margin.marginTop };
    items5[1] = obj12;
    obj10.style = items5;
    obj10.children = subtitle;
    tmp9Result1 = React5(View, obj10);
  }
  items4[1] = tmp9Result1;
  obj1.children = items4;
  const items6 = [React6(View, obj1), ];
  const obj13 = { style: tmp9Result3 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp9Result2 = obj;
  if (obj) {
    let num6 = 1;
    if (!muted) {
      num6 = SUBTITLE_OPACITY_NORMAL;
    }
    const obj14 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
    const obj15 = { marginLeft: "auto", opacity: num6 };
    obj14.style = obj15;
    obj14.children = lastMessageTimestampString;
    tmp9Result2 = React5(Text_Text.Text, obj14);
  }
  const items7 = [tmp9Result2, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj) {
    obj = { marginTop: 5 };
  }
  items8[1] = obj;
  items7[1] = React5(View, { style: items8, children: mentionBadge });
  if (tmp9Result3) {
    const obj16 = { style: { flex: 1 } };
    tmp9Result3 = React5(View, obj16);
  }
  items7[2] = tmp9Result3;
  obj13.children = items7;
  items6[1] = React6(View, obj13);
  obj.children = items6;
  obj.children = React6(View, obj);
  return React5(View, obj);
}
const View = fn(17).View;
const SUBTITLE_OPACITY_NORMAL = fn(10118).SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4560);
let PlatformUtils = fn(1115);
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
createStyles = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: null };
createStyles = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
PlatformUtils = fn(1115);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
createStyles.marginTop = num2;
createStyles.channelTraitIcon = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return React5(ChannelContent, {});
};