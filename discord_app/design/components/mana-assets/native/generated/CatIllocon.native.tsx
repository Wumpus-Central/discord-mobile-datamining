// === Module 18394: CatIllocon ===

// Module 18394 (CatIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef18395 from "module_18395" /* 18395 */;
import _modDef18396 from "module_18396" /* 18396 */;
import _modDef18397 from "module_18397" /* 18397 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18395 }, 3: null };
const obj2 = { uri: _modDef18395 };
obj[2] = { uri: _modDef18396 };
const obj3 = { uri: _modDef18396 };
obj[3] = { uri: _modDef18397 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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