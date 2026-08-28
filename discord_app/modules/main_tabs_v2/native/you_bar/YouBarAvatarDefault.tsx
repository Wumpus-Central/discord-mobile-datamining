// discord_app/modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import SolidCutout from "../../../../design/components/Icon/native/ClipView.tsx";
import SolidCutoutDefault from "../../../../design/components/Icon/native/ClipView.tsx";
import ReactionIcon from "../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import CONNECTION_BANNER_HEIGHT from "YouBarConstants.tsx";
import { StatusTypes } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
function AvatarDefault() {
  const tmp = callback3();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  obj1 = Button;
  let num = obj1.getStatusSize(closure_5);
  if (num == null) {
    num = 0;
  }
  const tmp7 = Button.AVATAR_SIZE_MAP[closure_5];
  const result = num / 2;
  const sum = result + tmp2(1297).STATUS_PADDING;
  const diff = tmp7 - sum - num / 4 * 2;
  obj = { shape: tmp2(8044).CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  obj = { style: null, children: null };
  obj1 = { height: tmp2(1297).AVATAR_SIZE_MAP[tmp6], width: tmp2(1297).AVATAR_SIZE_MAP[tmp6], position: "relative" };
  obj[0] = obj1;
  const obj2 = { cutouts: items, children: null };
  items = [obj];
  const obj3 = { style: items1, children: null };
  items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  const items2 = [callback(View, { style: tmp.placeholderAvatarBackground }), callback(ReactionIcon.ReactionIcon, { size: "custom", style: { width: tmp7, height: tmp7 }, color: "background-mod-strong" })];
  obj3[1] = items2;
  obj2[1] = callback2(View, obj3);
  const items3 = [callback(SolidCutoutDefault, obj2), callback(Button.Status, { size: num, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: obj6 })];
  obj[1] = items3;
  return callback2(View, obj);
}
function AvatarDefaultLarge() {
  const tmp = callback3();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = Button.AVATAR_SIZE_MAP[closure_4];
  const result = closure_8 / 2;
  const sum = result + Button.STATUS_PADDING;
  const diff = tmp3 - sum - closure_8 / 4 * 2;
  obj = { shape: SolidCutout.CutoutShape.Circle, x: diff + closure_10, y: diff + closure_10, size: 2 * sum };
  obj = { style: { height: Button.AVATAR_SIZE_MAP[closure_5], width: Button.AVATAR_SIZE_MAP[closure_5], position: "relative" }, children: null };
  const obj2 = { style: null, children: null };
  const items = [tmp.avatarShadow, ];
  obj1 = { height: Button.AVATAR_SIZE_MAP[closure_5], width: Button.AVATAR_SIZE_MAP[closure_5], position: "relative" };
  items[1] = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (Button.AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  obj2[0] = items;
  const obj4 = { cutouts: items1, children: null };
  items1 = [obj];
  const obj5 = { style: items2, children: null };
  items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  const obj3 = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (Button.AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const items3 = [callback(View, obj6), ];
  const obj7 = { size: "custom", style: null, color: "background-mod-strong" };
  const tmp8 = SolidCutoutDefault;
  obj7[1] = { width: Button.AVATAR_SIZE_MAP[closure_5], height: Button.AVATAR_SIZE_MAP[closure_5] };
  items3[1] = callback(ReactionIcon.ReactionIcon, obj7);
  obj5[1] = items3;
  obj4[1] = callback2(View, obj5);
  const items4 = [callback(tmp8, obj4), callback(Button.Status, { size: closure_8, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: obj10 })];
  obj2[1] = items4;
  obj[1] = callback2(View, obj2);
  return callback(View, obj);
}
({ YOU_BAR_AVATAR_LARGE_SIZE: c4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: c5, YOU_BAR_STATUS_INSET: closure_6, YOU_BAR_HEIGHT: error, YOU_BAR_LARGE_STATUS_SIZE: closure_8, YOU_BAR_PADDING: c9, YOU_BAR_STATUS_OFFSET: c10 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { placeholderAvatar: null, placeholderAvatarBackground: null, avatarShadow: null };
obj = { borderRadius: ThemesDefault.radii.round, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round };
obj[1] = createCacheKey;
const merged = Object.assign(ThemesDefault.shadows.SHADOW_MEDIUM);
obj[2] = {};
let closure_14 = createCacheKey.createStyles(obj);
let obj2 = {};
const memoResult = importAllResult.memo(function YouBarAvatarDefault(isLarge) {
  return callback(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default memoResult;