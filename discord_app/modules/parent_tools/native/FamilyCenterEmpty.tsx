// discord_app/modules/parent_tools/native/FamilyCenterEmpty.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../_runtime/14274_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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