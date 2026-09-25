// === Module 7726: StepNumber ===

// Module 7726 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod7723 from "module_7723" /* 7723 */;
import module_7719 from "module_7719" /* 7719 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7719(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod7723.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod7723.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};