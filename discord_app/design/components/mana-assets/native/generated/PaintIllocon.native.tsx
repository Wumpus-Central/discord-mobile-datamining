// === Module 14514: PaintIllocon ===

// Module 14514 (PaintIllocon)
import FastImageDefault from "FastImage" /* 5851 */;
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef14515 from "module_14515" /* 14515 */;
import _modDef14516 from "module_14516" /* 14516 */;
import _modDef14517 from "module_14517" /* 14517 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14515 }, 3: null };
const obj2 = { uri: _modDef14515 };
obj[2] = { uri: _modDef14516 };
const obj3 = { uri: _modDef14516 };
obj[3] = { uri: _modDef14517 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PaintIllocon.native.tsx");

export function PaintIllocon(size) {
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
  obj.source = num(7210).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}