// === Module 6131: DevQuestsWideAbstractUI ===

// Module 6131 (DevQuestsWideAbstractUI)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5799 */;
import _modDef6132 from "module_6132" /* 6132 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DevQuestsWideAbstractUI.native.tsx");

export const DevQuestsWideAbstractUI = function DevQuestsWideAbstractUI(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 244;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 132;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6132 };
  obj.source = obj2;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
};