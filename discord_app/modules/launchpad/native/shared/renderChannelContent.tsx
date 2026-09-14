// === Module 16775: renderChannelContent ===

// Module 16775 (renderChannelContent)
import Text_Text from "Text/Text" /* 4632 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5143 */;
import LockIcon from "LockIcon" /* 5176 */;
import WarningIcon from "WarningIcon" /* 8711 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16215 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16772 */;
import ChannelTitleDefault from "ChannelTitle" /* 16776 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelContent(arg0) {
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_9();
  let tmp9Result5 = null != channel;
  if (tmp9Result5) {
    if (!locked) {
      locked = isRoleRequiredDefault(channel);
    }
    tmp9Result5 = locked;
  }
  if (channel != null) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = noop.isValidElement(subtitle);
  let obj = null != lastMessageTimestampString;
  let tmp9Result8 = obj;
  if (obj) {
    tmp9Result8 = null == mentionBadge;
  }
  const obj2 = { style: tmp.channelContent, children: null };
  const obj3 = { style: tmp.channelContainer, children: null };
  const items = [tmp.leftBox, ];
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj4 = { style: items, children: null };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp9Result8) {
    num = 30;
  }
  const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
  const obj6 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null };
  const tmp4 = getLayoutStylesDefault();
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.connected = connected;
  const items1 = [React5(ChannelTitleDefault, obj6), , ];
  let tmp9Result = null;
  if (null != channelCategoryName) {
    const obj7 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
    tmp9Result = React5(Text_Text.Text, obj7);
  }
  items1[1] = tmp9Result;
  let tmp11Result = tmp9Result5;
  if (!tmp9Result5) {
    tmp11Result = isNSFWResult;
  }
  if (tmp11Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp9Result5) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj8 = { style: null, children: null };
    const obj9 = { maxWidth: 14 * num3 };
    items2[1] = obj9;
    obj8.style = items2;
    if (tmp9Result5) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp9Result5 = React5(LockIcon.LockIcon, obj10);
    }
    const items3 = [tmp9Result5, , ];
    if (isNSFWResult) {
      const obj11 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = React5(WarningIcon.WarningIcon, obj11);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj12 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = React5(GuildRoleSubscriptionGatedChannelIconDefault, obj12);
    }
    items3[2] = isSubscriptionGated;
    obj8.children = items3;
    tmp11Result = React6(View, obj8);
  }
  items1[2] = tmp11Result;
  obj5.children = items1;
  const items4 = [React6(View, obj5), ];
  let tmp9Result6 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj13 = { style: null, children: null };
    const obj14 = { paddingRight: num5 };
    const items5 = [obj14, ];
    const obj15 = { marginTop: tmp4.messagePreview.margin.marginTop };
    items5[1] = obj15;
    obj13.style = items5;
    obj13.children = subtitle;
    tmp9Result6 = React5(View, obj13);
  }
  items4[1] = tmp9Result6;
  obj4.children = items4;
  const items6 = [React6(View, obj4), ];
  const obj16 = { style: tmp9Result8 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp9Result7 = obj;
  if (obj) {
    let num6 = 1;
    if (!muted) {
      num6 = SUBTITLE_OPACITY_NORMAL;
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
    const obj18 = { marginLeft: "auto", opacity: num6 };
    obj17.style = obj18;
    obj17.children = lastMessageTimestampString;
    tmp9Result7 = React5(Text_Text.Text, obj17);
  }
  const items7 = [tmp9Result7, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj) {
    obj = { marginTop: 5 };
  }
  items8[1] = obj;
  items7[1] = React5(View, { style: items8, children: mentionBadge });
  if (tmp9Result8) {
    const obj19 = { style: { flex: 1 } };
    tmp9Result8 = React5(View, obj19);
  }
  items7[2] = tmp9Result8;
  obj16.children = items7;
  items6[1] = React6(View, obj16);
  obj3.children = items6;
  obj2.children = React6(View, obj3);
  return React5(View, obj2);
}
const View = fn(17).View;
const SUBTITLE_OPACITY_NORMAL = fn(10246).SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = fn(4818).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let PlatformUtils = fn(1363);
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj3 = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: null };
let obj4 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
PlatformUtils = fn(1363);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj4.marginTop = num2;
obj3.channelTraitIcon = obj4;
let closure_9 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return React5(ChannelContent, {});
};