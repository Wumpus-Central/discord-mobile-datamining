// === Module 6278: IceCreamIllocon ===

// Module 6278 (IceCreamIllocon)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5638 */;
import _modDef6279 from "module_6279" /* 6279 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/IceCreamIllocon.native.tsx");

export const IceCreamIllocon = function IceCreamIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef6279 };
  obj.source = obj;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6279 });
};