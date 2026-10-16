// === Module 8639: StepNumber ===

// Module 8639 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8636 from "module_8636" /* 8636 */;
import module_8632 from "module_8632" /* 8632 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8632(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8636.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8636.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};