// === Module 15037: HeartIllocon ===

// Module 15037 (HeartIllocon)
import FastImageDefault from "FastImage" /* 6020 */;
import assetHelpers from "assetHelpers" /* 7755 */;
import _modDef15038 from "module_15038" /* 15038 */;
import _modDef15039 from "module_15039" /* 15039 */;
import _modDef15040 from "module_15040" /* 15040 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef15038 }, 3: null };
const obj2 = { uri: _modDef15038 };
obj[2] = { uri: _modDef15039 };
const obj3 = { uri: _modDef15039 };
obj[3] = { uri: _modDef15040 };
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
  obj.source = num(7755).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}