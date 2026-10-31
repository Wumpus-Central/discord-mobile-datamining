// === Module 12689: CaterpillarIllocon ===

// Module 12689 (CaterpillarIllocon)
import FastImageDefault from "FastImage" /* 5717 */;
import assetHelpers from "assetHelpers" /* 7069 */;
import _modDef12690 from "module_12690" /* 12690 */;
import _modDef12691 from "module_12691" /* 12691 */;
import _modDef12692 from "module_12692" /* 12692 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef12690 }, 3: null };
const obj2 = { uri: _modDef12690 };
obj[2] = { uri: _modDef12691 };
const obj3 = { uri: _modDef12691 };
obj[3] = { uri: _modDef12692 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CaterpillarIllocon.native.tsx");

export function CaterpillarIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = noop.useMemo(() => {
    const size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj.source = num(7069).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}