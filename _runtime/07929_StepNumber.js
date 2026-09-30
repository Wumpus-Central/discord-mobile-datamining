// === Module 7929: StepNumber ===

// Module 7929 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod7926 from "module_7926" /* 7926 */;
import module_7922 from "module_7922" /* 7922 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7922(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod7926.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod7926.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};