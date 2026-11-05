// === Module 14541: WorldIllocon ===

// Module 14541 (WorldIllocon)
import FastImageDefault from "FastImage" /* 5854 */;
import assetHelpers from "assetHelpers" /* 7213 */;
import _modDef14542 from "module_14542" /* 14542 */;
import _modDef14543 from "module_14543" /* 14543 */;
import _modDef14544 from "module_14544" /* 14544 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14542 }, 3: null };
const obj2 = { uri: _modDef14542 };
obj[2] = { uri: _modDef14543 };
const obj3 = { uri: _modDef14543 };
obj[3] = { uri: _modDef14544 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WorldIllocon.native.tsx");

export function WorldIllocon(size) {
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
  obj.source = num(7213).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}