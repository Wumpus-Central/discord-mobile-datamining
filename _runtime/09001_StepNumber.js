// === Module 9001: StepNumber ===

// Module 9001 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8998 from "module_8998" /* 8998 */;
import module_8994 from "module_8994" /* 8994 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8994(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8998.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8998.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}