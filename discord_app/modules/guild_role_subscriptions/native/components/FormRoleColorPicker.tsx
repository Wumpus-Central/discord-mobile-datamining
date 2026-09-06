// === Module 17768: FormRoleColorPicker ===

// Module 17768 (FormRoleColorPicker)
import closure_3 from "noop" /* 19 */;
import { DEFAULT_ROLE_COLOR } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let closure_6 = createCacheKey.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

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
    let obj = onChange(closure_1_2[4]);
    obj = { color, onSelect: onChange };
    obj.openLazy(color(closure_1_2[6])(closure_1_2[5], closure_1_2.paths), "RoleColorPicker", obj);
  }, items);
  let obj = { leading: null, label: null, disabled: null, onPress: null };
  const tmp = callback();
  obj = { color, style: tmp.rowColorBlock, onSelect: callback };
  obj[0] = jsx(onChange(14597), { color, style: tmp.rowColorBlock, onSelect: callback });
  const tmp3 = onChange(13896);
  obj[1] = color(1091).int2hex(color);
  obj[2] = flag;
  obj[3] = callback;
  return <tmp3 color={color} style={tmp.rowColorBlock} onSelect={callback} />;
};