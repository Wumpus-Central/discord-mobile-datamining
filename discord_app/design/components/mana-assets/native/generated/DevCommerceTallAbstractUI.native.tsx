// === Module 6121: DevCommerceTallAbstractUI ===

// Module 6121 (DevCommerceTallAbstractUI)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5799 */;
import _modDef6122 from "module_6122" /* 6122 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DevCommerceTallAbstractUI.native.tsx");

export const DevCommerceTallAbstractUI = function DevCommerceTallAbstractUI(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 122;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 180;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6122 };
  obj.source = obj2;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
};