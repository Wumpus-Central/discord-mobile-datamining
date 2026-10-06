// === Module 6713: UserProfileCard ===

// Module 6713 (UserProfileCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 6715 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6714 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let CARD_ROWS_COLUMN_GAP;
let CARD_ROWS_ICON_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let closure_2 = ["title", "titleLeadingIcon", "titleIcon", "titleStyle", "trailingAction", "children", "style"];
const View = react_native.View;
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: obj2, titleContent: obj3, text: { flexShrink: 1 }, row: { flexDirection: "column", paddingVertical: 20 }, rowLabel: { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP }, rowLabelText: { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE }, rowSublabel: { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP } };
obj2 = { marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arrow;
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let items;
  let items1;
  let label;
  let labelColor;
  let onPress;
  let sublabel;
  const obj = react2;
  const cResult = obj.c(28);
  ({ label, sublabel, icon, hint, disabled, isDestructive, onPress, labelColor, arrow } = arg0);
  const tmp5 = closure_10();
  let str;
  if (isDestructive) {
    str = "text-feedback-critical";
  }
  let str2 = "mobile-text-heading-primary";
  if (isDestructive) {
    str2 = "text-feedback-critical";
  }
  if (cResult[0] === icon) {
    let tmp6;
    if (cResult[1] === str) {
      tmp6 = cResult[2];
    }
    if (labelColor == null) {
      labelColor = str2;
    }
    if (cResult[3] === label) {
      if (cResult[4] === tmp5.rowLabelText) {
        let tmp9;
        if (cResult[5] === labelColor) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === hint) {
          let tmp12;
          let tmp16;
          if (cResult[8] === str) {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== (undefined !== arrow && arrow)) {
            const tmp17 = tmp4 && metroImportDefault(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
            cResult[10] = undefined !== arrow && arrow;
            cResult[11] = tmp17;
            tmp16 = tmp17;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp5.rowLabel) {
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === tmp12) {
                  let tmp19;
                  if (cResult[16] === tmp16) {
                    tmp19 = cResult[17];
                  }
                  if (cResult[18] === tmp5.rowSublabel) {
                    let tmp23;
                    if (cResult[19] === sublabel) {
                      tmp23 = cResult[20];
                    }
                    if (cResult[21] === disabled) {
                      if (cResult[22] === label) {
                        if (cResult[23] === onPress) {
                          if (cResult[24] === tmp5.row) {
                            if (cResult[25] === tmp19) {
                              let tmp27;
                              if (cResult[26] === tmp23) {
                                tmp27 = cResult[27];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                    }
                    const obj2 = { style: tmp5.row, accessibilityRole: "button", accessibilityLabel: label, disabled, onPress, children: items };
                    items = [tmp19, tmp23];
                    const tmp29 = metroImportAll(Pressables.PressableOpacity, obj2);
                    cResult[21] = disabled;
                    cResult[22] = label;
                    cResult[23] = onPress;
                    cResult[24] = tmp5.row;
                    cResult[25] = tmp19;
                    cResult[26] = tmp23;
                    cResult[27] = tmp29;
                    tmp27 = tmp29;
                  }
                  let tmp24 = null != sublabel;
                  if (tmp24) {
                    const obj3 = { style: tmp5.rowSublabel, children: sublabel };
                    tmp24 = metroImportDefault(View, obj3);
                  }
                  cResult[18] = tmp5.rowSublabel;
                  cResult[19] = sublabel;
                  cResult[20] = tmp24;
                  tmp23 = tmp24;
                }
              }
            }
          }
          const obj4 = { style: tmp5.rowLabel, children: items1 };
          items1 = [tmp6, tmp9, tmp12, tmp16];
          const tmp22 = metroImportAll(View, obj4);
          cResult[12] = tmp5.rowLabel;
          cResult[13] = tmp6;
          cResult[14] = tmp9;
          cResult[15] = tmp12;
          cResult[16] = tmp16;
          cResult[17] = tmp22;
          tmp19 = tmp22;
        }
        let tmp13 = null != hint;
        if (tmp13) {
          const obj5 = { size: metroRequire, color: str };
          tmp13 = metroImportDefault(hint, obj5);
        }
        cResult[7] = hint;
        cResult[8] = str;
        cResult[9] = tmp13;
        tmp12 = tmp13;
      }
    }
    const obj6 = { variant: "text-md/semibold", color: labelColor, style: tmp5.rowLabelText, children: label };
    const tmp11 = metroImportDefault(Text_Text.Text, obj6);
    cResult[3] = label;
    cResult[4] = tmp5.rowLabelText;
    cResult[5] = labelColor;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
  const obj7 = { size: metroRequire, color: str };
  const tmp7 = metroImportDefault(icon, obj7);
  cResult[0] = icon;
  cResult[1] = str;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  let arrow;
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let items;
  let items1;
  let label;
  let labelColor;
  let onPress;
  let sublabel;
  let tmp6Result3;
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result3 === undefined) {
    tmp6Result3 = false;
  }
  const tmp = closure_10();
  let str;
  if (isDestructive) {
    str = "text-feedback-critical";
  }
  let str2 = "mobile-text-heading-primary";
  if (isDestructive) {
    str2 = "text-feedback-critical";
  }
  const obj = { style: tmp.row, accessibilityRole: "button", accessibilityLabel: label, disabled, onPress, children: items1 };
  const obj2 = { style: tmp.rowLabel, children: items };
  const obj3 = { size: metroRequire, color: str };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [metroImportDefault(icon, obj3), , , ];
  const Text = Text_Text.Text;
  if (labelColor == null) {
    labelColor = str2;
  }
  const obj4 = { variant: "text-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label };
  items[1] = metroImportDefault(Text, obj4);
  let tmp6Result = null != hint;
  if (tmp6Result) {
    const obj5 = { size: metroRequire, color: str };
    tmp6Result = metroImportDefault(hint, obj5);
  }
  items[2] = tmp6Result;
  if (tmp6Result3) {
    tmp6Result3 = metroImportDefault(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result3;
  items1 = [metroImportAll(View, obj2), ];
  let tmp6Result4 = null != sublabel;
  if (tmp6Result4) {
    const obj6 = { style: tmp.rowSublabel, children: sublabel };
    tmp6Result4 = metroImportDefault(View, obj6);
  }
  items1[1] = tmp6Result4;
  return metroImportAll(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp2;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
  children = children.children;
  if (cResult[0] !== children) {
    let tmp4;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(children, arg1) {
        const obj = { children };
        return closure_1_7(React.Fragment, obj, arg1);
      };
      cResult[2] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const Children = react.Children;
    const mapped = Children.map(children, tmp4);
    cResult[0] = children;
    cResult[1] = mapped;
    tmp2 = mapped;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[3] !== tmp2) {
    const obj2 = { children: tmp2 };
    const tmp10 = metroImportDefault(React4, obj2);
    cResult[3] = tmp2;
    cResult[4] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[4];
  }
  return tmp7;
}) : ((children) => {
  let Children;
  let obj = {
    children: Children.map(children.children, (children, arg1) => {
      const obj = { children };
      return closure_1_7(React.Fragment, obj, arg1);
    })
  };
  Children = react.Children;
  return metroImportDefault(React4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let title;
  let titleIcon;
  let titleLeadingIcon;
  let titleStyle;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let trailingAction;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== arg0) {
    ({ title, titleLeadingIcon, titleIcon, titleStyle, trailingAction, children, style } = arg0);
    const tmp14 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp14;
    cResult[3] = style;
    cResult[4] = title;
    cResult[5] = titleIcon;
    cResult[6] = titleLeadingIcon;
    cResult[7] = titleStyle;
    cResult[8] = trailingAction;
    tmp11 = trailingAction;
    tmp10 = titleStyle;
    tmp9 = titleLeadingIcon;
    tmp8 = titleIcon;
    tmp7 = title;
    tmp6 = style;
    tmp5 = tmp14;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
  }
  const tmp15 = closure_10();
  if (cResult[9] === tmp15) {
    if (cResult[10] === tmp7) {
      if (cResult[11] === tmp8) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp10) {
            let tmp16;
            if (cResult[14] === tmp11) {
              tmp16 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp6) {
                  let tmp22;
                  if (cResult[19] === tmp16) {
                    tmp22 = cResult[20];
                  }
                  return tmp22;
                }
              }
            }
            const obj2 = { style: tmp6, children: items };
            const merged = Object.assign(tmp5);
            items = [tmp16, tmp4];
            const tmp28 = metroImportAll(View, obj2);
            cResult[16] = tmp4;
            cResult[17] = tmp5;
            cResult[18] = tmp6;
            cResult[19] = tmp16;
            cResult[20] = tmp28;
            tmp22 = tmp28;
          }
        }
      }
    }
  }
  let tmp18Result2 = null != tmp7 || null != tmp11;
  if (tmp18Result2) {
    const obj3 = { style: items1, children: items3 };
    items1 = [tmp15.title, tmp10];
    let tmp18Result = null != tmp7;
    if (tmp18Result) {
      const obj4 = { style: tmp15.titleContent, children: items2 };
      items2 = [tmp9, , ];
      const obj5 = { style: tmp15.text, accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp7 };
      items2[1] = metroImportDefault(Text_Text.Text, obj5);
      items2[2] = tmp8;
      tmp18Result = metroImportAll(View, obj4);
    }
    items3 = [tmp18Result, tmp11];
    tmp18Result2 = metroImportAll(View, obj3);
  }
  cResult[9] = tmp15;
  cResult[10] = tmp7;
  cResult[11] = tmp8;
  cResult[12] = tmp9;
  cResult[13] = tmp10;
  cResult[14] = tmp11;
  cResult[15] = tmp18Result2;
  tmp16 = tmp18Result2;
}) : ((arg0) => {
  let children;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let title;
  let titleIcon;
  let titleLeadingIcon;
  let titleStyle;
  let trailingAction;
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, titleLeadingIcon: 0, titleIcon: 0, titleStyle: 0, trailingAction: 0, children: 0, style: 0 }));
  const tmp2 = closure_10();
  const obj = { style, children: items3 };
  const merged1 = Object.assign(merged);
  let tmp3Result2 = null != title || null != trailingAction;
  if (tmp3Result2) {
    const obj2 = { style: items, children: items2 };
    items = [tmp2.title, titleStyle];
    let tmp3Result = null != title;
    if (tmp3Result) {
      const obj3 = { style: tmp2.titleContent, children: items1 };
      items1 = [titleLeadingIcon, , ];
      const obj4 = { style: tmp2.text, accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: title };
      items1[1] = metroImportDefault(Text_Text.Text, obj4);
      items1[2] = titleIcon;
      tmp3Result = metroImportAll(View, obj3);
    }
    items2 = [tmp3Result, trailingAction];
    tmp3Result2 = metroImportAll(View, obj2);
  }
  items3 = [tmp3Result2, children];
  return metroImportAll(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default tmp7;
export const UserProfileFormRow = tmp5;
export const UserProfileCardRows = tmp6;