// discord_app/design/components/mana-assets/native/generated/GameDiversityTier3LargeBadge.native.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef6062 from "../../../../../../discord_assets/assets/mana/asset-library/generated/GameDiversityTier3LargeBadge-2x.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "design/components/mana-assets/native/generated/GameDiversityTier3LargeBadge.native.tsx",
);

export const GameDiversityTier3LargeBadge = function GameDiversityTier3LargeBadge(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
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
  obj = { uri: _modDef6062 };
  obj.source = obj;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6062 });
};
