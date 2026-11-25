// === Module 18679: CaterpillarIllocon ===

// Module 18679 (CaterpillarIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18680 from "module_18680" /* 18680 */;
import _modDef18681 from "module_18681" /* 18681 */;
import _modDef18682 from "module_18682" /* 18682 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18680 }, 3: null };
const obj2 = { uri: _modDef18680 };
obj[2] = { uri: _modDef18681 };
const obj3 = { uri: _modDef18681 };
obj[3] = { uri: _modDef18682 };
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
  obj.source = num(7230).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}