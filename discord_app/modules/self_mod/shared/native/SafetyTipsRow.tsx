// === Module 6692: SafetyTipsRow ===

// Module 6692 (SafetyTipsRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { width: 32, height: 32, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", marginRight: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  ({ index, tip, description, end } = arg0);
  const _require = callback();
  return jsx(_require(6291).TableRow, { icon: jsx((children) => <View style={lib.indexContainer}>{jsx(lib(dependencyMap[6]).Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index })}</View>, { index }), label: tip, subLabel: description, end });
};