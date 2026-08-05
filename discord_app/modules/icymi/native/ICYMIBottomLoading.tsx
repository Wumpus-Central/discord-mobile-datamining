import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
// discord_app/modules/icymi/native/ICYMIBottomLoading.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let obj1;
({ View: obj1, ActivityIndicator: c3 } = get_ActivityIndicator);
let closure_5 = createCacheKey.createStyles(() => {
  let obj = { container: null };
  obj = { paddingTop: Themes.space.PX_8, paddingBottom: Themes.space.PX_24, alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = function ICYMIBottomLoading() {
  return <closure_2 style={callback().container}><closure_3 size="small" /></closure_2>;
};