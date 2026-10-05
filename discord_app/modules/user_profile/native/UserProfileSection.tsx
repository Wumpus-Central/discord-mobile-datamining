// discord_app/modules/user_profile/native/UserProfileSection.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useProfileThemeValues from "../useProfileThemeValues.native.tsx";
import FormDivider from "../../../design/void/Form/native/FormDivider.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
let closure_2 = ["title", "headerIcon", "trailingIcon", "showContainer", "children", "style"];
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" },
  title: { flexDirection: "row" },
  section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 },
  contentContainer: obj2,
};
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let headerIcon;
      let items;
      let items1;
      let items2;
      let primaryColor;
      let showContainer;
      let style;
      let theme;
      let title;
      let tmp10;
      let tmp17;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let trailingIcon;
      const obj = react2;
      const cResult = obj.c(33);
      if (cResult[0] !== arg0) {
        ({ title, headerIcon, trailingIcon, showContainer, children, style } = arg0);
        const tmp13 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = headerIcon;
        cResult[3] = tmp13;
        cResult[4] = showContainer;
        cResult[5] = style;
        cResult[6] = title;
        cResult[7] = trailingIcon;
        tmp10 = trailingIcon;
        tmp9 = title;
        tmp8 = style;
        tmp7 = showContainer;
        tmp6 = tmp13;
        tmp5 = headerIcon;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      const tmp14 = closure_7();
      const tmpResult = native;
      const themeContext = tmpResult.useThemeContext();
      ({ theme, primaryColor } = themeContext);
      const tmpResult3 = useProfileThemeValues;
      const profileThemeValues = tmpResult3.useProfileThemeValues(theme);
      if (cResult[8] === primaryColor) {
        if (cResult[9] === profileThemeValues) {
          if (cResult[10] === tmp14.contentContainer) {
            if (cResult[11] === theme) {
              tmp17 = cResult[12];
            }
            if (cResult[13] === tmp14.contentContainer) {
              let tmp18;
              if (cResult[14] === tmp17) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === tmp8) {
                let tmp21;
                if (cResult[17] === tmp14.section) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === tmp5) {
                  if (cResult[20] === tmp14.title) {
                    if (cResult[21] === tmp14.titleContainer) {
                      if (cResult[22] === tmp9) {
                        let tmp22;
                        if (cResult[23] === tmp10) {
                          tmp22 = cResult[24];
                        }
                        let tmp27 = null;
                        if (tmp7) {
                          tmp27 = tmp18;
                        }
                        if (cResult[25] === tmp4) {
                          let tmp28;
                          if (cResult[26] === tmp27) {
                            tmp28 = cResult[27];
                          }
                          if (cResult[28] === tmp6) {
                            if (cResult[29] === tmp21) {
                              if (cResult[30] === tmp22) {
                                let tmp32;
                                if (cResult[31] === tmp28) {
                                  tmp32 = cResult[32];
                                }
                                return tmp32;
                              }
                            }
                          }
                          const obj2 = { style: tmp21, children: items };
                          const merged = Object.assign(tmp6);
                          items = [tmp22, tmp28];
                          const tmp38 = metroRequire(View, obj2);
                          cResult[28] = tmp6;
                          cResult[29] = tmp21;
                          cResult[30] = tmp22;
                          cResult[31] = tmp28;
                          cResult[32] = tmp38;
                          tmp32 = tmp38;
                        }
                        const obj3 = { style: tmp27, children: tmp4 };
                        const tmp31 = hasOwnProperty(View, obj3);
                        cResult[25] = tmp4;
                        cResult[26] = tmp27;
                        cResult[27] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                  }
                }
                let tmp23 = null;
                if (null != tmp9) {
                  const obj4 = { style: tmp14.titleContainer, children: items2 };
                  const obj5 = { style: tmp14.title, children: items1 };
                  const obj6 = { variant: "eyebrow", accessibilityRole: "header", children: tmp9 };
                  items1 = [hasOwnProperty(Text_Text.Text, obj6), tmp5];
                  items2 = [metroRequire(View, obj5), tmp10];
                  tmp23 = metroRequire(View, obj4);
                }
                cResult[19] = tmp5;
                cResult[20] = tmp14.title;
                cResult[21] = tmp14.titleContainer;
                cResult[22] = tmp9;
                cResult[23] = tmp10;
                cResult[24] = tmp23;
                tmp22 = tmp23;
              }
              const items3 = [tmp14.section, tmp8];
              cResult[16] = tmp8;
              cResult[17] = tmp14.section;
              cResult[18] = items3;
              tmp21 = items3;
            }
            const obj7 = { borderColor: tmp17 };
            const merged1 = Object.assign(tmp14.contentContainer);
            cResult[13] = tmp14.contentContainer;
            cResult[14] = tmp17;
            cResult[15] = obj7;
            tmp18 = obj7;
          }
        }
      }
      if (null != primaryColor) {
        let borderColor;
        if (null != profileThemeValues) {
          const tmpResult4 = ColorUtils;
          borderColor = tmpResult4.hexOpacityToRgba(
            FormDivider.DIVIDER_COLORS[theme],
            profileThemeValues.dividerOpacity,
          );
        }
        cResult[8] = primaryColor;
        cResult[9] = profileThemeValues;
        cResult[10] = tmp14.contentContainer;
        cResult[11] = theme;
        cResult[12] = borderColor;
        tmp17 = borderColor;
      }
      borderColor = tmp14.contentContainer.borderColor;
    }
  : (title) => {
      let children;
      let headerIcon;
      let items;
      let items1;
      let items2;
      let items3;
      let primaryColor;
      let showContainer;
      let style;
      let theme;
      let trailingIcon;
      title = title.title;
      ({ headerIcon, trailingIcon, showContainer, children, style } = title);
      const merged = Object.assign(
        title,
        Object.assign({ title: 0, headerIcon: 0, trailingIcon: 0, showContainer: 0, children: 0, style: 0 }),
      );
      const tmp2 = closure_7();
      const obj = native;
      const themeContext = obj.useThemeContext();
      ({ theme, primaryColor } = themeContext);
      const obj2 = useProfileThemeValues;
      const profileThemeValues = obj2.useProfileThemeValues(theme);
      const obj3 = {};
      const merged1 = Object.assign(tmp2.contentContainer);
      if (null != primaryColor) {
        let borderColor;
        if (null != profileThemeValues) {
          const tmp3Result = ColorUtils;
          borderColor = tmp3Result.hexOpacityToRgba(
            FormDivider.DIVIDER_COLORS[theme],
            profileThemeValues.dividerOpacity,
          );
        }
        obj3.borderColor = borderColor;
        const obj4 = { style: items, children: items3 };
        items = [tmp2.section, style];
        const merged2 = Object.assign(merged);
        let tmp8Result = null;
        if (null != title) {
          const obj5 = { style: tmp2.titleContainer, children: items2 };
          const obj6 = { style: tmp2.title, children: items1 };
          const obj7 = { variant: "eyebrow", accessibilityRole: "header", children: title };
          items1 = [hasOwnProperty(Text_Text.Text, obj7), headerIcon];
          items2 = [metroRequire(View, obj6), trailingIcon];
          tmp8Result = metroRequire(View, obj5);
        }
        items3 = [tmp8Result];
        let tmp16 = null;
        if (showContainer) {
          tmp16 = obj3;
        }
        const obj8 = { style: tmp16, children };
        items3[1] = hasOwnProperty(View, obj8);
        return metroRequire(View, obj4);
      }
      borderColor = tmp2.contentContainer.borderColor;
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default tmp4;
