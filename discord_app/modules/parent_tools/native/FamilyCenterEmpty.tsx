// === Module 14273: FamilyCenterEmpty ===

// Module 14273 (FamilyCenterEmpty)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 14274 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = callback3();
  const obj = { source: registerAssetDefault, style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), callback(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj[1] = items;
  return callback2(closure_3, obj);
};