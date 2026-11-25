// === Module 8825: StepNumber ===

// Module 8825 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8822 from "module_8822" /* 8822 */;
import module_8818 from "module_8818" /* 8818 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8818(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8822.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8822.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}