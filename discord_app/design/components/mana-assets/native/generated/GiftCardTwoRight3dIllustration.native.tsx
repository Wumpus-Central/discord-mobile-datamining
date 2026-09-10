// === Module 6197: GiftCardTwoRight3dIllustration ===

// Module 6197 (GiftCardTwoRight3dIllustration)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5637 */;
import _modDef6198 from "module_6198" /* 6198 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GiftCardTwoRight3dIllustration.native.tsx");

export const GiftCardTwoRight3dIllustration = function GiftCardTwoRight3dIllustration(width) {
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef6198 };
  obj.source = obj;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6198 });
};