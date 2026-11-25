// === Module 18237: MailboxSpotIllustration ===

// Module 18237 (MailboxSpotIllustration)
import assetHelpers from "assetHelpers" /* 7230 */;
import _modDef18238 from "module_18238" /* 18238 */;
import _modDef18239 from "module_18239" /* 18239 */;
import _modDef18240 from "module_18240" /* 18240 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { 1: null, 2: { uri: _modDef18238 }, 3: null };
let obj2 = { uri: _modDef18238 };
obj[2] = { uri: _modDef18239 };
const obj3 = { uri: _modDef18239 };
obj[3] = { uri: _modDef18240 };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MailboxSpotIllustration.native.tsx");

export function MailboxSpotIllustration(width) {
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  items = [width, height, num];
  const memo = noop.useMemo(() => {
    const size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
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