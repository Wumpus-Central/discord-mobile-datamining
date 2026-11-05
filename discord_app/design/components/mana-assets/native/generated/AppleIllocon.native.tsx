// === Module 14520: AppleIllocon ===

// Module 14520 (AppleIllocon)
import FastImageDefault from "FastImage" /* 5854 */;
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef14521 from "module_14521" /* 14521 */;
import _modDef14522 from "module_14522" /* 14522 */;
import _modDef14523 from "module_14523" /* 14523 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14521 }, 3: null };
const obj2 = { uri: _modDef14521 };
obj[2] = { uri: _modDef14522 };
const obj3 = { uri: _modDef14522 };
obj[3] = { uri: _modDef14523 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/AppleIllocon.native.tsx");

export function AppleIllocon(size) {
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
  obj.source = num(7213).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}