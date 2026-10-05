// discord_app/design/void/Form/native/FormDivider.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import useProfileThemeValues from "../../../../modules/user_profile/useProfileThemeValues.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ASH;
let DARK;
let LIGHT;
let ONYX;
let Platform;
let closure_4;
let hasOwnProperty;
({ View: closure_4, StyleSheet: hasOwnProperty, Platform } = react_native);
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles(() => {
  const obj = {
    divider: {},
    dividerOuter: {
      marginLeft: 0,
      height: hasOwnProperty.hairlineWidth,
      backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
      marginTop: -1 * hasOwnProperty.hairlineWidth,
    },
    dividerHasIcon: { marginLeft: 56 },
  };
  ({
    marginLeft: 0,
    height: hasOwnProperty.hairlineWidth,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginTop: -1 * hasOwnProperty.hairlineWidth,
  });
  return obj;
});
const DIVIDER_COLORS = {
  [LIGHT]: nativeDefault.unsafe_rawColors.BLACK,
  [ASH]: nativeDefault.unsafe_rawColors.WHITE,
  [DARK]: nativeDefault.unsafe_rawColors.WHITE,
  [ONYX]: nativeDefault.unsafe_rawColors.WHITE,
};
({ LIGHT, ASH, DARK, ONYX } = ThemeTypes);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let iconPush;
      let outer;
      let primaryColor;
      let style;
      let theme;
      const obj = react2;
      const cResult = obj.c(10);
      ({ outer, iconPush, style } = arg0);
      let dividerHasIcon = undefined !== iconPush && iconPush;
      const tmp5 = closure_7();
      const tmpResult = native;
      const themeContext = tmpResult.useThemeContext();
      ({ theme, primaryColor } = themeContext);
      const tmpResult3 = useProfileThemeValues;
      const profileThemeValues = tmpResult3.useProfileThemeValues(theme);
      let tmp8 = null;
      if (null != (undefined !== outer && outer ? tmp5.dividerOuter : tmp5.divider).backgroundColor) {
        tmp8 = null;
        if (null != primaryColor) {
          tmp8 = null;
          if (null != profileThemeValues) {
            if (cResult[0] === profileThemeValues.dividerOpacity) {
              let tmp11;
              let tmp13;
              if (cResult[1] === obj[theme]) {
                tmp11 = cResult[2];
              }
              if (cResult[3] !== tmp11) {
                const obj2 = { backgroundColor: tmp11 };
                cResult[3] = tmp11;
                cResult[4] = obj2;
                tmp13 = obj2;
              } else {
                tmp13 = cResult[4];
              }
              tmp8 = tmp13;
            }
            const tmpResult4 = ColorUtils;
            const hexOpacityToRgbaResult = tmpResult4.hexOpacityToRgba(obj[theme], profileThemeValues.dividerOpacity);
            cResult[0] = profileThemeValues.dividerOpacity;
            cResult[1] = obj[theme];
            cResult[2] = hexOpacityToRgbaResult;
            tmp11 = hexOpacityToRgbaResult;
          }
        }
      }
      if (react.useContext(RedesignCompat.RedesignCompatContext)) {
        return null;
      } else {
        const tmp14 = undefined !== outer && outer ? tmp5.dividerOuter : tmp5.divider;
        if (dividerHasIcon) {
          dividerHasIcon = tmp5.dividerHasIcon;
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp14) {
            if (cResult[7] === dividerHasIcon) {
              let tmp15;
              if (cResult[8] === tmp8) {
                tmp15 = cResult[9];
              }
              return tmp15;
            }
          }
        }
        const items = [tmp14, dividerHasIcon, style, tmp8];
        const tmp18 = <React3 style={items} />;
        cResult[5] = style;
        cResult[6] = tmp14;
        cResult[7] = dividerHasIcon;
        cResult[8] = tmp8;
        cResult[9] = tmp18;
        tmp15 = tmp18;
      }
    }
  : (arg0) => {
      let primaryColor;
      let theme;
      let tmp2Result;
      let flag = arg0.outer;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = arg0.iconPush;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const style = arg0.style;
      const tmp = closure_7();
      const obj = native;
      const themeContext = obj.useThemeContext();
      ({ theme, primaryColor } = themeContext);
      const obj2 = useProfileThemeValues;
      const profileThemeValues = obj2.useProfileThemeValues(theme);
      let tmp7 = null;
      const tmp6 =
        null != (flag ? tmp.dividerOuter : tmp.divider).backgroundColor &&
        null != primaryColor &&
        null != profileThemeValues;
      if (tmp6) {
        const obj3 = { backgroundColor: tmp2Result.hexOpacityToRgba(obj[theme], profileThemeValues.dividerOpacity) };
        tmp7 = obj3;
        tmp2Result = ColorUtils;
      }
      let tmp10Result = null;
      if (!react.useContext(RedesignCompat.RedesignCompatContext)) {
        const items = [flag ? tmp.dividerOuter : tmp.divider, , ,];
        if (flag2) {
          flag2 = tmp.dividerHasIcon;
        }
        items[1] = flag2;
        items[2] = style;
        items[3] = tmp7;
        tmp10Result = <React3 style={items} />;
      }
      return tmp10Result;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default tmp3;
export { DIVIDER_COLORS };
