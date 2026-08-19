// discord_app/modules/self_mod/shared/native/SafetyTipsRow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
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
  return jsx(require("../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, { icon: jsx((children) => <View style={lib.indexContainer}>{jsx(lib(dependencyMap[6]).Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index })}</View>, { index }), label: tip, subLabel: description, end });
};