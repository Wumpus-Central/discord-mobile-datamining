// _runtime/08314_StepNumber.js
import _mod19 from "metro/00019__.js";
import _mod8311 from "metro/08311__.js";
import 08307__ from "metro/08307__.js";
import get_ActivityIndicator from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";

const noop = module_8307(_mod19);

export const StepNumber = function StepNumber(arg0) {
  let obj = { style: _mod8311.styles.stepNumber, children: null };
  ({ i, index, style } = arg0);
  obj = { testID: "" + index + "th-step", style, children: i };
  obj.children = <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text>;
  return <get ActivityIndicator.View testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.View>;
};