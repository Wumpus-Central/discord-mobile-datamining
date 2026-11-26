// === Module 18742: CaterpillarIllocon ===

// Module 18742 (CaterpillarIllocon)
import FastImageDefault from "FastImage" /* 5730 */;
import assetHelpers from "assetHelpers" /* 7261 */;
import _modDef18743 from "module_18743" /* 18743 */;
import _modDef18744 from "module_18744" /* 18744 */;
import _modDef18745 from "module_18745" /* 18745 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18743 }, 3: null };
const obj2 = { uri: _modDef18743 };
obj[2] = { uri: _modDef18744 };
const obj3 = { uri: _modDef18744 };
obj[3] = { uri: _modDef18745 };
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
  obj.source = num(7261).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}