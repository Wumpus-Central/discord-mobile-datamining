// discord_app/design/components/TableRow/native/TableCheckboxRow.native.tsx
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import TableRow from "TableRow.native.tsx";
import TableRowBadge from "TableRowBadge.native.tsx";
import FormCheckbox from "../../Forms/native/FormCheckbox.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export function TableCheckboxRow(checked) {
  checked = checked.checked;
  ({ label, subLabel, badge, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const merged = Object.assign(
    checked,
    Object.assign({ checked: 0, label: 0, subLabel: 0, badge: 0, disabled: 0, onPress: 0, accessibilityHint: 0 }),
  );
  const sharedValue = _mod1655.useSharedValue(0);
  items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.arrow = false;
  obj3.label = label;
  obj3.subLabel = subLabel;
  obj3.badge = badge;
  obj3.disabled = disabled;
  obj3.accessibilityState = accessibilityState;
  obj3.accessible = true;
  obj3.accessibilityRole = accessibilityRole;
  obj3.accessibilityLabel = TableRowBadge.getTableRowAccessibilityLabel(label, subLabel, badge);
  obj3.accessibilityHint = checked.accessibilityHint;
  obj3.onPressIn = callback;
  obj3.onPress = callback1;
  obj3.trailing = jsx(FormCheckbox.FormCheckbox, { checked });
  return jsx(TableRow.TableRow, {});
}
