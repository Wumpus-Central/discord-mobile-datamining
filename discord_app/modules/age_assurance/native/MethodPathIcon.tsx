// === Module 6570: MethodPathIcon ===

// Module 6570 (MethodPathIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import inlineStylesDefault from "inlineStyles" /* 6571 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  let _require;
  let obj = _require(4097);
  _require = obj.useToken(ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  { style: callback().container, children: null };
  obj = { width: 24, height: 24, viewBox: "0 0 24 24", children: null };
  const paths = icon.icon.paths;
  const tmp = callback();
  obj[3] = paths.map((item, index) => jsx(callback(dependencyMap[6]).Path, { d: item.d, fill: callback, fillRule: item.fillRule }, item.d));
  obj[1] = jsx(inlineStylesDefault, { width: 24, height: 24, viewBox: "0 0 24 24", children: null });
  return <View width={24} height={24} viewBox="0 0 24 24">{null}</View>;
};