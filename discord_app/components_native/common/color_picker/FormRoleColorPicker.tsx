// discord_app/components_native/common/color_picker/FormRoleColorPicker.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { DEFAULT_ROLE_COLOR } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let closure_6 = createCacheKey.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = require("obj132").fileFinishedImporting("components_native/common/color_picker/FormRoleColorPicker.tsx");

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
  let obj = { color, style: callback().rowColorBlock, onSelect: callback };
  obj[0] = jsx(onChange(14011), { color, style: callback().rowColorBlock, onSelect: callback });
  const tmp = callback();
  obj[1] = color(688).int2hex(color);
  obj[2] = flag;
  obj[3] = callback;
  return jsx(color(8083).FormRow, { color, style: callback().rowColorBlock, onSelect: callback });
};