// discord_app/design/components/TableRow/native/TableCheckboxRow.native.tsx
import native from "../../../utils/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import TableRow from "TableRow.native.tsx";
import FormCheckbox from "../../Forms/native/FormCheckbox.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = function TableCheckboxRow(checked) {
  checked = checked.checked;
  ({ label, subLabel, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const merged = Object.assign(
    checked,
    Object.assign({ checked: 0, label: 0, subLabel: 0, disabled: 0, onPress: 0, accessibilityHint: 0 }),
  );
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const nodeText = native.getNodeText(label);
  const nodeText1 = native.getNodeText(subLabel);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.arrow = false;
  obj.label = label;
  obj.subLabel = subLabel;
  obj.disabled = disabled;
  obj.accessibilityState = accessibilityState;
  obj.accessible = true;
  obj.accessibilityRole = accessibilityRole;
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  obj.accessibilityLabel = "" + nodeText + ", " + str;
  obj.accessibilityHint = checked.accessibilityHint;
  obj.onPressIn = callback;
  obj.onPress = callback1;
  obj.trailing = jsx(FormCheckbox.FormCheckbox, { checked });
  return jsx(TableRow.TableRow, {});
};
