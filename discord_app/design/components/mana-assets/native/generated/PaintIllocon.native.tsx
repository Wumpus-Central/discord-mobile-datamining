// === Module 6408: PaintIllocon ===

// Module 6408 (PaintIllocon)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5638 */;
import _modDef6409 from "module_6409" /* 6409 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PaintIllocon.native.tsx");

export const PaintIllocon = function PaintIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef6409 };
  obj.source = obj;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6409 });
};