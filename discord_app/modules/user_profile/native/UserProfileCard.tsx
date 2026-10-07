// discord_app/modules/user_profile/native/UserProfileCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["title", "titleLeadingIcon", "titleIcon", "titleStyle", "trailingAction", "children", "style"];
const View = fn(17).View;
const Constants = fn(6714);
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  title: {
    marginBottom: nativeDefault.space.PX_12,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
  },
  titleContent: null,
  text: null,
  row: null,
  rowLabel: null,
  rowLabelText: null,
  rowSublabel: null,
};
let obj3 = {
  marginBottom: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.titleContent = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.text = { flexShrink: 1 };
obj2.row = { flexDirection: "column", paddingVertical: 20 };
obj2.rowLabel = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
obj2.rowLabelText = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
obj2.rowSublabel = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(28);
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
        if (cResult[1] === str) {
          let tmp6 = cResult[2];
        }
        if (labelColor == null) {
          labelColor = str2;
        }
        if (cResult[3] === label) {
          if (cResult[4] === tmp5.rowLabelText) {
            if (cResult[5] === labelColor) {
              let tmp9 = cResult[6];
            }
            if (cResult[7] === hint) {
              if (cResult[8] === str) {
                let tmp12 = cResult[9];
              }
              if (cResult[10] !== tmp4) {
                let tmp17 = tmp4;
                if (tmp4) {
                  tmp17 = React5(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
                }
                cResult[10] = tmp4;
                cResult[11] = tmp17;
                let tmp16 = tmp17;
              } else {
                tmp16 = cResult[11];
              }
              if (cResult[12] === tmp5.rowLabel) {
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp9) {
                    if (cResult[15] === tmp12) {
                      if (cResult[16] === tmp16) {
                        let tmp19 = cResult[17];
                      }
                      if (cResult[18] === tmp5.rowSublabel) {
                        if (cResult[19] === sublabel) {
                          let tmp23 = cResult[20];
                        }
                        if (cResult[21] === disabled) {
                          if (cResult[22] === label) {
                            if (cResult[23] === onPress) {
                              if (cResult[24] === tmp5.row) {
                                if (cResult[25] === tmp19) {
                                  if (cResult[26] === tmp23) {
                                    let tmp27 = cResult[27];
                                  }
                                  return tmp27;
                                }
                              }
                            }
                          }
                        }
                        const obj2 = {
                          style: tmp5.row,
                          accessibilityRole: "button",
                          accessibilityLabel: label,
                          disabled,
                          onPress,
                          children: null,
                        };
                        const items = [tmp19, tmp23];
                        obj2.children = items;
                        const tmp29 = closure_1_8(Pressables.PressableOpacity, obj2);
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
                        tmp24 = React5(View, obj3);
                      }
                      cResult[18] = tmp5.rowSublabel;
                      cResult[19] = sublabel;
                      cResult[20] = tmp24;
                      tmp23 = tmp24;
                    }
                  }
                }
              }
              const obj4 = { style: tmp5.rowLabel, children: null };
              const items1 = [tmp6, tmp9, tmp12, tmp16];
              obj4.children = items1;
              const tmp22 = closure_1_8(View, obj4);
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
              const obj5 = { size, color: str };
              tmp13 = React5(hint, obj5);
            }
            cResult[7] = hint;
            cResult[8] = str;
            cResult[9] = tmp13;
            tmp12 = tmp13;
          }
        }
        const obj6 = { variant: "text-md/semibold", color: labelColor, style: tmp5.rowLabelText, children: label };
        const tmp11 = React5(Text_Text.Text, obj6);
        cResult[3] = label;
        cResult[4] = tmp5.rowLabelText;
        cResult[5] = labelColor;
        cResult[6] = tmp11;
        tmp9 = tmp11;
      }
      const tmp7 = React5(icon, { size, color: str });
      cResult[0] = icon;
      cResult[1] = str;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj7 = { size, color: str };
    }
  : (arg0) => {
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
      const obj = {
        style: tmp.row,
        accessibilityRole: "button",
        accessibilityLabel: label,
        disabled,
        onPress,
        children: null,
      };
      const obj2 = { style: tmp.rowLabel, children: null };
      const items = [React5(icon, { size, color: str }), , ,];
      if (labelColor == null) {
        labelColor = str2;
      }
      items[1] = React5(Text_Text.Text, {
        variant: "text-md/semibold",
        color: labelColor,
        style: tmp.rowLabelText,
        children: label,
      });
      let tmp6Result = null != hint;
      if (tmp6Result) {
        const obj5 = { size, color: str };
        tmp6Result = React5(hint, obj5);
      }
      items[2] = tmp6Result;
      if (tmp6Result3) {
        tmp6Result3 = React5(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
      }
      items[3] = tmp6Result3;
      obj2.children = items;
      const items1 = [closure_1_8(View, obj2)];
      let tmp6Result4 = null != sublabel;
      if (tmp6Result4) {
        const obj6 = { style: tmp.rowSublabel, children: sublabel };
        tmp6Result4 = React5(View, obj6);
      }
      items1[1] = tmp6Result4;
      obj.children = items1;
      return closure_1_8(Pressables.PressableOpacity, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(5);
      children = children.children;
      if (cResult[0] !== children) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(children, arg1) {
            return closure_1_7(React.Fragment, { children }, arg1);
          };
          cResult[2] = fn;
          let tmp4 = fn;
        } else {
          tmp4 = cResult[2];
        }
        const Children = noop.Children;
        const mapped = Children.map(children, tmp4);
        cResult[0] = children;
        cResult[1] = mapped;
      } else {
        if (cResult[3] !== cResult[1]) {
          const obj2 = { children: tmp2 };
          const tmp11 = React5(options, obj2);
          cResult[3] = tmp2;
          cResult[4] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
    }
  : (children) => {
      const obj = { children: null };
      const Children = noop.Children;
      obj.children = Children.map(children.children, (children, arg1) =>
        closure_1_7(React.Fragment, { children }, arg1),
      );
      return React5(options, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(21);
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
        let tmp11 = trailingAction;
        let tmp10 = titleStyle;
        let tmp9 = titleLeadingIcon;
        let tmp8 = titleIcon;
        let tmp7 = title;
        let tmp6 = style;
        let tmp5 = tmp14;
        let tmp4 = children;
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
                if (cResult[14] === tmp11) {
                  let tmp16 = cResult[15];
                }
                if (cResult[16] === tmp4) {
                  if (cResult[17] === tmp5) {
                    if (cResult[18] === tmp6) {
                      if (cResult[19] === tmp16) {
                        let tmp22 = cResult[20];
                      }
                      return tmp22;
                    }
                  }
                }
                const obj2 = { style: tmp6 };
                const merged = Object.assign(tmp5);
                const items = [tmp16, tmp4];
                obj2.children = items;
                const tmp28 = closure_1_8(View, obj2);
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
        const obj3 = { style: null, children: null };
        const items1 = [tmp15.title, tmp10];
        obj3.style = items1;
        let tmp18Result = null != tmp7;
        if (tmp18Result) {
          const obj4 = { style: tmp15.titleContent, children: null };
          const items2 = [tmp9, ,];
          const obj5 = {
            style: tmp15.text,
            accessibilityRole: "header",
            variant: "text-sm/medium",
            color: "text-strong",
            lineClamp: 1,
            children: tmp7,
          };
          items2[1] = React5(Text_Text.Text, obj5);
          items2[2] = tmp8;
          obj4.children = items2;
          tmp18Result = closure_1_8(View, obj4);
        }
        const items3 = [tmp18Result, tmp11];
        obj3.children = items3;
        tmp18Result2 = closure_1_8(View, obj3);
      }
      cResult[9] = tmp15;
      cResult[10] = tmp7;
      cResult[11] = tmp8;
      cResult[12] = tmp9;
      cResult[13] = tmp10;
      cResult[14] = tmp11;
      cResult[15] = tmp18Result2;
      tmp16 = tmp18Result2;
    }
  : (arg0) => {
      ({ title, trailingAction } = arg0);
      ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
      const merged = Object.assign(
        arg0,
        Object.assign({
          title: 0,
          titleLeadingIcon: 0,
          titleIcon: 0,
          titleStyle: 0,
          trailingAction: 0,
          children: 0,
          style: 0,
        }),
      );
      const tmp2 = closure_10();
      const obj = { style };
      const merged1 = Object.assign(merged);
      let tmp3Result2 = null != title || null != trailingAction;
      if (tmp3Result2) {
        const obj2 = { style: null, children: null };
        const items = [tmp2.title, titleStyle];
        obj2.style = items;
        let tmp3Result = null != title;
        if (tmp3Result) {
          const obj3 = { style: tmp2.titleContent, children: null };
          const items1 = [titleLeadingIcon, ,];
          const obj4 = {
            style: tmp2.text,
            accessibilityRole: "header",
            variant: "text-sm/medium",
            color: "text-strong",
            lineClamp: 1,
            children: title,
          };
          items1[1] = React5(Text_Text.Text, obj4);
          items1[2] = titleIcon;
          obj3.children = items1;
          tmp3Result = closure_1_8(View, obj3);
        }
        const items2 = [tmp3Result, trailingAction];
        obj2.children = items2;
        tmp3Result2 = closure_1_8(View, obj2);
      }
      const items3 = [tmp3Result2, children];
      obj.children = items3;
      return closure_1_8(View, obj);
    };
export const UserProfileFormRow = tmp4;
export const UserProfileCardRows = tmp5;
