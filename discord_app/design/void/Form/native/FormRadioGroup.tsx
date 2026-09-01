// discord_app/design/void/Form/native/FormRadioGroup.tsx
import context from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import context2 from "../../../components/TableRow/native/TableRadioGroup.native.tsx";
import FormSectionDefault from "FormSection.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default function FormRadioGroup(arg0) {
  ({ title, children, hint } = arg0);
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  if (React.useContext(context.RedesignCompatContext)) {
    let obj = { style: null, children: null };
    obj[0] = { marginBottom: 24, marginHorizontal: 12 };
    obj = { children: null };
    obj1 = { defaultValue: null, hasIcons: null, title: null, accessibilityLabel: null, children: null };
    obj1[0] = value;
    obj1[1] = hasIcons;
    obj1[2] = title;
    obj1[3] = accessibilityLabel;
    obj1[4] = children;
    obj[0] = callback(context2.TableRadioGroup, obj1);
    const items = [callback(View, obj)];
    let tmp13Result = null;
    if (null != hint) {
      const obj2 = { style: null, children: null };
      obj2[0] = { marginTop: 8 };
      obj2[1] = hint;
      tmp13Result = tmp13(tmp12, obj2);
    }
    items[1] = tmp13Result;
    obj[1] = items;
    let tmp11Result = closure_6(tmp12, obj);
    const tmp11 = closure_6;
    tmp13 = callback;
  } else {
    obj = { title: null, accessibilityRole: "radiogroup", accessibilityLabel: null, hint: null, icon: null };
    obj[0] = title;
    obj[2] = title;
    obj[3] = hint;
    obj[4] = icon;
    const merged1 = Object.assign(merged);
    obj.children = children;
    tmp11Result = callback(FormSectionDefault, obj);
    const tmp6 = FormSectionDefault;
  }
  return tmp11Result;
}
