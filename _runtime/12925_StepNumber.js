// === Module 12925: StepNumber ===

// Module 12925 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod12922 from "module_12922" /* 12922 */;
import module_12918 from "module_12918" /* 12918 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_12918(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod12922.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod12922.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}