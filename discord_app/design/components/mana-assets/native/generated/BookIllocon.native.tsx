// === Module 14501: BookIllocon ===

// Module 14501 (BookIllocon)
import FastImageDefault from "FastImage" /* 5872 */;
import assetHelpers from "assetHelpers" /* 7160 */;
import _modDef14502 from "module_14502" /* 14502 */;
import _modDef14503 from "module_14503" /* 14503 */;
import _modDef14504 from "module_14504" /* 14504 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14502 }, 3: null };
const obj2 = { uri: _modDef14502 };
obj[2] = { uri: _modDef14503 };
const obj3 = { uri: _modDef14503 };
obj[3] = { uri: _modDef14504 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookIllocon.native.tsx");

export function BookIllocon(size) {
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
  obj.source = num(7160).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}