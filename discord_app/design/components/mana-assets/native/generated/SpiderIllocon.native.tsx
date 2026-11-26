// === Module 18754: SpiderIllocon ===

// Module 18754 (SpiderIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef18755 from "module_18755" /* 18755 */;
import _modDef18756 from "module_18756" /* 18756 */;
import _modDef18757 from "module_18757" /* 18757 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18755 }, 3: null };
const obj2 = { uri: _modDef18755 };
obj[2] = { uri: _modDef18756 };
const obj3 = { uri: _modDef18756 };
obj[3] = { uri: _modDef18757 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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