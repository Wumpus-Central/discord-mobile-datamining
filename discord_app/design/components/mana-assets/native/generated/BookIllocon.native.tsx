// === Module 13513: BookIllocon ===

// Module 13513 (BookIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef13514 from "module_13514" /* 13514 */;
import _modDef13515 from "module_13515" /* 13515 */;
import _modDef13516 from "module_13516" /* 13516 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13514 }, 3: null };
const obj2 = { uri: _modDef13514 };
obj[2] = { uri: _modDef13515 };
const obj3 = { uri: _modDef13515 };
obj[3] = { uri: _modDef13516 };
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
  obj.source = num(7237).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}