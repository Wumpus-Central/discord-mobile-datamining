// === Module 9484: AvatarDecorationSampleV2 ===

// Module 9484 (AvatarDecorationSampleV2)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _modDef9485 from "module_9485" /* 9485 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9486 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 0.8333333333333334;
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  const size = { position: "absolute", height: arg0 * c7, width: arg0 * c7, borderRadius: arg0 * c7 / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  obj.avatar = size;
  obj.solidAvatar = { opacity: 1 };
  obj.avatarDecoration = { position: "absolute" };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default function AvatarDecorationSampleV2(arg0) {
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = closure_8(size);
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  const obj = { style: items, resizeMode: "contain", source: null, accessible: false };
  items[1] = solidAvatar;
  if (null == avatarSource) {
    avatarSource = _modDef9485;
  }
  const obj2 = { children: null };
  obj.source = avatarSource;
  const items1 = [React4(FastImageDefault, obj), ];
  items1[1] = React4(View, { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: React4(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) });
  obj2.children = items1;
  return timestampProducer(hasOwnProperty, obj2);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;