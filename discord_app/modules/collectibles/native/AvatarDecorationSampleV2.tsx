// discord_app/modules/collectibles/native/AvatarDecorationSampleV2.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let c8 = 0.8333333333333334;
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  obj = { position: "absolute", height: arg0 * c8, width: arg0 * c8, borderRadius: arg0 * c8 / 2, opacity: 0.8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
  obj[0] = obj;
  obj[1] = { opacity: 1 };
  obj[2] = { position: "absolute" };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

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
    avatarSource = tmp2(9603);
  }
  obj = { children: null };
  obj[2] = avatarSource;
  const items1 = [closure_5(closure_3, obj), ];
  obj = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: tmp8(tmp2(8513), { avatarDecoration: item, size, animate }) };
  items1[1] = closure_5(closure_4, obj);
  obj[0] = items1;
  return closure_7(closure_6, obj);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;