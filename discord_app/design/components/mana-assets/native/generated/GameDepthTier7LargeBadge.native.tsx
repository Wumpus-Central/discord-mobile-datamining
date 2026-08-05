import { vanityUrl } from "../../../../../../discord_assets/assets/mana/asset-library/generated/GameDepthTier7LargeBadge-2x.png.js";
import { preload } from "../../../../../components_native/common/FastImage.tsx";
// discord_app/design/components/mana-assets/native/generated/GameDepthTier7LargeBadge.native.tsx
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/GameDepthTier7LargeBadge.native.tsx");

export const GameDepthTier7LargeBadge = function GameDepthTier7LargeBadge(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = vanityUrl;
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preload, { width: num * num3, height: num2 * num3 });
};