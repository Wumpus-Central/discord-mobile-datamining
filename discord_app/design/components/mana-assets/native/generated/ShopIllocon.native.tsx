// === Module 18987: ShopIllocon ===

// Module 18987 (ShopIllocon)
import FastImageDefault from "FastImage" /* 5712 */;
import assetHelpers from "assetHelpers" /* 7063 */;
import _modDef18988 from "module_18988" /* 18988 */;
import _modDef18989 from "module_18989" /* 18989 */;
import _modDef18990 from "module_18990" /* 18990 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18988 }, 3: null };
const obj2 = { uri: _modDef18988 };
obj[2] = { uri: _modDef18989 };
const obj3 = { uri: _modDef18989 };
obj[3] = { uri: _modDef18990 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShopIllocon.native.tsx");

export function ShopIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7063).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}