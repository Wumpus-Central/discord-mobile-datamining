// discord_app/design/void/Form/native/FreeFormInputGroup.tsx
import set from "../../../../utils/PlatformUtils.tsx";
import context2 from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FreeFormLabelDefault from "FreeFormLabel.tsx";
import ClearButtonDefault from "FreeFormTextInput.tsx";
import LabelDefault from "FreeFormErrorLabel.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 } });
const forwardRefResult = importAllResult.forwardRef((accessibilityLabel, ref) => {
  ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = accessibilityLabel);
  if (enableAndroidSanitizedInputWorkaround === undefined) {
    enableAndroidSanitizedInputWorkaround = false;
  }
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ secureTextEntry, keyboardType } = accessibilityLabel);
  const merged = Object.assign(accessibilityLabel, Object.create(null));
  const tmp2 = callback2();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (enableAndroidSanitizedInputWorkaround) {
    let obj = set;
    isAndroidResult = obj.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    let str = keyboardType;
  } else {
    obj1 = set;
    str = "visible-password";
  }
  const context = importAllResult.useContext(context2.RedesignCompatContext);
  const id = importAllResult.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    obj = { containerStyle: null, value: null, label: null, errorMessage: null, description: null, placeholder: null, onChange: null, isClearable: null, keyboardType: null, secureTextEntry: null, autoCapitalize: null };
    obj[0] = style;
    obj[1] = value;
    obj[2] = label;
    obj[3] = error;
    obj[4] = hint;
    obj[5] = placeholder;
    obj[6] = onChangeText;
    obj[7] = clearButtonVisibility !== tmp8(1297).ClearButtonVisibility.WITH_CONTENT;
    obj[8] = str;
    obj[9] = isAndroidResult;
    obj[10] = merged.autoCapitalize;
    return callback(tmp8(7652).TextInput, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = style;
    let tmp14 = null;
    if (null != label) {
      obj1 = { style: null, nativeID: null, children: null };
      obj1[0] = tmp2.label;
      obj1[1] = id;
      obj1[2] = label;
      tmp14 = callback(FreeFormLabelDefault, obj1);
    }
    const items = [tmp14, , , ];
    const obj2 = {};
    const merged1 = Object.assign(merged);
    if (accessibilityLabel == null) {
      if (null == label) {
        const tmp23 = label;
      } else {
        const tmp8Result = tmp8(500);
      }
      accessibilityLabel = tmp23;
    }
    obj2.accessibilityLabel = accessibilityLabel;
    obj2.accessibilityLabelledBy = id;
    obj2.error = null != error;
    obj2.ref = ref;
    obj2.value = value;
    obj2.secureTextEntry = isAndroidResult;
    obj2.keyboardType = str;
    const items1 = [tmp2.input, accessibilityLabel.textStyle];
    obj2.style = items1;
    items[1] = callback(ClearButtonDefault, obj2);
    let tmp17Result = null;
    if (null != error) {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp2.error;
      obj3[1] = error;
      tmp17Result = tmp17(LabelDefault, obj3);
    }
    items[2] = tmp17Result;
    tmp17Result = null;
    if (null != hint) {
      const obj4 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
      obj4[0] = tmp2.hint;
      obj4[3] = hint;
      tmp17Result = tmp17(tmp8(4442).Text, obj4);
    }
    items[3] = tmp17Result;
    obj[1] = items;
    return closure_6(View, obj);
  }
});
const result = require("set").fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default forwardRefResult;