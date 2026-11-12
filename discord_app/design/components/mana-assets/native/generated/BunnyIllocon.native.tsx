// === Module 13565: BunnyIllocon ===

// Module 13565 (BunnyIllocon)
import FastImageDefault from "FastImage" /* 5957 */;
import assetHelpers from "assetHelpers" /* 7689 */;
import _modDef13566 from "module_13566" /* 13566 */;
import _modDef13567 from "module_13567" /* 13567 */;
import _modDef13568 from "module_13568" /* 13568 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13566 }, 3: null };
const obj2 = { uri: _modDef13566 };
obj[2] = { uri: _modDef13567 };
const obj3 = { uri: _modDef13567 };
obj[3] = { uri: _modDef13568 };
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
  obj.source = num(7689).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}