// === Module 18565: GoatIllocon ===

// Module 18565 (GoatIllocon)
import FastImageDefault from "FastImage" /* 5510 */;
import assetHelpers from "assetHelpers" /* 7268 */;
import _modDef18566 from "module_18566" /* 18566 */;
import _modDef18567 from "module_18567" /* 18567 */;
import _modDef18568 from "module_18568" /* 18568 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18566 }, 3: null };
const obj2 = { uri: _modDef18566 };
obj[2] = { uri: _modDef18567 };
const obj3 = { uri: _modDef18567 };
obj[3] = { uri: _modDef18568 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GoatIllocon.native.tsx");

export function GoatIllocon(size) {
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
  obj.source = num(7268).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}