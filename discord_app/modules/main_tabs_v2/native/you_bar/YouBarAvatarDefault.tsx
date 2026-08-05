// discord_app/modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx
import { View } from "get ActivityIndicator";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
function AvatarDefault() {
  const tmp = callback3();
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const token = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj1 = require("../../../../design/void/native.tsx") /* Button */;
  let num = obj1.getStatusSize(closure_5);
  if (num == null) {
    num = 0;
  }
  const tmp7 = require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5];
  const result = num / 2;
  const sum = result + tmp2(1297).STATUS_PADDING;
  const diff = tmp7 - sum - num / 4 * 2;
  obj = { shape: tmp2(8103).CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  obj = { style: null, children: null };
  obj1 = { height: tmp2(1297).AVATAR_SIZE_MAP[tmp6], width: tmp2(1297).AVATAR_SIZE_MAP[tmp6], position: "relative" };
  obj[0] = obj1;
  const obj2 = { cutouts: items, children: null };
  items = [obj];
  const obj3 = { style: items1, children: null };
  items1 = [tmp.placeholderAvatar, { width: tmp7, height: tmp7, backgroundColor: token }];
  const items2 = [callback(View, { style: tmp.placeholderAvatarBackground }), callback(require("../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx") /* ReactionIcon */.ReactionIcon, { size: "custom", style: { width: tmp7, height: tmp7 }, color: "background-mod-strong" })];
  obj3[1] = items2;
  obj2[1] = callback2(View, obj3);
  const items3 = [callback(require("../../../../design/components/Icon/native/ClipView.tsx"), obj2), callback(require("../../../../design/void/native.tsx") /* Button */.Status, { size: num, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: obj6 })];
  obj[1] = items3;
  return callback2(View, obj);
}
function AvatarDefaultLarge() {
  const tmp = callback3();
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const token = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_4];
  const result = closure_8 / 2;
  const sum = result + require("../../../../design/void/native.tsx") /* Button */.STATUS_PADDING;
  const diff = tmp3 - sum - closure_8 / 4 * 2;
  obj = { shape: require("../../../../design/components/Icon/native/ClipView.tsx") /* SolidCutout */.CutoutShape.Circle, x: diff + closure_10, y: diff + closure_10, size: 2 * sum };
  obj = { style: null, children: null };
  obj[0] = { height: require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5], width: require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5], position: "relative" };
  const obj2 = { style: null, children: null };
  const items = [tmp.avatarShadow, ];
  const obj1 = { height: require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5], width: require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5], position: "relative" };
  items[1] = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  obj2[0] = items;
  const obj4 = { cutouts: items1, children: null };
  items1 = [obj];
  const obj5 = { style: items2, children: null };
  items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  const obj3 = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const items3 = [callback(View, obj6), ];
  const obj7 = { size: "custom", style: null, color: "background-mod-strong" };
  const obj8 = { width: null, height: null };
  obj8[0] = require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5];
  obj8[1] = require("../../../../design/void/native.tsx") /* Button */.AVATAR_SIZE_MAP[closure_5];
  obj7[1] = obj8;
  items3[1] = callback(require("../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx") /* ReactionIcon */.ReactionIcon, obj7);
  obj5[1] = items3;
  obj4[1] = callback2(View, obj5);
  const items4 = [callback(require("../../../../design/components/Icon/native/ClipView.tsx"), obj4), callback(require("../../../../design/void/native.tsx") /* Button */.Status, { size: closure_8, status: StatusTypes.OFFLINE, isMobileOnline: false, isVROnline: false, streaming: false, style: obj10 })];
  obj2[1] = items4;
  obj[1] = callback2(View, obj2);
  return callback(View, obj);
}
({ YOU_BAR_AVATAR_LARGE_SIZE: c4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: c5, YOU_BAR_STATUS_INSET: closure_6, YOU_BAR_HEIGHT: error, YOU_BAR_LARGE_STATUS_SIZE: metroImportAll, YOU_BAR_PADDING: c9, YOU_BAR_STATUS_OFFSET: c10 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { placeholderAvatar: null, placeholderAvatarBackground: null, avatarShadow: null };
obj = { borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.round };
obj[1] = createCacheKey;
const merged = Object.assign(require("Themes").shadows.SHADOW_MEDIUM);
obj[2] = {};
let closure_14 = createCacheKey.createStyles(obj);
let obj2 = {};
const memoResult = require("noop").memo(function YouBarAvatarDefault(isLarge) {
  return callback(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
let result = require("CONNECTION_BANNER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default memoResult;