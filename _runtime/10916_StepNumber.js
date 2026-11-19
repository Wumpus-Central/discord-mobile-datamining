// === Module 10916: StepNumber ===

// Module 10916 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod10913 from "module_10913" /* 10913 */;
import module_10909 from "module_10909" /* 10909 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_10909(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod10913.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod10913.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}