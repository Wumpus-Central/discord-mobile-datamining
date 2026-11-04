// === Module 19133: DisplayNameLockeAbstractUI ===

// Module 19133 (DisplayNameLockeAbstractUI)
import assetHelpers from "assetHelpers" /* 7210 */;
import _modDef19134 from "module_19134" /* 19134 */;
import _modDef19135 from "module_19135" /* 19135 */;
import _modDef19136 from "module_19136" /* 19136 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19134 }, 3: null };
let obj2 = { uri: _modDef19134 };
obj[2] = { uri: _modDef19135 };
const obj3 = { uri: _modDef19135 };
obj[3] = { uri: _modDef19136 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisplayNameLockeAbstractUI.native.tsx");

export function DisplayNameLockeAbstractUI(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 123 };
    return assetHelpers.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const tmp2 = height(num[6]);
  obj.source = width(num[5]).getAssetSource(obj);
  obj.style = memo;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  const obj2 = width(num[5]);
  obj.resizeMode = width(num[5]).getAssetResizeMode(resizeMode);
  return <tmp2 fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
}