// === Module 13967: Tooltip ===

// Module 13967 (Tooltip)
import ThemesDefault from "Themes" /* 709 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { UP: "UP", DOWN: "DOWN" };
obj = { CENTER: "CENTER", RIGHT: "RIGHT", LEFT: "LEFT" };
obj = { container: { padding: 10, borderRadius: ThemesDefault.radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND }, label: null, title: null, arrow: null };
createCacheKey = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 12, color: ThemesDefault.colors.WHITE };
obj[1] = createCacheKey;
obj[2] = { marginBottom: 4 };
let obj1 = { padding: 10, borderRadius: ThemesDefault.radii.xs, alignSelf: "flex-start", minWidth: 60, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
obj[3] = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: ThemesDefault.colors.BACKGROUND_BRAND, borderBottomColor: ThemesDefault.colors.BACKGROUND_BRAND };
let closure_8 = createCacheKey.createStyles(obj);
let obj3 = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: ThemesDefault.colors.BACKGROUND_BRAND, borderBottomColor: ThemesDefault.colors.BACKGROUND_BRAND };
const result = require("set").fileFinishedImporting("design/void/Tooltip/native/Tooltip.tsx");

export default function Tooltip(arrowHeight) {
  ({ arrowStyle, label, title, arrowWidth } = arrowHeight);
  ({ style, containerStyle, labelStyle, children } = arrowHeight);
  if (arrowWidth === undefined) {
    arrowWidth = 16;
  }
  let num = arrowHeight.arrowHeight;
  if (num === undefined) {
    num = 8;
  }
  let num2 = arrowHeight.arrowOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  let LEFT = arrowHeight.arrowPosition;
  if (LEFT === undefined) {
    LEFT = obj.LEFT;
  }
  let UP = arrowHeight.arrowDirection;
  if (UP === undefined) {
    UP = obj.UP;
  }
  const tmp3 = callback2();
  const items = [LEFT, num2];
  const memo = React.useMemo(() => {
    if (closure_1_7.LEFT === LEFT) {
      obj = { alignSelf: "flex-start", left: null };
      obj[1] = num2;
      return obj;
    } else if (tmp2.CENTER === tmp) {
      return { alignSelf: "center" };
    } else if (tmp2.RIGHT === tmp) {
      obj = { alignSelf: "flex-end", right: null };
      obj[1] = num2;
      return obj;
    } else {
      obj = num2(LEFT[6]);
      obj.assertNever(tmp);
    }
  }, items);
  obj = { style, children: null };
  let tmp8 = UP === obj.UP;
  if (tmp8) {
    obj = { style: null };
    const items1 = [tmp3.arrow, , , ];
    obj = { borderLeftWidth: null, borderRightWidth: null, borderBottomWidth: null };
    obj[0] = arrowWidth / 2;
    obj[1] = arrowWidth / 2;
    obj[2] = num;
    items1[1] = obj;
    items1[2] = memo;
    items1[3] = arrowStyle;
    obj[0] = items1;
    tmp8 = callback(tmp6, obj);
  }
  const items2 = [tmp8, , ];
  obj1 = { onLayout: arrowHeight.onLayout, style: items3, children: null };
  items3 = [tmp3.container, containerStyle];
  let tmp10 = null;
  if (null != title) {
    const obj2 = { style: null, variant: "text-md/semibold", color: "text-overlay-light", children: null };
    obj2[0] = tmp3.title;
    obj2[3] = title;
    tmp10 = callback(num2(LEFT[7]).Heading, obj2);
  }
  const items4 = [tmp10, , ];
  let tmp14 = null;
  if (null != label) {
    const obj3 = { style: null, children: null };
    const items5 = [tmp3.label, labelStyle];
    obj3[0] = items5;
    obj3[1] = label;
    tmp14 = callback(num2(LEFT[8]).LegacyText, obj3);
  }
  items4[1] = tmp14;
  items4[2] = children;
  obj1[2] = items4;
  items2[1] = closure_5(View, obj1);
  let tmp18 = UP === obj.DOWN;
  if (tmp18) {
    const obj4 = { style: null };
    const items6 = [tmp3.arrow, , , ];
    const obj5 = { borderLeftWidth: null, borderRightWidth: null, borderTopWidth: null };
    obj5[0] = arrowWidth / 2;
    obj5[1] = arrowWidth / 2;
    obj5[2] = num;
    items6[1] = obj5;
    items6[2] = memo;
    items6[3] = arrowStyle;
    obj4[0] = items6;
    tmp18 = callback(tmp6, obj4);
  }
  items2[2] = tmp18;
  obj[1] = items2;
  return closure_5(View, obj);
};
export const TooltipArrowDirections = obj;
export const TooltipArrowPositions = obj;