// === Module 8392: FormRadioGroup ===

// Module 8392 (FormRadioGroup)
import context from "context" /* 5607 */;
import context2 from "context" /* 7704 */;
import FormSectionDefault from "FormSection" /* 8385 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

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
    const items = [callback(View, obj), ];
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
};