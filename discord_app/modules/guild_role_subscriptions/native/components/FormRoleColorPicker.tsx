// discord_app/modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const DEFAULT_ROLE_COLOR = fn(1074).DEFAULT_ROLE_COLOR;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({
  rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 },
});
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16421, dependencyMap.paths), "RoleColorPicker", {
      color,
      onSelect: onChange,
    });
  }, items);
  const obj = { leading: null, label: null, disabled: null, onPress: null };
  const tmp = closure_6();
  obj.leading = jsx(onChange(14711), { color, style: tmp.rowColorBlock, onSelect: callback });
  const obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  const tmp3 = onChange(14002);
  obj.label = color(1092).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return <tmp3 leading={null} label={null} disabled={null} onPress={null} />;
}
