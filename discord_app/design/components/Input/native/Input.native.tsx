// discord_app/design/components/Input/native/Input.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../utils/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import getRequiredFieldA11yName from "getRequiredFieldA11yName.native.tsx";
import ErrorText from "../../ErrorText/native/ErrorText.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  inputRow: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    marginTop: nativeDefault.space.PX_4,
    marginBottom: nativeDefault.space.PX_4,
  },
  labelWrapper: null,
  label: null,
  description: null,
  error: null,
};
let obj3 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
};
obj2.labelWrapper = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj2.label = { marginBottom: nativeDefault.space.PX_4 };
let obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
let obj6 = { marginTop: nativeDefault.space.PX_4 };
obj2.error = { marginTop: nativeDefault.space.PX_4, width: "auto" };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  const tmp = closure_5();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  const obj = getRequiredFieldA11yName;
  const requiredFieldA11yName = obj.getRequiredFieldA11yName(native.getNodeText(label), required);
  const obj3 = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , ,];
    const obj4 = { style: tmp.inputRow, children };
    items[1] = React3(View, obj4);
    let tmp11Result = null;
    if (null != description) {
      const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.description, children: description };
      tmp11Result = React3(Text_Text.Text, obj5);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (null != errorMessage) {
      const obj6 = { style: tmp.error, children: errorMessage };
      tmp11Result2 = React3(ErrorText.ErrorText, obj6);
    }
    items[3] = tmp11Result2;
    obj3.children = items;
    return React4(View, obj3);
  } else if (null != labelTrailing) {
    const obj7 = { style: tmp.labelWrapper, children: null };
    const obj8 = {
      variant: "text-sm/semibold",
      color: "text-subtle",
      nativeID: labelId,
      accessibilityLabel: requiredFieldA11yName,
      children: label,
    };
    const items1 = [React3(Text_Text.Text, obj8), labelTrailing];
    obj7.children = items1;
    let tmp5Result = React4(View, obj7);
  } else {
    const obj9 = {
      variant: "text-sm/semibold",
      color: "text-subtle",
      style: tmp.label,
      nativeID: labelId,
      accessibilityLabel: requiredFieldA11yName,
      children: null,
    };
    const items2 = [label];
    let tmp5Result2 = null;
    if (required) {
      const obj10 = {
        variant: "text-sm/bold",
        color: "text-feedback-critical",
        "aria-hidden": true,
        children: [" ", "*"],
      };
      tmp5Result2 = React4(Text_Text.Text, obj10);
    }
    items2[1] = tmp5Result2;
    obj9.children = items2;
    tmp5Result = React4(Text_Text.Text, obj9);
  }
};
