// === Module 11656: StepNumber ===

// Module 11656 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod11653 from "module_11653" /* 11653 */;
import module_11649 from "module_11649" /* 11649 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_11649(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod11653.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod11653.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}