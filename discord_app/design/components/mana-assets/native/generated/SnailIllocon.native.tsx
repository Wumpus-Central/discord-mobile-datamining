// === Module 18659: SnailIllocon ===

// Module 18659 (SnailIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18660 from "module_18660" /* 18660 */;
import _modDef18661 from "module_18661" /* 18661 */;
import _modDef18662 from "module_18662" /* 18662 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18660 }, 3: null };
const obj2 = { uri: _modDef18660 };
obj[2] = { uri: _modDef18661 };
const obj3 = { uri: _modDef18661 };
obj[3] = { uri: _modDef18662 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}