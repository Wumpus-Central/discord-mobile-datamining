// discord_app/design/components/TableRow/native/TableSwitchRow.native.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import TableRow from "TableRow.native.tsx";
import TableRowBadge from "TableRowBadge.native.tsx";
import FormSwitch from "../../Forms/native/FormSwitch.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
let closure_7 = createStyles.createStyles(() => ({
  labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 },
}));
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export function TableSwitchRow(value) {
  value = value.value;
  require = value;
  ({ onValueChange: dependencyMap, label, subLabel, trailing, badge, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const merged = Object.assign(
    value,
    Object.assign({
      value: 0,
      onValueChange: 0,
      label: 0,
      subLabel: 0,
      trailing: 0,
      badge: 0,
      disabled: 0,
      accessibilityHint: 0,
      variant: 0,
    }),
  );
  const tmp2 = closure_7();
  const tmp6 = _slicedToArray(noop.useState(value), 2);
  closure_2 = tmp6[1];
  items = [value];
  const effect = noop.useEffect(() => {
    closure_2(value);
  }, items);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.variant = variant;
  obj3.arrow = false;
  let tmp13Result = label;
  if (null != trailing) {
    const obj4 = { style: tmp2.labelWithTrailing, children: null };
    let tmp8Result = label;
    if (!noop.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      const obj5 = { variant: "body-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp8Result = hasOwnProperty(tmp3(5866).Text, obj5);
    }
    const items1 = [tmp8Result, trailing];
    obj4.children = items1;
    tmp13Result = timestampProducer(View, obj4);
  }
  function handleOnPress() {
    let tmpResult;
    if (dependencyMap != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  obj3.label = tmp13Result;
  obj3.subLabel = subLabel;
  obj3.badge = badge;
  obj3.disabled = disabled;
  obj3.accessibilityState = { disabled, checked: tmp6[0] };
  obj3.accessible = true;
  obj3.accessibilityRole = "switch";
  const isAndroidResult = PlatformUtils.isAndroid();
  obj3.accessibilityLabel = TableRowBadge.getTableRowAccessibilityLabel(label, subLabel, badge);
  obj3.accessibilityHint = value.accessibilityHint;
  let tmp12;
  if (isAndroidResult) {
    tmp12 = handleOnPress;
  }
  obj3.onPress = tmp12;
  obj3.onAccessibilityTap = function handleAccessibilityTap() {
    closure_2(!value);
    const timerId = setTimeout(() => {
      if (closure_1_1 != null) {
        tmp(!closure_1_0);
      }
    });
  };
  obj3.trailing = hasOwnProperty(FormSwitch.FormSwitch, {
    "aria-hidden": true,
    value,
    onValueChange: handleOnPress,
    disabled,
  });
  return hasOwnProperty(TableRow.TableRow, obj3);
}
