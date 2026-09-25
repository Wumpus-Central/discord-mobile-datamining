// === Module 17562: FormRoleColorPicker ===

// Module 17562 (FormRoleColorPicker)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import noop from "module_19" /* 19 */;

require = fn;
const DEFAULT_ROLE_COLOR = fn(1074).DEFAULT_ROLE_COLOR;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15901, dependencyMap.paths), "RoleColorPicker", { color, onSelect: onChange });
  }, items);
  const obj = { leading: null, label: null, disabled: null, onPress: null };
  const tmp = closure_6();
  obj.leading = jsx(onChange(14130), { color, style: tmp.rowColorBlock, onSelect: callback });
  const obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  const tmp3 = onChange(13423);
  obj.label = color(1092).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return <tmp3 leading={null} label={null} disabled={null} onPress={null} />;
};