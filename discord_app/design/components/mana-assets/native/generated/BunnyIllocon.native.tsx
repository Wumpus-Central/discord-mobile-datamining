// === Module 12885: BunnyIllocon ===

// Module 12885 (BunnyIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12886 from "module_12886" /* 12886 */;
import _modDef12887 from "module_12887" /* 12887 */;
import _modDef12888 from "module_12888" /* 12888 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12886 }, 3: null };
const obj2 = { uri: _modDef12886 };
obj[2] = { uri: _modDef12887 };
const obj3 = { uri: _modDef12887 };
obj[3] = { uri: _modDef12888 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}