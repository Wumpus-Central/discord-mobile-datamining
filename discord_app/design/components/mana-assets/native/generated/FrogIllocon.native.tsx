// === Module 12895: FrogIllocon ===

// Module 12895 (FrogIllocon)
import FastImageDefault from "FastImage" /* 5844 */;
import assetHelpers from "assetHelpers" /* 7138 */;
import _modDef12896 from "module_12896" /* 12896 */;
import _modDef12897 from "module_12897" /* 12897 */;
import _modDef12898 from "module_12898" /* 12898 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12896 }, 3: null };
const obj2 = { uri: _modDef12896 };
obj[2] = { uri: _modDef12897 };
const obj3 = { uri: _modDef12897 };
obj[3] = { uri: _modDef12898 };
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
  obj.source = num(7138).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}