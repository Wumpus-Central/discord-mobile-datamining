// === Module 13670: BookIllocon ===

// Module 13670 (BookIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef13671 from "module_13671" /* 13671 */;
import _modDef13672 from "module_13672" /* 13672 */;
import _modDef13673 from "module_13673" /* 13673 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef13671 }, 3: null };
const obj2 = { uri: _modDef13671 };
obj[2] = { uri: _modDef13672 };
const obj3 = { uri: _modDef13672 };
obj[3] = { uri: _modDef13673 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BookIllocon.native.tsx");

export function BookIllocon(size) {
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}