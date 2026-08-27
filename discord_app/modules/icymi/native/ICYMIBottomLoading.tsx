// === Module 16015: ICYMIBottomLoading ===

// Module 16015 (ICYMIBottomLoading)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

noopAll;
({ View: obj1, ActivityIndicator: c3 } = get_ActivityIndicator);
let closure_5 = createCacheKey.createStyles(() => {
  let obj = { container: null };
  obj = { paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_24, alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = function ICYMIBottomLoading() {
  return <closure_2 style={callback().container}><closure_3 size="small" /></closure_2>;
};