// === Module 14731: ButterflyIllocon ===

// Module 14731 (ButterflyIllocon)
import FastImageDefault from "FastImage" /* 6014 */;
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef14732 from "module_14732" /* 14732 */;
import _modDef14733 from "module_14733" /* 14733 */;
import _modDef14734 from "module_14734" /* 14734 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14732 }, 3: null };
const obj2 = { uri: _modDef14732 };
obj[2] = { uri: _modDef14733 };
const obj3 = { uri: _modDef14733 };
obj[3] = { uri: _modDef14734 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ButterflyIllocon.native.tsx");

export function ButterflyIllocon(size) {
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