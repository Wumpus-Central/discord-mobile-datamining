// === Module 6306: MapleIllocon ===

// Module 6306 (MapleIllocon)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5638 */;
import _modDef6307 from "module_6307" /* 6307 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MapleIllocon.native.tsx");

export const MapleIllocon = function MapleIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef6307 };
  obj.source = obj;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6307 });
};