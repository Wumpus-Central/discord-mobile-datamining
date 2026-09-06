// discord_app/design/components/Menu/native/MenuItem.tsx
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import FormRowDefault from "../../../void/Form/native/FormRow.tsx";
import FormLabelDefault from "../../../void/Form/native/FormLabel.tsx";
import Menu from "Menu.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  formIcon: { width: 20, height: 20 },
  formLabel: { fontSize: 14, fontWeight: "500" },
});
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
  obj = {
    ref,
    style,
    accessibilityRole: "menuitem",
    disabled,
    leading: null,
    trailing: null,
    label: null,
    onPress: null,
  };
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
    tmp7Result = jsx(FormLabelDefault, { text: label, style: tmp.formLabel });
  }
  obj.label = tmp7Result;
  obj.onPress = function onPress() {
    action();
    menuClose();
  };
  return jsx(FormRowDefault, {
    ref,
    style,
    accessibilityRole: "menuitem",
    disabled,
    leading: null,
    trailing: null,
    label: null,
    onPress: null,
  });
});
