// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import Button from "Button";
import { Button } from "../../../../../design/void/native.tsx";
import { FacepileGroupDMAvatar } from "../../../../group_dm/native/GroupDMAvatar.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { channelItemContainer: null, channelItemLeft: null, channelItemUnreadIndicator: null, channelItemAvatar: null, channelItemContent: null, channelItemTop: null };
createCacheKey = { flexDirection: "row", gap: require("Themes").space.PX_4, borderRadius: require("Themes").radii.sm, paddingVertical: require("Themes").space.PX_8, paddingRight: require("Themes").space.PX_16, paddingLeft: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: require("Themes").radii.round, margin: require("Themes").space.PX_8 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: require("Themes").radii.round, margin: require("Themes").space.PX_8 };
createCacheKey[3] = { marginRight: require("Themes").space.PX_8, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { flexDirection: "column", flex: 1, justifyContent: "center" };
let obj2 = { marginRight: require("Themes").space.PX_8, justifyContent: "center", alignItems: "center" };
createCacheKey[5] = { flexDirection: "row", gap: require("Themes").space.PX_4, justifyContent: "space-between", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { direction: require("Button").CutoutDirection.BOTTOM_RIGHT, radius: null, imageType: null, inset: -4 };
let num = Button.getStatusSize(require("Button").AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
obj4[1] = num / 2 + 4;
obj4[2] = require("Button").CutoutType.CIRCULAR;
let obj3 = { flexDirection: "row", gap: require("Themes").space.PX_4, justifyContent: "space-between", alignItems: "center" };
const result = require("ME").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx");

export default function ChannelRowItem(isUnread) {
  let animatedStyles;
  let avatar1;
  let avatar2;
  let preview;
  let status;
  let timestamp;
  let title;
  ({ animatedStyles, preview, avatar1, avatar2, status } = isUnread);
  ({ title, timestamp } = isUnread);
  if (status === undefined) {
    status = StatusTypes.ONLINE;
  }
  let flag = isUnread.isUnread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = createCacheKey();
  let obj = { style: tmp2.channelItemContainer, children: null };
  obj = { style: tmp2.channelItemLeft, children: null };
  const items = [tmp2.channelItemUnreadIndicator, ];
  let num = 0;
  if (flag) {
    num = 1;
  }
  items[1] = { opacity: num };
  obj[1] = closure_4(View, { style: items });
  const items1 = [closure_4(View, obj), , ];
  obj = { style: tmp2.channelItemAvatar, children: null };
  if (null != avatar2) {
    const obj1 = { sources: null, size: null };
    const items2 = [avatar1, avatar2];
    obj1[0] = items2;
    obj1[1] = Button.AvatarSizes.LARGE_48;
    let tmp5Result = tmp5(FacepileGroupDMAvatar.FacepileGroupDMAvatar, obj1);
    let tmp6 = require;
  } else {
    tmp6 = require;
    const obj2 = { status: null, source: null, cutout: null, size: null };
    obj2[0] = status;
    obj2[1] = avatar1;
    obj2[2] = obj4;
    obj2[3] = Button.AvatarSizes.LARGE_48;
    tmp5Result = tmp5(Button.Avatar, obj2);
  }
  obj[1] = tmp5Result;
  items1[1] = closure_4(View, obj);
  const obj3 = { style: tmp2.channelItemContent, children: null };
  obj4 = { style: tmp2.channelItemTop, children: null };
  const items3 = [closure_4(tmp6(4338).Text, { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title }), closure_4(tmp6(4338).Text, { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp })];
  obj4[1] = items3;
  const items4 = [closure_5(View, obj4), ];
  if (null == preview) {
    items4[1] = null;
    obj3[1] = items4;
    items1[2] = tmp3(tmp4, obj3);
    obj[1] = items1;
    return tmp3(tmp4, obj);
  } else {
    animatedStyles = { animated: true, style: null, variant: "redesign/message-preview/medium", lineClamp: 1, children: null };
    animatedStyles[1] = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
    animatedStyles[4] = preview;
    tmp5Result = tmp5(tmp6(4338).Text, animatedStyles);
    const tmp12 = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
  }
};