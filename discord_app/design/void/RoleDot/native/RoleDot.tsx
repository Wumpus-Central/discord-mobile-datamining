// discord_app/design/void/RoleDot/native/RoleDot.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useFontScale from "../../../../modules/screen/native/useFontScale.tsx";
import useHasEnhancedRoleColorsDefault from "../../../../modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const LinearGradientDefault = tmp5(4987);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { flexShrink: 0 },
  background: { position: "relative" },
  backgroundColor: null,
  borderBase: null,
  borderColor: null,
  dot: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs };
createStyles.backgroundColor = createStyles;
createStyles.borderBase = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
let obj1 = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
createStyles.borderColor = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
createStyles.dot = { borderRadius: 10, position: "absolute" };
let closure_6 = createStyles.createStyles(createStyles);
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
  let obj = useFontScale;
  const fontScale = obj.useFontScale();
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
  obj = { paddingRight: 2 * fontScale, paddingTop: null, height: null };
  const tmp6 = useHasEnhancedRoleColorsDefault(guildId, null);
  if (tmp2Result.isAndroid()) {
    let result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  obj.paddingTop = result1;
  obj.height = result;
  size = { height: result, width: result, padding: (result - sum) / 2 };
  const size1 = { height: diff, width: diff, top: null, left: null };
  const result2 = diff / 2;
  size1.top = result2;
  size1.left = result2;
  obj = { style: null, children: null };
  const items = [tmp.container, obj, containerStyles];
  obj.style = items;
  const items1 = [tmp.background, ,];
  let backgroundColor = null;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  const obj1 = { style: items1, children: null };
  items1[1] = backgroundColor;
  items1[2] = size;
  const obj2 = { style: null, children: null };
  const items2 = [tmp.borderBase];
  obj2.style = items2;
  const items3 = [tmp.borderColor, { height: sum, width: sum }, { backgroundColor: color }];
  obj2.children = React4(View, { style: items3 });
  const items4 = [React4(View, obj2)];
  if (tmp6) {
    if (null != colors) {
      if (null != colors.secondaryColor) {
        const obj3 = { colors: null, start: null, end: null, style: null };
        const items5 = [, ,];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        obj3.colors = items5.filter(tmp2(1369).isNotNullish);
        obj3.start = { x: 0, y: 0 };
        obj3.end = { x: 1, y: 0 };
        const items6 = [tmp.dot, size1];
        obj3.style = items6;
        let tmp12Result = tmp12(LinearGradientDefault, obj3);
        const tmp5Result = LinearGradientDefault;
      }
      items4[1] = tmp12Result;
      obj1.children = items4;
      obj.children = hasOwnProperty(tmp13, obj1);
      return tmp12(tmp13, obj);
    }
  }
  const items7 = [tmp.dot, size1, { backgroundColor: color }];
  tmp12Result = tmp12(tmp13, { style: items7 });
};
