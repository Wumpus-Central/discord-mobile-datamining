// === Module 12893: CaterpillarIllocon ===

// Module 12893 (CaterpillarIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12894 from "module_12894" /* 12894 */;
import _modDef12895 from "module_12895" /* 12895 */;
import _modDef12896 from "module_12896" /* 12896 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12894 }, 3: null };
const obj2 = { uri: _modDef12894 };
obj[2] = { uri: _modDef12895 };
const obj3 = { uri: _modDef12895 };
obj[3] = { uri: _modDef12896 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CaterpillarIllocon.native.tsx");

export function CaterpillarIllocon(size) {
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