// === Module 15290: SettingsAppearanceChannelRowItem ===

// Module 15290 (SettingsAppearanceChannelRowItem)
import nativeDefault from "native" /* 576 */;
import native2 from "native" /* 1178 */;
import GroupDMAvatar from "GroupDMAvatar" /* 10910 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StatusTypes = fn(1074).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { channelItemContainer: null, channelItemLeft: null, channelItemUnreadIndicator: null, channelItemAvatar: null, channelItemContent: null, channelItemTop: null };
createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
createStyles.channelItemContainer = createStyles;
createStyles.channelItemLeft = { alignItems: "center", justifyContent: "center" };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.round, margin: nativeDefault.space.PX_8 };
createStyles.channelItemUnreadIndicator = size;
createStyles.channelItemAvatar = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
createStyles.channelItemContent = { flexDirection: "column", flex: 1, justifyContent: "center" };
let obj1 = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
createStyles.channelItemTop = { flexDirection: "row", gap: nativeDefault.space.PX_4, justifyContent: "space-between", alignItems: "center" };
let closure_6 = createStyles.createStyles(createStyles);
let obj3 = { direction: fn(1178).CutoutDirection.BOTTOM_RIGHT, radius: null, imageType: null, inset: -4 };
const native = fn(1178);
let num = native.getStatusSize(fn(1178).AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
obj3.radius = num / 2 + 4;
obj3.imageType = fn(1178).CutoutType.CIRCULAR;
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
  let obj = { style: tmp2.channelItemContainer, children: null };
  obj = { style: tmp2.channelItemLeft, children: null };
  const items = [tmp2.channelItemUnreadIndicator, ];
  let num = 0;
  if (flag) {
    num = 1;
  }
  items[1] = { opacity: num };
  obj.children = React4(View, { style: items });
  const items1 = [React4(View, obj), , ];
  obj = { style: tmp2.channelItemAvatar, children: null };
  if (null != avatar2) {
    const obj1 = { sources: null, size: null };
    const items2 = [avatar1, avatar2];
    obj1.sources = items2;
    obj1.size = native2.AvatarSizes.LARGE_48;
    let tmp5Result = tmp5(GroupDMAvatar.FacepileGroupDMAvatar, obj1);
    let tmp6 = require;
  } else {
    tmp6 = require;
    const obj2 = { status, source: avatar1, cutout: obj3, size: native2.AvatarSizes.LARGE_48 };
    tmp5Result = tmp5(native2.Avatar, obj2);
  }
  obj.children = tmp5Result;
  items1[1] = React4(View, obj);
  obj3 = { style: tmp2.channelItemContent, children: null };
  const obj4 = { style: tmp2.channelItemTop, children: null };
  const items3 = [React4(tmp6(4556).Text, { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title }), React4(tmp6(4556).Text, { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp })];
  obj4.children = items3;
  const items4 = [hasOwnProperty(View, obj4), ];
  if (null == preview) {
    items4[1] = null;
    obj3.children = items4;
    items1[2] = tmp3(tmp4, obj3);
    obj.children = items1;
    return tmp3(tmp4, obj);
  } else {
    animatedStyles = { animated: true, style: null, variant: "redesign/message-preview/medium", lineClamp: 1, children: null };
    animatedStyles.style = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
    animatedStyles.children = preview;
    tmp5Result = tmp5(tmp6(4556).Text, animatedStyles);
    const tmp12 = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
  }
};