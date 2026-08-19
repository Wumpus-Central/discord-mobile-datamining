// === Module 9218: AvatarDecorationSampleV2 ===

// Module 9218 (AvatarDecorationSampleV2)
import noopAll from "noop" /* 19 */;
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 712 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8401 */;
import registerAssetDefault from "registerAsset" /* 9219 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let c8 = 0.8333333333333334;
let closure_9 = createCacheKey.createStyles((arg0) => {
  const obj = { position: "absolute", height: arg0 * c8, width: arg0 * c8, borderRadius: arg0 * c8 / 2, opacity: 0.8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
  obj[0] = obj;
  obj[1] = { opacity: 1 };
  obj[2] = { position: "absolute" };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default function AvatarDecorationSampleV2(arg0) {
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = callback(size);
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
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
    avatarSource = registerAssetDefault;
  }
  obj = { children: null };
  obj[2] = avatarSource;
  const items1 = [callback(closure_3, obj), ];
  obj = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: callback(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) };
  items1[1] = callback(closure_4, obj);
  obj[0] = items1;
  return callback2(closure_6, obj);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;