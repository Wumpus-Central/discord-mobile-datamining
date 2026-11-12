// === Module 12919: StepNumber ===

// Module 12919 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod12916 from "module_12916" /* 12916 */;
import module_12912 from "module_12912" /* 12912 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_12912(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod12916.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod12916.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}