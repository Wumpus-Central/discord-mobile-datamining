// === Module 8957: FormDivider ===

// Module 8957 (FormDivider)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4535 */;
import ColorUtils from "ColorUtils" /* 4678 */;
import RedesignCompat from "RedesignCompat" /* 5991 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7517 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles(() => {
  const obj = { divider: {}, dividerOuter: { marginLeft: 0, height: hasOwnProperty.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * hasOwnProperty.hairlineWidth }, dividerHasIcon: { marginLeft: 56 } };
  return obj;
});
let obj2 = { [LIGHT]: nativeDefault.unsafe_rawColors.BLACK, [ASH]: nativeDefault.unsafe_rawColors.WHITE, [DARK]: nativeDefault.unsafe_rawColors.WHITE, [ONYX]: nativeDefault.unsafe_rawColors.WHITE };
({ LIGHT, ASH, DARK, ONYX } = fn(1074).ThemeTypes);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default function Divider(arg0) {
  let flag = arg0.outer;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg0.iconPush;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_7();
  const themeContext = native.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  obj2 = useProfileThemeValues;
  const profileThemeValues = obj2.useProfileThemeValues(theme);
  let tmp7 = null;
  if (tmp6) {
    const obj3 = { backgroundColor: ColorUtils.hexOpacityToRgba(obj2[theme], profileThemeValues.dividerOpacity) };
    tmp7 = obj3;
    const tmp2Result = ColorUtils;
  }
  let tmp10Result = null;
  if (!noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const items = [flag ? tmp.dividerOuter : tmp.divider, , , ];
    if (flag2) {
      flag2 = tmp.dividerHasIcon;
    }
    const obj4 = { style: null };
    items[1] = flag2;
    items[2] = arg0.style;
    items[3] = tmp7;
    obj4.style = items;
    tmp10Result = <React4 style={null} />;
  }
  return tmp10Result;
};
export const DIVIDER_COLORS = obj2;