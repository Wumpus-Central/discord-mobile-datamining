// === Module 13556: ChairIllocon ===

// Module 13556 (ChairIllocon)
import FastImageDefault from "FastImage" /* 5479 */;
import assetHelpers from "assetHelpers" /* 7238 */;
import _modDef13557 from "module_13557" /* 13557 */;
import _modDef13558 from "module_13558" /* 13558 */;
import _modDef13559 from "module_13559" /* 13559 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13557 }, 3: null };
const obj2 = { uri: _modDef13557 };
obj[2] = { uri: _modDef13558 };
const obj3 = { uri: _modDef13558 };
obj[3] = { uri: _modDef13559 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ChairIllocon.native.tsx");

export function ChairIllocon(size) {
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
  obj.source = num(7238).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}