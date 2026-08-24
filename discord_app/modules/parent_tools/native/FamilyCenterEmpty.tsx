// === Module 14341: FamilyCenterEmpty ===

// Module 14341 (FamilyCenterEmpty)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
import registerAssetDefault from "registerAsset" /* 14342 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = callback3();
  let obj = { style: tmp.empty, children: null };
  obj = { source: registerAssetDefault, style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), callback(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj[1] = items;
  return callback2(closure_3, obj);
};