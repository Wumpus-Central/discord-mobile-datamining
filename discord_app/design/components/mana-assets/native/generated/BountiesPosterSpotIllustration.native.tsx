// discord_app/design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef5808 from "../../../../../../discord_assets/assets/mana/asset-library/generated/BountiesPosterSpotIllustration-2x.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx",
);

export const BountiesPosterSpotIllustration = function BountiesPosterSpotIllustration(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 192;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = {
    fadeDuration: 0,
    source: null,
    style: null,
    accessible: null,
    accessibilityLabel: null,
    resizeMode: null,
  };
  obj = { uri: _modDef5808 };
  obj.source = obj;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef5808 });
};
