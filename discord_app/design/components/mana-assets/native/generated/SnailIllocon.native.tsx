// === Module 14707: SnailIllocon ===

// Module 14707 (SnailIllocon)
import FastImageDefault from "FastImage" /* 6014 */;
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef14708 from "module_14708" /* 14708 */;
import _modDef14709 from "module_14709" /* 14709 */;
import _modDef14710 from "module_14710" /* 14710 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14708 }, 3: null };
const obj2 = { uri: _modDef14708 };
obj[2] = { uri: _modDef14709 };
const obj3 = { uri: _modDef14709 };
obj[3] = { uri: _modDef14710 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export function SnailIllocon(size) {
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