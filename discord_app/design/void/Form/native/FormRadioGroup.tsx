// discord_app/design/void/Form/native/FormRadioGroup.tsx
import TableRadioGroup from "../../../components/TableRow/native/TableRadioGroup.native.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormSectionDefault from "FormSection.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default function FormRadioGroup(arg0) {
  ({ title, children, hint } = arg0);
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({ title: 0, hasIcons: 0, accessibilityLabel: 0, children: 0, value: 0, hint: 0, icon: 0 }),
  );
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    let obj = { style: { marginBottom: 24, marginHorizontal: 12 }, children: null };
    obj = { children: null };
    const obj1 = { defaultValue: value, hasIcons, title, accessibilityLabel, children };
    obj.children = hasOwnProperty(TableRadioGroup.TableRadioGroup, obj1);
    const items = [hasOwnProperty(View, obj)];
    let tmp13Result = null;
    if (null != hint) {
      const obj2 = { style: { marginTop: 8 }, children: hint };
      tmp13Result = tmp13(tmp12, obj2);
    }
    items[1] = tmp13Result;
    obj.children = items;
    let tmp11Result = timestampProducer(tmp12, obj);
    tmp13 = hasOwnProperty;
  } else {
    obj = { title, accessibilityRole: "radiogroup", accessibilityLabel: title, hint, icon };
    const merged1 = Object.assign(merged);
    obj.children = children;
    tmp11Result = hasOwnProperty(FormSectionDefault, obj);
  }
  return tmp11Result;
}
