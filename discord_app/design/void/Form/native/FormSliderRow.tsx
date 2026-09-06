// discord_app/design/void/Form/native/FormSliderRow.tsx
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import _modDef8278 from "../../../../../_runtime/metro/08278__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  slider: { marginStart: -4, marginTop: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, trailing: 0 }));
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const tmp5 = closure_8();
  if (context) {
    let obj = { children: null };
    obj = { style: tmp5.labels, children: null };
    const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
    const items = [hasOwnProperty(tmp2(4556).Text, obj1), trailing];
    obj.children = items;
    const items1 = [tmp6(View, obj)];
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.style = tmp5.slider;
    items1[1] = hasOwnProperty(_modDef8278, obj2);
    obj.children = items1;
    let tmp6Result = tmp6(tmp2(5607).Card, obj);
  } else {
    obj = { children: null };
    const obj3 = { label, trailing };
    const items2 = [hasOwnProperty(FormRowDefault, obj3)];
    const obj4 = {};
    const merged2 = Object.assign(merged);
    items2[1] = hasOwnProperty(_modDef8278, obj4);
    obj.children = items2;
    tmp6Result = tmp6(React5, obj);
  }
  return tmp6Result;
}
