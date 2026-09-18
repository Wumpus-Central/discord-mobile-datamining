// === Module 7396: TableSwitchRow ===

// Module 7396 (TableSwitchRow)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import native from "native" /* 4425 */;
import TableRow from "TableRow" /* 5775 */;
import FormSwitch from "FormSwitch" /* 7397 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let closure_7 = createStyles.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = function TableSwitchRow(value) {
  value = value.value;
  require = value;
  ({ onValueChange: dependencyMap, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const merged = Object.assign(value, Object.assign({ value: 0, onValueChange: 0, label: 0, subLabel: 0, trailing: 0, disabled: 0, accessibilityHint: 0, variant: 0 }));
  const tmp2 = closure_7();
  const isAndroidResult = PlatformUtils.isAndroid();
  const nodeText = native.getNodeText(label);
  const nodeText1 = native.getNodeText(subLabel);
  const tmp8 = _slicedToArray(noop.useState(value), 2);
  closure_2 = tmp8[1];
  const items = [value];
  const effect = noop.useEffect(() => {
    closure_2(value);
  }, items);
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.variant = variant;
  obj5.arrow = false;
  let tmp15Result = label;
  if (null != trailing) {
    const obj6 = { style: tmp2.labelWithTrailing, children: null };
    let tmp10Result = label;
    if (!noop.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      const obj7 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp10Result = hasOwnProperty(tmp3(4718).Text, obj7);
    }
    const items1 = [tmp10Result, trailing];
    obj6.children = items1;
    tmp15Result = timestampProducer(View, obj6);
  }
  obj5.label = tmp15Result;
  obj5.subLabel = subLabel;
  obj5.disabled = disabled;
  obj5.accessibilityState = { disabled, checked: tmp8[0] };
  obj5.accessible = true;
  obj5.accessibilityRole = "switch";
  let str3 = nodeText1;
  if (nodeText1 == null) {
    str3 = "";
  }
  function handleOnPress() {
    let tmpResult;
    if (dependencyMap != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  obj5.accessibilityLabel = "" + nodeText + ", " + str3;
  obj5.accessibilityHint = value.accessibilityHint;
  let tmp14;
  if (isAndroidResult) {
    tmp14 = handleOnPress;
  }
  obj5.onPress = tmp14;
  obj5.onAccessibilityTap = function onAccessibilityTap() {
    closure_2(!value);
    const timerId = setTimeout(() => {
      if (closure_1_1 != null) {
        tmp(!closure_1_0);
      }
    });
  };
  obj5.trailing = hasOwnProperty(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled });
  return hasOwnProperty(TableRow.TableRow, obj5);
};