// === Module 13528: PencilIllocon ===

// Module 13528 (PencilIllocon)
import FastImageDefault from "FastImage" /* 5479 */;
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef13392 from "module_13392" /* 13392 */;
import _modDef13529 from "module_13529" /* 13529 */;
import _modDef13530 from "module_13530" /* 13530 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13529 }, 3: null };
const obj2 = { uri: _modDef13529 };
obj[2] = { uri: _modDef13392 };
const obj3 = { uri: _modDef13392 };
obj[3] = { uri: _modDef13530 };
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
  obj.source = num(7238).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}