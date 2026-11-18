// === Module 10938: StepNumber ===

// Module 10938 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod10935 from "module_10935" /* 10935 */;
import module_10931 from "module_10931" /* 10931 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_10931(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod10935.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod10935.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}