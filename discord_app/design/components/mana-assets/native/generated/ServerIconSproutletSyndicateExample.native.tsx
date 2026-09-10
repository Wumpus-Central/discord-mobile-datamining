// === Module 6485: ServerIconSproutletSyndicateExample ===

// Module 6485 (ServerIconSproutletSyndicateExample)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5637 */;
import _modDef6486 from "module_6486" /* 6486 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ServerIconSproutletSyndicateExample.native.tsx");

export const ServerIconSproutletSyndicateExample = function ServerIconSproutletSyndicateExample(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef6486 };
  obj.source = obj;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6486 });
};