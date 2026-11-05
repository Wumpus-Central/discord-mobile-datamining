// === Module 14516: HeartIllocon ===

// Module 14516 (HeartIllocon)
import FastImageDefault from "FastImage" /* 5854 */;
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef14517 from "module_14517" /* 14517 */;
import _modDef14518 from "module_14518" /* 14518 */;
import _modDef14519 from "module_14519" /* 14519 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14517 }, 3: null };
const obj2 = { uri: _modDef14517 };
obj[2] = { uri: _modDef14518 };
const obj3 = { uri: _modDef14518 };
obj[3] = { uri: _modDef14519 };
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
  obj.source = num(7213).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}