// discord_app/design/void/Form/native/FormSwitchRow.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import FormLabelDefault from "FormLabel.tsx";
import TableSwitchRow from "../../../components/TableRow/native/TableSwitchRow.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const Form_FormSwitchDefault = tmp13(8728);
require = fn;
function FormSwitchRow(onValueChange) {
  onValueChange = onValueChange.onValueChange;
  value = onValueChange.value;
  importDefault = value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  const merged = Object.assign(
    onValueChange,
    Object.assign({
      onValueChange: 0,
      value: 0,
      disabled: 0,
      label: 0,
      subLabel: 0,
      accessibilityHint: 0,
      trailing: 0,
      numberOfLines: 0,
      switchProps: 0,
    }),
  );
  checked = undefined;
  closure_3 = undefined;
  let tmp2 = closure_8();
  [checked, closure_3] = noop.useState(value);
  const items = [value];
  const effect = noop.useEffect(() => {
    closure_3(value);
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
  const obj2 = {};
  const isAndroidResult = PlatformUtils.isAndroid();
  tmp9 = null != tmp8 && typeof subLabel === "string";
  const merged1 = Object.assign(merged);
  const obj3 = { style: tmp2.trailing, children: null };
  const items1 = [timestampProducer(FormLabelDefault, { numberOfLines, text: label }), null != trailing && trailing];
  obj3.children = items1;
  obj2.label = React5(View, obj3);
  obj2.subLabel = subLabel;
  obj2.disabled = flag;
  let fn;
  if (isAndroidResult) {
    fn = () => {
      let tmp2 = null != onValueChange;
      if (tmp2) {
        tmp2 = null != value;
      }
      if (tmp2) {
        onValueChange(!value);
      }
    };
  }
  obj2.onPress = fn;
  obj2.accessible = true;
  obj2.onAccessibilityTap = function onAccessibilityTap() {
    closure_3(!first);
    const timerId = setTimeout(() => {
      if (onValueChange != null) {
        tmp(!checked);
      }
    });
  };
  obj2.accessibilityRole = "switch";
  obj2.accessibilityLabel = sum;
  obj2.accessibilityState = { disabled: flag, checked };
  obj2.accessibilityHint = accessibilityHint;
  const obj4 = { disabled: flag, value, onValueChange };
  const tmp14 = FormRowDefault;
  const merged2 = Object.assign(switchProps);
  obj2.trailing = timestampProducer(Form_FormSwitchDefault, obj4);
  return timestampProducer(tmp14, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
let closure_8 = createStyles.createStyles({
  trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default function FormSwitchRowContainer(DEPRECATED_style) {
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: DEPRECATED_style.DEPRECATED_style, children: null };
    const obj5 = { value: null, onValueChange: null };
    ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
    const merged = Object.assign(DEPRECATED_style);
    obj2.children = timestampProducer(TableSwitchRow.TableSwitchRow, obj5);
    let tmp3Result = timestampProducer(View, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmp3Result = timestampProducer(FormSwitchRow, obj);
  }
  return tmp3Result;
}
