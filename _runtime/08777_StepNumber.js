// === Module 8777: StepNumber ===

// Module 8777 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8774 from "module_8774" /* 8774 */;
import module_8770 from "module_8770" /* 8770 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8770(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8774.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8774.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};