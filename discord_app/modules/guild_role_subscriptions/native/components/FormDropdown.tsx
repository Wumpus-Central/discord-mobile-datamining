// === Module 15720: FormDropdown ===

// Module 15720 (FormDropdown)
import Text_Text from "Text/Text" /* 5624 */;
import TableRow from "TableRow" /* 6975 */;
import LockIcon from "LockIcon" /* 8667 */;
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
    const obj2 = { variant: "text-md/medium", color: "text-muted", children: placeholder };
    label = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", children: placeholder });
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