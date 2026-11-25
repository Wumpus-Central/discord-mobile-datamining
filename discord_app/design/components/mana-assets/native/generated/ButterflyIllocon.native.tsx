// === Module 18683: ButterflyIllocon ===

// Module 18683 (ButterflyIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18684 from "module_18684" /* 18684 */;
import _modDef18685 from "module_18685" /* 18685 */;
import _modDef18686 from "module_18686" /* 18686 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18684 }, 3: null };
const obj2 = { uri: _modDef18684 };
obj[2] = { uri: _modDef18685 };
const obj3 = { uri: _modDef18685 };
obj[3] = { uri: _modDef18686 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}