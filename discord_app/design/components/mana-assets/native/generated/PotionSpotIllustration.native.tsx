// discord_app/design/components/mana-assets/native/generated/PotionSpotIllustration.native.tsx
import set from "../../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import metadataDefault from "../../../../../../discord_assets/assets/mana/asset-library/generated/PotionSpotIllustration-2x.png.js";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/PotionSpotIllustration.native.tsx");

export const PotionSpotIllustration = function PotionSpotIllustration(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: metadataDefault };
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { width: num * num3, height: num2 * num3 });
};