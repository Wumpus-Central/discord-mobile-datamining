// discord_app/design/void/Form/native/FormSliderRow.tsx
import Text_Text from "../../../components/Text/native/Text.tsx";
import Card from "../../../components/Card/native/Card.native.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import _modDef8628 from "../../../../../_runtime/metro/08628__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4829);
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
    const obj2 = { children: null };
    const obj3 = { style: tmp5.labels, children: null };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
    const items = [hasOwnProperty(Text_Text.Text, obj4), trailing];
    obj3.children = items;
    const items1 = [timestampProducer(View, obj3)];
    const obj5 = {};
    const merged1 = Object.assign(merged);
    obj5.style = tmp5.slider;
    items1[1] = hasOwnProperty(_modDef8628, obj5);
    obj2.children = items1;
    let tmp6Result = timestampProducer(Card.Card, obj2);
  } else {
    const obj = { children: null };
    const obj6 = { label, trailing };
    const items2 = [hasOwnProperty(FormRowDefault, obj6)];
    const obj7 = {};
    const merged2 = Object.assign(merged);
    items2[1] = hasOwnProperty(_modDef8628, obj7);
    obj.children = items2;
    tmp6Result = timestampProducer(React5, obj);
  }
  return tmp6Result;
}
