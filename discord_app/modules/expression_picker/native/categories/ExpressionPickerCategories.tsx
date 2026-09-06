// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategories.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Portal from "../../../../../_runtime/04432_Portal.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { container: null, containerRefresh: null };
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingHorizontal: ThemesDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting(
  "modules/expression_picker/native/categories/ExpressionPickerCategories.tsx",
);

export default function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  const tmp = callback();
  const items = [, ,];
  ({ container: arr[0], containerRefresh: arr[1] } = tmp);
  items[2] = style;
  return jsx(Portal.Portal, { hostName: portalHostName, children: <View style={items}>{children}</View> });
}
