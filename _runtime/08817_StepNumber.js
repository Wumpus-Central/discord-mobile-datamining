// === Module 8817: StepNumber ===

// Module 8817 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8814 from "module_8814" /* 8814 */;
import module_8810 from "module_8810" /* 8810 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8810(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8814.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8814.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}