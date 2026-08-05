// discord_app/modules/parent_tools/native/FamilyCenterEmpty.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = callback3();
  let obj = { style: tmp.empty, children: null };
  obj = { source: require("../../../../_runtime/14067_registerAsset.js"), style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj[1] = items;
  return callback2(closure_3, obj);
};