// === Module 12889: CatIllocon ===

// Module 12889 (CatIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12890 from "module_12890" /* 12890 */;
import _modDef12891 from "module_12891" /* 12891 */;
import _modDef12892 from "module_12892" /* 12892 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12890 }, 3: null };
const obj2 = { uri: _modDef12890 };
obj[2] = { uri: _modDef12891 };
const obj3 = { uri: _modDef12891 };
obj[3] = { uri: _modDef12892 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export function CatIllocon(size) {
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