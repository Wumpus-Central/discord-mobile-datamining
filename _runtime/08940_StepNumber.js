// === Module 8940: StepNumber ===

// Module 8940 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8937 from "module_8937" /* 8937 */;
import module_8933 from "module_8933" /* 8933 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8933(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8937.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8937.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}