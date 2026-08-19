// === Module 16989: FormRoleColorPicker ===

// Module 16989 (FormRoleColorPicker)
import noop from "noop" /* 19 */;
import { DEFAULT_ROLE_COLOR } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_6 = createCacheKey.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

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
    onChange(dependencyMap[4]);
    const obj = { color, onSelect: onChange };
    obj.openLazy(color(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "RoleColorPicker", obj);
  }, items);
  const tmp = callback();
  let obj = { color, style: tmp.rowColorBlock, onSelect: callback };
  obj[0] = jsx(onChange(14011), { color, style: tmp.rowColorBlock, onSelect: callback });
  const tmp3 = onChange(13356);
  obj[1] = color(688).int2hex(color);
  obj[2] = flag;
  obj[3] = callback;
  return <tmp3 color={color} style={tmp.rowColorBlock} onSelect={callback} />;
};