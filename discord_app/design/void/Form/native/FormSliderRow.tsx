// === Module 8104: FormSliderRow ===

// Module 8104 (FormSliderRow)
import Text from "Text" /* 4734 */;
import PressableCard from "PressableCard" /* 6292 */;
import _modDef6937 from "module_6937" /* 6937 */;
import context2 from "context" /* 6939 */;
import _getRequireWildcardCacheDefault from "_getRequireWildcardCache" /* 8105 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(context2.RedesignCompatContext);
  const tmp5 = callback2();
  if (context) {
    let obj = { style: null, children: null };
    obj[0] = tmp5.labels;
    obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = label;
    const items = [callback(Text.Text, obj1), trailing];
    obj[1] = items;
    const items1 = [callback(View, obj), ];
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.style = tmp5.slider;
    items1[1] = callback(_getRequireWildcardCacheDefault, obj2);
    obj[0] = items1;
    let tmp6Result = callback(PressableCard.Card, obj);
  } else {
    obj = { children: null };
    const obj3 = { label: null, trailing: null };
    obj3[0] = label;
    obj3[1] = trailing;
    const items2 = [callback(_modDef6937, obj3), ];
    const obj4 = {};
    const merged2 = Object.assign(merged);
    items2[1] = callback(_getRequireWildcardCacheDefault, obj4);
    obj[0] = items2;
    tmp6Result = callback(closure_7, obj);
  }
  return tmp6Result;
};