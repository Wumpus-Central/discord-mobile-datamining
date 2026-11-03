// === Module 14415: PencilIllocon ===

// Module 14415 (PencilIllocon)
import FastImageDefault from "FastImage" /* 5837 */;
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef14295 from "module_14295" /* 14295 */;
import _modDef14416 from "module_14416" /* 14416 */;
import _modDef14417 from "module_14417" /* 14417 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14416 }, 3: null };
const obj2 = { uri: _modDef14416 };
obj[2] = { uri: _modDef14295 };
const obj3 = { uri: _modDef14295 };
obj[3] = { uri: _modDef14417 };
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
  obj.source = num(7195).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}