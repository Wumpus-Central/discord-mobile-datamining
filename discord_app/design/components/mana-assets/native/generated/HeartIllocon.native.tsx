// === Module 13505: HeartIllocon ===

// Module 13505 (HeartIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef13506 from "module_13506" /* 13506 */;
import _modDef13507 from "module_13507" /* 13507 */;
import _modDef13508 from "module_13508" /* 13508 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13506 }, 3: null };
const obj2 = { uri: _modDef13506 };
obj[2] = { uri: _modDef13507 };
const obj3 = { uri: _modDef13507 };
obj[3] = { uri: _modDef13508 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HeartIllocon.native.tsx");

export function HeartIllocon(size) {
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
  obj.source = num(7237).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}