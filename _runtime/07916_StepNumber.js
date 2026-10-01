// === Module 7916: StepNumber ===

// Module 7916 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod7913 from "module_7913" /* 7913 */;
import module_7909 from "module_7909" /* 7909 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7909(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod7913.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod7913.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};