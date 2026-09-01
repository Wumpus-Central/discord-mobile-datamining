// discord_app/design/components/Menu/native/MenuItem.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
let closure_5 = createCacheKey.createStyles({
  formIcon: { width: 20, height: 20 },
  formLabel: { fontSize: 14, fontWeight: "500" },
});
const forwardRefResult = importAllResult.forwardRef((action, ref) => {
  ({ label, IconComponent, iconSource, showIconFirst } = action);
  if (showIconFirst === undefined) {
    showIconFirst = false;
  }
  ({ disabled, style } = action);
  if (disabled === undefined) {
    disabled = false;
  }
  action = action.action;
  let menuClose;
  const tmp = callback();
  menuClose = importAllResult.useContext(action(13773).MenuContext).menuClose;
  if (null != IconComponent) {
    let tmp3 = <IconComponent size="sm" />;
  } else {
    tmp3 = null;
    if (null != iconSource) {
      let obj = { source: null, style: null };
      obj[0] = iconSource;
      obj[1] = tmp.formIcon;
      tmp3 = jsx(menuClose(4930), { source: null, style: null });
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
  obj[4] = tmp10;
  let tmp11 = null;
  if (null != iconSource) {
    tmp11 = null;
    if (!showIconFirst) {
      tmp11 = tmp3;
    }
  }
  obj[5] = tmp11;
  let tmp7Result = label;
  if (typeof label === "string") {
    obj = { text: null, style: null };
    obj[0] = label;
    obj[1] = tmp.formLabel;
    tmp7Result = tmp7(menuClose(5611), obj);
  }
  obj[6] = tmp7Result;
  obj[7] = function onPress() {
    action();
    menuClose();
  };
  return jsx(menuClose(5592), {
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
const result = require("set").fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export const MenuItem = forwardRefResult;
