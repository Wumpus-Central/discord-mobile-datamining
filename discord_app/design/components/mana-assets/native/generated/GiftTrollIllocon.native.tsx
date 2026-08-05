// discord_app/design/components/mana-assets/native/generated/GiftTrollIllocon.native.tsx
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GiftTrollIllocon.native.tsx");

export const GiftTrollIllocon = function GiftTrollIllocon(size) {
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
  obj[0] = require("../../../../../../discord_assets/assets/mana/asset-library/generated/GiftTrollIllocon-2x.png.js");
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(require("../../../../../components_native/common/FastImage.tsx"), { uri: null });
};