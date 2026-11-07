// === Module 12877: GoatIllocon ===

// Module 12877 (GoatIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12878 from "module_12878" /* 12878 */;
import _modDef12879 from "module_12879" /* 12879 */;
import _modDef12880 from "module_12880" /* 12880 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12878 }, 3: null };
const obj2 = { uri: _modDef12878 };
obj[2] = { uri: _modDef12879 };
const obj3 = { uri: _modDef12879 };
obj[3] = { uri: _modDef12880 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}