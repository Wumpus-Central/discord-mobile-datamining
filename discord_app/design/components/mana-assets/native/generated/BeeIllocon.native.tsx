// === Module 12898: BeeIllocon ===

// Module 12898 (BeeIllocon)
import FastImageDefault from "FastImage" /* 5872 */;
import assetHelpers from "assetHelpers" /* 7160 */;
import _modDef12899 from "module_12899" /* 12899 */;
import _modDef12900 from "module_12900" /* 12900 */;
import _modDef12901 from "module_12901" /* 12901 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12899 }, 3: null };
const obj2 = { uri: _modDef12899 };
obj[2] = { uri: _modDef12900 };
const obj3 = { uri: _modDef12900 };
obj[3] = { uri: _modDef12901 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BeeIllocon.native.tsx");

export function BeeIllocon(size) {
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
  obj.source = num(7160).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}