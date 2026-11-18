// === Module 18577: CatIllocon ===

// Module 18577 (CatIllocon)
import FastImageDefault from "FastImage" /* 5510 */;
import assetHelpers from "assetHelpers" /* 7268 */;
import _modDef18578 from "module_18578" /* 18578 */;
import _modDef18579 from "module_18579" /* 18579 */;
import _modDef18580 from "module_18580" /* 18580 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18578 }, 3: null };
const obj2 = { uri: _modDef18578 };
obj[2] = { uri: _modDef18579 };
const obj3 = { uri: _modDef18579 };
obj[3] = { uri: _modDef18580 };
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
  obj.source = num(7268).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}