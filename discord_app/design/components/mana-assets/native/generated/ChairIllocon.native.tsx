// === Module 14297: ChairIllocon ===

// Module 14297 (ChairIllocon)
import FastImageDefault from "FastImage" /* 5717 */;
import assetHelpers from "assetHelpers" /* 7069 */;
import _modDef14298 from "module_14298" /* 14298 */;
import _modDef14299 from "module_14299" /* 14299 */;
import _modDef14300 from "module_14300" /* 14300 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14298 }, 3: null };
const obj2 = { uri: _modDef14298 };
obj[2] = { uri: _modDef14299 };
const obj3 = { uri: _modDef14299 };
obj[3] = { uri: _modDef14300 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7069).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}