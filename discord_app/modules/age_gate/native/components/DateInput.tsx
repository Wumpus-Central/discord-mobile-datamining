// discord_app/modules/age_gate/native/components/DateInput.tsx
import importAllResult from "noop";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((date, ref) => {
  let error;
  let importDefault;
  let label;
  let style;
  date = date.date;
  ({ onChangeDate: importDefault, label } = date);
  ref = undefined;
  function updateDate(arg0) {
    callback(arg0);
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }
  function openDatePicker() {
    updateDate.dismiss();
    let obj = outer1_1(label[4]);
    obj = { onSubmit: updateDate, title: label, startDate: null, maximumDate: null, minimumDate: null, requireDateChanged: true };
    let toDateResult;
    if (date != null) {
      toDateResult = date.toDate();
    }
    if (toDateResult == null) {
      const obj4 = tmp2(tmp3[3])();
      const result = obj4.set("year", obj4.year() - 10);
      toDateResult = obj4.toDate();
    }
    obj[2] = toDateResult;
    const obj5 = outer1_1(label[3])();
    const result1 = obj5.set("year", obj5.year() - 3);
    obj[3] = obj5.toDate();
    const obj6 = outer1_1(label[3])();
    const result2 = obj6.set("year", obj6.year() - 100);
    obj[4] = obj6.toDate();
    obj.openLazy(date(label[6])(label[5], label.paths), "DatePicker", obj);
  }
  ({ style, error } = date);
  ref = ref.useRef(null);
  const imperativeHandle = ref.useImperativeHandle(ref, () => ({
    focus() {
      callback();
    }
  }));
  let formatResult;
  if (date != null) {
    formatResult = date.format("L");
  }
  let obj = importDefault(label[3])();
  let result = obj.set("year", obj.year() - 10);
  const tmp4 = label;
  const tmp5 = importDefault(label[3]);
  const formatResult1 = importDefault(label[3])(obj.toDate()).format("L");
  obj = { style, ref, value: null, placeholder: null, returnKeyType: "next", textContentType: "none", autoCapitalize: "none", clearButtonVisibility: null, editable: false, forceAccessibleContainer: true, accessibilityLabel: null, onPress: null, label: null, error: null };
  let str2 = formatResult;
  const tmp5Result = importDefault(label[3])(obj.toDate());
  const tmp8 = openDatePicker;
  if (formatResult == null) {
    str2 = "";
  }
  obj[2] = str2;
  obj[3] = formatResult1;
  obj[7] = date(tmp4[8]).ClearButtonVisibility.NEVER;
  let tmp10 = formatResult1;
  if (null != formatResult) {
    tmp10 = formatResult;
  }
  obj[10] = "" + label + ", " + tmp10;
  obj[11] = openDatePicker;
  obj[12] = label;
  obj[13] = error;
  return tmp8(importDefault(label[7]), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default forwardRefResult;