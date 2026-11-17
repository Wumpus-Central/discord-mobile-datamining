// === Module 14723: CatIllocon ===

// Module 14723 (CatIllocon)
import FastImageDefault from "FastImage" /* 6014 */;
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef14724 from "module_14724" /* 14724 */;
import _modDef14725 from "module_14725" /* 14725 */;
import _modDef14726 from "module_14726" /* 14726 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14724 }, 3: null };
const obj2 = { uri: _modDef14724 };
obj[2] = { uri: _modDef14725 };
const obj3 = { uri: _modDef14725 };
obj[3] = { uri: _modDef14726 };
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
  obj.source = num(7765).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}