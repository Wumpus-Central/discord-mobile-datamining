// discord_app/design/components/Input/native/Input.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../utils/native.tsx";
import getRequiredFieldA11yName from "getRequiredFieldA11yName.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { inputRow: null, labelWrapper: null, label: null, description: null, error: null };
createStyles = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
};
createStyles.inputRow = createStyles;
createStyles.labelWrapper = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
let obj1 = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createStyles.label = { marginBottom: nativeDefault.space.PX_4 };
let obj2 = { marginBottom: nativeDefault.space.PX_4 };
createStyles.description = { marginTop: nativeDefault.space.PX_4 };
let obj3 = { marginTop: nativeDefault.space.PX_4 };
createStyles.error = { marginTop: nativeDefault.space.PX_4, width: "auto" };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  const tmp = closure_5();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  let obj = getRequiredFieldA11yName;
  let obj1 = native;
  const requiredFieldA11yName = obj.getRequiredFieldA11yName(obj1.getNodeText(label), required);
  obj = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , ,];
    obj = { style: tmp.inputRow, children };
    items[1] = React3(tmp6, obj);
    let tmp11Result = null;
    if (null != description) {
      obj1 = { variant: "text-xs/medium", color: "text-muted", style: tmp.description, children: description };
      tmp11Result = tmp11(tmp2(4556).Text, obj1);
    }
    items[2] = tmp11Result;
    tmp11Result = null;
    if (null != errorMessage) {
      const obj2 = { style: tmp.error, children: errorMessage };
      tmp11Result = tmp11(tmp2(6609).ErrorText, obj2);
    }
    items[3] = tmp11Result;
    obj.children = items;
    return tmp5(tmp6, obj);
  } else if (null != labelTrailing) {
    const obj3 = { style: tmp.labelWrapper, children: null };
    const obj4 = {
      variant: "text-sm/semibold",
      color: "text-subtle",
      nativeID: labelId,
      accessibilityLabel: requiredFieldA11yName,
      children: label,
    };
    const items1 = [React3(tmp2(4556).Text, obj4), labelTrailing];
    obj3.children = items1;
    let tmp5Result = tmp5(tmp6, obj3);
  } else {
    const obj5 = {
      variant: "text-sm/semibold",
      color: "text-subtle",
      style: tmp.label,
      nativeID: labelId,
      accessibilityLabel: requiredFieldA11yName,
      children: null,
    };
    const items2 = [label];
    tmp5Result = null;
    if (required) {
      const obj6 = {
        variant: "text-sm/bold",
        color: "text-feedback-critical",
        "aria-hidden": true,
        children: [" ", "*"],
      };
      tmp5Result = tmp5(tmp2(4556).Text, obj6);
    }
    items2[1] = tmp5Result;
    obj5.children = items2;
    tmp5Result = tmp5(tmp2(4556).Text, obj5);
  }
};
