// discord_app/modules/age_assurance/native/MethodPathIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import inlineStylesDefault from "../../../../_runtime/08173_inlineStyles.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";

const require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  let _require;
  let obj = map;
  _require = obj.useToken(ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  obj = { style: callback().container, children: null };
  obj = { width: 24, height: 24, viewBox: "0 0 24 24", children: null };
  const paths = icon.icon.paths;
  const tmp = callback();
  obj[3] = paths.map((d) => closure_1_4(callback(closure_1_2[6]).Path, { d: d.d, fill: callback, fillRule: d.fillRule }, d.d));
  obj[1] = jsx(inlineStylesDefault, { width: 24, height: 24, viewBox: "0 0 24 24", children: null });
  return <View width={24} height={24} viewBox="0 0 24 24">{null}</View>;
};