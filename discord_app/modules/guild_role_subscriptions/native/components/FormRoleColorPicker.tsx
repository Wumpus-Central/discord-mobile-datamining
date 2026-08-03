// === Module 16631: FormRoleColorPicker ===

// Module 16631 (FormRoleColorPicker)
import noop from "noop";
import { DEFAULT_ROLE_COLOR } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

export default function FormRoleColorPicker(color) {
  color = color.color;
  if (color === undefined) {
    color = DEFAULT_ROLE_COLOR;
  }
  let flag = color.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onChange = color.onChange;
  const items = [color, onChange];
  const callback = React.useCallback(() => {
    let obj = onChange(outer1_2[4]);
    obj = { color, onSelect: onChange };
    obj.openLazy(color(outer1_2[6])(outer1_2[5], outer1_2.paths), "RoleColorPicker", obj);
  }, items);
  let obj = { leading: null, label: null, disabled: null, onPress: null };
  const tmp = callback();
  obj = { color, style: tmp.rowColorBlock, onSelect: callback };
  obj[0] = jsx(onChange(13716), { color, style: tmp.rowColorBlock, onSelect: callback });
  const tmp3 = onChange(13054);
  obj[1] = color(688).int2hex(color);
  obj[2] = flag;
  obj[3] = callback;
  return <tmp3 color={color} style={tmp.rowColorBlock} onSelect={callback} />;
};