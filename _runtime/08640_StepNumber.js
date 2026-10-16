// === Module 8640: StepNumber ===

// Module 8640 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8637 from "module_8637" /* 8637 */;
import module_8633 from "module_8633" /* 8633 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8633(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8637.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8637.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};