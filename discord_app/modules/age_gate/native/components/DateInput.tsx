// discord_app/modules/age_gate/native/components/DateInput.tsx
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import _modDef4418 from "../../../../../_runtime/metro/04418__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

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
    const obj2 = {
      onSubmit: updateDate,
      title: label,
      startDate: null,
      maximumDate: null,
      minimumDate: null,
      requireDateChanged: true,
    };
    let toDateResult;
    const obj = ActionSheetActionCreatorsDefault;
    if (date != null) {
      toDateResult = date.toDate();
    }
    if (toDateResult == null) {
      const obj4 = _modDef4418();
      const result = obj4.set("year", obj4.year() - 10);
      toDateResult = obj4.toDate();
    }
    obj2.startDate = toDateResult;
    const obj5 = _modDef4418();
    const result1 = obj5.set("year", obj5.year() - 3);
    obj2.maximumDate = obj5.toDate();
    const obj6 = _modDef4418();
    const result2 = obj6.set("year", obj6.year() - 100);
    obj2.minimumDate = obj6.toDate();
    obj.openLazy(asyncRequireImpl(8984, dependencyMap.paths), "DatePicker", obj2);
    const tmp4 = asyncRequireImpl(8984, dependencyMap.paths);
  }
  ({ style, error } = date);
  ref = ref.useRef(null);
  const imperativeHandle = ref.useImperativeHandle(arg1, () => ({
    focus() {
      openDatePicker();
    },
  }));
  let formatResult;
  if (date != null) {
    formatResult = date.format("L");
  }
  let obj = require("../../../../../_runtime/metro/04418__.js")();
  let result = obj.set("year", obj.year() - 10);
  let tmp4 = label;
  const tmp5 = require("../../../../../_runtime/metro/04418__.js");
  const formatResult1 = require("../../../../../_runtime/metro/04418__.js")(obj.toDate()).format("L");
  let obj2 = {
    style,
    ref,
    value: null,
    placeholder: null,
    returnKeyType: "next",
    textContentType: "none",
    autoCapitalize: "none",
    clearButtonVisibility: null,
    editable: false,
    forceAccessibleContainer: true,
    accessibilityLabel: null,
    onPress: null,
    label: null,
    error: null,
  };
  let str2 = formatResult;
  const tmp5Result = require("../../../../../_runtime/metro/04418__.js")(obj.toDate());
  const tmp8 = openDatePicker;
  if (formatResult == null) {
    str2 = "";
  }
  obj2.value = str2;
  obj2.placeholder = formatResult1;
  obj2.clearButtonVisibility = date(tmp4[8]).ClearButtonVisibility.NEVER;
  let tmp10 = formatResult1;
  if (null != formatResult) {
    tmp10 = formatResult;
  }
  obj2.accessibilityLabel = "" + label + ", " + tmp10;
  obj2.onPress = openDatePicker;
  obj2.label = label;
  obj2.error = error;
  return tmp8(require("FreeFormInputGroup"), obj2);
});
