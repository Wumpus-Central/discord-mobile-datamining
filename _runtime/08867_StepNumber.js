// === Module 8867: StepNumber ===

// Module 8867 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8864 from "module_8864" /* 8864 */;
import module_8860 from "module_8860" /* 8860 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8860(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8864.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8864.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}