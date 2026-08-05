// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategories.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Portal } from "../../../../../_runtime/04156_Portal.js";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { ExpressionPickerCategoriesBackdrop } from "ExpressionPickerCategoriesBackdrop.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, containerRefresh: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("jsxProd").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  let children;
  let portalHostName;
  let style;
  ({ children, portalHostName, style } = arg0);
  const tmp = createCacheKey();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabled("ExpressionPickerCategories");
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
    tmp5Result = tmp5(ExpressionPickerCategoriesBackdrop, {});
  }
  const items1 = [tmp5Result, children];
  obj[1] = items1;
  obj[1] = closure_5(View, obj);
  return closure_4(Portal /* Portal */.Portal, obj);
};