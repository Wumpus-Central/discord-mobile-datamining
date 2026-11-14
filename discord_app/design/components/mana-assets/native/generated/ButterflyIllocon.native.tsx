// === Module 13680: ButterflyIllocon ===

// Module 13680 (ButterflyIllocon)
import FastImageDefault from "FastImage" /* 6020 */;
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef13681 from "module_13681" /* 13681 */;
import _modDef13682 from "module_13682" /* 13682 */;
import _modDef13683 from "module_13683" /* 13683 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13681 }, 3: null };
const obj2 = { uri: _modDef13681 };
obj[2] = { uri: _modDef13682 };
const obj3 = { uri: _modDef13682 };
obj[3] = { uri: _modDef13683 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx");

export function ButterflyIllocon(size) {
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
  obj.source = num(7755).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}