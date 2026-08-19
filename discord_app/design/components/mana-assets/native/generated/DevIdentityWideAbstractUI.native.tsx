// === Module 5630: DevIdentityWideAbstractUI ===

// Module 5630 (DevIdentityWideAbstractUI)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5449 */;
import metadataDefault from "metadata" /* 5631 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("design/components/mana-assets/native/generated/DevIdentityWideAbstractUI.native.tsx");

export const DevIdentityWideAbstractUI = function DevIdentityWideAbstractUI(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 220;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 152;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { uri: metadataDefault };
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { width: num * num3, height: num2 * num3 });
};