// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button2 from "../../../../../design/void/native.tsx";
import FacepileGroupDMAvatar from "../../../../group_dm/native/GroupDMAvatar.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { StatusTypes } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import Button from "../../../../../design/void/native.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { channelItemContainer: null, channelItemLeft: null, channelItemUnreadIndicator: null, channelItemAvatar: null, channelItemContent: null, channelItemTop: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.sm, paddingVertical: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: ThemesDefault.radii.round, margin: ThemesDefault.space.PX_8 };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: ThemesDefault.radii.round, margin: ThemesDefault.space.PX_8 };
createCacheKey[3] = { marginRight: ThemesDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { flexDirection: "column", flex: 1, justifyContent: "center" };
let obj2 = { marginRight: ThemesDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
createCacheKey[5] = { flexDirection: "row", gap: ThemesDefault.space.PX_4, justifyContent: "space-between", alignItems: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj4 = { direction: require("Button").CutoutDirection.BOTTOM_RIGHT, radius: null, imageType: null, inset: -4 };
let num = Button.getStatusSize(require("Button").AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
obj4[1] = num / 2 + 4;
obj4[2] = require("Button").CutoutType.CIRCULAR;
let obj3 = { flexDirection: "row", gap: ThemesDefault.space.PX_4, justifyContent: "space-between", alignItems: "center" };
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx");

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
  const tmp2 = callback();
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
    obj1 = { sources: null, size: null };
    const items2 = [avatar1, avatar2];
    obj1[0] = items2;
    obj1[1] = Button2.AvatarSizes.LARGE_48;
    let tmp5Result = tmp5(FacepileGroupDMAvatar.FacepileGroupDMAvatar, obj1);
    let tmp6 = require;
  } else {
    tmp6 = require;
    const obj2 = { status: null, source: null, cutout: null, size: null };
    obj2[0] = status;
    obj2[1] = avatar1;
    obj2[2] = obj4;
    obj2[3] = Button2.AvatarSizes.LARGE_48;
    tmp5Result = tmp5(Button2.Avatar, obj2);
  }
  obj[1] = tmp5Result;
  items1[1] = closure_4(View, obj);
  const obj3 = { style: tmp2.channelItemContent, children: null };
  obj4 = { style: tmp2.channelItemTop, children: null };
  const items3 = [closure_4(tmp6(4444).Text, { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title }), closure_4(tmp6(4444).Text, { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp })];
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
    tmp5Result = tmp5(tmp6(4444).Text, animatedStyles);
    const tmp12 = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
  }
};