// === Module 14944: ChairIllocon ===

// Module 14944 (ChairIllocon)
import FastImageDefault from "FastImage" /* 5957 */;
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef14945 from "module_14945" /* 14945 */;
import _modDef14946 from "module_14946" /* 14946 */;
import _modDef14947 from "module_14947" /* 14947 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14945 }, 3: null };
const obj2 = { uri: _modDef14945 };
obj[2] = { uri: _modDef14946 };
const obj3 = { uri: _modDef14946 };
obj[3] = { uri: _modDef14947 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
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