// === Module 14132: MenuItem ===

// Module 14132 (MenuItem)
import IconDefault from "Icon" /* 4977 */;
import FormRowDefault from "FormRow" /* 7137 */;
import FormLabelDefault from "FormLabel" /* 7139 */;
import Menu from "Menu" /* 14130 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ formIcon: { width: 20, height: 20 }, formLabel: { fontSize: 14, fontWeight: "500" } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export const MenuItem = noop.forwardRef((action, ref) => {
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
      let obj = { source: iconSource, style: tmp.formIcon };
      tmp3 = jsx(IconDefault, { source: iconSource, style: tmp.formIcon });
    }
  }
  obj = { ref, style, accessibilityRole: "menuitem", disabled, leading: null, trailing: null, label: null, onPress: null };
  let tmp10 = null;
  if (null != iconSource) {
    tmp10 = null;
    if (showIconFirst) {
      tmp10 = tmp3;
    }
  }
  obj.leading = tmp10;
  let tmp11 = null;
  if (null != iconSource) {
    tmp11 = null;
    if (!showIconFirst) {
      tmp11 = tmp3;
    }
  }
  obj.trailing = tmp11;
  let tmp7Result = label;
  if (typeof label === "string") {
    obj = { text: label, style: tmp.formLabel };
    tmp7Result = tmp7(FormLabelDefault, obj);
  }
  obj.label = tmp7Result;
  obj.onPress = function onPress() {
    action();
    menuClose();
  };
  return jsx(FormRowDefault, { ref, style, accessibilityRole: "menuitem", disabled, leading: null, trailing: null, label: null, onPress: null });
});