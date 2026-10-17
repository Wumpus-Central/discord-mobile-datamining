// === Module 18986: FormRoleColorPicker ===

// Module 18986 (FormRoleColorPicker)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import noop from "module_19" /* 19 */;

require = fn;
const DEFAULT_ROLE_COLOR = fn(1087).DEFAULT_ROLE_COLOR;
const jsx = fn(21).jsx;
const createStyles = fn(5191);
let closure_6 = createStyles.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

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
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17434, dependencyMap.paths), "RoleColorPicker", { color, onSelect: onChange });
  }, items);
  const obj = { leading: null, label: null, disabled: null, onPress: null };
  const tmp = closure_6();
  obj.leading = jsx(onChange(15611), { color, style: tmp.rowColorBlock, onSelect: callback });
  const obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  const tmp3 = onChange(14906);
  obj.label = color(1105).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return <tmp3 leading={null} label={null} disabled={null} onPress={null} />;
};