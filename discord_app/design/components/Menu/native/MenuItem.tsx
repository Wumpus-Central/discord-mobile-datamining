// === Module 14224: MenuItem ===

// Module 14224 (MenuItem)
import IconDefault from "Icon" /* 5061 */;
import FormRowDefault from "FormRow" /* 7244 */;
import FormLabelDefault from "FormLabel" /* 7246 */;
import Menu from "Menu" /* 14222 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
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
});