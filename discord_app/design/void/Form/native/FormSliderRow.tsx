import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  let label;
  let trailing;
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(require(5223) /* context */.RedesignCompatContext);
  const tmp5 = callback2();
  if (context) {
    let obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp5.labels;
    const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = label;
    const items = [callback(tmp2(4189).Text, obj1), trailing];
    obj[1] = items;
    const items1 = [tmp6(View, obj), ];
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.style = tmp5.slider;
    items1[1] = callback(importDefault(7664), obj2);
    obj[0] = items1;
    let tmp6Result = tmp6(tmp2(5226).Card, obj);
    const tmp18 = importDefault(7664);
  } else {
    obj = { children: null };
    const obj3 = { label: null, trailing: null };
    obj3[0] = label;
    obj3[1] = trailing;
    const items2 = [callback(importDefault(5217), obj3), ];
    const obj4 = {};
    const merged2 = Object.assign(merged);
    items2[1] = callback(importDefault(7664), obj4);
    obj[0] = items2;
    tmp6Result = tmp6(closure_7, obj);
    const tmp10 = importDefault(7664);
  }
  return tmp6Result;
};