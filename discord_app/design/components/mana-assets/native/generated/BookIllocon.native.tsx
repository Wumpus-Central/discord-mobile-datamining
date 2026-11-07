// === Module 14534: BookIllocon ===

// Module 14534 (BookIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef14535 from "module_14535" /* 14535 */;
import _modDef14536 from "module_14536" /* 14536 */;
import _modDef14537 from "module_14537" /* 14537 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14535 }, 3: null };
const obj2 = { uri: _modDef14535 };
obj[2] = { uri: _modDef14536 };
const obj3 = { uri: _modDef14536 };
obj[3] = { uri: _modDef14537 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}