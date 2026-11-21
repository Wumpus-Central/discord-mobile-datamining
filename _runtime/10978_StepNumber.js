// === Module 10978: StepNumber ===

// Module 10978 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod10975 from "module_10975" /* 10975 */;
import module_10971 from "module_10971" /* 10971 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_10971(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod10975.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod10975.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}