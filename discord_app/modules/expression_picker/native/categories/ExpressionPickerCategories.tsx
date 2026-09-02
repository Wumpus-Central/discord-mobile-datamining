// === Module 9221: ExpressionPickerCategories ===

// Module 9221 (ExpressionPickerCategories)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Portal from "Portal" /* 4347 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
createCacheKey = { container: null, containerRefresh: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  const tmp = callback();
  const items = [, , ];
  ({ container: arr[0], containerRefresh: arr[1] } = tmp);
  items[2] = style;
  return jsx(Portal.Portal, { hostName: portalHostName, children: <View style={items}>{children}</View> });
};