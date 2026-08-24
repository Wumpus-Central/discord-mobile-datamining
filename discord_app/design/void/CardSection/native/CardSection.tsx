// === Module 8153: CardSection ===

// Module 8153 (CardSection)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import _modDef8154 from "module_8154" /* 8154 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importDefaultResult from "createTextStyle" /* 6819 */;

noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: importDefaultResult(require("ME").Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 }), card: null };
createCacheKey = { borderRadius: ThemesDefault.radii.xs, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = callback2();
  let obj = { style: items, accessibilityRole, accessibilityLabel, children: null };
  items = [tmp.container, style];
  let tmp4 = null;
  if (null != title) {
    obj = { style: null, accessibilityRole: "header", children: null };
    const items1 = [tmp.title, titleStyle];
    obj[0] = items1;
    obj[2] = title;
    tmp4 = callback(_modDef8154, obj);
  }
  const items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    obj = { style: null, children: null };
    const items3 = [tmp.card, cardStyle];
    obj[0] = items3;
    obj[1] = children;
    tmp9 = callback(tmp3, obj);
  }
  items2[2] = tmp9;
  obj[3] = items2;
  return closure_4(View, obj);
};