// === Module 8599: FormDivider ===

// Module 8599 (FormDivider)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4271 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import RedesignCompat from "RedesignCompat" /* 5686 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7184 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let closure_7 = createStyles.createStyles(() => {
  let obj = { divider: {}, dividerOuter: null, dividerHasIcon: null };
  obj = { marginLeft: 0, height: hasOwnProperty.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * hasOwnProperty.hairlineWidth };
  obj.dividerOuter = obj;
  obj.dividerHasIcon = { marginLeft: 56 };
  return obj;
});
createStyles = { [LIGHT]: nativeDefault.unsafe_rawColors.BLACK, [DARK]: nativeDefault.unsafe_rawColors.WHITE, [DARKER]: nativeDefault.unsafe_rawColors.WHITE, [MIDNIGHT]: nativeDefault.unsafe_rawColors.WHITE };
({ LIGHT, DARK, DARKER, MIDNIGHT } = fn(1074).ThemeTypes);
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
  let obj = native;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme);
  let tmp7 = null;
  if (tmp6) {
    obj = { backgroundColor: ColorUtils.hexOpacityToRgba(createStyles[theme], profileThemeValues.dividerOpacity) };
    tmp7 = obj;
    const tmp2Result = ColorUtils;
  }
  let tmp10Result = null;
  if (!noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const items = [flag ? tmp.dividerOuter : tmp.divider, , , ];
    if (flag2) {
      flag2 = tmp.dividerHasIcon;
    }
    obj = { style: null };
    items[1] = flag2;
    items[2] = arg0.style;
    items[3] = tmp7;
    obj.style = items;
    tmp10Result = <React4 style={null} />;
  }
  return tmp10Result;
};
export const DIVIDER_COLORS = createStyles;