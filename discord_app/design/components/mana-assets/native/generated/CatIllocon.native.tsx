// === Module 12913: CatIllocon ===

// Module 12913 (CatIllocon)
import FastImageDefault from "FastImage" /* 5854 */;
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef12914 from "module_12914" /* 12914 */;
import _modDef12915 from "module_12915" /* 12915 */;
import _modDef12916 from "module_12916" /* 12916 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12914 }, 3: null };
const obj2 = { uri: _modDef12914 };
obj[2] = { uri: _modDef12915 };
const obj3 = { uri: _modDef12915 };
obj[3] = { uri: _modDef12916 };
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
  obj.source = num(7213).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}