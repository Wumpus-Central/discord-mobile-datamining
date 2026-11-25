// === Module 18675: CatIllocon ===

// Module 18675 (CatIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18676 from "module_18676" /* 18676 */;
import _modDef18677 from "module_18677" /* 18677 */;
import _modDef18678 from "module_18678" /* 18678 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18676 }, 3: null };
const obj2 = { uri: _modDef18676 };
obj[2] = { uri: _modDef18677 };
const obj3 = { uri: _modDef18677 };
obj[3] = { uri: _modDef18678 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}