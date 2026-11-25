// === Module 18691: SpiderIllocon ===

// Module 18691 (SpiderIllocon)
import FastImageDefault from "FastImage" /* 5699 */;
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18692 from "module_18692" /* 18692 */;
import _modDef18693 from "module_18693" /* 18693 */;
import _modDef18694 from "module_18694" /* 18694 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18692 }, 3: null };
const obj2 = { uri: _modDef18692 };
obj[2] = { uri: _modDef18693 };
const obj3 = { uri: _modDef18693 };
obj[3] = { uri: _modDef18694 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SpiderIllocon.native.tsx");

export function SpiderIllocon(size) {
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