// === Module 14546: PencilIllocon ===

// Module 14546 (PencilIllocon)
import FastImageDefault from "FastImage" /* 5844 */;
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef14433 from "module_14433" /* 14433 */;
import _modDef14547 from "module_14547" /* 14547 */;
import _modDef14548 from "module_14548" /* 14548 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14547 }, 3: null };
const obj2 = { uri: _modDef14547 };
obj[2] = { uri: _modDef14433 };
const obj3 = { uri: _modDef14433 };
obj[3] = { uri: _modDef14548 };
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
  obj.source = num(7138).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}