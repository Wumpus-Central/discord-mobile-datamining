// === Module 8557: StepNumber ===

// Module 8557 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8554 from "module_8554" /* 8554 */;
import module_8550 from "module_8550" /* 8550 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8550(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8554.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8554.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};