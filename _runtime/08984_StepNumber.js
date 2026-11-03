// === Module 8984: StepNumber ===

// Module 8984 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8981 from "module_8981" /* 8981 */;
import module_8977 from "module_8977" /* 8977 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8977(_mod19);

export function StepNumber(arg0) {
  const obj = { style: _mod8981.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8981.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
}