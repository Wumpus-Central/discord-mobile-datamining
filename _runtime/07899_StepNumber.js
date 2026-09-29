// === Module 7899: StepNumber ===

// Module 7899 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod7896 from "module_7896" /* 7896 */;
import module_7892 from "module_7892" /* 7892 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7892(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod7896.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod7896.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};