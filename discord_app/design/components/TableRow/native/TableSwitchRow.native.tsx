// discord_app/design/components/TableRow/native/TableSwitchRow.native.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native from "../../../utils/native.tsx";
import TableRow from "TableRow.native.tsx";
import FormSwitch from "../../Forms/native/FormSwitch.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles(() => ({
  labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 },
}));
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
  const merged = Object.assign(
    value,
    Object.assign({
      value: 0,
      onValueChange: 0,
      label: 0,
      subLabel: 0,
      trailing: 0,
      disabled: 0,
      accessibilityHint: 0,
      variant: 0,
    }),
  );
  let obj = PlatformUtils;
  const tmp2 = closure_7();
  let obj1 = native;
  const nodeText = obj1.getNodeText(label);
  const isAndroidResult = obj.isAndroid();
  const nodeText1 = native.getNodeText(subLabel);
  const tmp8 = _slicedToArray(noop.useState(value), 2);
  closure_2 = tmp8[1];
  const items = [value];
  const effect = noop.useEffect(() => {
    closure_2(value);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.variant = variant;
  obj.arrow = false;
  let tmp15Result = label;
  if (null != trailing) {
    obj = { style: tmp2.labelWithTrailing, children: null };
    let tmp10Result = label;
    if (!noop.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      obj1 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp10Result = tmp10(tmp3(4556).Text, obj1);
    }
    const items1 = [tmp10Result, trailing];
    obj.children = items1;
    tmp15Result = timestampProducer(View, obj);
  }
  obj.label = tmp15Result;
  obj.subLabel = subLabel;
  obj.disabled = disabled;
  obj.accessibilityState = { disabled, checked: tmp8[0] };
  obj.accessible = true;
  obj.accessibilityRole = "switch";
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
  obj.accessibilityLabel = "" + nodeText + ", " + str3;
  obj.accessibilityHint = value.accessibilityHint;
  let tmp14;
  if (isAndroidResult) {
    tmp14 = handleOnPress;
  }
  obj.onPress = tmp14;
  obj.onAccessibilityTap = function onAccessibilityTap() {
    closure_2(!value);
    const timerId = setTimeout(() => {
      if (closure_1_1 != null) {
        tmp(!closure_1_0);
      }
    });
  };
  obj.trailing = hasOwnProperty(FormSwitch.FormSwitch, {
    "aria-hidden": true,
    value,
    onValueChange: handleOnPress,
    disabled,
  });
  return hasOwnProperty(TableRow.TableRow, obj);
};
