// === Module 14711: GoatIllocon ===

// Module 14711 (GoatIllocon)
import FastImageDefault from "FastImage" /* 6014 */;
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef14712 from "module_14712" /* 14712 */;
import _modDef14713 from "module_14713" /* 14713 */;
import _modDef14714 from "module_14714" /* 14714 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14712 }, 3: null };
const obj2 = { uri: _modDef14712 };
obj[2] = { uri: _modDef14713 };
const obj3 = { uri: _modDef14713 };
obj[3] = { uri: _modDef14714 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GoatIllocon.native.tsx");

export function GoatIllocon(size) {
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