// === Module 13569: CatIllocon ===

// Module 13569 (CatIllocon)
import FastImageDefault from "FastImage" /* 5957 */;
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef13570 from "module_13570" /* 13570 */;
import _modDef13571 from "module_13571" /* 13571 */;
import _modDef13572 from "module_13572" /* 13572 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13570 }, 3: null };
const obj2 = { uri: _modDef13570 };
obj[2] = { uri: _modDef13571 };
const obj3 = { uri: _modDef13571 };
obj[3] = { uri: _modDef13572 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7689).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}