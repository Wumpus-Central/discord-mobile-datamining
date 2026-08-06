// discord_app/modules/collectibles/native/AvatarDecorationSampleV2.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let c8 = 0.8333333333333334;
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  obj = { position: "absolute", height: arg0 * c8, width: arg0 * c8, borderRadius: arg0 * c8 / 2, opacity: 0.8, backgroundColor: Themes.colors.BACKGROUND_BASE_LOWER };
  obj[0] = obj;
  obj[1] = { opacity: 1 };
  obj[2] = { position: "absolute" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default function AvatarDecorationSampleV2(arg0) {
  let animate;
  let avatarSource;
  let item;
  let size;
  let threeTierBundle;
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = callback(size);
  00038__(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  let obj = { style: items, resizeMode: "contain", source: null, accessible: false };
  items[1] = solidAvatar;
  if (null == avatarSource) {
    avatarSource = tmp2(9306);
  }
  obj = { children: null };
  obj[2] = avatarSource;
  const items1 = [closure_5(closure_3, obj), ];
  obj = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: tmp8(tmp2(8215), { avatarDecoration: item, size, animate }) };
  items1[1] = closure_5(closure_4, obj);
  obj[0] = items1;
  return closure_7(closure_6, obj);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;