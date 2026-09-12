// _runtime/08404_StepNumber.js
import _mod19 from "metro/00019__.js";
import _mod8401 from "metro/08401__.js";
import 08397__ from "metro/08397__.js";
import get_ActivityIndicator from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";

const noop = module_8397(_mod19);

export const StepNumber = function StepNumber(arg0) {
  let obj = { style: _mod8401.styles.stepNumber, children: null };
  ({ i, index, style } = arg0);
  obj = { testID: "" + index + "th-step", style, children: i };
  obj.children = <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text>;
  return <get ActivityIndicator.View testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.View>;
};