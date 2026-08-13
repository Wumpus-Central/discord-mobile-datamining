// discord_app/design/components/TableRow/native/TableSwitchRow.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { set } from "../../../../utils/PlatformUtils.tsx";
import { getNodeText } from "../../../utils/native.tsx";
import { FormSwitch } from "../../Forms/native/FormSwitch.native.tsx";
import { TableRowInner } from "TableRow.native.tsx";

let c5;
let closure_6;
let require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = function TableSwitchRow(value) {
  let dependencyMap;
  let disabled;
  let label;
  let subLabel;
  let trailing;
  value = value.value;
  const require = value;
  ({ onValueChange: dependencyMap, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const merged = Object.assign(value, Object.create(null));
  let callback;
  let obj = set;
  const tmp2 = callback2();
  let obj1 = getNodeText;
  const nodeText = obj1.getNodeText(label);
  const isAndroidResult = obj.isAndroid();
  const nodeText1 = getNodeText.getNodeText(subLabel);
  const tmp8 = callback(React.useState(value), 2);
  callback = tmp8[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(closure_0);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.variant = variant;
  obj.arrow = false;
  let tmp15Result = label;
  if (null != trailing) {
    obj = { style: null, children: null };
    obj[0] = tmp2.labelWithTrailing;
    let tmp10Result = label;
    if (!React.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      obj1 = { variant: "text-md/semibold", color: null, includeFontPadding: true, children: null };
      obj1[1] = str;
      obj1[3] = label;
      tmp10Result = tmp10(tmp3(4338).Text, obj1);
    }
    const items1 = [tmp10Result, trailing];
    obj[1] = items1;
    tmp15Result = closure_6(View, obj);
    const tmp15 = closure_6;
    const tmp16 = View;
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
    if (closure_1 != null) {
      tmpResult = tmp(!closure_0);
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
    callback(!closure_0);
    const timerId = setTimeout(() => {
      if (closure_1 != null) {
        tmp(!closure_0);
      }
    });
  };
  obj.trailing = closure_5(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled });
  return closure_5(TableRowInner.TableRow, obj);
};