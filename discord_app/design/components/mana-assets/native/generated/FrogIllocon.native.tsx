// === Module 12816: FrogIllocon ===

// Module 12816 (FrogIllocon)
import FastImageDefault from "FastImage" /* 5837 */;
import assetHelpers from "assetHelpers" /* 7195 */;
import _modDef12817 from "module_12817" /* 12817 */;
import _modDef12818 from "module_12818" /* 12818 */;
import _modDef12819 from "module_12819" /* 12819 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12817 }, 3: null };
const obj2 = { uri: _modDef12817 };
obj[2] = { uri: _modDef12818 };
const obj3 = { uri: _modDef12818 };
obj[3] = { uri: _modDef12819 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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
  obj.source = num(7195).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}