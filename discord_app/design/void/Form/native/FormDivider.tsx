import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let DARK;
let DARKER;
let LIGHT;
let MIDNIGHT;
let Platform;
let c4;
let c5;
const require = arg1;
({ View: c4, StyleSheet: c5, Platform } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { divider: {}, dividerOuter: null, dividerHasIcon: null };
  obj = { marginLeft: 0, height: closure_5.hairlineWidth, backgroundColor: importDefault(712).colors.BORDER_SUBTLE, marginTop: -1 * closure_5.hairlineWidth };
  obj[1] = obj;
  obj[2] = { marginLeft: 56 };
  return obj;
});
createCacheKey = { [LIGHT]: require("Themes").unsafe_rawColors.BLACK, [DARK]: require("Themes").unsafe_rawColors.WHITE, [DARKER]: require("Themes").unsafe_rawColors.WHITE, [MIDNIGHT]: require("Themes").unsafe_rawColors.WHITE };
({ LIGHT, DARK, DARKER, MIDNIGHT } = require("ME").ThemeTypes);
const result = require("ME").fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default function Divider(outer) {
  let primaryColor;
  let theme;
  let flag = outer.outer;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = outer.iconPush;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp2 = callback(importDefault(1348)("FormDivider"));
  let obj = require(3997) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const profileThemeValues = require(5632) /* useProfileThemeValues */.useProfileThemeValues(theme);
  let tmp7 = null;
  if (tmp6) {
    obj = { backgroundColor: null };
    obj[0] = tmp3(4129).hexOpacityToRgba(createCacheKey[theme], profileThemeValues.dividerOpacity);
    tmp7 = obj;
    const tmp3Result = tmp3(4129);
  }
  let tmp10Result = null;
  if (!React.useContext(require(5314) /* context */.RedesignCompatContext)) {
    const items = [flag ? tmp2.dividerOuter : tmp2.divider, , , ];
    if (flag2) {
      flag2 = tmp2.dividerHasIcon;
    }
    obj = { style: null };
    items[1] = flag2;
    items[2] = outer.style;
    items[3] = tmp7;
    obj[0] = items;
    tmp10Result = <closure_4 style={null} />;
    const tmp10 = jsx;
    const tmp11 = closure_4;
  }
  return tmp10Result;
};
export const DIVIDER_COLORS = createCacheKey;