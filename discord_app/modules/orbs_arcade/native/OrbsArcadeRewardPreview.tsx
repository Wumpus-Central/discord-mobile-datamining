// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesAssetUtils from "../../collectibles/utils/CollectiblesAssetUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AvatarDecorationSampleV2 from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import _modDef9485 from "../../../../_runtime/metro/09485__.js";
import NitroCoinSpotIllustration from "../../../design/components/mana-assets/native/generated/NitroCoinSpotIllustration.native.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function CollectibleRewardPreview(size) {
  const tmp = closure_6(size.size);
  const obj = CollectiblesAssetUtils;
  const collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl({
    skuId: size.reward.skuId,
    assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC,
  });
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.avatar, resizeMode: "contain", source: null, accessible: false };
  const obj2 = { skuId: size.reward.skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  obj4.source = _modDef9485;
  const items = [React4(FastImageDefault, obj4)];
  let tmp6Result = null;
  if (null != collectiblesItemAssetUrl) {
    const obj5 = { style: tmp.decoration, source: null, accessible: false };
    const obj6 = { uri: collectiblesItemAssetUrl };
    obj5.source = obj6;
    tmp6Result = React4(FastImageDefault, obj5);
  }
  items[1] = tmp6Result;
  obj3.children = items;
  return hasOwnProperty(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles((width) => {
  const obj = {
    container: { width, height: width, alignItems: "center", justifyContent: "center" },
    avatar: null,
    decoration: null,
  };
  const size = {
    width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    borderRadius: (width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio) / 2,
    opacity: 0.8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
  obj.avatar = size;
  obj.decoration = { position: "absolute", width, height: width };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardPreview.tsx");

export default function OrbsArcadeRewardPreview(arg0) {
  ({ reward, size } = arg0);
  const type = reward.type;
  if (OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE === type) {
    const obj = { reward, size };
    return React4(CollectibleRewardPreview, obj);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM === type) {
    const size1 = { width: size, height: size };
    return React4(NitroCoinSpotIllustration.NitroCoinSpotIllustration, size1);
  }
}
