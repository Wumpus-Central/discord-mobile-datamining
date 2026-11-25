// === Module 19061: DisplayNameLockeAbstractUI ===

// Module 19061 (DisplayNameLockeAbstractUI)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef19062 from "module_19062" /* 19062 */;
import _modDef19063 from "module_19063" /* 19063 */;
import _modDef19064 from "module_19064" /* 19064 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef19062 }, 3: null };
let obj2 = { uri: _modDef19062 };
obj[2] = { uri: _modDef19063 };
const obj3 = { uri: _modDef19063 };
obj[3] = { uri: _modDef19064 };
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