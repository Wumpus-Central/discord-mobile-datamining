// === Module 8500: FractionalNitroCoinIllustration ===

// Module 8500 (FractionalNitroCoinIllustration)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 8501 */;
import NitroCoinStackSpotIllustration2 from "NitroCoinStackSpotIllustration" /* 8503 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let NitroCoinStackSpotIllustration;
  let height;
  let resizeMode;
  let width;
  const obj = react2;
  const cResult = obj.c(5);
  ({ width, height, resizeMode } = skuId);
  let str = "contain";
  skuId = skuId.skuId;
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    NitroCoinStackSpotIllustration = NitroCoinSpotIllustration.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = NitroCoinStackSpotIllustration2.NitroCoinStackSpotIllustration;
  }
  if (cResult[0] === NitroCoinStackSpotIllustration) {
    if (cResult[1] === height) {
      if (cResult[2] === str) {
        let tmp4;
        if (cResult[3] === width) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const tmp5 = <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={str} />;
  cResult[0] = NitroCoinStackSpotIllustration;
  cResult[1] = height;
  cResult[2] = str;
  cResult[3] = width;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((resizeMode) => {
  let height;
  let skuId;
  let width;
  resizeMode = resizeMode.resizeMode;
  ({ skuId, width, height } = resizeMode);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = NitroCoinSpotIllustration.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = NitroCoinStackSpotIllustration2.NitroCoinStackSpotIllustration;
  }
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
});
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = tmp3;