// discord_app/modules/orbs_arcade/native/useOrbsArcadeRewardAccentColor.tsx
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import useFetchCollectiblesProduct from "../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import useCollectiblesShopStylesDefault from "../../collectibles/useCollectiblesShopStyles.native.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
let c4 = "#8C1381";
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/useOrbsArcadeRewardAccentColor.tsx");

export default function useOrbsArcadeRewardAccentColor(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let skuId = null;
  if (type === OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE) {
    skuId = type.skuId;
  }
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let styles;
  if (product != null) {
    styles = product.styles;
  }
  const backgroundColors = useCollectiblesShopStylesDefault(styles).backgroundColors;
  let type1;
  if (type != null) {
    type1 = type.type;
  }
  if (type1 === OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    return "#660066";
  } else {
    let toHexStringResult;
    if (backgroundColors != null) {
      const primary = backgroundColors.primary;
      toHexStringResult = primary.toHexString();
    }
    if (null == toHexStringResult) {
      return c4;
    } else {
      const tmp13 = _slicedToArray(_modDef671(toHexStringResult).hsl(), 2);
      const first = tmp13[0];
      const _Number = Number;
      if (!Number.isNaN(first)) {
        if (tmp13[1] >= 0.15) {
          const tmp5Result = _modDef671;
          let hexResult = _modDef671.hsl(first, 0.72, 0.31).hex();
          const hslResult = _modDef671.hsl(first, 0.72, 0.31);
        }
        return hexResult;
      }
      hexResult = c4;
      const obj4 = _modDef671(toHexStringResult);
    }
  }
}
export const NITRO_GLOW_COLOR = "#321634";
