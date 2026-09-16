// === Module 14228: RoleDot ===

// Module 14228 (RoleDot)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import useFontScale from "useFontScale" /* 5067 */;
import LinearGradientDefault from "LinearGradient" /* 5072 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5089 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { flexShrink: 0 }, background: { position: "relative" }, backgroundColor: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs }, borderBase: null, borderColor: null, dot: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs };
obj2.borderBase = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
let obj4 = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
obj2.borderColor = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
obj2.dot = { borderRadius: 10, position: "absolute" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = function RoleDot(background) {
  ({ color, colors, size } = background);
  if (size === undefined) {
    size = "normal";
  }
  let flag = background.background;
  if (flag === undefined) {
    flag = true;
  }
  ({ containerStyles, guildId } = background);
  const tmp = closure_6();
  const fontScale = useFontScale.useFontScale();
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  let num = 16;
  if ("normal" === size) {
    num = 20;
  }
  const result = num * fontScale;
  const obj2 = { paddingRight: 2 * fontScale, paddingTop: null, height: null };
  const tmp6 = useHasEnhancedRoleColorsDefault(guildId, null);
  if (tmp2Result.isAndroid()) {
    let result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  obj2.paddingTop = result1;
  obj2.height = result;
  const size1 = { height: result, width: result, padding: (result - sum) / 2 };
  const size2 = { height: diff, width: diff, top: null, left: null };
  const result2 = diff / 2;
  size2.top = result2;
  size2.left = result2;
  const obj3 = { style: null, children: null };
  const items = [tmp.container, obj2, containerStyles];
  obj3.style = items;
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = backgroundColor;
  items1[2] = size1;
  const obj5 = { style: null, children: null };
  const items2 = [tmp.borderBase];
  obj5.style = items2;
  const items3 = [tmp.borderColor, { height: sum, width: sum }, { backgroundColor: color }];
  obj5.children = React4(View, { style: items3 });
  const items4 = [React4(View, obj5), ];
  if (tmp6) {
    if (null != colors) {
      if (null != colors.secondaryColor) {
        const obj6 = { colors: null, start: null, end: null, style: null };
        const items5 = [, , ];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        obj6.colors = items5.filter(GlobalUtils.isNotNullish);
        obj6.start = { x: 0, y: 0 };
        obj6.end = { x: 1, y: 0 };
        const items6 = [tmp.dot, size2];
        obj6.style = items6;
        let tmp12Result = React4(LinearGradientDefault, obj6);
        const tmp5Result = LinearGradientDefault;
      }
      items4[1] = tmp12Result;
      obj4.children = items4;
      obj3.children = hasOwnProperty(View, obj4);
      return React4(View, obj3);
    }
  }
  const items7 = [tmp.dot, size2, { backgroundColor: color }];
  tmp12Result = React4(View, { style: items7 });
  tmp2Result = PlatformUtils;
};