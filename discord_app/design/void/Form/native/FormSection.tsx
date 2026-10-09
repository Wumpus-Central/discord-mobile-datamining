// discord_app/design/void/Form/native/FormSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import TableRowGroup2 from "../../../components/TableRow/native/TableRowGroup.native.tsx";
import FormRowDefault from "FormRow.tsx";
import FormDividerDefault from "FormDivider.tsx";
import FormTitleDefault from "FormTitle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, Platform } = get_ActivityIndicator);
const TitleStyleType = fn(1204).TitleStyleType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  titledSectionHeader: { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 16 },
  titledSectionNoBorder: { marginTop: 24 },
  titledSectionNoBorderOrMargin: {},
  emptySectionHeader: { marginTop: 24 },
  sectionBody: {},
  sectionBodyIOSBorder: {},
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormSection(arg0) {
      const cResult = c.c(60);
      ({
        icon,
        children,
        thinTitle,
        inset,
        title,
        description,
        accessibilityRole,
        accessibilityLabel,
        uppercaseTitle,
        titleStyleType,
        titleViewStyle,
        titleTextStyle,
        sectionBodyStyle,
        wrapperStyle,
        error,
        hint,
        hasIcons,
      } = arg0);
      if (undefined === titleStyleType) {
        titleStyleType = TitleStyleType.DEFAULT;
      }
      const tmp6 = closure_8();
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        if (cResult[0] === children) {
          if (cResult[1] === hasIcons) {
            if (cResult[2] === title) {
              let tmp19 = cResult[3];
              let tmp20 = cResult[4];
              let tmp21 = cResult[5];
              let tmp22 = cResult[6];
              let tmp23 = cResult[7];
              let tmp24 = cResult[8];
              let tmp25 = cResult[9];
              let tmp26 = cResult[10];
              let tmp27 = cResult[11];
            }
            if (cResult[16] === tmp19) {
              if (cResult[17] === tmp22) {
                if (cResult[18] === tmp23) {
                  if (cResult[19] === tmp24) {
                    if (cResult[20] === tmp25) {
                      let tmp41 = cResult[21];
                    }
                    if (cResult[22] === tmp20) {
                      if (cResult[23] === tmp26) {
                        if (cResult[24] === tmp41) {
                          let tmp44 = cResult[25];
                        }
                        if (cResult[26] !== hint) {
                          let tmp48 = null;
                          if (null != hint) {
                            const obj3 = { style: { marginTop: 8 }, children: hint };
                            tmp48 = timestampProducer(React4, obj3);
                          }
                          cResult[26] = hint;
                          cResult[27] = tmp48;
                          let tmp47 = tmp48;
                        } else {
                          tmp47 = cResult[27];
                        }
                        if (cResult[28] === tmp21) {
                          if (cResult[29] === tmp47) {
                            if (cResult[30] === tmp27) {
                              if (cResult[31] === tmp44) {
                                let tmp51 = cResult[32];
                              }
                              return tmp51;
                            }
                          }
                        }
                        const obj4 = { style: tmp27, children: null };
                        const items = [tmp44, tmp47];
                        obj4.children = items;
                        const tmp53 = React5(tmp21, obj4);
                        cResult[28] = tmp21;
                        cResult[29] = tmp47;
                        cResult[30] = tmp27;
                        cResult[31] = tmp44;
                        cResult[32] = tmp53;
                        tmp51 = tmp53;
                      }
                    }
                    const obj5 = { style: tmp26, children: tmp41 };
                    const tmp46 = timestampProducer(tmp20, obj5);
                    cResult[22] = tmp20;
                    cResult[23] = tmp26;
                    cResult[24] = tmp41;
                    cResult[25] = tmp46;
                    tmp44 = tmp46;
                  }
                }
              }
            }
            const obj6 = { title: tmp23, hasIcons: tmp24, hasTrailingText: tmp25, children: tmp22 };
            const tmp43 = timestampProducer(tmp19, obj6);
            cResult[16] = tmp19;
            cResult[17] = tmp22;
            cResult[18] = tmp23;
            cResult[19] = tmp24;
            cResult[20] = tmp25;
            cResult[21] = tmp43;
            tmp41 = tmp43;
          }
        }
        const Children = noop.Children;
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
          cResult[14] = tmp35;
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
          cResult[15] = tmp37;
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
        if (noop.isValidElement(element)) {
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
              flag = "error" in tmp39 && null != tmp39.error;
              const tmp40 = "error" in tmp39 && null != tmp39.error;
            }
          }
        }
        cResult[0] = children;
        cResult[1] = hasIcons;
        cResult[2] = title;
        cResult[3] = TableRowGroup;
        cResult[4] = React4;
        cResult[5] = React4;
        cResult[6] = found;
        cResult[7] = title;
        cResult[8] = hasIcons;
        cResult[9] = flag;
        cResult[10] = tmp37;
        cResult[11] = tmp35;
        tmp25 = flag;
        tmp27 = tmp35;
        tmp26 = tmp37;
        tmp24 = hasIcons;
        tmp23 = title;
        tmp22 = found;
        tmp21 = React4;
        tmp20 = React4;
        tmp19 = TableRowGroup;
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
        if (null == title) {
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
          if (cResult[42] === tmp14) {
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
            if (!tmp4) {
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
            const items1 = [tmp6.sectionBody, !tmp4, sectionBodyStyle];
            cResult[45] = sectionBodyStyle;
            cResult[46] = tmp6.sectionBody;
            cResult[47] = !tmp4;
            cResult[48] = items1;
          }
          const items2 = [tmp14, wrapperStyle];
          cResult[42] = tmp14;
          cResult[43] = wrapperStyle;
          cResult[44] = items2;
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
          const obj7 = {
            textStyle: titleTextStyle,
            viewStyle: titleViewStyle,
            title: combined,
            icon,
            error: null != error,
            thinTitle,
            uppercaseTitle,
            inset: tmp4,
          };
          const tmp13 = timestampProducer(FormTitleDefault, obj7);
          cResult[33] = icon;
          cResult[34] = tmp4;
          cResult[35] = combined;
          cResult[36] = null != error;
          cResult[37] = thinTitle;
          cResult[38] = titleTextStyle;
          cResult[39] = titleViewStyle;
          cResult[40] = uppercaseTitle;
          cResult[41] = tmp13;
        }
      }
    }
  : function FormSection(arg0) {
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
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        const Children = noop.Children;
        const toArrayResult = Children.toArray(children);
        const found = toArrayResult.filter((type) => {
          let isValidElementResult = noop.isValidElement(type);
          if (isValidElementResult) {
            isValidElementResult = type.type !== FormDividerDefault;
          }
          return isValidElementResult;
        });
        const obj2 = { style: { marginBottom: 24 }, children: null };
        const obj3 = { style: { paddingHorizontal: 12 }, children: null };
        const obj4 = { title, hasIcons: null, hasTrailingText: null, children: null };
        if (hasIcons == null) {
          hasIcons = tmp17;
        }
        obj4.hasIcons = hasIcons;
        const element = found[found.length - 1];
        let flag = false;
        if (noop.isValidElement(element)) {
          flag = false;
          if (element.type !== FormDividerDefault) {
            flag = false;
            if (null != element.props) {
              const props = element.props;
              flag = "error" in props && null != props.error;
              const tmp22 = "error" in props && null != props.error;
            }
          }
        }
        obj4.hasTrailingText = flag;
        obj4.children = found;
        obj3.children = timestampProducer(TableRowGroup2.TableRowGroup, obj4);
        const items = [timestampProducer(React4, obj3)];
        let tmp20Result = null;
        if (null != hint) {
          const obj5 = { style: { marginTop: 8 }, children: hint };
          tmp20Result = timestampProducer(React4, obj5);
        }
        items[1] = tmp20Result;
        obj2.children = items;
        return React5(React4, obj2);
      } else {
        let tmp6;
        if (null != title) {
          let str2 = "";
          if (null != error) {
            const _HermesInternal = HermesInternal;
            str2 = "(" + error + ")";
          }
          const obj6 = {
            textStyle: titleTextStyle,
            viewStyle: titleViewStyle,
            title: null,
            icon: null,
            error: null,
            thinTitle: null,
            uppercaseTitle: null,
            inset: null,
          };
          const _HermesInternal2 = HermesInternal;
          obj6.title = "" + title + " " + str2;
          obj6.icon = icon;
          obj6.error = null != error;
          obj6.thinTitle = thinTitle;
          obj6.uppercaseTitle = uppercaseTitle;
          obj6.inset = inset;
          tmp6 = timestampProducer(FormTitleDefault, obj6);
        }
        const emptySectionHeader = tmp2.emptySectionHeader;
        let titledSectionNoBorderOrMargin = emptySectionHeader;
        if (null != tmp6) {
          if (TitleStyleType.DEFAULT === titleStyleType) {
            titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
          } else if (TitleStyleType.ANDROID_NO_BORDER === titleStyleType) {
            titledSectionNoBorderOrMargin = PlatformUtils.isAndroid()
              ? tmp2.titledSectionNoBorder
              : tmp2.titledSectionHeader;
            const tmp3Result = PlatformUtils;
          } else {
            titledSectionNoBorderOrMargin = emptySectionHeader;
            if (TitleStyleType.NO_BORDER_OR_MARGIN === titleStyleType) {
              titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
            }
          }
        }
        const obj7 = { style: null, accessibilityRole: null, accessibilityLabel: null, children: null };
        const items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
        obj7.style = items1;
        if (accessibilityRole == null) {
          accessibilityRole = "list";
        }
        obj7.accessibilityRole = accessibilityRole;
        if (accessibilityLabel == null) {
          accessibilityLabel = title;
        }
        obj7.accessibilityLabel = accessibilityLabel;
        const items2 = [tmp6, description, ,];
        const items3 = [tmp2.sectionBody, ,];
        let sectionBodyIOSBorder = !inset;
        if (!inset) {
          sectionBodyIOSBorder = tmp2.sectionBodyIOSBorder;
        }
        const obj8 = { style: null, children: null };
        items3[1] = sectionBodyIOSBorder;
        items3[2] = sectionBodyStyle;
        obj8.style = items3;
        obj8.children = children;
        items2[2] = timestampProducer(React4, obj8);
        items2[3] = hint;
        obj7.children = items2;
        return React5(React4, obj7);
      }
    };
