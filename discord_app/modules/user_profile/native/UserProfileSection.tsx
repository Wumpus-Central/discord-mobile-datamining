// === Module 11329: UserProfileSection ===

// Module 11329 (UserProfileSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4787 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import Text_Text from "Text/Text" /* 5086 */;
import useProfileThemeValues from "useProfileThemeValues" /* 6867 */;
import FormDivider from "FormDivider" /* 8559 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["title", "headerIcon", "trailingIcon", "showContainer", "children", "style"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" }, title: { flexDirection: "row" }, section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 }, contentContainer: { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileSection(arg0) {
  const cResult = c.c(33);
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
    let tmp10 = trailingIcon;
    let tmp9 = title;
    let tmp8 = style;
    let tmp7 = showContainer;
    let tmp6 = tmp13;
    let tmp5 = headerIcon;
    let tmp4 = children;
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
  const themeContext = native.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const tmpResult = native;
  let contentContainer = useProfileThemeValues.useProfileThemeValues(theme);
  if (cResult[8] === primaryColor) {
    if (cResult[9] === contentContainer) {
      if (cResult[10] === tmp14.contentContainer) {
        if (cResult[11] === theme) {
          if (cResult[13] === tmp14.contentContainer) {
            if (cResult[14] === tmp16) {
              let tmp18 = cResult[15];
            }
            if (cResult[16] === tmp8) {
              if (cResult[17] === tmp14.section) {
                let tmp21 = cResult[18];
              }
              if (cResult[19] === tmp5) {
                if (cResult[20] === tmp14.title) {
                  if (cResult[21] === tmp14.titleContainer) {
                    if (cResult[22] === tmp9) {
                      if (cResult[23] === tmp10) {
                        let tmp22 = cResult[24];
                      }
                      let tmp27 = null;
                      if (tmp7) {
                        tmp27 = tmp18;
                      }
                      if (cResult[25] === tmp4) {
                        if (cResult[26] === tmp27) {
                          let tmp28 = cResult[27];
                        }
                        if (cResult[28] === tmp6) {
                          if (cResult[29] === tmp21) {
                            if (cResult[30] === tmp22) {
                              if (cResult[31] === tmp28) {
                                let tmp32 = cResult[32];
                              }
                              return tmp32;
                            }
                          }
                        }
                        const obj2 = { style: tmp21 };
                        const merged = Object.assign(tmp6);
                        const items = [tmp22, tmp28];
                        obj2.children = items;
                        const tmp38 = timestampProducer(View, obj2);
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
                const obj4 = { style: tmp14.titleContainer, children: null };
                const obj5 = { style: tmp14.title, children: null };
                const obj6 = { variant: "eyebrow", accessibilityRole: "header", children: tmp9 };
                const items1 = [hasOwnProperty(Text_Text.Text, obj6), tmp5];
                obj5.children = items1;
                const items2 = [timestampProducer(View, obj5), tmp10];
                obj4.children = items2;
                tmp23 = timestampProducer(View, obj4);
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
          const obj7 = {};
          const merged1 = Object.assign(tmp14.contentContainer);
          obj7.borderColor = cResult[12];
          cResult[13] = tmp14.contentContainer;
          cResult[14] = cResult[12];
          cResult[15] = obj7;
          tmp18 = obj7;
        }
      }
    }
  }
  if (null == primaryColor) {
    let borderColor = tmp14.contentContainer.borderColor;
    cResult[8] = primaryColor;
    cResult[9] = contentContainer;
    contentContainer = tmp14.contentContainer;
    cResult[10] = contentContainer;
    cResult[11] = theme;
    cResult[12] = borderColor;
  }
  const tmpResult3 = useProfileThemeValues;
  borderColor = ColorUtils.hexOpacityToRgba(FormDivider.DIVIDER_COLORS[theme], contentContainer.dividerOpacity);
  const tmpResult4 = ColorUtils;
}) : (function UserProfileSection(title) {
  title = title.title;
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  const merged = Object.assign(title, Object.assign({ title: 0, headerIcon: 0, trailingIcon: 0, showContainer: 0, children: 0, style: 0 }));
  const tmp2 = closure_7();
  const themeContext = native.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme);
  const obj3 = {};
  const merged1 = Object.assign(tmp2.contentContainer);
  if (null != primaryColor) {
    if (null != profileThemeValues) {
      let borderColor = ColorUtils.hexOpacityToRgba(FormDivider.DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
      const tmp3Result = ColorUtils;
    }
    obj3.borderColor = borderColor;
    const obj4 = { style: null };
    const items = [tmp2.section, style];
    obj4.style = items;
    const merged2 = Object.assign(merged);
    let tmp8Result = null;
    if (null != title) {
      const obj5 = { style: tmp2.titleContainer, children: null };
      const obj6 = { style: tmp2.title, children: null };
      const obj7 = { variant: "eyebrow", accessibilityRole: "header", children: title };
      const items1 = [hasOwnProperty(Text_Text.Text, obj7), headerIcon];
      obj6.children = items1;
      const items2 = [timestampProducer(View, obj6), trailingIcon];
      obj5.children = items2;
      tmp8Result = timestampProducer(View, obj5);
    }
    const items3 = [tmp8Result, ];
    let tmp16 = null;
    if (showContainer) {
      tmp16 = obj3;
    }
    const obj8 = { style: tmp16, children };
    items3[1] = hasOwnProperty(View, obj8);
    obj4.children = items3;
    return timestampProducer(View, obj4);
  }
  borderColor = tmp2.contentContainer.borderColor;
});