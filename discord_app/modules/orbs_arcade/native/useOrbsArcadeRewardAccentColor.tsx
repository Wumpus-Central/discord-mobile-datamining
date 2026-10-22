// discord_app/modules/orbs_arcade/native/useOrbsArcadeRewardAccentColor.tsx
import c from "../../../../_runtime/00576_c.js";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import useFetchCollectiblesProduct from "../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import useCollectiblesShopStylesDefault from "../../collectibles/useCollectiblesShopStyles.native.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
let c4 = "#660066";
let c5 = "#8C1381";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/useOrbsArcadeRewardAccentColor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useOrbsArcadeRewardAccentColor(type) {
      const cResult = c.c(3);
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
      const tmpResult = useFetchCollectiblesProduct;
      if (product != null) {
        styles = product.styles;
      }
      const backgroundColors = useCollectiblesShopStylesDefault(styles).backgroundColors;
      let type1;
      if (type != null) {
        type1 = type.type;
      }
      if (type1 === OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
        return c4;
      } else {
        let primary1;
        if (backgroundColors != null) {
          primary1 = backgroundColors.primary;
        }
        if (cResult[0] !== primary1) {
          const _Symbol = Symbol;
          let toHexStringResult;
          if (backgroundColors != null) {
            const primary = backgroundColors.primary;
            toHexStringResult = primary.toHexString();
          }
          if (null != toHexStringResult) {
            const tmp18 = _slicedToArray(_modDef683(toHexStringResult).hsl(), 2);
            const first = tmp18[0];
            const _Number = Number;
            if (!Number.isNaN(first)) {
              if (tmp18[1] >= 0.15) {
                const tmp6Result = _modDef683;
                let hexResult = _modDef683.hsl(first, 0.72, 0.31).hex();
                const hslResult = _modDef683.hsl(first, 0.72, 0.31);
              }
            }
            hexResult = c5;
            const obj3 = _modDef683(toHexStringResult);
          } else {
            let primary2;
            if (backgroundColors != null) {
              primary2 = backgroundColors.primary;
            }
            cResult[0] = primary2;
            cResult[1] = undefined;
            cResult[2] = c5;
            let tmp12 = c5;
          }
          const forResult = Symbol.for("react.early_return_sentinel");
        } else {
          let tmp11 = cResult[1];
          tmp12 = cResult[2];
        }
        const _Symbol2 = Symbol;
        if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
          tmp11 = tmp12;
        }
        return tmp11;
      }
    }
  : function useOrbsArcadeRewardAccentColor(type) {
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
        return c4;
      } else {
        let toHexStringResult;
        if (backgroundColors != null) {
          const primary = backgroundColors.primary;
          toHexStringResult = primary.toHexString();
        }
        if (null == toHexStringResult) {
          return c5;
        } else {
          const tmp14 = _slicedToArray(_modDef683(toHexStringResult).hsl(), 2);
          const first = tmp14[0];
          const _Number = Number;
          if (!Number.isNaN(first)) {
            if (tmp14[1] >= 0.15) {
              const tmp5Result = _modDef683;
              let hexResult = _modDef683.hsl(first, 0.72, 0.31).hex();
              const hslResult = _modDef683.hsl(first, 0.72, 0.31);
            }
            return hexResult;
          }
          hexResult = c5;
          const obj4 = _modDef683(toHexStringResult);
        }
      }
    };
