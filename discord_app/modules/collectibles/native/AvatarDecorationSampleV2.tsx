// === Module 8810: AvatarDecorationSampleV2 ===

// Module 8810 (AvatarDecorationSampleV2)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import _modDef8811 from "module_8811" /* 8811 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8812 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 0.8333333333333334;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  const size = { position: "absolute", height: arg0 * c8, width: arg0 * c8, borderRadius: arg0 * c8 / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
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
  const tmp = closure_9(size);
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
    avatarSource = _modDef8811;
  }
  obj = { children: null, source: avatarSource };
  const items1 = [hasOwnProperty(React3, obj), ];
  obj = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: hasOwnProperty(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) };
  items1[1] = hasOwnProperty(React4, obj);
  obj.children = items1;
  return React5(timestampProducer, obj);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;