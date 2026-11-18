// === Module 13553: HeartIllocon ===

// Module 13553 (HeartIllocon)
import FastImageDefault from "FastImage" /* 5510 */;
import assetHelpers from "assetHelpers" /* 7268 */;
import _modDef13554 from "module_13554" /* 13554 */;
import _modDef13555 from "module_13555" /* 13555 */;
import _modDef13556 from "module_13556" /* 13556 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13554 }, 3: null };
const obj2 = { uri: _modDef13554 };
obj[2] = { uri: _modDef13555 };
const obj3 = { uri: _modDef13555 };
obj[3] = { uri: _modDef13556 };
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
  obj.source = num(7268).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}