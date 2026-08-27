// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategories.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import Portal from "../../../../../_runtime/04314_Portal.js";
import _modDef9128 from "ExpressionPickerCategoriesBackdrop.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, containerRefresh: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  const tmp = callback();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("ExpressionPickerCategories");
  let obj = { hostName: portalHostName, children: null };
  const items = [tmp.container, , ];
  let containerRefresh = null;
  if (tmp4) {
    containerRefresh = tmp.containerRefresh;
  }
  obj = { style: items, children: null };
  items[1] = containerRefresh;
  items[2] = style;
  let tmp5Result = null;
  if (!tmp4) {
    tmp5Result = tmp5(_modDef9128, {});
  }
  const items1 = [tmp5Result, children];
  obj[1] = items1;
  obj[1] = closure_5(View, obj);
  return closure_4(Portal.Portal, obj);
};