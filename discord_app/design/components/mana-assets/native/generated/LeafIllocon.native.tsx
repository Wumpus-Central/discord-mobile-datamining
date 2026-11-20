// === Module 13521: LeafIllocon ===

// Module 13521 (LeafIllocon)
import FastImageDefault from "FastImage" /* 5481 */;
import assetHelpers from "assetHelpers" /* 7237 */;
import _modDef13522 from "module_13522" /* 13522 */;
import _modDef13523 from "module_13523" /* 13523 */;
import _modDef13524 from "module_13524" /* 13524 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13522 }, 3: null };
const obj2 = { uri: _modDef13522 };
obj[2] = { uri: _modDef13523 };
const obj3 = { uri: _modDef13523 };
obj[3] = { uri: _modDef13524 };
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
  obj.source = num(7237).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}