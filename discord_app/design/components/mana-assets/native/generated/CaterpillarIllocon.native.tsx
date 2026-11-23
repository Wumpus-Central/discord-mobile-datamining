// === Module 18527: CaterpillarIllocon ===

// Module 18527 (CaterpillarIllocon)
import FastImageDefault from "FastImage" /* 5600 */;
import assetHelpers from "assetHelpers" /* 7357 */;
import _modDef18528 from "module_18528" /* 18528 */;
import _modDef18529 from "module_18529" /* 18529 */;
import _modDef18530 from "module_18530" /* 18530 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18528 }, 3: null };
const obj2 = { uri: _modDef18528 };
obj[2] = { uri: _modDef18529 };
const obj3 = { uri: _modDef18529 };
obj[3] = { uri: _modDef18530 };
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
  obj.source = num(7357).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}