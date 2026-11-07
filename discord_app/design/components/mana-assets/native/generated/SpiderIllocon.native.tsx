// === Module 12905: SpiderIllocon ===

// Module 12905 (SpiderIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12906 from "module_12906" /* 12906 */;
import _modDef12907 from "module_12907" /* 12907 */;
import _modDef12908 from "module_12908" /* 12908 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12906 }, 3: null };
const obj2 = { uri: _modDef12906 };
obj[2] = { uri: _modDef12907 };
const obj3 = { uri: _modDef12907 };
obj[3] = { uri: _modDef12908 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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