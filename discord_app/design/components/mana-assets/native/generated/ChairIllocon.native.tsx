// === Module 14443: ChairIllocon ===

// Module 14443 (ChairIllocon)
import FastImageDefault from "FastImage" /* 5837 */;
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef14444 from "module_14444" /* 14444 */;
import _modDef14445 from "module_14445" /* 14445 */;
import _modDef14446 from "module_14446" /* 14446 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14444 }, 3: null };
const obj2 = { uri: _modDef14444 };
obj[2] = { uri: _modDef14445 };
const obj3 = { uri: _modDef14445 };
obj[3] = { uri: _modDef14446 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
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
  obj.source = num(7195).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}