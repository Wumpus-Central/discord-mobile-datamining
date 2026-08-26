// === Module 8171: SafetyTipsRow ===

// Module 8171 (SafetyTipsRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
noopAll;
createCacheKey = { indexContainer: null };
createCacheKey = { width: 32, height: 32, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", marginRight: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  let _require;
  ({ index, tip, description, end } = arg0);
  _require = callback();
  return jsx(_require(5546).TableRow, { icon: jsx((children) => closure_1_3(closure_1_2, { style: lib.indexContainer, children: closure_1_3(lib(closure_1_1[6]).Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index }) }), { index }), label: tip, subLabel: description, end });
};