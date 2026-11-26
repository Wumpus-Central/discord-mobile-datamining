// === Module 18722: SnailIllocon ===

// Module 18722 (SnailIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef18723 from "module_18723" /* 18723 */;
import _modDef18724 from "module_18724" /* 18724 */;
import _modDef18725 from "module_18725" /* 18725 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18723 }, 3: null };
const obj2 = { uri: _modDef18723 };
obj[2] = { uri: _modDef18724 };
const obj3 = { uri: _modDef18724 };
obj[3] = { uri: _modDef18725 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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
  obj.source = num(7261).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}