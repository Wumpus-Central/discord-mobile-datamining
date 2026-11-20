// === Module 13498: PencilIllocon ===

// Module 13498 (PencilIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef13362 from "module_13362" /* 13362 */;
import _modDef13499 from "module_13499" /* 13499 */;
import _modDef13500 from "module_13500" /* 13500 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13499 }, 3: null };
const obj2 = { uri: _modDef13499 };
obj[2] = { uri: _modDef13362 };
const obj3 = { uri: _modDef13362 };
obj[3] = { uri: _modDef13500 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PencilIllocon.native.tsx");

export function PencilIllocon(size) {
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
  obj.source = num(7237).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}