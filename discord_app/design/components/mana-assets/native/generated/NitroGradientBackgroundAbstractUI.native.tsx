// === Module 6780: NitroGradientBackgroundAbstractUI ===

// Module 6780 (NitroGradientBackgroundAbstractUI)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5458 */;
import metadataDefault from "metadata" /* 6781 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/NitroGradientBackgroundAbstractUI.native.tsx");

export const NitroGradientBackgroundAbstractUI = function NitroGradientBackgroundAbstractUI(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 64;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 64;
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