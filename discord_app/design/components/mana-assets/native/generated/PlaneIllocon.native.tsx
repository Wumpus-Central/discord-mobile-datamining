// === Module 20306: PlaneIllocon ===

// Module 20306 (PlaneIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13413 from "module_13413" /* 13413 */;
import _modDef20307 from "module_20307" /* 20307 */;
import _modDef20308 from "module_20308" /* 20308 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef20307 }, 3: null };
const obj2 = { uri: _modDef20307 };
obj[2] = { uri: _modDef13413 };
const obj3 = { uri: _modDef13413 };
obj[3] = { uri: _modDef20308 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export function PlaneIllocon(size) {
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