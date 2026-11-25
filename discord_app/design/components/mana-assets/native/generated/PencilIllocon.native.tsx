// === Module 13655: PencilIllocon ===

// Module 13655 (PencilIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13530 from "module_13530" /* 13530 */;
import _modDef13656 from "module_13656" /* 13656 */;
import _modDef13657 from "module_13657" /* 13657 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13656 }, 3: null };
const obj2 = { uri: _modDef13656 };
obj[2] = { uri: _modDef13530 };
const obj3 = { uri: _modDef13530 };
obj[3] = { uri: _modDef13657 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}