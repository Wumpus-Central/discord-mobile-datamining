// discord_app/design/void/Form/native/FormDivider.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import useProfileThemeValues from "../../../../modules/user_profile/useProfileThemeValues.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
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
  return obj;
});
let obj2 = {
  [LIGHT]: nativeDefault.unsafe_rawColors.BLACK,
  [ASH]: nativeDefault.unsafe_rawColors.WHITE,
  [DARK]: nativeDefault.unsafe_rawColors.WHITE,
  [ONYX]: nativeDefault.unsafe_rawColors.WHITE,
};
({ LIGHT, ASH, DARK, ONYX } = fn(1085).ThemeTypes);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(10);
      ({ outer, iconPush, style } = arg0);
      let dividerHasIcon = undefined !== iconPush && iconPush;
      const tmp5 = closure_7();
      const themeContext = native.useThemeContext();
      ({ theme, primaryColor } = themeContext);
      const tmpResult = native;
      const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme);
      let tmp8 = null;
      if ((null != undefined) !== outer && outer ? tmp5.dividerOuter : tmp5.divider.backgroundColor) {
        tmp8 = null;
        if (null != primaryColor) {
          tmp8 = null;
          if (null != profileThemeValues) {
            if (cResult[0] === profileThemeValues.dividerOpacity) {
              if (cResult[1] === tmp10) {
                let tmp11 = cResult[2];
              }
              if (cResult[3] !== tmp11) {
                obj2 = { backgroundColor: tmp11 };
                cResult[3] = tmp11;
                cResult[4] = obj2;
              }
            }
            const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba(obj2[theme], profileThemeValues.dividerOpacity);
            cResult[0] = profileThemeValues.dividerOpacity;
            cResult[1] = obj2[theme];
            cResult[2] = hexOpacityToRgbaResult;
            tmp11 = hexOpacityToRgbaResult;
            const tmpResult4 = ColorUtils;
          }
        }
      }
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        return null;
      } else {
        const tmp15 = tmp4 ? tmp5.dividerOuter : tmp5.divider;
        if (dividerHasIcon) {
          dividerHasIcon = tmp5.dividerHasIcon;
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp15) {
            if (cResult[7] === dividerHasIcon) {
              if (cResult[8] === tmp8) {
                let tmp16 = cResult[9];
              }
              return tmp16;
            }
          }
        }
        const obj3 = { style: null };
        const items = [tmp15, dividerHasIcon, style, tmp8];
        obj3.style = items;
        const tmp19 = <React4 style={null} />;
        cResult[5] = style;
        cResult[6] = tmp15;
        cResult[7] = dividerHasIcon;
        cResult[8] = tmp8;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const tmpResult3 = useProfileThemeValues;
    }
  : (arg0) => {
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
        const items = [flag ? tmp.dividerOuter : tmp.divider, , ,];
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
