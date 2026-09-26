// === Module 14839: SettingsAppearanceChannelRowItem ===

// Module 14839 (SettingsAppearanceChannelRowItem)
import nativeDefault from "native" /* 576 */;
import native2 from "native" /* 1177 */;
import GroupDMAvatar from "GroupDMAvatar" /* 10371 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StatusTypes = fn(1074).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { channelItemContainer: { flexDirection: "row", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 }, channelItemLeft: { alignItems: "center", justifyContent: "center" }, channelItemUnreadIndicator: null, channelItemAvatar: null, channelItemContent: null, channelItemTop: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.round, margin: nativeDefault.space.PX_8 };
obj2.channelItemUnreadIndicator = size;
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
obj2.channelItemAvatar = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
obj2.channelItemContent = { flexDirection: "column", flex: 1, justifyContent: "center" };
let obj4 = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
obj2.channelItemTop = { flexDirection: "row", gap: nativeDefault.space.PX_4, justifyContent: "space-between", alignItems: "center" };
let closure_6 = createStyles.createStyles(obj2);
let obj6 = { direction: fn(1177).CutoutDirection.BOTTOM_RIGHT, radius: null, imageType: null, inset: -4 };
const native = fn(1177);
let num = native.getStatusSize(fn(1177).AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
obj6.radius = num / 2 + 4;
obj6.imageType = fn(1177).CutoutType.CIRCULAR;
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx");

export default function ChannelRowItem(isUnread) {
  ({ animatedStyles, preview, avatar1, avatar2, status } = isUnread);
  ({ title, timestamp } = isUnread);
  if (status === undefined) {
    status = StatusTypes.ONLINE;
  }
  let flag = isUnread.isUnread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = closure_6();
  const obj = { style: tmp2.channelItemContainer, children: null };
  const obj2 = { style: tmp2.channelItemLeft, children: null };
  const items = [tmp2.channelItemUnreadIndicator, ];
  let num = 0;
  if (flag) {
    num = 1;
  }
  items[1] = { opacity: num };
  obj2.children = React4(View, { style: items });
  const items1 = [React4(View, obj2), , ];
  const obj3 = { style: tmp2.channelItemAvatar, children: null };
  if (null != avatar2) {
    const obj4 = { sources: null, size: null };
    const items2 = [avatar1, avatar2];
    obj4.sources = items2;
    obj4.size = native2.AvatarSizes.LARGE_48;
    let tmp5Result = React4(GroupDMAvatar.FacepileGroupDMAvatar, obj4);
    let tmp6 = require;
  } else {
    tmp6 = require;
    const obj5 = { status, source: avatar1, cutout: obj6, size: native2.AvatarSizes.LARGE_48 };
    tmp5Result = React4(native2.Avatar, obj5);
  }
  obj3.children = tmp5Result;
  items1[1] = React4(View, obj3);
  obj6 = { style: tmp2.channelItemContent, children: null };
  const obj7 = { style: tmp2.channelItemTop, children: null };
  const items3 = [React4(tmp6(4832).Text, { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title }), React4(tmp6(4832).Text, { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp })];
  obj7.children = items3;
  const items4 = [hasOwnProperty(View, obj7), ];
  if (null == preview) {
    items4[1] = null;
    obj6.children = items4;
    items1[2] = hasOwnProperty(View, obj6);
    obj.children = items1;
    return hasOwnProperty(View, obj);
  } else {
    animatedStyles = { animated: true, style: null, variant: "redesign/message-preview/medium", lineClamp: 1, children: null };
    animatedStyles.style = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
    animatedStyles.children = preview;
    React4(tmp6(4832).Text, animatedStyles);
    const tmp12 = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
  }
  const obj8 = { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title };
  const obj9 = { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp };
};