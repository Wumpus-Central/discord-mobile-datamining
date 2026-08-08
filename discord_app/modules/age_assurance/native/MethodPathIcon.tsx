// discord_app/modules/age_assurance/native/MethodPathIcon.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { inlineStyles } from "../../../../_runtime/07835_inlineStyles.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  let _require;
  let obj = _map;
  _require = obj.useToken(Themes.colors.INTERACTIVE_TEXT_DEFAULT);
  obj = { style: createCacheKey().container, children: null };
  obj = { width: 24, height: 24, viewBox: "0 0 24 24", children: null };
  const paths = icon.icon.paths;
  const tmp = createCacheKey();
  obj[3] = paths.map((d) => outer1_4(callback(outer1_2[6]).Path, { d: d.d, fill: callback, fillRule: d.fillRule }, d.d));
  obj[1] = jsx(inlineStyles, { width: 24, height: 24, viewBox: "0 0 24 24", children: null });
  return <View width={24} height={24} viewBox="0 0 24 24">{null}</View>;
};