// === Module 8098: FormSwitchRow ===

// Module 8098 (FormSwitchRow)
import context from "context" /* 6939 */;
import TableSwitchRow from "TableSwitchRow" /* 7178 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function FormSwitchRow(onValueChange) {
  onValueChange = onValueChange.onValueChange;
  const value = onValueChange.value;
  importDefault = value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  const merged = Object.assign(onValueChange, Object.create(null));
  let first;
  let callback;
  let obj = onValueChange(first[5]);
  let tmp2 = callback3();
  const tmp5 = callback(React.useState(value), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(closure_1);
  }, items);
  let tmp8;
  if (typeof label === "string") {
    tmp8 = label;
  }
  let sum = tmp8;
  if (tmp9) {
    const _HermesInternal = HermesInternal;
    sum = tmp8 + " " + subLabel;
  }
  obj = {};
  const isAndroidResult = obj.isAndroid();
  const tmp13 = importDefault;
  tmp9 = null != tmp8 && typeof subLabel === "string";
  const merged1 = Object.assign(merged);
  obj = { style: tmp2.trailing, children: null };
  const items1 = [callback2(importDefault(first[7]), { numberOfLines, text: label }), null != trailing && trailing];
  obj[1] = items1;
  obj.label = callback2(View, obj);
  obj.subLabel = subLabel;
  obj.disabled = flag;
  let fn;
  if (isAndroidResult) {
    fn = () => {
      let tmp2 = null != onValueChange;
      if (tmp2) {
        tmp2 = null != closure_1;
      }
      if (tmp2) {
        onValueChange(!closure_1);
      }
    };
  }
  obj.onPress = fn;
  obj.accessible = true;
  obj.onAccessibilityTap = function onAccessibilityTap() {
    callback(!first);
    const timerId = setTimeout(() => {
      if (closure_0 != null) {
        tmp(!closure_2);
      }
    });
  };
  obj.accessibilityRole = "switch";
  obj.accessibilityLabel = sum;
  obj.accessibilityState = { disabled: flag, checked: first };
  obj.accessibilityHint = accessibilityHint;
  obj1 = { disabled: flag, value, onValueChange };
  const tmp14 = importDefault(first[6]);
  const merged2 = Object.assign(switchProps);
  obj.trailing = callback2(tmp13(first[8]), obj1);
  return callback2(tmp14, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" } });
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default function FormSwitchRowContainer(DEPRECATED_style) {
  if (React.useContext(context.RedesignCompatContext)) {
    let obj = { style: null, children: null };
    obj[0] = DEPRECATED_style.DEPRECATED_style;
    obj = { value: null, onValueChange: null };
    ({ value: obj3[0], onValueChange: obj3[1] } = DEPRECATED_style);
    const merged = Object.assign(DEPRECATED_style);
    obj[1] = callback(TableSwitchRow.TableSwitchRow, obj);
    let tmp3Result = callback(View, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmp3Result = callback(FormSwitchRow, obj);
  }
  return tmp3Result;
};