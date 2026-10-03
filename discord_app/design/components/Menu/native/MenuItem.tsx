// === Module 14205: MenuItem ===

// Module 14205 (MenuItem)
import c from "c" /* 576 */;
import IconDefault from "Icon" /* 5596 */;
import FormRowDefault from "FormRow" /* 6633 */;
import FormLabelDefault from "FormLabel" /* 6635 */;
import Menu from "Menu" /* 14203 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles({ formIcon: { width: 20, height: 20 }, formLabel: { fontSize: 14, fontWeight: "500" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export const MenuItem = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(18);
  ({ label, IconComponent, iconSource, showIconFirst, style, disabled, action } = arg0);
  const tmp6 = closure_5();
  const menuClose = noop.useContext(Menu.MenuContext).menuClose;
  if (cResult[0] === action) {
    if (cResult[1] === menuClose) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === IconComponent) {
      if (cResult[4] === iconSource) {
        if (cResult[5] === tmp6) {
          let tmp16 = null;
          if (null != iconSource) {
            tmp16 = null;
            if (tmp4) {
              tmp16 = tmp8;
            }
          }
          let tmp17 = null;
          if (null != iconSource) {
            tmp17 = null;
            if (!tmp4) {
              tmp17 = tmp8;
            }
          }
          if (cResult[7] === label) {
            if (cResult[8] === tmp6) {
              let tmp18 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === ref) {
                  if (cResult[13] === style) {
                    if (cResult[14] === tmp16) {
                      if (cResult[15] === tmp17) {
                        if (cResult[16] === tmp18) {
                          let tmp21 = cResult[17];
                        }
                        return tmp21;
                      }
                    }
                  }
                }
              }
            }
            const obj2 = { ref, style, accessibilityRole: "menuitem", disabled: tmp5, leading: tmp16, trailing: tmp17, label: tmp18, onPress: tmp7 };
            const tmp24 = jsx(FormRowDefault, { ref, style, accessibilityRole: "menuitem", disabled: tmp5, leading: tmp16, trailing: tmp17, label: tmp18, onPress: tmp7 });
            cResult[10] = tmp5;
            cResult[11] = tmp7;
            cResult[12] = ref;
            cResult[13] = style;
            cResult[14] = tmp16;
            cResult[15] = tmp17;
            cResult[16] = tmp18;
            cResult[17] = tmp24;
            tmp21 = tmp24;
          }
          let tmp19 = label;
          if (typeof label === "string") {
            const obj3 = { text: label, style: tmp6.formLabel };
            tmp19 = jsx(FormLabelDefault, { text: label, style: tmp6.formLabel });
          }
          cResult[7] = label;
          cResult[8] = tmp6;
          cResult[9] = tmp19;
          tmp18 = tmp19;
        }
      }
    }
    if (null != IconComponent) {
      let tmp10 = <IconComponent size="sm" />;
    } else {
      tmp10 = null;
      if (null != iconSource) {
        const obj4 = { source: iconSource, style: tmp6.formIcon };
        tmp10 = jsx(IconDefault, { source: iconSource, style: tmp6.formIcon });
      }
    }
    cResult[3] = IconComponent;
    cResult[4] = iconSource;
    cResult[5] = tmp6;
    cResult[6] = tmp10;
  }
  const fn = function u() {
    action();
    menuClose();
  };
  cResult[0] = action;
  cResult[1] = menuClose;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((action, ref) => {
  ({ label, IconComponent, iconSource, showIconFirst } = action);
  if (showIconFirst === undefined) {
    showIconFirst = false;
  }
  ({ disabled, style } = action);
  if (disabled === undefined) {
    disabled = false;
  }
  action = action.action;
  const tmp = closure_5();
  const menuClose = noop.useContext(Menu.MenuContext).menuClose;
  if (null != IconComponent) {
    let tmp3 = <IconComponent size="sm" />;
  } else {
    tmp3 = null;
    if (null != iconSource) {
      const obj = { source: iconSource, style: tmp.formIcon };
      tmp3 = jsx(IconDefault, { source: iconSource, style: tmp.formIcon });
    }
  }
  const obj2 = { ref, style, accessibilityRole: "menuitem", disabled, leading: null, trailing: null, label: null, onPress: null };
  let tmp10 = null;
  if (null != iconSource) {
    tmp10 = null;
    if (showIconFirst) {
      tmp10 = tmp3;
    }
  }
  obj2.leading = tmp10;
  let tmp11 = null;
  if (null != iconSource) {
    tmp11 = null;
    if (!showIconFirst) {
      tmp11 = tmp3;
    }
  }
  obj2.trailing = tmp11;
  let tmp7Result = label;
  if (typeof label === "string") {
    const obj3 = { text: label, style: tmp.formLabel };
    tmp7Result = jsx(FormLabelDefault, { text: label, style: tmp.formLabel });
  }
  obj2.label = tmp7Result;
  obj2.onPress = function onPress() {
    action();
    menuClose();
  };
  return jsx(FormRowDefault, { ref, style, accessibilityRole: "menuitem", disabled, leading: null, trailing: null, label: null, onPress: null });
}));