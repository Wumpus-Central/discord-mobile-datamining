// discord_app/design/components/TableRow/native/TableCheckboxRow.native.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("module_4146").fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = function TableCheckboxRow(checked) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let label;
  let subLabel;
  checked = checked.checked;
  ({ label, subLabel, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const merged = Object.assign(checked, Object.create(null));
  let sharedValue;
  let obj = checked(onPress[2]);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = sharedValue.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const nodeText = checked(onPress[3]).getNodeText(label);
  const obj2 = checked(onPress[3]);
  const tmp2 = checked;
  const tmp3 = onPress;
  const nodeText1 = checked(onPress[3]).getNodeText(subLabel);
  const obj3 = checked(onPress[3]);
  const checkboxA11yNative = checked(onPress[4]).useCheckboxA11yNative({ checked, disabled });
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
  obj.trailing = jsx(tmp2(tmp3[6]).FormCheckbox, { checked });
  return jsx(checked(onPress[5]).TableRow, {});
};