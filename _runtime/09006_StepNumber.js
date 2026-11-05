// === Module 9006: StepNumber ===

// Module 9006 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod9003 from "module_9003" /* 9003 */;
import module_8999 from "module_8999" /* 8999 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8999(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod9003.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod9003.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}