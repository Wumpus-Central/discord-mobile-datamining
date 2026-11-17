// === Module 14727: CaterpillarIllocon ===

// Module 14727 (CaterpillarIllocon)
import FastImageDefault from "FastImage" /* 6014 */;
import assetHelpers from "assetHelpers" /* 7765 */;
import _modDef14728 from "module_14728" /* 14728 */;
import _modDef14729 from "module_14729" /* 14729 */;
import _modDef14730 from "module_14730" /* 14730 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef14728 }, 3: null };
const obj2 = { uri: _modDef14728 };
obj[2] = { uri: _modDef14729 };
const obj3 = { uri: _modDef14729 };
obj[3] = { uri: _modDef14730 };
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
  obj.source = num(7765).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}