// === Module 8632: StepNumber ===

// Module 8632 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8629 from "module_8629" /* 8629 */;
import module_8625 from "module_8625" /* 8625 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8625(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8629.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8629.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};