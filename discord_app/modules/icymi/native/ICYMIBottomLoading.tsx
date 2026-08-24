// discord_app/modules/icymi/native/ICYMIBottomLoading.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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