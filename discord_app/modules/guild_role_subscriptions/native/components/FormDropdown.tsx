// === Module 16214: FormDropdown ===

// Module 16214 (FormDropdown)
import Text_Text from "Text/Text" /* 5866 */;
import TableRow from "TableRow" /* 7379 */;
import LockIcon from "LockIcon" /* 8027 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const obj = { start: true, end: true, icon: leading, label: null, trailing: null, arrow: null, disabled: null, onPress: null };
  if (label == null) {
    const obj2 = { variant: "body-md/medium", color: "text-muted", children: placeholder };
    label = jsx(Text_Text.Text, { variant: "body-md/medium", color: "text-muted", children: placeholder });
  }
  obj.label = label;
  let tmpResult;
  if (disabled) {
    const obj3 = { IconComponent: LockIcon.LockIcon };
    tmpResult = jsx(TableRow.TableRow.Icon, { IconComponent: LockIcon.LockIcon });
  }
  obj.trailing = tmpResult;
  obj.arrow = !disabled;
  obj.disabled = disabled;
  obj.onPress = onPress;
  return jsx(TableRow.TableRow, { start: true, end: true, icon: leading, label: null, trailing: null, arrow: null, disabled: null, onPress: null });
};