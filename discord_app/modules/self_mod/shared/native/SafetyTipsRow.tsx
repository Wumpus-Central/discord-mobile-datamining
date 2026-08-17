// discord_app/modules/self_mod/shared/native/SafetyTipsRow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";

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
  return jsx(_TableRowInner.TableRow, { icon: jsx((children) => closure_1_3(closure_1_2, { style: lib.indexContainer, children: closure_1_3(lib(closure_1_1[6]).Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index }) }), { index }), label: tip, subLabel: description, end });
};