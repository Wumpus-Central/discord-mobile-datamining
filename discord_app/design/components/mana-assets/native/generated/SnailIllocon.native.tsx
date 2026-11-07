// === Module 12873: SnailIllocon ===

// Module 12873 (SnailIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12874 from "module_12874" /* 12874 */;
import _modDef12875 from "module_12875" /* 12875 */;
import _modDef12876 from "module_12876" /* 12876 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12874 }, 3: null };
const obj2 = { uri: _modDef12874 };
obj[2] = { uri: _modDef12875 };
const obj3 = { uri: _modDef12875 };
obj[3] = { uri: _modDef12876 };
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
  obj.source = num(7135).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}