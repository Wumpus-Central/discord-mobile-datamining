// discord_app/design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx
import { jsx } from "jsxProd";
import { metadata } from "../../../../../../discord_assets/assets/mana/asset-library/generated/ButterflyIllocon-2x.png.js";
import { preload } from "../../../../../components_native/common/FastImage.tsx";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx");

export const ButterflyIllocon = function ButterflyIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = metadata;
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preload, { uri: null });
};