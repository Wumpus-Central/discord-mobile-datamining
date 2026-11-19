// === Module 18566: BunnyIllocon ===

// Module 18566 (BunnyIllocon)
import FastImageDefault from "FastImage" /* 5479 */;
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef18567 from "module_18567" /* 18567 */;
import _modDef18568 from "module_18568" /* 18568 */;
import _modDef18569 from "module_18569" /* 18569 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18567 }, 3: null };
const obj2 = { uri: _modDef18567 };
obj[2] = { uri: _modDef18568 };
const obj3 = { uri: _modDef18568 };
obj[3] = { uri: _modDef18569 };
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
  obj.source = num(7238).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}