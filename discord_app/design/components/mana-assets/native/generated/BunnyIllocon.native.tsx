// === Module 12901: BunnyIllocon ===

// Module 12901 (BunnyIllocon)
import FastImageDefault from "FastImage" /* 5851 */;
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef12902 from "module_12902" /* 12902 */;
import _modDef12903 from "module_12903" /* 12903 */;
import _modDef12904 from "module_12904" /* 12904 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12902 }, 3: null };
const obj2 = { uri: _modDef12902 };
obj[2] = { uri: _modDef12903 };
const obj3 = { uri: _modDef12903 };
obj[3] = { uri: _modDef12904 };
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
  obj.source = num(7210).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}