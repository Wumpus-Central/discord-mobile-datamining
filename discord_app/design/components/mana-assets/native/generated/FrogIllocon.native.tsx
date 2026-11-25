// === Module 18667: FrogIllocon ===

// Module 18667 (FrogIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18668 from "module_18668" /* 18668 */;
import _modDef18669 from "module_18669" /* 18669 */;
import _modDef18670 from "module_18670" /* 18670 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18668 }, 3: null };
const obj2 = { uri: _modDef18668 };
obj[2] = { uri: _modDef18669 };
const obj3 = { uri: _modDef18669 };
obj[3] = { uri: _modDef18670 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}