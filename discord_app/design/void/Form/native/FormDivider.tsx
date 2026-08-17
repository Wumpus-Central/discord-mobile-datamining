// discord_app/design/void/Form/native/FormDivider.tsx
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import ManaContext from "ManaContext" /* 4104 */;
import context from "context" /* 6939 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7161 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
({ View: c4, StyleSheet: c5, Platform } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { divider: {}, dividerOuter: null, dividerHasIcon: null };
  obj = { marginLeft: 0, height: closure_5.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: -1 * closure_5.hairlineWidth };
  obj[1] = obj;
  obj[2] = { marginLeft: 56 };
  return obj;
});
createCacheKey = { [LIGHT]: ThemesDefault.unsafe_rawColors.BLACK, [DARK]: ThemesDefault.unsafe_rawColors.WHITE, [DARKER]: ThemesDefault.unsafe_rawColors.WHITE, [MIDNIGHT]: ThemesDefault.unsafe_rawColors.WHITE };
({ LIGHT, DARK, DARKER, MIDNIGHT } = require("ME").ThemeTypes);
const result = require("set").fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default function Divider(outer) {
  let flag = outer.outer;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = outer.iconPush;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp2 = callback(useIsMobileVisualRefreshExperimentEnabledDefault("FormDivider"));
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme);
  let tmp7 = null;
  if (tmp6) {
    obj = { backgroundColor: null };
    obj[0] = tmp3(4223).hexOpacityToRgba(createCacheKey[theme], profileThemeValues.dividerOpacity);
    tmp7 = obj;
    const tmp3Result = tmp3(4223);
  }
  let tmp10Result = null;
  if (!React.useContext(context.RedesignCompatContext)) {
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