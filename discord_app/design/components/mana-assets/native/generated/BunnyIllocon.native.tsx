// === Module 18734: BunnyIllocon ===

// Module 18734 (BunnyIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef18735 from "module_18735" /* 18735 */;
import _modDef18736 from "module_18736" /* 18736 */;
import _modDef18737 from "module_18737" /* 18737 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18735 }, 3: null };
const obj2 = { uri: _modDef18735 };
obj[2] = { uri: _modDef18736 };
const obj3 = { uri: _modDef18736 };
obj[3] = { uri: _modDef18737 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BunnyIllocon.native.tsx");

export function BunnyIllocon(size) {
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