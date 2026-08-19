// discord_app/design/components/TableRow/native/TableSwitchRow.native.tsx
import obj132 from "../../../../utils/PlatformUtils.tsx";
import getNodeText from "../../../utils/native.tsx";
import TableRowInner from "TableRow.native.tsx";
import FormSwitch from "../../Forms/native/FormSwitch.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const result = require("obj132").fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = function TableSwitchRow(value) {
  value = value.value;
  require = value;
  ({ onValueChange: dependencyMap, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const merged = Object.assign(value, Object.create(null));
  let callback;
  let obj = obj132;
  const tmp2 = callback2();
  obj1 = getNodeText;
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
      tmp10Result = callback(tmp3(4734).Text, obj1);
    }
    const items1 = [tmp10Result, trailing];
    obj[1] = items1;
    tmp15Result = callback2(View, obj);
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
  obj.trailing = callback(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled });
  return callback(TableRowInner.TableRow, obj);
};