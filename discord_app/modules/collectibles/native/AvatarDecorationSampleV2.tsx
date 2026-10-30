// discord_app/modules/collectibles/native/AvatarDecorationSampleV2.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef9485 from "../../../../_runtime/metro/09485__.js";
import CutoutableAvatarDecorationDefault from "components/CutoutableAvatarDecoration.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 0.8333333333333334;
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  const size = {
    position: "absolute",
    height: arg0 * c7,
    width: arg0 * c7,
    borderRadius: (arg0 * c7) / 2,
    opacity: 0.8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
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
  _modDef38(
    item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION,
    "Item must be Avatar Decoration",
  );
  const items = [tmp.avatar];
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
  const items1 = [React4(FastImageDefault, obj)];
  items1[1] = React4(View, {
    style: tmp.avatarDecoration,
    accessibilityLabel: item.label,
    children: React4(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }),
  });
  obj2.children = items1;
  return timestampProducer(hasOwnProperty, obj2);
}
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
