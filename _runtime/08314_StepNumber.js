// === Module 8314: StepNumber ===

// Module 8314 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8311 from "module_8311" /* 8311 */;
import module_8307 from "module_8307" /* 8307 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8307(_mod19);

export const StepNumber = function StepNumber(arg0) {
  let obj = { style: _mod8311.styles.stepNumber, children: null };
  ({ i, index, style } = arg0);
  obj = { testID: "" + index + "th-step", style, children: i };
  obj.children = <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text>;
  return <get ActivityIndicator.View testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.View>;
};