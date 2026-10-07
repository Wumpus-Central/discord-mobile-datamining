// === Module 7971: StepNumber ===

// Module 7971 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod7968 from "module_7968" /* 7968 */;
import module_7964 from "module_7964" /* 7964 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7964(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod7968.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod7968.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};