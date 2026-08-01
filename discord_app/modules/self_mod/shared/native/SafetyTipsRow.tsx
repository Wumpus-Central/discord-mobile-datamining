// === Module 7626: SafetyTipsRow ===

// Module 7626 (SafetyTipsRow)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { indexContainer: null };
createCacheKey = { width: 32, height: 32, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", marginRight: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  let description;
  let end;
  let index;
  let tip;
  let _require;
  ({ index, tip, description, end } = arg0);
  _require = createCacheKey();
  const obj = { icon: null, label: null, subLabel: null, end: null };
  obj[0] = jsx((children) => outer1_3(outer1_2, { style: lib.indexContainer, children: outer1_3(lib(outer1_1[6]).Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index }) }), { index });
  obj[1] = tip;
  obj[2] = description;
  obj[3] = end;
  return jsx(_require(5224).TableRow, { icon: null, label: null, subLabel: null, end: null });
};