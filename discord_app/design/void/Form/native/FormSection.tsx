// === Module 8902: FormSection ===

// Module 8902 (FormSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FormConstants from "FormConstants" /* 1192 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import RedesignCompat from "RedesignCompat" /* 6073 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import FormRowDefault from "FormRow" /* 6633 */;
import FormDividerDefault from "FormDivider" /* 8899 */;
import FormTitleDefault from "FormTitle" /* 8903 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp, tmp3;

let Platform;
let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet, Platform } = react_native);
const TitleStyleType = FormConstants.TitleStyleType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { titledSectionHeader: obj2, titledSectionNoBorder: { marginTop: 24 }, titledSectionNoBorderOrMargin: {}, emptySectionHeader: { marginTop: 24 }, sectionBody: {}, sectionBodyIOSBorder: {} };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 16 };
let closure_8 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessibilityRole;
  let children;
  let description;
  let error;
  let hasIcons;
  let hint;
  let icon;
  let inset;
  let items;
  let sectionBodyStyle;
  let thinTitle;
  let title;
  let titleStyleType;
  let titleTextStyle;
  let titleViewStyle;
  let uppercaseTitle;
  let wrapperStyle;
  const obj = react2;
  const cResult = obj.c(60);
  ({ icon, children, thinTitle, inset, title, description, accessibilityRole, accessibilityLabel, uppercaseTitle, titleStyleType, titleViewStyle, titleTextStyle, sectionBodyStyle, wrapperStyle, error, hint, hasIcons } = arg0);
  if (undefined === titleStyleType) {
    titleStyleType = TitleStyleType.DEFAULT;
  }
  const tmp6 = closure_8();
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    if (cResult[0] === children) {
      if (cResult[1] === hasIcons) {
        let tmp18;
        let tmp19;
        let tmp20;
        let tmp21;
        let tmp22;
        let tmp23;
        let tmp24;
        let tmp25;
        let tmp26;
        if (cResult[2] === title) {
          tmp18 = cResult[3];
          tmp19 = cResult[4];
          tmp20 = cResult[5];
          tmp21 = cResult[6];
          tmp22 = cResult[7];
          tmp23 = cResult[8];
          tmp24 = cResult[9];
          tmp25 = cResult[10];
          tmp26 = cResult[11];
        }
        if (cResult[16] === tmp18) {
          if (cResult[17] === tmp21) {
            if (cResult[18] === tmp22) {
              if (cResult[19] === tmp23) {
                let tmp40;
                if (cResult[20] === tmp24) {
                  tmp40 = cResult[21];
                }
                if (cResult[22] === tmp19) {
                  if (cResult[23] === tmp25) {
                    let tmp43;
                    let tmp46;
                    if (cResult[24] === tmp40) {
                      tmp43 = cResult[25];
                    }
                    if (cResult[26] !== hint) {
                      let tmp47 = null;
                      if (null != hint) {
                        const obj3 = { style: { marginTop: 8 }, children: hint };
                        tmp47 = metroRequire(React3, obj3);
                      }
                      cResult[26] = hint;
                      cResult[27] = tmp47;
                      tmp46 = tmp47;
                    } else {
                      tmp46 = cResult[27];
                    }
                    if (cResult[28] === tmp20) {
                      if (cResult[29] === tmp46) {
                        if (cResult[30] === tmp26) {
                          let tmp50;
                          if (cResult[31] === tmp43) {
                            tmp50 = cResult[32];
                          }
                          return tmp50;
                        }
                      }
                    }
                    const obj4 = { style: tmp26, children: items };
                    items = [tmp43, tmp46];
                    const tmp52 = metroImportDefault(tmp20, obj4);
                    cResult[28] = tmp20;
                    cResult[29] = tmp46;
                    cResult[30] = tmp26;
                    cResult[31] = tmp43;
                    cResult[32] = tmp52;
                    tmp50 = tmp52;
                  }
                }
                const obj5 = { style: tmp25, children: tmp40 };
                const tmp45 = metroRequire(tmp19, obj5);
                cResult[22] = tmp19;
                cResult[23] = tmp25;
                cResult[24] = tmp40;
                cResult[25] = tmp45;
                tmp43 = tmp45;
              }
            }
          }
        }
        const obj6 = { title: tmp22, hasIcons: tmp23, hasTrailingText: tmp24, children: tmp21 };
        const tmp42 = metroRequire(tmp18, obj6);
        cResult[16] = tmp18;
        cResult[17] = tmp21;
        cResult[18] = tmp22;
        cResult[19] = tmp23;
        cResult[20] = tmp24;
        cResult[21] = tmp42;
        tmp40 = tmp42;
      }
    }
    const Children = react.Children;
    const toArrayResult = Children.toArray(children);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor(arg0) {
          isValidElementResult = closure_1_3.isValidElement(arg0);
          if (isValidElementResult) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            isValidElementResult = arg0.type === closure_1_1(closure_1_2[9]);
          }
          if (isValidElementResult) {
            tmp4 = globalThis;
            _Boolean = Boolean;
            isValidElementResult = Boolean(arg0.props.leading);
          }
          return isValidElementResult;
        }
      }
      cResult[12] = K;
    } else {
      class K {
        constructor(arg0) {
          isValidElementResult = closure_1_3.isValidElement(arg0);
          if (isValidElementResult) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            isValidElementResult = arg0.type === closure_1_1(closure_1_2[9]);
          }
          if (isValidElementResult) {
            tmp4 = globalThis;
            _Boolean = Boolean;
            isValidElementResult = Boolean(arg0.props.leading);
          }
          return isValidElementResult;
        }
      }
    }
    const _Symbol2 = Symbol;
    null != toArrayResult.find(K);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      cResult[13] = X;
    } else {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
    }
    const found = toArrayResult.filter(X);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      cResult[14] = tmp34;
    } else {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      cResult[15] = tmp36;
    } else {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
    }
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    if (hasIcons == null) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
    }
    const element = found[found.length - 1];
    let flag = false;
    if (react.isValidElement(element)) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      flag = false;
      if (element.type !== FormDividerDefault) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
        if (null != element.props) {
          class X {
            constructor(arg0) {
              tmp = closure_1_3.isValidElement(arg0);
              if (tmp) {
                tmp2 = closure_1_1;
                tmp3 = closure_1_2;
                tmp = arg0.type !== closure_1_1(closure_1_2[10]);
              }
              return tmp;
            }
          }
          flag = "error" in tmp38 && null != tmp38.error;
        }
      }
    }
    cResult[0] = children;
    cResult[1] = hasIcons;
    cResult[2] = title;
    cResult[3] = TableRowGroup;
    cResult[4] = React3;
    cResult[5] = React3;
    cResult[6] = found;
    cResult[7] = title;
    cResult[8] = hasIcons;
    cResult[9] = flag;
    cResult[10] = tmp36;
    cResult[11] = tmp34;
    tmp24 = flag;
    tmp26 = tmp34;
    tmp25 = tmp36;
    tmp23 = hasIcons;
    tmp22 = title;
    tmp21 = found;
    tmp20 = React3;
    tmp19 = React3;
    tmp18 = TableRowGroup;
  } else {
    class X {
      constructor(arg0) {
        tmp = closure_1_3.isValidElement(arg0);
        if (tmp) {
          tmp2 = closure_1_1;
          tmp3 = closure_1_2;
          tmp = arg0.type !== closure_1_1(closure_1_2[10]);
        }
        return tmp;
      }
    }
    if (null != title) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      let str = "";
      if (null != error) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
        const _HermesInternal = HermesInternal;
        str = "(" + error + ")";
      }
      const _HermesInternal2 = HermesInternal;
      const combined = "" + title + " " + str;
      if (cResult[33] === icon) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
      }
      const obj7 = { textStyle: titleTextStyle, viewStyle: titleViewStyle, title: combined, icon, error: null != error, thinTitle, uppercaseTitle, inset: undefined !== inset && inset };
      cResult[33] = icon;
      cResult[34] = undefined !== inset && inset;
      cResult[35] = combined;
      cResult[36] = null != error;
      cResult[37] = thinTitle;
      cResult[38] = titleTextStyle;
      cResult[39] = titleViewStyle;
      cResult[40] = uppercaseTitle;
      cResult[41] = metroRequire(FormTitleDefault, obj7);
      const tmp14 = metroRequire(FormTitleDefault, obj7);
    }
    const emptySectionHeader = tmp6.emptySectionHeader;
    if (null != undefined) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      if (TitleStyleType.DEFAULT === titleStyleType) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
      } else {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
      }
    }
    if (cResult[42] === emptySectionHeader) {
      class X {
        constructor(arg0) {
          tmp = closure_1_3.isValidElement(arg0);
          if (tmp) {
            tmp2 = closure_1_1;
            tmp3 = closure_1_2;
            tmp = arg0.type !== closure_1_1(closure_1_2[10]);
          }
          return tmp;
        }
      }
      if (accessibilityRole == null) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
      }
      if (accessibilityLabel == null) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
      }
      if (cResult[45] === sectionBodyStyle) {
        class X {
          constructor(arg0) {
            tmp = closure_1_3.isValidElement(arg0);
            if (tmp) {
              tmp2 = closure_1_1;
              tmp3 = closure_1_2;
              tmp = arg0.type !== closure_1_1(closure_1_2[10]);
            }
            return tmp;
          }
        }
      }
      const items1 = [tmp6.sectionBody, !tmp4 && tmp6.sectionBodyIOSBorder, sectionBodyStyle];
      cResult[45] = sectionBodyStyle;
      cResult[46] = tmp6.sectionBody;
      cResult[47] = !(undefined !== inset && inset) && tmp6.sectionBodyIOSBorder;
      cResult[48] = items1;
    }
    const items2 = [emptySectionHeader, wrapperStyle];
    cResult[42] = emptySectionHeader;
    cResult[43] = wrapperStyle;
    cResult[44] = items2;
  }
}) : ((arg0) => {
  let TableRowGroup;
  let accessibilityLabel;
  let accessibilityRole;
  let children;
  let description;
  let error;
  let flag;
  let hasIcons;
  let hint;
  let icon;
  let inset;
  let items;
  let items1;
  let items2;
  let obj4;
  let sectionBodyStyle;
  let thinTitle;
  let title;
  let titleStyleType;
  let titleTextStyle;
  let titleViewStyle;
  let uppercaseTitle;
  let wrapperStyle;
  ({ children, inset } = arg0);
  ({ icon, thinTitle } = arg0);
  if (inset === undefined) {
    inset = false;
  }
  ({ title, accessibilityRole, accessibilityLabel, titleStyleType, description, uppercaseTitle } = arg0);
  if (titleStyleType === undefined) {
    titleStyleType = TitleStyleType.DEFAULT;
  }
  ({ error, hint, hasIcons } = arg0);
  ({ titleViewStyle, titleTextStyle, sectionBodyStyle, wrapperStyle } = arg0);
  const tmp2 = closure_8();
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    const Children = react.Children;
    const toArrayResult = Children.toArray(children);
    const tmp17 = null != toArrayResult.find((type) => {
      let isValidElementResult = react.isValidElement(type) && type.type === FormRowDefault;
      if (isValidElementResult) {
        const _Boolean = Boolean;
        isValidElementResult = Boolean(type.props.leading);
      }
      return isValidElementResult;
    });
    const found = toArrayResult.filter((type) => {
      const isValidElementResult = react.isValidElement(type) && type.type !== FormDividerDefault;
      return isValidElementResult;
    });
    const obj2 = { style: { marginBottom: 24 }, children: items };
    const obj3 = { style: { paddingHorizontal: 12 }, children: metroRequire(TableRowGroup, obj4) };
    obj4 = { title, hasIcons, hasTrailingText: flag, children: found };
    TableRowGroup = TableRowGroup2.TableRowGroup;
    if (hasIcons == null) {
      hasIcons = tmp17;
    }
    const element = found[found.length - 1];
    flag = false;
    if (react.isValidElement(element)) {
      flag = false;
      if (element.type !== FormDividerDefault) {
        flag = false;
        if (null != element.props) {
          const props = element.props;
          flag = "error" in props && null != props.error;
        }
      }
    }
    items = [metroRequire(React3, obj3), ];
    let tmp20Result = null;
    if (null != hint) {
      const obj5 = { style: { marginTop: 8 }, children: hint };
      tmp20Result = metroRequire(React3, obj5);
    }
    items[1] = tmp20Result;
    return metroImportDefault(React3, obj2);
  } else {
    let tmp6;
    if (null != title) {
      let str2 = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str2 = "(" + error + ")";
      }
      const _HermesInternal2 = HermesInternal;
      const obj6 = { textStyle: titleTextStyle, viewStyle: titleViewStyle, title: "" + title + " " + str2, icon, error: null != error, thinTitle, uppercaseTitle, inset };
      const tmp10 = FormTitleDefault;
      tmp6 = metroRequire(tmp10, obj6);
    }
    const emptySectionHeader = tmp2.emptySectionHeader;
    let titledSectionNoBorderOrMargin = emptySectionHeader;
    if (null != tmp6) {
      if (TitleStyleType.DEFAULT === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
      } else if (TitleStyleType.ANDROID_NO_BORDER === titleStyleType) {
        const tmp3Result = PlatformUtils;
        titledSectionNoBorderOrMargin = tmp3Result.isAndroid() ? tmp2.titledSectionNoBorder : tmp2.titledSectionHeader;
      } else {
        titledSectionNoBorderOrMargin = emptySectionHeader;
        if (TitleStyleType.NO_BORDER_OR_MARGIN === titleStyleType) {
          titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
        }
      }
    }
    const obj7 = { style: items1, accessibilityRole, accessibilityLabel, children: items2 };
    items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
    if (accessibilityRole == null) {
      accessibilityRole = "list";
    }
    if (accessibilityLabel == null) {
      accessibilityLabel = title;
    }
    items2 = [tmp6, description, , ];
    const items3 = [tmp2.sectionBody, , ];
    const sectionBodyIOSBorder = !inset && tmp2.sectionBodyIOSBorder;
    const obj8 = { style: items3, children };
    items3[1] = sectionBodyIOSBorder;
    items3[2] = sectionBodyStyle;
    items2[2] = metroRequire(React3, obj8);
    items2[3] = hint;
    return metroImportDefault(React3, obj7);
  }
});
const result = size.fileFinishedImporting("design/void/Form/native/FormSection.tsx");

export default tmp4;