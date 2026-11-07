// === Module 12881: FrogIllocon ===

// Module 12881 (FrogIllocon)
import FastImageDefault from "FastImage" /* 5842 */;
import assetHelpers from "assetHelpers" /* 7135 */;
import _modDef12882 from "module_12882" /* 12882 */;
import _modDef12883 from "module_12883" /* 12883 */;
import _modDef12884 from "module_12884" /* 12884 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12882 }, 3: null };
const obj2 = { uri: _modDef12882 };
obj[2] = { uri: _modDef12883 };
const obj3 = { uri: _modDef12883 };
obj[3] = { uri: _modDef12884 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/FrogIllocon.native.tsx");

export function FrogIllocon(size) {
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