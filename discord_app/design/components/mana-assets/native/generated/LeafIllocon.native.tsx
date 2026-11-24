// === Module 13555: LeafIllocon ===

// Module 13555 (LeafIllocon)
import FastImageDefault from "FastImage" /* 5604 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef13556 from "module_13556" /* 13556 */;
import _modDef13557 from "module_13557" /* 13557 */;
import _modDef13558 from "module_13558" /* 13558 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13556 }, 3: null };
const obj2 = { uri: _modDef13556 };
obj[2] = { uri: _modDef13557 };
const obj3 = { uri: _modDef13557 };
obj[3] = { uri: _modDef13558 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/LeafIllocon.native.tsx");

export function LeafIllocon(size) {
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