// === Module 17309: DateInput ===

// Module 17309 (DateInput)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4153 from "module_4153" /* 4153 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default noop.forwardRef((date, arg1) => {
  date = date.date;
  ({ onChangeDate: importDefault, label } = date);
  let ref;
  function updateDate(arg0) {
    importDefault(arg0);
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }
  function openDatePicker() {
    Keyboard.dismiss();
    const obj = { onSubmit: updateDate, title: label, startDate: null, maximumDate: null, minimumDate: null, requireDateChanged: true };
    let toDateResult;
    if (date != null) {
      toDateResult = date.toDate();
    }
    if (toDateResult == null) {
      const obj4 = _modDef4153();
      const result = obj4.set("year", obj4.year() - 10);
      toDateResult = obj4.toDate();
    }
    obj.startDate = toDateResult;
    const obj5 = _modDef4153();
    const result1 = obj5.set("year", obj5.year() - 3);
    obj.maximumDate = obj5.toDate();
    const obj6 = _modDef4153();
    const result2 = obj6.set("year", obj6.year() - 100);
    obj.minimumDate = obj6.toDate();
    obj.openLazy(asyncRequireImpl(9717, dependencyMap.paths), "DatePicker", obj);
    const tmp4 = asyncRequireImpl(9717, dependencyMap.paths);
  }
  ({ style, error } = date);
  ref = ref.useRef(null);
  const imperativeHandle = ref.useImperativeHandle(arg1, () => ({
    focus() {
      openDatePicker();
    }
  }));
  let formatResult;
  if (date != null) {
    formatResult = date.format("L");
  }
  let obj = require("module_4153")();
  let result = obj.set("year", obj.year() - 10);
  let tmp4 = label;
  const tmp5 = require("module_4153");
  const formatResult1 = require("module_4153")(obj.toDate()).format("L");
  obj = { style, ref, value: null, placeholder: null, returnKeyType: "next", textContentType: "none", autoCapitalize: "none", clearButtonVisibility: null, editable: false, forceAccessibleContainer: true, accessibilityLabel: null, onPress: null, label: null, error: null };
  let str2 = formatResult;
  const tmp5Result = require("module_4153")(obj.toDate());
  const tmp8 = openDatePicker;
  if (formatResult == null) {
    str2 = "";
  }
  obj.value = str2;
  obj.placeholder = formatResult1;
  obj.clearButtonVisibility = date(tmp4[8]).ClearButtonVisibility.NEVER;
  let tmp10 = formatResult1;
  if (null != formatResult) {
    tmp10 = formatResult;
  }
  obj.accessibilityLabel = "" + label + ", " + tmp10;
  obj.onPress = openDatePicker;
  obj.label = label;
  obj.error = error;
  return tmp8(require("FreeFormInputGroup"), obj);
});