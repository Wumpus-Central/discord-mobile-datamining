// discord_app/design/void/Form/native/FormSliderRow.tsx
import Text from "../../../components/Text/native/Text.tsx";
import PressableCard from "../../../components/Card/native/Card.native.tsx";
import _modDef6937 from "FormRow.tsx";
import context2 from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import _getRequireWildcardCacheDefault from "../../../../../_runtime/08105__getRequireWildcardCache.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

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