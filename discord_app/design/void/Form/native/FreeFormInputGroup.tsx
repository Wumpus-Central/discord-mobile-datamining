// discord_app/design/void/Form/native/FreeFormInputGroup.tsx
import native from "../../native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import TextInput from "../../../components/TextInput/native/TextInput.native.tsx";
import FreeFormLabelDefault from "FreeFormLabel.tsx";
import FreeFormTextInputDefault from "FreeFormTextInput.tsx";
import FreeFormErrorLabelDefault from "FreeFormErrorLabel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let closure_7 = createStyles.createStyles({
  label: { marginBottom: 8 },
  input: { flexGrow: 1, marginBottom: 8 },
  error: { marginBottom: 8 },
  hint: { marginBottom: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default noop.forwardRef((accessibilityLabel, ref) => {
  ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = accessibilityLabel);
  if (enableAndroidSanitizedInputWorkaround === undefined) {
    enableAndroidSanitizedInputWorkaround = false;
  }
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ secureTextEntry, keyboardType } = accessibilityLabel);
  const merged = Object.assign(
    accessibilityLabel,
    Object.assign({
      style: 0,
      label: 0,
      error: 0,
      value: 0,
      hint: 0,
      textStyle: 0,
      enableAndroidSanitizedInputWorkaround: 0,
      secureTextEntry: 0,
      keyboardType: 0,
      accessibilityLabel: 0,
    }),
  );
  const tmp2 = closure_7();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (enableAndroidSanitizedInputWorkaround) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    let str = keyboardType;
  } else {
    PlatformUtils;
    str = "visible-password";
  }
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const id = noop.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    const obj3 = {
      containerStyle: style,
      value,
      label,
      errorMessage: error,
      description: hint,
      placeholder,
      onChange: onChangeText,
      clearable: clearButtonVisibility !== native.ClearButtonVisibility.WITH_CONTENT,
      keyboardType: str,
      secureTextEntry: isAndroidResult,
      autoCapitalize: merged.autoCapitalize,
    };
    return hasOwnProperty(TextInput.TextInput, obj3);
  } else {
    const obj4 = { style, children: null };
    let tmp14 = null;
    if (null != label) {
      const obj5 = { style: tmp2.label, nativeID: id, children: label };
      tmp14 = hasOwnProperty(FreeFormLabelDefault, obj5);
    }
    const items = [tmp14, , ,];
    const obj6 = {};
    const merged1 = Object.assign(merged);
    if (accessibilityLabel == null) {
      if (null != label) {
        PlatformUtils;
      }
      accessibilityLabel = label;
    }
    obj6.accessibilityLabel = accessibilityLabel;
    obj6.accessibilityLabelledBy = id;
    obj6.error = null != error;
    obj6.ref = ref;
    obj6.value = value;
    obj6.secureTextEntry = isAndroidResult;
    obj6.keyboardType = str;
    const items1 = [tmp2.input, accessibilityLabel.textStyle];
    obj6.style = items1;
    items[1] = hasOwnProperty(FreeFormTextInputDefault, obj6);
    let tmp17Result = null;
    if (null != error) {
      const obj7 = { style: tmp2.error, children: error };
      tmp17Result = hasOwnProperty(FreeFormErrorLabelDefault, obj7);
    }
    items[2] = tmp17Result;
    let tmp17Result2 = null;
    if (null != hint) {
      const obj8 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
      tmp17Result2 = hasOwnProperty(Text_Text.Text, obj8);
    }
    items[3] = tmp17Result2;
    obj4.children = items;
    return timestampProducer(View, obj4);
  }
});
