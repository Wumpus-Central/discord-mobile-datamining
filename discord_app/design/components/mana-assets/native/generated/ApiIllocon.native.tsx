// === Module 5816: ApiIllocon ===

// Module 5816 (ApiIllocon)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5638 */;
import _modDef5817 from "module_5817" /* 5817 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ApiIllocon.native.tsx");

export const ApiIllocon = function ApiIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef5817 };
  obj.source = obj;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef5817 });
};