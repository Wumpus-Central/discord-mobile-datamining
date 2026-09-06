// === Module 8610: FormSliderRow ===

// Module 8610 (FormSliderRow)
import context2 from "context" /* 5686 */;
import _modDef7137 from "module_7137" /* 7137 */;
import _modDef8278 from "module_8278" /* 8278 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const result = require("set").fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(context2.RedesignCompatContext);
  const tmp5 = callback2();
  if (context) {
    let obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp5.labels;
    obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = label;
    const items = [callback(tmp2(4556).Text, obj1), trailing];
    obj[1] = items;
    const items1 = [tmp6(View, obj), ];
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.style = tmp5.slider;
    items1[1] = callback(_modDef8278, obj2);
    obj[0] = items1;
    let tmp6Result = tmp6(tmp2(5607).Card, obj);
    const tmp18 = _modDef8278;
  } else {
    obj = { children: null };
    const obj3 = { label: null, trailing: null };
    obj3[0] = label;
    obj3[1] = trailing;
    const items2 = [callback(_modDef7137, obj3), ];
    const obj4 = {};
    const merged2 = Object.assign(merged);
    items2[1] = callback(_modDef8278, obj4);
    obj[0] = items2;
    tmp6Result = tmp6(closure_7, obj);
    const tmp10 = _modDef8278;
  }
  return tmp6Result;
};