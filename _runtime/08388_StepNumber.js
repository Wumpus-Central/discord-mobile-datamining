// === Module 8388: StepNumber ===

// Module 8388 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8385 from "module_8385" /* 8385 */;
import module_8381 from "module_8381" /* 8381 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8381(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8385.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8385.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};