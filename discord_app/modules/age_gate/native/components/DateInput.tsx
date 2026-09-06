// discord_app/modules/age_gate/native/components/DateInput.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateInput.tsx");

export default noop.forwardRef((date, ref) => {
  date = date.date;
  ({ onChangeDate: importDefault, label } = date);
  ref = undefined;
  function updateDate(arg0) {
    importDefault(arg0);
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }
  function openDatePicker() {
    Keyboard.dismiss();
    const obj = {
      onSubmit: updateDate,
      title: label,
      startDate: null,
      maximumDate: null,
      minimumDate: null,
      requireDateChanged: true,
    };
    let toDateResult;
    if (date != null) {
      toDateResult = date.toDate();
    }
    if (toDateResult == null) {
      const obj4 = tmp2(4153)();
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
  }
  ({ style, error } = date);
  ref = ref.useRef(null);
  const imperativeHandle = ref.useImperativeHandle(ref, () => ({
    focus() {
      openDatePicker();
    },
  }));
  let formatResult;
  if (date != null) {
    formatResult = date.format("L");
  }
  let obj = require("../../../../../_runtime/metro/04153__.js")();
  let result = obj.set("year", obj.year() - 10);
  const tmp4 = label;
  const tmp5 = require("../../../../../_runtime/metro/04153__.js");
  const formatResult1 = require("../../../../../_runtime/metro/04153__.js")(obj.toDate()).format("L");
  obj = {
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
  const tmp5Result = require("../../../../../_runtime/metro/04153__.js")(obj.toDate());
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
